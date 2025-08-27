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

export interface IStorage {
  // User methods
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Gallery methods
  getAllGalleryItems(): Promise<GalleryItem[]>;
  getGalleryItem(id: number): Promise<GalleryItem | undefined>;
  createGalleryItem(item: InsertGalleryItem): Promise<GalleryItem>;
  updateGalleryItem(id: number, item: UpdateGalleryItem): Promise<GalleryItem | undefined>;
  deleteGalleryItem(id: number): Promise<boolean>;

  // Testimonial methods
  getAllTestimonials(): Promise<Testimonial[]>;
  getTestimonial(id: number): Promise<Testimonial | undefined>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  updateTestimonial(id: number, testimonial: UpdateTestimonial): Promise<Testimonial | undefined>;
  deleteTestimonial(id: number): Promise<boolean>;

  // Comment methods
  getApprovedCommentsForTestimonial(testimonialId: number): Promise<Comment[]>;
  getCommentsByStatus(status: 'pending' | 'approved' | 'banned'): Promise<Comment[]>;
  createComment(comment: InsertComment): Promise<Comment>;
  updateCommentStatus(id: number, update: UpdateComment): Promise<Comment | undefined>;
  deleteComment(id: number): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private galleryItems: Map<number, GalleryItem>;
  private testimonials: Map<number, Testimonial>;
  private comments: Map<number, Comment>;
  private nextGalleryId: number = 1;
  private nextTestimonialId: number = 1;
  private nextCommentId: number = 1;

  constructor() {
    this.users = new Map();
    this.galleryItems = new Map();
    this.testimonials = new Map();
    this.comments = new Map();
    
    // Initialize with existing data
    this.initializeData();
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
        src: '/gallery/1000577626_1756036569848.jpg',
        title: 'همراه شاگردان در طبیعت',
        category: 'teaching',
        year: '۱۳۶۵',
        description: 'کلاس درس در فضای باز و طبیعت زیبا',
        type: 'image',
        poster: null,
        duration: null
      },
      {
        src: '/gallery/1000577623_1756036569848.jpg',
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
        id: this.nextGalleryId++,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      this.galleryItems.set(galleryItem.id, galleryItem);
    });

    // Initialize testimonials
    const initialTestimonials: Omit<Testimonial, 'id' | 'createdAt' | 'updatedAt'>[] = [
      {
        author: "احمد رضایی",
        role: "شاگرد دوره ابتدایی",
        date: "بهمن ۱۴۰۲",
        title: "معلمی که زندگی‌ام را دگرگون کرد",
        category: "student",
        content: "استاد مسعود محمدی نه تنها معلم من، بلکه راهنمای زندگی‌ام بود. در آن سال‌های دور که من کودکی خجالتی و کم‌اعتماد به نفس بودم، او بود که دستم را گرفت و به من نشان داد که می‌توانم بال بگشایم."
      },
      {
        author: "فاطمه کریمی",
        role: "همکار در آموزش و پرورش",
        date: "آذر ۱۴۰۲",
        title: "همکاری که درسی از انسانیت بود",
        category: "colleague",
        content: "بیست سال در کنار استاد مسعود کار کردم و هر روز چیز تازه‌ای از او آموختم. او نه تنها معلمی استثنایی، بلکه انسانی فوق‌العاده بود که زندگی همه ما را تحت تأثیر قرار داد."
      }
    ];

    initialTestimonials.forEach(item => {
      const testimonial: Testimonial = {
        ...item,
        id: this.nextTestimonialId++,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      this.testimonials.set(testimonial.id, testimonial);
    });

    // Initialize with no comments
  }

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Gallery methods
  async getAllGalleryItems(): Promise<GalleryItem[]> {
    return Array.from(this.galleryItems.values()).sort((a, b) => 
      new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    );
  }

  async getGalleryItem(id: number): Promise<GalleryItem | undefined> {
    return this.galleryItems.get(id);
  }

  async createGalleryItem(item: InsertGalleryItem): Promise<GalleryItem> {
    const galleryItem: GalleryItem = {
      ...item,
      id: this.nextGalleryId++,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.galleryItems.set(galleryItem.id, galleryItem);
    return galleryItem;
  }

  async updateGalleryItem(id: number, item: UpdateGalleryItem): Promise<GalleryItem | undefined> {
    const existing = this.galleryItems.get(id);
    if (!existing) return undefined;

    const updated: GalleryItem = {
      ...existing,
      ...item,
      updatedAt: new Date()
    };
    this.galleryItems.set(id, updated);
    return updated;
  }

  async deleteGalleryItem(id: number): Promise<boolean> {
    return this.galleryItems.delete(id);
  }

  // Testimonial methods
  async getAllTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values()).sort((a, b) => 
      new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    );
  }

  async getTestimonial(id: number): Promise<Testimonial | undefined> {
    return this.testimonials.get(id);
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const newTestimonial: Testimonial = {
      ...testimonial,
      id: this.nextTestimonialId++,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.testimonials.set(newTestimonial.id, newTestimonial);
    return newTestimonial;
  }

  async updateTestimonial(id: number, testimonial: UpdateTestimonial): Promise<Testimonial | undefined> {
    const existing = this.testimonials.get(id);
    if (!existing) return undefined;

    const updated: Testimonial = {
      ...existing,
      ...testimonial,
      updatedAt: new Date()
    };
    this.testimonials.set(id, updated);
    return updated;
  }

  async deleteTestimonial(id: number): Promise<boolean> {
    return this.testimonials.delete(id);
  }

  // Comment methods
  async getApprovedCommentsForTestimonial(testimonialId: number): Promise<Comment[]> {
    return Array.from(this.comments.values())
      .filter(c => c.testimonialId === testimonialId && c.status === 'approved')
      .sort((a, b) => new Date(a.createdAt!).getTime() - new Date(b.createdAt!).getTime());
  }

  async getCommentsByStatus(status: 'pending' | 'approved' | 'banned'): Promise<Comment[]> {
    return Array.from(this.comments.values())
      .filter(c => c.status === status)
      .sort((a, b) => new Date(a.createdAt!).getTime() - new Date(b.createdAt!).getTime());
  }

  async createComment(comment: InsertComment): Promise<Comment> {
    const newComment: Comment = {
      ...comment,
      id: this.nextCommentId++,
      createdAt: new Date(),
      updatedAt: new Date()
    } as Comment;
    this.comments.set(newComment.id, newComment);
    return newComment;
  }

  async updateCommentStatus(id: number, update: UpdateComment): Promise<Comment | undefined> {
    const existing = this.comments.get(id);
    if (!existing) return undefined;
    const updated: Comment = { ...existing, ...update, updatedAt: new Date() };
    this.comments.set(id, updated);
    return updated;
  }

  async deleteComment(id: number): Promise<boolean> {
    return this.comments.delete(id);
  }
}

import { FileStorage } from "./fileStorage";

export const storage = new FileStorage();
