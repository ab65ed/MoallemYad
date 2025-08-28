import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import type { GalleryItem, InsertGalleryItem, UpdateGalleryItem, Testimonial, InsertTestimonial, UpdateTestimonial, Comment } from '@shared/schema';

// Helper function to get auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem('admin_token');
  return token ? { 'Authorization': `Bearer ${token}` } : {};
};

const API_BASE = (import.meta as any)?.env?.VITE_API_BASE || '';

// API client functions
const api = {
  // Gallery API
  gallery: {
    getAll: async (): Promise<GalleryItem[]> => {
      const response = await fetch(`${API_BASE}/api/gallery`);
      if (!response.ok) throw new Error('Failed to fetch gallery items');
      return response.json();
    },
    
    getById: async (id: number): Promise<GalleryItem> => {
      const response = await fetch(`${API_BASE}/api/gallery/${id}`);
      if (!response.ok) throw new Error('Failed to fetch gallery item');
      return response.json();
    },
    
    create: async (data: InsertGalleryItem): Promise<GalleryItem> => {
      const response = await fetch(`${API_BASE}/api/gallery`, {
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
      const response = await fetch(`${API_BASE}/api/gallery/${id}`, {
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
      const response = await fetch(`${API_BASE}/api/gallery/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      });
      if (!response.ok) throw new Error('Failed to delete gallery item');
    },
  },

  // Testimonials API
  testimonials: {
    getAll: async (): Promise<Testimonial[]> => {
      const response = await fetch(`${API_BASE}/api/testimonials`);
      if (!response.ok) throw new Error('Failed to fetch testimonials');
      return response.json();
    },
    
    getById: async (id: number): Promise<Testimonial> => {
      const response = await fetch(`${API_BASE}/api/testimonials/${id}`);
      if (!response.ok) throw new Error('Failed to fetch testimonial');
      return response.json();
    },
    
    create: async (data: InsertTestimonial): Promise<Testimonial> => {
      const response = await fetch(`${API_BASE}/api/testimonials`, {
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
      const response = await fetch(`${API_BASE}/api/testimonials/${id}`, {
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
      const response = await fetch(`${API_BASE}/api/testimonials/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      });
      if (!response.ok) throw new Error('Failed to delete testimonial');
    },
  },

  // Stats API
  stats: {
    get: async () => {
      const response = await fetch(`${API_BASE}/api/stats`);
      if (!response.ok) throw new Error('Failed to fetch stats');
      return response.json();
    },
  },

  // Comments API
  comments: {
    getForTestimonial: async (testimonialId: number): Promise<Comment[]> => {
      const response = await fetch(`${API_BASE}/api/testimonials/${testimonialId}/comments`);
      if (!response.ok) throw new Error('Failed to fetch comments');
      return response.json();
    },
    submit: async ({ testimonialId, firstName, lastName, content }: { testimonialId: number; firstName: string; lastName: string; content: string; }): Promise<{ id: number; status: string }> => {
      const response = await fetch(`${API_BASE}/api/testimonials/${testimonialId}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, content })
      });
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        const msg = (data && data.error) ? data.error : 'Failed to submit comment';
        throw new Error(msg);
      }
      return response.json();
    },
    listByStatus: async (status: 'pending' | 'approved' | 'banned'): Promise<Comment[]> => {
      const response = await fetch(`${API_BASE}/api/comments?status=${status}`, { headers: getAuthHeaders() });
      if (!response.ok) throw new Error('Failed to fetch comments list');
      return response.json();
    },
    approve: async (id: number): Promise<Comment> => {
      const response = await fetch(`${API_BASE}/api/comments/${id}/approve`, { method: 'PUT', headers: getAuthHeaders() });
      if (!response.ok) throw new Error('Failed to approve comment');
      return response.json();
    },
    ban: async (id: number): Promise<Comment> => {
      const response = await fetch(`${API_BASE}/api/comments/${id}/ban`, { method: 'PUT', headers: getAuthHeaders() });
      if (!response.ok) throw new Error('Failed to ban comment');
      return response.json();
    },
    remove: async (id: number): Promise<void> => {
      const response = await fetch(`${API_BASE}/api/comments/${id}`, { method: 'DELETE', headers: getAuthHeaders() });
      if (!response.ok) throw new Error('Failed to delete comment');
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