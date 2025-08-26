import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import type { GalleryItem, InsertGalleryItem, UpdateGalleryItem, Testimonial, InsertTestimonial, UpdateTestimonial } from '@shared/schema';

// Helper function to get auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem('admin_token');
  return token ? { 'Authorization': `Bearer ${token}` } : {};
};

// API client functions
const api = {
  // Gallery API
  gallery: {
    getAll: async (): Promise<GalleryItem[]> => {
      const response = await fetch('/api/gallery');
      if (!response.ok) throw new Error('Failed to fetch gallery items');
      return response.json();
    },
    
    getById: async (id: number): Promise<GalleryItem> => {
      const response = await fetch(`/api/gallery/${id}`);
      if (!response.ok) throw new Error('Failed to fetch gallery item');
      return response.json();
    },
    
    create: async (data: InsertGalleryItem): Promise<GalleryItem> => {
      const response = await fetch('/api/gallery', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          ...getAuthHeaders()
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to create gallery item');
      return response.json();
    },
    
    update: async ({ id, data }: { id: number; data: UpdateGalleryItem }): Promise<GalleryItem> => {
      const response = await fetch(`/api/gallery/${id}`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          ...getAuthHeaders()
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to update gallery item');
      return response.json();
    },
    
    delete: async (id: number): Promise<void> => {
      const response = await fetch(`/api/gallery/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      });
      if (!response.ok) throw new Error('Failed to delete gallery item');
    },
  },

  // Testimonials API
  testimonials: {
    getAll: async (): Promise<Testimonial[]> => {
      const response = await fetch('/api/testimonials');
      if (!response.ok) throw new Error('Failed to fetch testimonials');
      return response.json();
    },
    
    getById: async (id: number): Promise<Testimonial> => {
      const response = await fetch(`/api/testimonials/${id}`);
      if (!response.ok) throw new Error('Failed to fetch testimonial');
      return response.json();
    },
    
    create: async (data: InsertTestimonial): Promise<Testimonial> => {
      const response = await fetch('/api/testimonials', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          ...getAuthHeaders()
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to create testimonial');
      return response.json();
    },
    
    update: async ({ id, data }: { id: number; data: UpdateTestimonial }): Promise<Testimonial> => {
      const response = await fetch(`/api/testimonials/${id}`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          ...getAuthHeaders()
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to update testimonial');
      return response.json();
    },
    
    delete: async (id: number): Promise<void> => {
      const response = await fetch(`/api/testimonials/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      });
      if (!response.ok) throw new Error('Failed to delete testimonial');
    },
  },

  // Stats API
  stats: {
    get: async () => {
      const response = await fetch('/api/stats');
      if (!response.ok) throw new Error('Failed to fetch stats');
      return response.json();
    },
  },
};

// Gallery hooks
export const useGalleryItems = () => {
  return useQuery({
    queryKey: ['gallery'],
    queryFn: api.gallery.getAll,
  });
};

export const useGalleryItem = (id: number) => {
  return useQuery({
    queryKey: ['gallery', id],
    queryFn: () => api.gallery.getById(id),
    enabled: !!id,
  });
};

export const useCreateGalleryItem = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: api.gallery.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['gallery'] });
      queryClient.invalidateQueries({ queryKey: ['stats'] });
    },
  });
};

export const useUpdateGalleryItem = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: api.gallery.update,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['gallery'] });
      queryClient.invalidateQueries({ queryKey: ['gallery', data.id] });
      queryClient.invalidateQueries({ queryKey: ['stats'] });
    },
  });
};

export const useDeleteGalleryItem = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: api.gallery.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['gallery'] });
      queryClient.invalidateQueries({ queryKey: ['stats'] });
    },
  });
};

// Testimonial hooks
export const useTestimonials = () => {
  return useQuery({
    queryKey: ['testimonials'],
    queryFn: api.testimonials.getAll,
  });
};

export const useTestimonial = (id: number) => {
  return useQuery({
    queryKey: ['testimonials', id],
    queryFn: () => api.testimonials.getById(id),
    enabled: !!id,
  });
};

export const useCreateTestimonial = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: api.testimonials.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['testimonials'] });
      queryClient.invalidateQueries({ queryKey: ['stats'] });
    },
  });
};

export const useUpdateTestimonial = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: api.testimonials.update,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['testimonials'] });
      queryClient.invalidateQueries({ queryKey: ['testimonials', data.id] });
      queryClient.invalidateQueries({ queryKey: ['stats'] });
    },
  });
};

export const useDeleteTestimonial = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: api.testimonials.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['testimonials'] });
      queryClient.invalidateQueries({ queryKey: ['stats'] });
    },
  });
};

// Stats hook
export const useStats = () => {
  return useQuery({
    queryKey: ['stats'],
    queryFn: api.stats.get,
    refetchInterval: 30000, // Refetch every 30 seconds for real-time updates
  });
};