import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import type { GalleryItem, InsertGalleryItem, UpdateGalleryItem, Testimonial, InsertTestimonial, UpdateTestimonial, Comment } from '@shared/schema';

// Helper: build headers with optional auth, always as Record<string,string>
const withAuth = (base: Record<string, string> = {}): Record<string, string> => {
  const token = typeof localStorage !== 'undefined' ? localStorage.getItem('admin_token') : null;
  return token ? { ...base, Authorization: `Bearer ${token}` } : base;
};

// Use empty string for production (relative paths) or from env var for development
const API_BASE = typeof window !== 'undefined' && window.location.hostname === 'localhost' 
  ? (import.meta as any)?.env?.VITE_API_BASE || '' 
  : '';

async function requestJson(path: string, init?: RequestInit) {
  try {
    const url = `${API_BASE}${path}`;
    const res = await fetch(url, {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        ...init?.headers
      }
    });
    
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    }
    
    const ct = (res.headers.get('content-type') || '').toLowerCase();
    if (!ct.includes('application/json')) {
      const preview = await res.text().then(t => t.slice(0, 80)).catch(() => '');
      throw new Error(`Unexpected content-type: ${ct} preview: ${preview}`);
    }
    
    return res.json();
  } catch (e) {
    console.error(`API request failed for ${path}:`, e);
    throw e;
  }
}

// API client functions
const api = {
  // Gallery API
  gallery: {
    getAll: async (): Promise<GalleryItem[]> => {
      return requestJson('/api/gallery');
    },
    
    getById: async (id: number): Promise<GalleryItem> => {
      return requestJson(`/api/gallery/${id}`);
    },
    
    create: async (data: InsertGalleryItem): Promise<GalleryItem> => {
      return requestJson('/api/gallery', {
        method: 'POST',
        headers: withAuth(),
        body: JSON.stringify(data),
      });
    },
    
    update: async ({ id, data }: { id: number; data: UpdateGalleryItem }): Promise<GalleryItem> => {
      return requestJson(`/api/gallery/${id}`, {
        method: 'PUT',
        headers: withAuth(),
        body: JSON.stringify(data),
      });
    },
    
    delete: async (id: number): Promise<void> => {
      await requestJson(`/api/gallery/${id}`, {
        method: 'DELETE',
        headers: withAuth(),
      });
    },
  },

  // Testimonials API
  testimonials: {
    getAll: async (): Promise<Testimonial[]> => {
      return requestJson('/api/testimonials');
    },
    
    getById: async (id: number): Promise<Testimonial> => {
      return requestJson(`/api/testimonials/${id}`);
    },
    
    create: async (data: InsertTestimonial): Promise<Testimonial> => {
      return requestJson('/api/testimonials', {
        method: 'POST',
        headers: withAuth(),
        body: JSON.stringify(data),
      });
    },
    
    update: async ({ id, data }: { id: number; data: UpdateTestimonial }): Promise<Testimonial> => {
      return requestJson(`/api/testimonials/${id}`, {
        method: 'PUT',
        headers: withAuth(),
        body: JSON.stringify(data),
      });
    },
    
    delete: async (id: number): Promise<void> => {
      await requestJson(`/api/testimonials/${id}`, {
        method: 'DELETE',
        headers: withAuth(),
      });
    },
  },

  // Stats API
  stats: {
    get: async () => {
      return requestJson('/api/stats');
    },
  },

  // Comments API
  comments: {
    getForTestimonial: async (testimonialId: number): Promise<Comment[]> => {
      return requestJson(`/api/testimonials/${testimonialId}/comments`);
    },
    submit: async ({ testimonialId, firstName, lastName, content }: { testimonialId: number; firstName: string; lastName: string; content: string; }): Promise<{ id: number; status: string }> => {
      return requestJson(`/api/testimonials/${testimonialId}/comments`, {
        method: 'POST',
        body: JSON.stringify({ firstName, lastName, content })
      });
    },
    listByStatus: async (status: 'pending' | 'approved' | 'banned'): Promise<Comment[]> => {
      return requestJson(`/api/comments?status=${status}`, { 
        headers: withAuth() 
      });
    },
    approve: async (id: number): Promise<Comment> => {
      return requestJson(`/api/comments/${id}/approve`, { 
        method: 'PUT', 
        headers: withAuth() 
      });
    },
    ban: async (id: number): Promise<Comment> => {
      return requestJson(`/api/comments/${id}/ban`, { 
        method: 'PUT', 
        headers: withAuth() 
      });
    },
    remove: async (id: number): Promise<void> => {
      await requestJson(`/api/comments/${id}`, { 
        method: 'DELETE', 
        headers: withAuth() 
      });
    }
  }
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

// Comments hooks
export const useCommentsForTestimonial = (testimonialId: number) => {
  return useQuery({
    queryKey: ['comments', 'testimonial', testimonialId],
    queryFn: () => api.comments.getForTestimonial(testimonialId),
    enabled: !!testimonialId,
  });
};

export const useSubmitComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: api.comments.submit,
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['comments', 'testimonial', variables.testimonialId] });
    },
  });
};

export const useListCommentsByStatus = (status: 'pending' | 'approved' | 'banned') => {
  return useQuery({
    queryKey: ['comments', 'status', status],
    queryFn: () => api.comments.listByStatus(status),
  });
};

export const useApproveComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: api.comments.approve,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', 'status', 'pending'] });
      queryClient.invalidateQueries({ queryKey: ['comments', 'status', 'approved'] });
    },
  });
};

export const useBanComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: api.comments.ban,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', 'status', 'pending'] });
      queryClient.invalidateQueries({ queryKey: ['comments', 'status', 'banned'] });
    },
  });
};

export const useDeleteComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: api.comments.remove,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
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