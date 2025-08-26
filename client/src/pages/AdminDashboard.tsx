import { useState } from 'react';
import { 
  Settings, 
  Image, 
  Video, 
  MessageSquare, 
  Plus, 
  Edit, 
  Trash2, 
  Save,
  X,
  Calendar,
  User,
  Tag,
  Loader2,
  LogOut
} from 'lucide-react';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useAuth } from '@/contexts/AuthContext';
import DashboardStats from '@/components/DashboardStats';
import FileUpload from '@/components/FileUpload';
import { 
  useGalleryItems, 
  useTestimonials, 
  useCreateGalleryItem, 
  useUpdateGalleryItem, 
  useDeleteGalleryItem,
  useCreateTestimonial,
  useUpdateTestimonial,
  useDeleteTestimonial
} from '@/hooks/useApi';
import type { GalleryItem, Testimonial, InsertGalleryItem, InsertTestimonial } from '@shared/schema';

function AdminDashboardContent() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<'gallery' | 'testimonials'>('gallery');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingItem, setEditingItem] = useState<GalleryItem | Testimonial | null>(null);
  const [modalType, setModalType] = useState<'gallery' | 'testimonial'>('gallery');

  // API hooks
  const { data: galleryItems = [], isLoading: galleryLoading, error: galleryError } = useGalleryItems();
  const { data: testimonials = [], isLoading: testimonialsLoading, error: testimonialsError } = useTestimonials();

  // محاسبه آمار از داده‌های موجود
  const stats = {
    totalImages: galleryItems.filter(item => item.type === 'image').length,
    totalVideos: galleryItems.filter(item => item.type === 'video').length,
    totalTestimonials: testimonials.length,
    recentActivity: {
      images: Math.min(5, galleryItems.filter(item => item.type === 'image').length),
      videos: Math.min(2, galleryItems.filter(item => item.type === 'video').length),
      testimonials: Math.min(3, testimonials.length)
    }
  };

  const statsLoading = galleryLoading || testimonialsLoading;

  // Mutations
  const createGalleryMutation = useCreateGalleryItem();
  const updateGalleryMutation = useUpdateGalleryItem();
  const deleteGalleryMutation = useDeleteGalleryItem();
  const createTestimonialMutation = useCreateTestimonial();
  const updateTestimonialMutation = useUpdateTestimonial();
  const deleteTestimonialMutation = useDeleteTestimonial();

  // Categories
  const galleryCategories = {
    teaching: 'تدریس',
    personal: 'شخصی',
    sports: 'ورزش',
    family: 'خانوادگی',
    artistic: 'فعالیت‌های هنری',
    travel: 'سفر و ایرانگردی'
  };

  const testimonialCategories = {
    student: 'جامعه هنری',
    colleague: 'روزنامه ها و جراید',
    friend: 'اهالی ورزش',
    family: 'دوستان و آشنایان',
    intellectuals: 'فرهیختگان و معلمین'
  };

  // Gallery Management
  const handleAddGalleryItem = () => {
    setModalType('gallery');
    setEditingItem(null);
    setShowAddModal(true);
  };

  const handleEditGalleryItem = (item: GalleryItem) => {
    setModalType('gallery');
    setEditingItem(item);
    setShowAddModal(true);
  };

  const handleDeleteGalleryItem = async (id: number) => {
    if (confirm('آیا از حذف این آیتم اطمینان دارید؟')) {
      try {
        await deleteGalleryMutation.mutateAsync(id);
        alert('آیتم با موفقیت حذف شد');
      } catch (error) {
        alert('خطا در حذف آیتم');
      }
    }
  };

  // Testimonial Management
  const handleAddTestimonial = () => {
    setModalType('testimonial');
    setEditingItem(null);
    setShowAddModal(true);
  };

  const handleEditTestimonial = (testimonial: Testimonial) => {
    setModalType('testimonial');
    setEditingItem(testimonial);
    setShowAddModal(true);
  };

  const handleDeleteTestimonial = async (id: number) => {
    if (confirm('آیا از حذف این دل‌نوشته اطمینان دارید؟')) {
      try {
        await deleteTestimonialMutation.mutateAsync(id);
        alert('دل‌نوشته با موفقیت حذف شد');
      } catch (error) {
        alert('خطا در حذف دل‌نوشته');
      }
    }
  };

  const handleSave = async (data: any) => {
    try {
      if (modalType === 'gallery') {
        const galleryData = data as InsertGalleryItem;
        if (editingItem) {
          await updateGalleryMutation.mutateAsync({ 
            id: editingItem.id, 
            data: galleryData 
          });
          alert('آیتم گالری با موفقیت به‌روزرسانی شد');
        } else {
          await createGalleryMutation.mutateAsync(galleryData);
          alert('آیتم گالری با موفقیت اضافه شد');
        }
      } else {
        const testimonialData = data as InsertTestimonial;
        if (editingItem) {
          await updateTestimonialMutation.mutateAsync({ 
            id: editingItem.id, 
            data: testimonialData 
          });
          alert('دل‌نوشته با موفقیت به‌روزرسانی شد');
        } else {
          await createTestimonialMutation.mutateAsync(testimonialData);
          alert('دل‌نوشته با موفقیت اضافه شد');
        }
      }
      setShowAddModal(false);
      setEditingItem(null);
    } catch (error) {
      alert('خطا در ذخیره اطلاعات');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Admin Header Bar */}
      <div className="bg-gradient-to-r from-[#00a693] to-[#eeaa22] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5">
          <div className="flex items-center justify-between">
            {/* Left Side - Title with User Name */}
            <div className="flex items-center">
              <Settings className="w-4 h-4 text-white ml-2" />
              <h1 className="text-sm font-medium text-white">داشبورد مدیریت {user?.name}</h1>
            </div>
            
            {/* Right Side - Action Buttons (Icons Only) */}
            <div className="flex items-center gap-1">
              <div className="group relative">
                <a
                  href="/"
                  className="flex items-center justify-center w-7 h-7 bg-blue-500/80 backdrop-blur-sm text-white rounded-md hover:bg-blue-600 transition-all duration-300 border border-blue-400/50"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </a>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg z-50">
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  بازگشت به سایت اصلی
                </div>
              </div>
              
              <div className="group relative">
                <a
                  href="/admin/settings"
                  className="flex items-center justify-center w-7 h-7 bg-white/10 backdrop-blur-sm text-white rounded-md hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <Settings className="w-3.5 h-3.5" />
                </a>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg z-50">
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  تنظیمات
                </div>
              </div>
              
              <div className="group relative">
                <button
                  onClick={logout}
                  className="flex items-center justify-center w-7 h-7 bg-red-500/80 backdrop-blur-sm text-white rounded-md hover:bg-red-600 transition-all duration-300 border border-red-400/50"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg z-50">
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  خروج
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page Title */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center">
            <p className="text-gray-600">
              مدیریت محتوای سایت یادبود استاد مسعود محمدی
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DashboardStats
          totalImages={stats.totalImages}
          totalVideos={stats.totalVideos}
          totalTestimonials={stats.totalTestimonials}
          recentActivity={stats.recentActivity}
          isLoading={statsLoading}
        />
        
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 mb-8">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('gallery')}
              className={`flex items-center px-6 py-4 font-medium transition-all duration-300 ${
                activeTab === 'gallery'
                  ? 'bg-[#00a693] text-white border-b-2 border-[#00a693]'
                  : 'text-gray-700 hover:text-[#00a693] hover:bg-gray-50'
              }`}
            >
              <Image className="w-5 h-5 ml-2" />
              مدیریت گالری (تصاویر و ویدیوها)
            </button>
            <button
              onClick={() => setActiveTab('testimonials')}
              className={`flex items-center px-6 py-4 font-medium transition-all duration-300 ${
                activeTab === 'testimonials'
                  ? 'bg-[#00a693] text-white border-b-2 border-[#00a693]'
                  : 'text-gray-700 hover:text-[#00a693] hover:bg-gray-50'
              }`}
            >
              <MessageSquare className="w-5 h-5 ml-2" />
              مدیریت دل‌نوشته‌ها
            </button>
          </div>
        </div>

        {activeTab === 'gallery' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">مدیریت گالری</h2>
              <button
                onClick={handleAddGalleryItem}
                disabled={createGalleryMutation.isPending}
                className="flex items-center px-6 py-3 bg-gradient-to-r from-[#00a693] to-[#eeaa22] text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 disabled:opacity-50"
              >
                {createGalleryMutation.isPending ? (
                  <Loader2 className="w-5 h-5 ml-2 animate-spin" />
                ) : (
                  <Plus className="w-5 h-5 ml-2" />
                )}
                افزودن تصویر/ویدیو
              </button>
            </div>

            {galleryLoading && (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-[#00a693]" />
                <span className="mr-2 text-gray-600">در حال بارگذاری...</span>
              </div>
            )}

            {galleryError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                خطا در بارگذاری آیتم‌های گالری
              </div>
            )}

            {!galleryLoading && !galleryError && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden">
                    <div className="relative">
                      {item.type === 'image' ? (
                        <>
                          <img
                            src={item.src}
                            alt={item.title}
                            className="w-full h-48 object-cover"
                            onError={(e) => {
                              console.error('Image load error:', item.src);
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.nextElementSibling?.classList.remove('hidden');
                            }}
                            onLoad={() => {
                              console.log('Image loaded successfully:', item.src);
                            }}
                          />
                          <div className="hidden w-full h-48 bg-gray-200 flex items-center justify-center flex-col">
                            <Image className="w-12 h-12 text-gray-400 mb-2" />
                            <p className="text-gray-500 text-sm">تصویر بارگذاری نشد</p>
                            <p className="text-gray-400 text-xs">{item.src}</p>
                          </div>
                        </>
                      ) : (
                        <div className="relative">
                          {item.poster ? (
                            <img
                              src={item.poster}
                              alt={item.title}
                              className="w-full h-48 object-cover"
                            />
                          ) : (
                            <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                              <Video className="w-12 h-12 text-gray-400" />
                            </div>
                          )}
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                            <Video className="w-8 h-8 text-white" />
                          </div>
                          {item.duration && (
                            <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                              {item.duration}
                            </div>
                          )}
                        </div>
                      )}
                      
                      <div className="absolute top-2 left-2">
                        <div className={`p-1.5 rounded-full ${
                          item.type === 'image' 
                            ? 'bg-[#00a693]/90 text-white' 
                            : 'bg-[#eeaa22]/90 text-white'
                        }`}>
                          {item.type === 'image' ? (
                            <Image className="w-3 h-3" />
                          ) : (
                            <Video className="w-3 h-3" />
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Tag className="w-4 h-4 ml-1" />
                          {galleryCategories[item.category]}
                        </div>
                        {item.year && (
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 ml-1" />
                            {item.year}
                          </div>
                        )}
                      </div>
                      {item.description && (
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {item.description}
                        </p>
                      )}
                      
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditGalleryItem(item)}
                          disabled={updateGalleryMutation.isPending}
                          className="flex-1 flex items-center justify-center px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 disabled:opacity-50"
                        >
                          {updateGalleryMutation.isPending ? (
                            <Loader2 className="w-4 h-4 ml-1 animate-spin" />
                          ) : (
                            <Edit className="w-4 h-4 ml-1" />
                          )}
                          ویرایش
                        </button>
                        <button
                          onClick={() => handleDeleteGalleryItem(item.id)}
                          disabled={deleteGalleryMutation.isPending}
                          className="flex-1 flex items-center justify-center px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300 disabled:opacity-50"
                        >
                          {deleteGalleryMutation.isPending ? (
                            <Loader2 className="w-4 h-4 ml-1 animate-spin" />
                          ) : (
                            <Trash2 className="w-4 h-4 ml-1" />
                          )}
                          حذف
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'testimonials' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">مدیریت دل‌نوشته‌ها</h2>
              <button
                onClick={handleAddTestimonial}
                disabled={createTestimonialMutation.isPending}
                className="flex items-center px-6 py-3 bg-gradient-to-r from-[#00a693] to-[#eeaa22] text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 disabled:opacity-50"
              >
                {createTestimonialMutation.isPending ? (
                  <Loader2 className="w-5 h-5 ml-2 animate-spin" />
                ) : (
                  <Plus className="w-5 h-5 ml-2" />
                )}
                افزودن دل‌نوشته
              </button>
            </div>

            {testimonialsLoading && (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-[#00a693]" />
                <span className="mr-2 text-gray-600">در حال بارگذاری...</span>
              </div>
            )}

            {testimonialsError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                خطا در بارگذاری دل‌نوشته‌ها
              </div>
            )}

            {!testimonialsLoading && !testimonialsError && (
              <div className="space-y-6">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{testimonial.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                          <div className="flex items-center">
                            <User className="w-4 h-4 ml-1" />
                            {testimonial.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 ml-1" />
                            {testimonial.date}
                          </div>
                          <div className="flex items-center">
                            <Tag className="w-4 h-4 ml-1" />
                            {testimonialCategories[testimonial.category]}
                          </div>
                        </div>
                        <p className="text-gray-600 mb-2">{testimonial.role}</p>
                      </div>
                      
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditTestimonial(testimonial)}
                          disabled={updateTestimonialMutation.isPending}
                          className="flex items-center px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 disabled:opacity-50"
                        >
                          {updateTestimonialMutation.isPending ? (
                            <Loader2 className="w-4 h-4 ml-1 animate-spin" />
                          ) : (
                            <Edit className="w-4 h-4 ml-1" />
                          )}
                          ویرایش
                        </button>
                        <button
                          onClick={() => handleDeleteTestimonial(testimonial.id)}
                          disabled={deleteTestimonialMutation.isPending}
                          className="flex items-center px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300 disabled:opacity-50"
                        >
                          {deleteTestimonialMutation.isPending ? (
                            <Loader2 className="w-4 h-4 ml-1 animate-spin" />
                          ) : (
                            <Trash2 className="w-4 h-4 ml-1" />
                          )}
                          حذف
                        </button>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-700 line-clamp-3">
                        {testimonial.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {showAddModal && (
        <AddEditModal
          type={modalType}
          item={editingItem}
          onClose={() => {
            setShowAddModal(false);
            setEditingItem(null);
          }}
          onSave={handleSave}
          galleryCategories={galleryCategories}
          testimonialCategories={testimonialCategories}
        />
      )}
    </div>
  );
}

interface AddEditModalProps {
  type: 'gallery' | 'testimonial';
  item: GalleryItem | Testimonial | null;
  onClose: () => void;
  onSave: (data: GalleryItem | Testimonial) => void;
  galleryCategories: Record<string, string>;
  testimonialCategories: Record<string, string>;
}

function AddEditModal({ type, item, onClose, onSave, galleryCategories, testimonialCategories }: AddEditModalProps) {
  const [formData, setFormData] = useState<any>(
    item || (type === 'gallery' 
      ? { src: '', title: '', category: 'personal', year: '', description: '', type: 'image', poster: '', duration: '' }
      : { author: '', role: '', date: '', title: '', content: '', category: 'student' }
    )
  );

  const handleFileUploaded = (filePath: string, fileType: 'image' | 'video') => {
    setFormData({
      ...formData,
      src: filePath,
      type: fileType
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">
              {item ? 'ویرایش' : 'افزودن'} {type === 'gallery' ? 'آیتم گالری' : 'دل‌نوشته'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {type === 'gallery' ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">نوع محتوا</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a693] focus:border-transparent"
                  >
                    <option value="image">تصویر</option>
                    <option value="video">ویدیو</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">دسته‌بندی</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a693] focus:border-transparent"
                  >
                    {Object.entries(galleryCategories).map(([key, value]) => (
                      <option key={key} value={key}>{value}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">عنوان</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a693] focus:border-transparent"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">سال</label>
                  <input
                    type="text"
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a693] focus:border-transparent"
                    placeholder="مثال: ۱۳۶۵"
                  />
                </div>
                {formData.type === 'video' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">مدت زمان</label>
                    <input
                      type="text"
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a693] focus:border-transparent"
                      placeholder="مثال: ۱۵:۳۰"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {formData.src ? 'فایل انتخاب شده' : 'انتخاب فایل'}
                </label>
                {!formData.src ? (
                  <FileUpload
                    onFileUploaded={handleFileUploaded}
                    accept="image/*,video/*"
                    maxSize={50}
                  />
                ) : (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-2">
                        {formData.type === 'image' ? (
                          <Image className="w-5 h-5 text-green-600" />
                        ) : (
                          <Video className="w-5 h-5 text-green-600" />
                        )}
                        <span className="text-green-800 font-medium">{formData.src}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, src: '', type: 'image' })}
                        className="text-green-600 hover:text-green-800 transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-600">
                      برای تغییر فایل، روی دکمه X کلیک کنید
                    </p>
                  </div>
                )}
              </div>

              {formData.type === 'video' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">آدرس پوستر (اختیاری)</label>
                  <input
                    type="text"
                    value={formData.poster}
                    onChange={(e) => setFormData({ ...formData, poster: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a693] focus:border-transparent"
                    placeholder="/videos/posters/poster.jpg"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">توضیحات</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a693] focus:border-transparent"
                />
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">نام نویسنده</label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a693] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">نقش/سمت</label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a693] focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">تاریخ</label>
                  <input
                    type="text"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a693] focus:border-transparent"
                    placeholder="مثال: بهمن ۱۴۰۲"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">دسته‌بندی</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a693] focus:border-transparent"
                  >
                    {Object.entries(testimonialCategories).map(([key, value]) => (
                      <option key={key} value={key}>{value}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">عنوان دل‌نوشته</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a693] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">متن دل‌نوشته</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={10}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a693] focus:border-transparent"
                  required
                />
              </div>
            </>
          )}

          <div className="flex gap-4 pt-4 border-t border-gray-200">
            <button
              type="submit"
              className="flex-1 flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#00a693] to-[#eeaa22] text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
            >
              <Save className="w-5 h-5 ml-2" />
              ذخیره
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 flex items-center justify-center px-6 py-3 bg-gray-500 text-white rounded-xl font-medium hover:bg-gray-600 transition-all duration-300"
            >
              <X className="w-5 h-5 ml-2" />
              انصراف
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <ProtectedRoute requireAdmin={true}>
      <AdminDashboardContent />
    </ProtectedRoute>
  );
}