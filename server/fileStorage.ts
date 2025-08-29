import { 
  type User, 
  type InsertUser,
  type GalleryItem,
  type InsertGalleryItem,
  type UpdateGalleryItem,
  type Testimonial,
  type InsertTestimonial,
  type UpdateTestimonial,
  type Comment,
  type InsertComment,
  type UpdateComment
} from "@shared/schema";
import { randomUUID } from "crypto";
import fs from "fs";
import path from "path";
import type { IStorage } from "./storage";

interface StorageData {
  users: Record<string, User>;
  galleryItems: Record<number, GalleryItem>;
  testimonials: Record<number, Testimonial>;
  comments: Record<number, Comment>;
  nextGalleryId: number;
  nextTestimonialId: number;
  nextCommentId: number;
}

export class FileStorage implements IStorage {
  private dataPath: string;
  private data!: StorageData;

  constructor(dataPath: string = process.env.DATA_PATH || "data.json") {
    this.dataPath = path.resolve(dataPath);
    this.loadData();
  }

  private loadData() {
    try {
      if (fs.existsSync(this.dataPath)) {
        const fileContent = fs.readFileSync(this.dataPath, 'utf-8');
        this.data = JSON.parse(fileContent) as StorageData;
        // Backward-compatible defaults for newly added comment storage
        if (!this.data.comments) {
          this.data.comments = {} as Record<number, Comment>;
        }
        if (!this.data.nextCommentId) {
          this.data.nextCommentId = 1;
        }
      } else {
        // اگر فایل وجود ندارد، داده‌های اولیه را ایجاد کن
        this.data = {
          users: {},
          galleryItems: {},
          testimonials: {},
          comments: {},
          nextGalleryId: 1,
          nextTestimonialId: 1,
          nextCommentId: 1
        };
        this.initializeData();
        this.saveData();
      }
    } catch (error) {
      console.error('Error loading data:', error);
      // در صورت خطا، داده‌های اولیه را ایجاد کن
      this.data = {
        users: {},
        galleryItems: {},
        testimonials: {},
        comments: {},
        nextGalleryId: 1,
        nextTestimonialId: 1,
        nextCommentId: 1
      };
      this.initializeData();
      this.saveData();
    }
  }

  private saveData() {
    try {
      fs.writeFileSync(this.dataPath, JSON.stringify(this.data, null, 2), 'utf-8');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  }

  private initializeData() {
    // Initialize gallery items
    const initialGalleryItems: Omit<GalleryItem, 'id' | 'createdAt' | 'updatedAt'>[] = [
      {
        src: '/gallery/1000577624_1756036569847.jpg',
        title: 'عکس شناسنامه جوانی',
        category: 'personal',
        year: '۱۳۵۰',
        description: 'تصویری از دوران جوانی استاد مسعود محمدی',
        type: 'image',
        poster: null,
        duration: null
      },
      {
        src: '/gallery/1000577625_1756036569848.jpg',
        title: 'با دانش‌آموزان در مدرسه',
        category: 'teaching',
        year: '۱۳۶۰',
        description: 'لحظات شیرین تدریس در کنار شاگردان عزیز',
        type: 'image',
        poster: null,
        duration: null
      },
      {
        src: '/gallery/1000577626_1756036107283.jpg',
        title: 'همراه شاگردان در طبیعت',
        category: 'teaching',
        year: '۱۳۶۵',
        description: 'کلاس درس در فضای باز و طبیعت زیبا',
        type: 'image',
        poster: null,
        duration: null
      },
      {
        src: '/gallery/1000577623_1756036107282.jpg',
        title: 'پرتره شخصی',
        category: 'personal',
        year: '۱۳۷۰',
        description: 'تصویری از شخصیت مهربان و دوست‌داشتنی استاد',
        type: 'image',
        poster: null,
        duration: null
      },
      {
        src: '/gallery/1000577617_1756036593155.jpg',
        title: 'کلاس درس در هوای آزاد',
        category: 'teaching',
        year: '۱۳۶۲',
        description: 'روش نوآورانه تدریس در محیط طبیعی',
        type: 'image',
        poster: null,
        duration: null
      },
      {
        src: '/gallery/1000577618_1756036593156.jpg',
        title: 'تدریس در طبیعت',
        category: 'teaching',
        year: '۱۳۶۳',
        description: 'آموزش جغرافیا در دل طبیعت',
        type: 'image',
        poster: null,
        duration: null
      },
      {
        src: '/gallery/1000577619_1756036593156.jpg',
        title: 'فعالیت هنری در باغ',
        category: 'artistic',
        year: '۱۳۶۴',
        description: 'برگزاری فعالیت‌های هنری و خلاقانه در فضای سبز',
        type: 'image',
        poster: null,
        duration: null
      },
      {
        src: '/gallery/1000577620_1756036593156.jpg',
        title: 'نمایش مدرسه',
        category: 'artistic',
        year: '۱۳۶۶',
        description: 'فعالیت‌های هنری و تربیتی مدرسه',
        type: 'image',
        poster: null,
        duration: null
      },
      {
        src: '/gallery/1000577622_1756036593157.jpg',
        title: 'دوستان و همکاران',
        category: 'personal',
        year: '۱۳۶۸',
        description: 'در کنار همکاران و دوستان صمیمی',
        type: 'image',
        poster: null,
        duration: null
      },
      {
        src: '/gallery/1000577614_1756036640776.jpg',
        title: 'تیم فوتبال مدرسه',
        category: 'sports',
        year: '۱۳۶۷',
        description: 'مربیگری تیم فوتبال دانش‌آموزان',
        type: 'image',
        poster: null,
        duration: null
      },
      {
        src: '/gallery/1000577615_1756036640777.jpg',
        title: 'جام قهرمانی',
        category: 'sports',
        year: '۱۳۶۹',
        description: 'لحظه کسب جام قهرمانی با شاگردان',
        type: 'image',
        poster: null,
        duration: null
      },
      {
        src: '/gallery/1000577616_1756036640777.jpg',
        title: 'مسابقات ورزشی',
        category: 'sports',
        year: '۱۳۷۱',
        description: 'حضور در مسابقات ورزشی مدارس',
        type: 'image',
        poster: null,
        duration: null
      },
      {
        src: '/gallery/1000577612_1756036640777.jpg',
        title: 'همراه همکاران ورزشی',
        category: 'sports',
        year: '۱۳۷۲',
        description: 'با سایر مربیان و معلمان ورزش',
        type: 'image',
        poster: null,
        duration: null
      },
      {
        src: '/gallery/1000577613_1756036640778.jpg',
        title: 'اردوی تربیتی',
        category: 'travel',
        year: '۱۳۷۳',
        description: 'سفر آموزشی و تربیتی با دانش‌آموزان به نقاط مختلف ایران',
        type: 'image',
        poster: null,
        duration: null
      },
      {
        src: '/gallery/1000577585_1756036684258.jpg',
        title: 'جشنواره هنری مدرسه',
        category: 'artistic',
        year: '۱۳۷۴',
        description: 'برگزاری جشنواره و نمایش هنری دانش‌آموزان',
        type: 'image',
        poster: null,
        duration: null
      },
      {
        src: '/gallery/1000577595_1756036684258.jpg',
        title: 'عکس یادگاری',
        category: 'family',
        year: '۱۳۷۵',
        description: 'یادگاری خانوادگی در روزهای خوش',
        type: 'image',
        poster: null,
        duration: null
      },
      {
        src: '/gallery/1000577599_1756036684258.jpg',
        title: 'سفر دانشجویی',
        category: 'travel',
        year: '۱۳۵۲',
        description: 'سفر و گردشگری در دوران تحصیل در دانشسرا',
        type: 'image',
        poster: null,
        duration: null
      },
      {
        src: '/gallery/1000577600_1756036684259.jpg',
        title: 'سفر با دوستان',
        category: 'travel',
        year: '۱۳۷۶',
        description: 'سفر و گردشگری در کنار دوستان به نقاط دیدنی ایران',
        type: 'image',
        poster: null,
        duration: null
      },
      {
        src: '/gallery/1000577610_1756036684259.jpg',
        title: 'با اساتید دیگر',
        category: 'teaching',
        year: '۱۳۷۷',
        description: 'در کنار همکاران و اساتید محترم',
        type: 'image',
        poster: null,
        duration: null
      },
      {
        src: '/gallery/1000577611_1756036684259.jpg',
        title: 'در صحنه تئاتر',
        category: 'artistic',
        year: '۱۳۷۸',
        description: 'فعالیت‌های هنری و تئاتر مدرسه',
        type: 'image',
        poster: null,
        duration: null
      }
    ];

    initialGalleryItems.forEach(item => {
      const galleryItem: GalleryItem = {
        ...item,
        id: this.data.nextGalleryId++,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      this.data.galleryItems[galleryItem.id] = galleryItem;
    });

    // FIXED: No template testimonials initialization
    // Real testimonials should come from data.json or user submissions only
    // No initial comments
  }

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    return this.data.users[id];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Object.values(this.data.users).find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.data.users[id] = user;
    this.saveData();
    return user;
  }

  // Gallery methods
  async getAllGalleryItems(): Promise<GalleryItem[]> {
    return Object.values(this.data.galleryItems).sort((a, b) => 
      new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    );
  }

  async getGalleryItem(id: number): Promise<GalleryItem | undefined> {
    return this.data.galleryItems[id];
  }

  async createGalleryItem(item: InsertGalleryItem): Promise<GalleryItem> {
    const galleryItem: GalleryItem = {
      ...item,
      year: item.year ?? null,
      description: item.description ?? null,
      poster: item.poster ?? null,
      duration: item.duration ?? null,
      id: this.data.nextGalleryId++,
      createdAt: new Date(),
      updatedAt: new Date()
    } as GalleryItem;
    this.data.galleryItems[galleryItem.id] = galleryItem;
    this.saveData();
    return galleryItem;
  }

  async updateGalleryItem(id: number, item: UpdateGalleryItem): Promise<GalleryItem | undefined> {
    const existing = this.data.galleryItems[id];
    if (!existing) return undefined;

    const updated: GalleryItem = {
      ...existing,
      ...item,
      updatedAt: new Date()
    };
    this.data.galleryItems[id] = updated;
    this.saveData();
    return updated;
  }

  async deleteGalleryItem(id: number): Promise<boolean> {
    if (this.data.galleryItems[id]) {
      delete this.data.galleryItems[id];
      this.saveData();
      return true;
    }
    return false;
  }

  // Testimonial methods
  async getAllTestimonials(): Promise<Testimonial[]> {
    return Object.values(this.data.testimonials).sort((a, b) => 
      new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    );
  }

  async getTestimonial(id: number): Promise<Testimonial | undefined> {
    return this.data.testimonials[id];
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const newTestimonial: Testimonial = {
      ...testimonial,
      id: this.data.nextTestimonialId++,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.data.testimonials[newTestimonial.id] = newTestimonial;
    this.saveData();
    return newTestimonial;
  }

  async updateTestimonial(id: number, testimonial: UpdateTestimonial): Promise<Testimonial | undefined> {
    const existing = this.data.testimonials[id];
    if (!existing) return undefined;

    const updated: Testimonial = {
      ...existing,
      ...testimonial,
      updatedAt: new Date()
    };
    this.data.testimonials[id] = updated;
    this.saveData();
    return updated;
  }

  async deleteTestimonial(id: number): Promise<boolean> {
    if (this.data.testimonials[id]) {
      delete this.data.testimonials[id];
      this.saveData();
      return true;
    }
    return false;
  }

  // Comment methods
  async getApprovedCommentsForTestimonial(testimonialId: number): Promise<Comment[]> {
    return Object.values(this.data.comments)
      .filter(c => c.testimonialId === testimonialId && c.status === 'approved')
      .sort((a, b) => new Date(a.createdAt!).getTime() - new Date(b.createdAt!).getTime());
  }

  async getCommentsByStatus(status: 'pending' | 'approved' | 'banned'): Promise<Comment[]> {
    return Object.values(this.data.comments)
      .filter(c => c.status === status)
      .sort((a, b) => new Date(a.createdAt!).getTime() - new Date(b.createdAt!).getTime());
  }

  async createComment(comment: InsertComment): Promise<Comment> {
    const newComment: Comment = {
      ...comment,
      id: this.data.nextCommentId++,
      createdAt: new Date(),
      updatedAt: new Date()
    } as Comment;
    this.data.comments[newComment.id] = newComment;
    this.saveData();
    return newComment;
  }

  async updateCommentStatus(id: number, update: UpdateComment): Promise<Comment | undefined> {
    const existing = this.data.comments[id];
    if (!existing) return undefined;
    const updated: Comment = { ...existing, ...update, updatedAt: new Date() };
    this.data.comments[id] = updated;
    this.saveData();
    return updated;
  }

  async deleteComment(id: number): Promise<boolean> {
    if (this.data.comments[id]) {
      delete this.data.comments[id];
      this.saveData();
      return true;
    }
    return false;
  }
}