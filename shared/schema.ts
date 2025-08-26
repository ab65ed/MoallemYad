import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const galleryItems = pgTable("gallery_items", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  src: text("src").notNull(),
  title: text("title").notNull(),
  category: text("category").notNull(),
  year: text("year"),
  description: text("description"),
  type: text("type").notNull(), // 'image' | 'video'
  poster: text("poster"),
  duration: text("duration"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const testimonials = pgTable("testimonials", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  author: text("author").notNull(),
  role: text("role").notNull(),
  date: text("date").notNull(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// User schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// Gallery schemas
export const insertGalleryItemSchema = createInsertSchema(galleryItems).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const updateGalleryItemSchema = insertGalleryItemSchema.partial();

export const selectGalleryItemSchema = createSelectSchema(galleryItems);

// Testimonial schemas
export const insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const updateTestimonialSchema = insertTestimonialSchema.partial();

export const selectTestimonialSchema = createSelectSchema(testimonials);

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertGalleryItem = z.infer<typeof insertGalleryItemSchema>;
export type UpdateGalleryItem = z.infer<typeof updateGalleryItemSchema>;
export type GalleryItem = typeof galleryItems.$inferSelect;

export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type UpdateTestimonial = z.infer<typeof updateTestimonialSchema>;
export type Testimonial = typeof testimonials.$inferSelect;
