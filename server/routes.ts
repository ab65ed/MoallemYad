import express, { type Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import fs from "fs";
import { storage } from "./storage";
import { 
  insertGalleryItemSchema, 
  updateGalleryItemSchema,
  insertTestimonialSchema,
  updateTestimonialSchema,
  insertCommentSchema,
  updateCommentSchema
} from "@shared/schema";
import { containsProfanity, normalizePersian } from "./validation";
import { 
  validateUser, 
  generateToken, 
  authenticateToken, 
  requireAdmin, 
  rateLimitLogin, 
  recordLoginAttempt,
  ADMIN_USERS
} from "./auth";

// File upload functionality disabled - removed multer dependency

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Health check endpoint for Coolify and monitoring
  app.get("/api/health", (req, res) => {
    res.status(200).json({ 
      status: "ok", 
      timestamp: new Date().toISOString(),
      uptime: process.uptime()
    });
  });
  
  // Serve static files from gallery directory
  const galleryPath = process.env.NODE_ENV === 'production' 
    ? path.join(process.cwd(), 'dist', 'public', 'gallery')
    : path.join(process.cwd(), 'client', 'public', 'gallery');
  app.use('/gallery', express.static(galleryPath));
  
  // Authentication Routes
  app.post("/api/auth/login", rateLimitLogin, async (req, res) => {
    try {
      const { username, password } = req.body;
      const ip = req.ip || req.connection.remoteAddress || 'unknown';

      if (!username || !password) {
        recordLoginAttempt(ip, false);
        return res.status(400).json({ error: "نام کاربری و رمز عبور الزامی است" });
      }

      const user = await validateUser(username, password);
      
      if (!user) {
        recordLoginAttempt(ip, false);
        return res.status(401).json({ error: "نام کاربری یا رمز عبور اشتباه است" });
      }

      const token = generateToken(user);
      if (!token) {
        return res.status(500).json({ error: "خطا در تولید token" });
      }
      recordLoginAttempt(ip, true);

      res.json({
        message: "ورود موفقیت‌آمیز",
        token,
        user: {
          id: user.id,
          username: user.username,
          name: user.name,
          role: user.role
        }
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ error: "خطا در سرور" });
    }
  });

  app.post("/api/auth/logout", authenticateToken, (req, res) => {
    // در JWT، logout معمولاً در سمت client انجام می‌شود
    res.json({ message: "خروج موفقیت‌آمیز" });
  });

  app.get("/api/auth/verify", authenticateToken, (req, res) => {
    const user = (req as any).user;
    
    // Prevent caching to ensure fresh user data
    res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');
    
    // Get full user data from ADMIN_USERS to include Persian name
    const fullUserData = ADMIN_USERS[user.username as keyof typeof ADMIN_USERS];
    
    res.json({ 
      valid: true, 
      user: {
        id: user.id,
        username: user.username,
        name: fullUserData?.name || user.username,
        role: user.role
      }
    });
  });
  
  // File Upload Route (Disabled - multer dependency removed)
  app.post("/api/upload", authenticateToken, requireAdmin, (req, res) => {
    res.status(501).json({ error: "File upload functionality is disabled" });
  });
  
  // Gallery API Routes
  
  // GET /api/gallery - Get all gallery items
  app.get("/api/gallery", async (req, res) => {
    try {
      const items = await storage.getAllGalleryItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch gallery items" });
    }
  });

  // GET /api/gallery/:id - Get single gallery item
  app.get("/api/gallery/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const item = await storage.getGalleryItem(id);
      if (!item) {
        return res.status(404).json({ error: "Gallery item not found" });
      }
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch gallery item" });
    }
  });

  // POST /api/gallery - Create new gallery item (Protected)
  app.post("/api/gallery", authenticateToken, requireAdmin, async (req, res) => {
    try {
      const validatedData = insertGalleryItemSchema.parse(req.body);
      const item = await storage.createGalleryItem(validatedData);
      res.status(201).json(item);
    } catch (error) {
      if (error instanceof Error && error.name === 'ZodError') {
        const errorDetails = JSON.parse(error.message);
        return res.status(400).json({ 
          error: "داده‌های ارسالی نامعتبر است", 
          details: errorDetails.map((e: any) => `${e.path.join('.')}: ${e.message}`).join(', ')
        });
      }
      res.status(500).json({ error: "Failed to create gallery item" });
    }
  });

  // PUT /api/gallery/:id - Update gallery item (Protected)
  app.put("/api/gallery/:id", authenticateToken, requireAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const validatedData = updateGalleryItemSchema.parse(req.body);
      const item = await storage.updateGalleryItem(id, validatedData);
      if (!item) {
        return res.status(404).json({ error: "Gallery item not found" });
      }
      res.json(item);
    } catch (error) {
      if (error instanceof Error && error.name === 'ZodError') {
        return res.status(400).json({ error: "Invalid data", details: error });
      }
      res.status(500).json({ error: "Failed to update gallery item" });
    }
  });

  // DELETE /api/gallery/:id - Delete gallery item (Protected)
  app.delete("/api/gallery/:id", authenticateToken, requireAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      
      // ابتدا آیتم را پیدا کن تا مسیر فایل را بگیری
      const item = await storage.getGalleryItem(id);
      if (!item) {
        return res.status(404).json({ error: "Gallery item not found" });
      }

      // حذف آیتم از دیتابیس
      const deleted = await storage.deleteGalleryItem(id);
      if (!deleted) {
        return res.status(404).json({ error: "Gallery item not found" });
      }

      // حذف فایل فیزیکی (اگر آپلود شده باشد)
      if (item.src && item.src.startsWith('/gallery/')) {
        const filePath = path.join(process.cwd(), 'client', 'public', item.src);
        try {
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
          }
        } catch (fileError) {
          console.warn('Could not delete file:', filePath, fileError);
          // ادامه می‌دهیم حتی اگر فایل حذف نشود
        }
      }

      res.json({ message: "Gallery item deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete gallery item" });
    }
  });

  // Testimonials API Routes

  // GET /api/testimonials - Get all testimonials
  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getAllTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch testimonials" });
    }
  });

  // GET /api/testimonials/:id - Get single testimonial
  app.get("/api/testimonials/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const testimonial = await storage.getTestimonial(id);
      if (!testimonial) {
        return res.status(404).json({ error: "Testimonial not found" });
      }
      res.json(testimonial);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch testimonial" });
    }
  });

  // POST /api/testimonials - Create new testimonial (Protected)
  app.post("/api/testimonials", authenticateToken, requireAdmin, async (req, res) => {
    try {
      const validatedData = insertTestimonialSchema.parse(req.body);
      const testimonial = await storage.createTestimonial(validatedData);
      res.status(201).json(testimonial);
    } catch (error) {
      if (error instanceof Error && error.name === 'ZodError') {
        return res.status(400).json({ error: "Invalid data", details: error });
      }
      res.status(500).json({ error: "Failed to create testimonial" });
    }
  });

  // PUT /api/testimonials/:id - Update testimonial (Protected)
  app.put("/api/testimonials/:id", authenticateToken, requireAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const validatedData = updateTestimonialSchema.parse(req.body);
      const testimonial = await storage.updateTestimonial(id, validatedData);
      if (!testimonial) {
        return res.status(404).json({ error: "Testimonial not found" });
      }
      res.json(testimonial);
    } catch (error) {
      if (error instanceof Error && error.name === 'ZodError') {
        return res.status(400).json({ error: "Invalid data", details: error });
      }
      res.status(500).json({ error: "Failed to update testimonial" });
    }
  });

  // DELETE /api/testimonials/:id - Delete testimonial (Protected)
  app.delete("/api/testimonials/:id", authenticateToken, requireAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const deleted = await storage.deleteTestimonial(id);
      if (!deleted) {
        return res.status(404).json({ error: "Testimonial not found" });
      }
      res.json({ message: "Testimonial deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete testimonial" });
    }
  });

  // Comments API Routes
  
  // GET /api/testimonials/:id/comments - Public approved comments for a testimonial
  app.get("/api/testimonials/:id/comments", async (req, res) => {
    try {
      const testimonialId = parseInt(req.params.id);
      const comments = await storage.getApprovedCommentsForTestimonial(testimonialId);
      res.json(comments);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch comments" });
    }
  });

  // POST /api/testimonials/:id/comments - Public submit comment (pending or banned if profane)
  app.post("/api/testimonials/:id/comments", async (req, res) => {
    try {
      const testimonialId = parseInt(req.params.id);
      const { firstName, lastName, content } = req.body || {};

      // Strong validation for Persian-only fields
      const persianNameRegex = /^[\u0600-\u06FF\s]{2,30}$/;
      const persianContentRegex = /^[\u0600-\u06FF\s\.,!؟،؛:\-\(\)\n]{5,600}$/;

      if (!firstName || !lastName || !content) {
        return res.status(400).json({ error: "همه فیلدها الزامی است" });
      }
      if (!persianNameRegex.test(firstName)) {
        return res.status(400).json({ error: "نام باید فارسی و بین ۲ تا ۳۰ کاراکتر باشد" });
      }
      if (!persianNameRegex.test(lastName)) {
        return res.status(400).json({ error: "نام خانوادگی باید فارسی و بین ۲ تا ۳۰ کاراکتر باشد" });
      }
      if (!persianContentRegex.test(content)) {
        return res.status(400).json({ error: "متن کامنت باید فارسی و بین ۵ تا ۶۰۰ کاراکتر باشد" });
      }

      const normalized = normalizePersian(`${firstName} ${lastName} ${content}`);
      const profanity = containsProfanity(normalized);

      const status = profanity.matched.length > 0 ? 'banned' : 'pending';
      const validated = insertCommentSchema.parse({
        testimonialId,
        firstName,
        lastName,
        content,
        status
      });
      const created = await storage.createComment(validated);
      res.status(201).json({ id: created.id, status: created.status });
    } catch (error) {
      if (error instanceof Error && error.name === 'ZodError') {
        return res.status(400).json({ error: "Invalid data", details: error });
      }
      res.status(500).json({ error: "Failed to submit comment" });
    }
  });

  // Admin moderation routes
  // GET /api/comments?status=pending - List comments by status
  app.get("/api/comments", authenticateToken, requireAdmin, async (req, res) => {
    try {
      const status = (req.query.status as string) || 'pending';
      if (!['pending','approved','banned'].includes(status)) {
        return res.status(400).json({ 
          error: "وضعیت نامعتبر است. وضعیت‌های معتبر: pending, approved, banned" 
        });
      }
      const list = await storage.getCommentsByStatus(status as any);
      res.json(list);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch comments" });
    }
  });

  // PUT /api/comments/:id/approve
  app.put("/api/comments/:id/approve", authenticateToken, requireAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updated = await storage.updateCommentStatus(id, { status: 'approved' });
      if (!updated) return res.status(404).json({ error: "Comment not found" });
      res.json(updated);
    } catch (error) {
      res.status(500).json({ error: "Failed to approve comment" });
    }
  });

  // PUT /api/comments/:id/ban
  app.put("/api/comments/:id/ban", authenticateToken, requireAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updated = await storage.updateCommentStatus(id, { status: 'banned' });
      if (!updated) return res.status(404).json({ error: "Comment not found" });
      res.json(updated);
    } catch (error) {
      res.status(500).json({ error: "Failed to ban comment" });
    }
  });

  // DELETE /api/comments/:id
  app.delete("/api/comments/:id", authenticateToken, requireAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const ok = await storage.deleteComment(id);
      if (!ok) return res.status(404).json({ error: "Comment not found" });
      res.json({ message: "Comment deleted" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete comment" });
    }
  });

  // Stats API Route
  app.get("/api/stats", async (req, res) => {
    try {
      const galleryItems = await storage.getAllGalleryItems();
      const testimonials = await storage.getAllTestimonials();
      
      const stats = {
        totalImages: galleryItems.filter(item => item.type === 'image').length,
        totalVideos: galleryItems.filter(item => item.type === 'video').length,
        totalTestimonials: testimonials.length,
        totalItems: galleryItems.length + testimonials.length,
        recentActivity: {
          images: 5, // Mock data - در پروژه واقعی از تاریخ محاسبه می‌شود
          videos: 2,
          testimonials: 3
        }
      };
      
      res.json(stats);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch stats" });
    }
  });

  // Admin Settings API Routes
  
  // GET /api/admin/settings - Get admin settings
  app.get("/api/admin/settings", authenticateToken, requireAdmin, async (req, res) => {
    try {
      // در اینجا می‌توانید تنظیمات را از فایل یا دیتابیس بخوانید
      const settings = {
        siteName: 'سایت معلم یاد',
        siteDescription: 'وبسایت یادبود استاد مسعود محمدی',
        contactEmail: 'info@moallemyad.com',
        maxFileSize: 50,
        allowedImageFormats: ['jpg', 'jpeg', 'png', 'webp'],
        allowedVideoFormats: ['mp4', 'webm', 'ogg'],
        enableNotifications: true,
        autoBackup: true,
        sessionTimeout: 24,
        maxLoginAttempts: 5,
        lockoutDuration: 15
      };
      
      res.json(settings);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch settings" });
    }
  });

  // PUT /api/admin/settings - Update admin settings
  app.put("/api/admin/settings", authenticateToken, requireAdmin, async (req, res) => {
    try {
      const {
        siteName,
        siteDescription,
        contactEmail,
        maxFileSize,
        allowedImageFormats,
        allowedVideoFormats,
        enableNotifications,
        autoBackup,
        sessionTimeout,
        maxLoginAttempts,
        lockoutDuration
      } = req.body;

      // اعتبارسنجی داده‌ها
      if (maxFileSize < 1 || maxFileSize > 500) {
        return res.status(400).json({ error: "حداکثر اندازه فایل باید بین 1 تا 500 مگابایت باشد" });
      }

      if (sessionTimeout < 1 || sessionTimeout > 168) {
        return res.status(400).json({ error: "مدت زمان نشست باید بین 1 تا 168 ساعت باشد" });
      }

      if (maxLoginAttempts < 3 || maxLoginAttempts > 10) {
        return res.status(400).json({ error: "حداکثر تلاش ورود باید بین 3 تا 10 باشد" });
      }

      if (lockoutDuration < 5 || lockoutDuration > 60) {
        return res.status(400).json({ error: "مدت قفل شدن باید بین 5 تا 60 دقیقه باشد" });
      }

      // در اینجا می‌توانید تنظیمات را در فایل یا دیتابیس ذخیره کنید
      // فعلاً فقط پاسخ موفقیت‌آمیز برمی‌گردانیم
      
      res.json({ message: "تنظیمات با موفقیت ذخیره شد" });
    } catch (error) {
      res.status(500).json({ error: "Failed to update settings" });
    }
  });

  // POST /api/admin/change-password - Change admin password
  app.post("/api/admin/change-password", authenticateToken, requireAdmin, async (req, res) => {
    try {
      const { currentPassword, newPassword } = req.body;
      const user = (req as any).user;

      if (!currentPassword || !newPassword) {
        return res.status(400).json({ error: "رمز عبور فعلی و جدید الزامی است" });
      }

      // اعتبارسنجی رمز عبور جدید
      if (newPassword.length < 8) {
        return res.status(400).json({ error: "رمز عبور جدید باید حداقل 8 کاراکتر باشد" });
      }

      const hasLower = /[a-z]/.test(newPassword);
      const hasUpper = /[A-Z]/.test(newPassword);
      const hasDigit = /\d/.test(newPassword);
      const hasSpecial = /[@$!%*?&]/.test(newPassword);
      const isLongEnough = newPassword.length >= 8;
      
      if (!hasLower || !hasUpper || !hasDigit || !hasSpecial || !isLongEnough) {
        const issues = [];
        if (!isLongEnough) issues.push("حداقل ۸ کاراکتر");
        if (!hasLower) issues.push("حروف کوچک انگلیسی");
        if (!hasUpper) issues.push("حروف بزرگ انگلیسی");
        if (!hasDigit) issues.push("عدد");
        if (!hasSpecial) issues.push("کاراکتر خاص (@$!%*?&)");
        return res.status(400).json({ 
          error: `رمز عبور باید شامل: ${issues.join("، ")} باشد` 
        });
      }

      // بررسی رمز عبور فعلی
      const currentUser = await validateUser(user.username, currentPassword);
      if (!currentUser) {
        return res.status(400).json({ error: "رمز عبور فعلی اشتباه است" });
      }

      // در اینجا باید رمز عبور جدید را hash کرده و ذخیره کنید
      // فعلاً فقط پاسخ موفقیت‌آمیز برمی‌گردانیم
      console.log(`Password change request for user: ${user.username}`);
      
      res.json({ message: "رمز عبور با موفقیت تغییر یافت" });
    } catch (error) {
      res.status(500).json({ error: "Failed to change password" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
