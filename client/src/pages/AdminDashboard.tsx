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
  LogOut,
  CheckCircle2,
  Ban as BanIcon,
  Inbox
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
  useDeleteTestimonial,
  useListCommentsByStatus,
  useApproveComment,
  useBanComment,
  useDeleteComment
} from '@/hooks/useApi';
import type { GalleryItem, Testimonial, InsertGalleryItem, InsertTestimonial, Comment as AppComment } from '@shared/schema';

function AdminDashboardContent() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<'gallery' | 'testimonials' | 'comments'>('gallery');
  const [commentView, setCommentView] = useState<'pending' | 'approved' | 'banned'>('pending');
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

  // Comments moderation hooks
  const { data: pendingComments = [], isLoading: pendingLoading } = useListCommentsByStatus('pending');
  const { data: approvedComments = [], isLoading: approvedLoading } = useListCommentsByStatus('approved');
  const { data: bannedComments = [], isLoading: bannedLoading } = useListCommentsByStatus('banned');
  const approveCommentMutation = useApproveComment();
  const banCommentMutation = useBanComment();
  const deleteCommentMutation = useDeleteComment();

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Admin Header Bar - neutral, minimal accent */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Settings className="w-4 h-4 text-gray-600" aria-hidden="true" />
              <h1 className="text-sm font-medium text-gray-900">داشبورد مدیریت {user?.name}</h1>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="/"
                className="inline-flex items-center justify-center h-9 px-3 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label="بازگشت به سایت"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </a>
              <a
                href="/admin/settings"
                className="inline-flex items-center justify-center h-9 px-3 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label="تنظیمات"
              >
                <Settings className="w-4 h-4" aria-hidden="true" />
              </a>
              <button
                onClick={logout}
                className="inline-flex items-center justify-center h-9 px-3 rounded-md border border-red-300 bg-red-50 text-red-700 hover:bg-red-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                aria-label="خروج"
              >
                <LogOut className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        {/* Sticky Tab Bar - accessible, scrollable on mobile */}
        <div className="border-t border-slate-800 bg-slate-900">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto no-scrollbar" role="tablist" aria-label="بخش‌های مدیریت">
            <div className="flex gap-2 py-2 min-w-max">
              <button
                role="tab"
                aria-selected={activeTab === 'gallery'}
                aria-controls="panel-gallery"
                onClick={() => setActiveTab('gallery')}
                className={`px-4 py-2 rounded-full text-sm border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 ${activeTab === 'gallery' ? 'border-cyan-500 text-slate-100 bg-slate-800' : 'border-slate-700 text-slate-300 hover:bg-slate-800/60'}`}
              >
                گالری
              </button>
              <button
                role="tab"
                aria-selected={activeTab === 'testimonials'}
                aria-controls="panel-testimonials"
                onClick={() => setActiveTab('testimonials')}
                className={`px-4 py-2 rounded-full text-sm border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 ${activeTab === 'testimonials' ? 'border-cyan-500 text-slate-100 bg-slate-800' : 'border-slate-700 text-slate-300 hover:bg-slate-800/60'}`}
              >
                دل‌نوشته‌ها
              </button>
              <button
                role="tab"
                aria-selected={activeTab === 'comments'}
                aria-controls="panel-comments"
                onClick={() => setActiveTab('comments')}
                className={`px-4 py-2 rounded-full text-sm border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 ${activeTab === 'comments' ? 'border-cyan-500 text-slate-100 bg-slate-800' : 'border-slate-700 text-slate-300 hover:bg-slate-800/60'}`}
              >
                نظرات
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Page Title */}
      <div className="bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center">
            <p className="text-slate-300">
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
        
        {/* Removed old tabs block (now in sticky header) */}

        {activeTab === 'gallery' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">مدیریت گالری</h2>
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="status" aria-label="در حال بارگذاری گالری">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-4 animate-pulse">
                    <div className="w-full h-48 bg-neutral-200 rounded-xl mb-4" />
                    <div className="h-4 bg-neutral-200 rounded w-2/3 mb-2" />
                    <div className="h-3 bg-neutral-200 rounded w-1/2 mb-2" />
                    <div className="h-3 bg-neutral-200 rounded w-1/3" />
                  </div>
                ))}
              </div>
            )}

            {galleryError && (
              <div className="bg-white border border-red-200 rounded-xl p-4 flex items-start gap-3">
                <Inbox className="w-5 h-5 text-red-500 mt-0.5" aria-hidden="true" />
                <div className="text-sm text-red-700">خطا در بارگذاری آیتم‌های گالری</div>
              </div>
            )}

            {!galleryLoading && !galleryError && (
              <div className="group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 hover:[&>div]:opacity-70 [&>div:hover]:opacity-100">
                {galleryItems.map((item) => (
                  <div key={item.id} className="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:ring-1 hover:ring-blue-500/20">
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
                          <div className="hidden w-full h-48 bg-slate-700 flex items-center justify-center flex-col">
                            <Image className="w-12 h-12 text-slate-300 mb-2" />
                            <p className="text-slate-300 text-sm">تصویر بارگذاری نشد</p>
                            <p className="text-slate-400 text-xs">{item.src}</p>
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
                            <div className="w-full h-48 bg-slate-700 flex items-center justify-center">
                              <Video className="w-12 h-12 text-slate-300" />
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div className="absolute inset-0 flex items-end justify-between p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="text-slate-100 text-sm font-medium line-clamp-1">{item.title}</div>
                            {item.duration && (
                              <div className="bg-black/70 text-white px-2 py-1 rounded text-xs">
                                {item.duration}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                      
                      <div className="absolute top-2 left-2">
                        <div className={`p-1.5 rounded-full shadow-sm ${
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
                      <h3 className="font-semibold text-base text-gray-900 mb-2">{item.title}</h3>
                      <div className="space-y-1.5 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Tag className="w-4 h-4 ml-1" />
                          {(
                            galleryCategories as Record<string, string>
                          )[item.category]}
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
                          className="flex-1 inline-flex items-center justify-center h-10 px-3 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:opacity-50"
                          aria-label={`ویرایش ${item.title}`}
                        >
                          <Edit className="w-4 h-4 ml-1" aria-hidden="true" />
                          <span>ویرایش</span>
                        </button>
                        <button
                          onClick={() => handleDeleteGalleryItem(item.id)}
                          disabled={deleteGalleryMutation.isPending}
                          className="flex-1 inline-flex items-center justify-center h-10 px-3 rounded-lg border border-red-300 bg-red-50 text-red-700 hover:bg-red-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 disabled:opacity-50"
                          aria-label={`حذف ${item.title}`}
                        >
                          <Trash2 className="w-4 h-4 ml-1" aria-hidden="true" />
                          <span>حذف</span>
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
              <h2 className="text-2xl font-bold text-gray-900">مدیریت دل‌نوشته‌ها</h2>
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
              <div className="space-y-4" role="status" aria-label="در حال بارگذاری دل‌نوشته‌ها">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6 animate-pulse">
                    <div className="h-4 bg-neutral-200 rounded w-1/3 mb-3" />
                    <div className="h-3 bg-neutral-200 rounded w-1/2 mb-2" />
                    <div className="h-3 bg-neutral-200 rounded w-2/3 mb-4" />
                    <div className="h-24 bg-neutral-200 rounded" />
                  </div>
                ))}
              </div>
            )}

            {testimonialsError && (
              <div className="bg-white border border-red-200 rounded-xl p-4 flex items-start gap-3">
                <Inbox className="w-5 h-5 text-red-500 mt-0.5" aria-hidden="true" />
                <div className="text-sm text-red-700">خطا در بارگذاری دل‌نوشته‌ها</div>
              </div>
            )}

            {!testimonialsLoading && !testimonialsError && (
              <div className="group space-y-6 hover:[&>div]:opacity-70 [&>div:hover]:opacity-100">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:ring-1 hover:ring-blue-500/20">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{testimonial.title}</h3>
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
                            {(
                              testimonialCategories as Record<string, string>
                            )[testimonial.category]}
                          </div>
                        </div>
                        <p className="text-gray-600 mb-2">{testimonial.role}</p>
                      </div>
                      
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditTestimonial(testimonial)}
                          disabled={updateTestimonialMutation.isPending}
                          className="inline-flex items-center justify-center h-10 px-3 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:opacity-50"
                          aria-label={`ویرایش ${testimonial.title}`}
                        >
                          <Edit className="w-4 h-4 ml-1" aria-hidden="true" />
                          <span>ویرایش</span>
                        </button>
                        <button
                          onClick={() => handleDeleteTestimonial(testimonial.id)}
                          disabled={deleteTestimonialMutation.isPending}
                          className="inline-flex items-center justify-center h-10 px-3 rounded-lg border border-red-300 bg-red-50 text-red-700 hover:bg-red-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 disabled:opacity-50"
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

        {activeTab === 'comments' && (
          <div id="panel-comments" role="tabpanel" aria-labelledby="tab-comments" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">مدیریت نظرات کاربران</h2>
            {/* Mobile segmented control */}
            <div className="lg:hidden">
              <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-neutral-200">
                {(['pending','approved','banned'] as const).map((key) => (
                  <button
                    key={key}
                    onClick={() => setCommentView(key)}
                    className={`flex-1 px-3 py-2 rounded-lg text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00a693] ${commentView === key ? 'bg-[#00a693]/10 text-neutral-900' : 'text-neutral-700 hover:bg-neutral-50'}`}
                  >
                    {key === 'pending' ? 'در انتظار' : key === 'approved' ? 'تایید شده' : 'مسدود'}
                  </button>
                ))}
              </div>
              <div className="mt-4">
                {commentView === 'pending' && (
                  <CommentsColumn
                    title="در انتظار تایید"
                    colorClass="border-amber-200"
                    tintClass="bg-amber-50/60"
                    emptyText="نظری برای تایید وجود ندارد"
                    isLoading={pendingLoading}
                    comments={pendingComments}
                    onApprove={(id) => approveCommentMutation.mutate(id)}
                    onBan={(id) => banCommentMutation.mutate(id)}
                    onDelete={(id) => deleteCommentMutation.mutate(id)}
                    showApprove
                    showBan
                  />
                )}
                {commentView === 'approved' && (
                  <CommentsColumn
                    title="تایید شده"
                    colorClass="border-emerald-200"
                    tintClass="bg-emerald-50/60"
                    emptyText="نظری تایید نشده است"
                    isLoading={approvedLoading}
                    comments={approvedComments}
                    onApprove={undefined}
                    onBan={(id) => banCommentMutation.mutate(id)}
                    onDelete={(id) => deleteCommentMutation.mutate(id)}
                    showBan
                  />
                )}
                {commentView === 'banned' && (
                  <CommentsColumn
                    title="مسدود شده"
                    colorClass="border-rose-200"
                    tintClass="bg-rose-50/60"
                    emptyText="نظری مسدود نشده است"
                    isLoading={bannedLoading}
                    comments={bannedComments}
                    onApprove={(id) => approveCommentMutation.mutate(id)}
                    onBan={undefined}
                    onDelete={(id) => deleteCommentMutation.mutate(id)}
                    showApprove
                  />
                )}
              </div>
            </div>
            {/* Desktop 3-column layout */}
            <div className="hidden lg:grid grid-cols-3 gap-6">
              <CommentsColumn
                title="در انتظار تایید"
                colorClass="border-amber-200"
                tintClass="bg-amber-50/60"
                emptyText="نظری برای تایید وجود ندارد"
                isLoading={pendingLoading}
                comments={pendingComments}
                onApprove={(id) => approveCommentMutation.mutate(id)}
                onBan={(id) => banCommentMutation.mutate(id)}
                onDelete={(id) => deleteCommentMutation.mutate(id)}
                showApprove
                showBan
              />
              <CommentsColumn
                title="تایید شده"
                colorClass="border-emerald-200"
                tintClass="bg-emerald-50/60"
                emptyText="نظری تایید نشده است"
                isLoading={approvedLoading}
                comments={approvedComments}
                onApprove={undefined}
                onBan={(id) => banCommentMutation.mutate(id)}
                onDelete={(id) => deleteCommentMutation.mutate(id)}
                showBan
              />
              <CommentsColumn
                title="مسدود شده"
                colorClass="border-rose-200"
                tintClass="bg-rose-50/60"
                emptyText="نظری مسدود نشده است"
                isLoading={bannedLoading}
                comments={bannedComments}
                onApprove={(id) => approveCommentMutation.mutate(id)}
                onBan={undefined}
                onDelete={(id) => deleteCommentMutation.mutate(id)}
                showApprove
              />
            </div>
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

function CommentsColumn({
  title,
  colorClass,
  emptyText,
  isLoading,
  comments,
  onApprove,
  onBan,
  onDelete,
  showApprove,
  showBan,
  tintClass
}: {
  title: string;
  colorClass: string;
  emptyText: string;
  isLoading: boolean;
  comments: AppComment[];
  onApprove?: (id: number) => void;
  onBan?: (id: number) => void;
  onDelete: (id: number) => void;
  showApprove?: boolean;
  showBan?: boolean;
  tintClass?: string;
}) {
  return (
    <div className={`rounded-2xl shadow-sm border ${colorClass} ${tintClass || 'bg-white'} p-4`}>
      <h3 className="text-base font-semibold text-neutral-900 mb-3">{title}</h3>
      {isLoading ? (
        <div className="flex items-center gap-2 text-gray-600">
          <Loader2 className="w-5 h-5 animate-spin" />
          در حال بارگذاری...
        </div>
      ) : comments.length === 0 ? (
        <div className="flex items-start gap-2 text-neutral-600">
          <Inbox className="w-4 h-4 mt-0.5" aria-hidden="true" />
          <span className="text-sm">{emptyText}</span>
        </div>
      ) : (
        <div className="space-y-3">
          {comments.map((c) => (
            <div key={c.id} className="border border-neutral-200 bg-white rounded-xl p-3" dir="rtl">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-neutral-800 font-medium">{c.firstName} {c.lastName}</div>
                <div className="flex items-center gap-2">
                  {showApprove && (
                    <button
                      onClick={() => onApprove && onApprove(c.id)}
                      className="h-8 px-2 text-xs rounded border border-emerald-300 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                    >
                      تایید
                    </button>
                  )}
                  {showBan && (
                    <button
                      onClick={() => onBan && onBan(c.id)}
                      className="h-8 px-2 text-xs rounded border border-amber-300 bg-amber-50 text-amber-800 hover:bg-amber-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                    >
                      مسدود
                    </button>
                  )}
                  <button
                    onClick={() => onDelete(c.id)}
                    className="h-8 px-2 text-xs rounded border border-rose-300 bg-rose-50 text-rose-700 hover:bg-rose-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
                  >
                    حذف
                  </button>
                </div>
              </div>
              <div className="text-neutral-800 whitespace-pre-line text-sm">{c.content}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}