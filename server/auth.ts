import type { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// JWT Secret - در production باید از environment variable استفاده شود
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production-2024';
const JWT_EXPIRES_IN = '24h';

// Admin users - رمزهای عبور hash شده
export const ADMIN_USERS = {
  'abed': {
    id: 1,
    username: 'abed',
    name: 'سید عابدین اسماعیلی پور',
    // رمز عبور: Abed@2024!
    password: '$2b$12$q/G4sIecEvfX7GF1GSNLYubYicEpwoQvBAnfD2GSsU0ujH5CjtFaC',
    role: 'admin',
    lastLogin: null,
    createdAt: new Date('2024-01-01'),
    isActive: true
  },
  'mojtaba': {
    id: 2,
    username: 'mojtaba',
    name: 'سید مجتبی افروزی',
    // رمز عبور: Mojtaba@2024!
    password: '$2b$12$Mi1fIyjEDRhviOAPVPaw4.0WO/CTRE2bMP/sz/OoOezwvPW3SsaO6',
    role: 'admin',
    lastLogin: null,
    createdAt: new Date('2024-01-01'),
    isActive: true
  },
  'ehsan': {
    id: 3,
    username: 'ehsan',
    name: 'احسان محمدی',
    // رمز عبور: Ehsan@2024!
    password: '$2b$12$HIqxp3iH6ag678Dy4ChGK.X9XhIeJcHKHpe0ayeXWUOCP/I.JI.y6',
    role: 'admin',
    lastLogin: null,
    createdAt: new Date('2024-01-01'),
    isActive: true
  },
  'mohammadi': {
    id: 4,
    username: 'mohammadi',
    name: 'محدثه محمدی',
    // رمز عبور: Mohammadi@2024!
    password: '$2b$12$0XXQqqAHnWIOc5gggVbOxum6vMcQurk8NqE7/cgfe124yUbxhIXQm',
    role: 'admin',
    lastLogin: null,
    createdAt: new Date('2024-01-01'),
    isActive: true
  }
};

// Password generation disabled - bcrypt dependency removed
export async function generateHashedPasswords() {
  console.log('Password generation disabled');
}

// بررسی اعتبار کاربر
export async function validateUser(username: string, password: string) {
  const user = ADMIN_USERS[username as keyof typeof ADMIN_USERS];
  
  if (!user || !user.isActive) {
    return null;
  }

  // استفاده از bcrypt برای مقایسه رمز عبور
  const isValidPassword = await bcrypt.compare(password, user.password);
  
  if (!isValidPassword) {
    return null;
  }

  // به‌روزرسانی زمان آخرین ورود
  (user as any).lastLogin = new Date();

  return {
    id: user.id,
    username: user.username,
    name: user.name,
    role: user.role,
    lastLogin: user.lastLogin
  };
}

// تولید JWT token
export function generateToken(user: any) {
  try {
    const payload = {
      id: user.id,
      username: user.username,
      role: user.role
    };
    
    return jwt.sign(payload, JWT_SECRET, { 
      expiresIn: JWT_EXPIRES_IN,
      issuer: 'moallemyad-app'
    });
  } catch (error) {
    console.error('Error generating token:', error);
    return null;
  }
}

// بررسی اعتبار JWT token
export function verifyToken(token: string) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    
    // بررسی وجود کاربر
    const user = ADMIN_USERS[decoded.username as keyof typeof ADMIN_USERS];
    if (!user || !user.isActive) {
      return null;
    }
    
    return {
      id: decoded.id,
      username: decoded.username,
      role: decoded.role
    };
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
}

// Middleware برای احراز هویت
export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  const decoded = verifyToken(token);
  
  if (!decoded) {
    return res.status(403).json({ error: 'Invalid or expired token' });
  }

  (req as any).user = decoded;
  next();
}

// Middleware برای بررسی نقش ادمین
export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const user = (req as any).user;
  
  if (!user || user.role !== 'admin') {
    return res.status(403).json({ error: 'Admin access required' });
  }

  next();
}

// Rate limiting برای login
const loginAttempts = new Map<string, { count: number; lastAttempt: Date }>();

export function rateLimitLogin(req: Request, res: Response, next: NextFunction) {
  const ip = req.ip || req.connection.remoteAddress || 'unknown';
  const now = new Date();
  const attempts = loginAttempts.get(ip);

  if (attempts) {
    const timeDiff = now.getTime() - attempts.lastAttempt.getTime();
    const minutesPassed = timeDiff / (1000 * 60);

    // اگر بیش از 15 دقیقه گذشته، reset کن
    if (minutesPassed > 15) {
      loginAttempts.delete(ip);
    } else if (attempts.count >= 5) {
      return res.status(429).json({ 
        error: 'Too many login attempts. Please try again in 15 minutes.' 
      });
    }
  }

  next();
}

export function recordLoginAttempt(ip: string, success: boolean) {
  if (success) {
    // در صورت موفقیت، attempts را پاک کن
    loginAttempts.delete(ip);
  } else {
    // در صورت شکست، تعداد تلاش را افزایش بده
    const attempts = loginAttempts.get(ip) || { count: 0, lastAttempt: new Date() };
    attempts.count += 1;
    attempts.lastAttempt = new Date();
    loginAttempts.set(ip, attempts);
  }
}

// پاکسازی attempts قدیمی هر ساعت
setInterval(() => {
  const now = new Date();
  for (const [ip, attempts] of Array.from(loginAttempts.entries())) {
    const timeDiff = now.getTime() - attempts.lastAttempt.getTime();
    const minutesPassed = timeDiff / (1000 * 60);
    
    if (minutesPassed > 60) { // پاک کردن بعد از 1 ساعت
      loginAttempts.delete(ip);
    }
  }
}, 60 * 60 * 1000); // هر ساعت