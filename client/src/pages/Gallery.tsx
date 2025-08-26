import { useState } from 'react';
import { X, ZoomIn, Filter, Grid, List, Camera, Heart, Calendar, Palette, Map, Video, Play, Image as ImageIcon, Loader2 } from 'lucide-react';
import { useGalleryItems } from '@/hooks/useApi';
import type { GalleryItem } from '@shared/schema';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMediaType, setSelectedMediaType] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');

  // API hook
  const { data: galleryItems = [], isLoading, error } = useGalleryItems();

  // فیلتر کردن آیتم‌ها بر اساس دسته و نوع رسانه
  const filteredItems = galleryItems.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const typeMatch = selectedMediaType === 'all' || item.type === selectedMediaType;
    return categoryMatch && typeMatch;
  });

  const openModal = (item: GalleryItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  // آمار محتوا
  const stats = {
    total: galleryItems.length,
    images: galleryItems.filter(item => item.type === 'image').length,
    videos: galleryItems.filter(item => item.type === 'video').length
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00a693]/10 to-[#eeaa22]/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center gap-2 ml-3">
                <Camera className="w-8 h-8 text-[#00a693]" />
                <Video className="w-8 h-8 text-[#eeaa22]" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-serif" data-testid="page-title">
                گالری رسانه
              </h1>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00a693] to-[#eeaa22] rounded-full mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
              مجموعه‌ای از تصاویر و ویدیوهای زیبا از زندگی استاد مسعود محمدی
            </p>
            
            {/* آمار محتوا */}
            <div className="flex justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <ImageIcon className="w-4 h-4" />
                <span>{stats.images} تصویر</span>
              </div>
              <div className="flex items-center gap-1">
                <Video className="w-4 h-4" />
                <span>{stats.videos} ویدیو</span>
              </div>
              <div className="flex items-center gap-1">
                <Grid className="w-4 h-4" />
                <span>{stats.total} مجموع</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="w-8 h-8 animate-spin text-[#00a693] ml-3" />
            <span className="text-gray-600">در حال بارگذاری گالری...</span>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <p className="text-red-700">خطا در بارگذاری گالری</p>
          </div>
        )}

        {/* Gallery Content */}
        {!isLoading && !error && (
          <>
            {/* Filter and View Controls */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-6 mb-8">
              <div className="flex flex-col gap-6">
                
                {/* نوع رسانه */}
                <div className="text-center">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">نوع محتوا</h3>
                  <div className="flex justify-center gap-2">
                    {[
                      { key: 'all', name: 'همه', icon: Grid },
                      { key: 'image', name: 'تصاویر', icon: ImageIcon },
                      { key: 'video', name: 'ویدیوها', icon: Video }
                    ].map(({ key, name, icon: Icon }) => (
                      <button
                        key={key}
                        onClick={() => setSelectedMediaType(key)}
                        className={`flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                          selectedMediaType === key
                            ? 'bg-gradient-to-r from-[#00a693] to-[#eeaa22] text-white shadow-lg scale-105'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                        }`}
                      >
                        <Icon className="w-4 h-4 ml-2" />
                        {name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* دسته‌بندی */}
                <div className="text-center">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">دسته‌بندی</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {[
                      { key: 'all', name: 'همه', icon: Grid },
                      { key: 'teaching', name: 'تدریس', icon: Camera },
                      { key: 'personal', name: 'شخصی', icon: Calendar },
                      { key: 'sports', name: 'ورزش', icon: Filter },
                      { key: 'family', name: 'خانوادگی', icon: List },
                      { key: 'artistic', name: 'فعالیت‌های هنری', icon: Palette },
                      { key: 'travel', name: 'سفر و ایرانگردی', icon: Map }
                    ].map(({ key, name, icon: Icon }) => (
                      <button
                        key={key}
                        onClick={() => setSelectedCategory(key)}
                        className={`flex items-center px-3 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                          selectedCategory === key
                            ? 'bg-[#00a693] text-white shadow-md scale-105'
                            : 'bg-[#dfdfdf] text-gray-700 hover:bg-[#aab1b5] hover:text-white hover:scale-105'
                        }`}
                      >
                        <Icon className="w-3 h-3 ml-1" />
                        {name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* View Mode و نتایج */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  {/* View Mode Toggle */}
                  <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-md transition-all duration-200 ${
                        viewMode === 'grid' 
                          ? 'bg-[#00a693] text-white shadow-md' 
                          : 'text-gray-600 hover:bg-gray-200'
                      }`}
                      title="نمایش شبکه‌ای"
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('masonry')}
                      className={`p-2 rounded-md transition-all duration-200 ${
                        viewMode === 'masonry' 
                          ? 'bg-[#00a693] text-white shadow-md' 
                          : 'text-gray-600 hover:bg-gray-200'
                      }`}
                      title="نمایش آجری"
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Results Count */}
                  <div className="text-center text-gray-600">
                    <span className="bg-[#00a693]/10 px-3 py-1 rounded-full text-sm">
                      {filteredItems.length} مورد یافت شد
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery Grid */}
            {filteredItems.length > 0 ? (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                  : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              }`}>
                {filteredItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer hover:scale-105 ${
                      viewMode === 'masonry' && index % 3 === 1 ? 'md:row-span-2' : ''
                    }`}
                    onClick={() => openModal(item)}
                    data-testid={`gallery-item-${index + 1}`}
                  >
                    <div className="relative overflow-hidden">
                      {item.type === 'image' ? (
                        <img
                          src={item.src}
                          alt={item.title}
                          className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                            viewMode === 'grid' ? 'h-64' : 'h-48 md:h-80'
                          }`}
                          loading="lazy"
                        />
                      ) : (
                        <div className="relative">
                          {item.poster ? (
                            <img
                              src={item.poster}
                              alt={item.title}
                              className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                                viewMode === 'grid' ? 'h-64' : 'h-48 md:h-80'
                              }`}
                              loading="lazy"
                            />
                          ) : (
                            <div className={`w-full bg-gradient-to-br from-[#00a693]/20 to-[#eeaa22]/20 flex items-center justify-center ${
                              viewMode === 'grid' ? 'h-64' : 'h-48 md:h-80'
                            }`}>
                              <Video className="w-16 h-16 text-[#00a693]/60" />
                            </div>
                          )}
                          
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                            <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                              <Play className="w-6 h-6 text-[#00a693] mr-1" />
                            </div>
                          </div>

                          {item.duration && (
                            <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
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
                            <ImageIcon className="w-3 h-3" />
                          ) : (
                            <Video className="w-3 h-3" />
                          )}
                        </div>
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                          {item.year && (
                            <p className="text-white/80 text-sm mb-2">{item.year}</p>
                          )}
                          <div className="flex items-center justify-between">
                            <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs">
                              {{
                                teaching: 'تدریس',
                                personal: 'شخصی',
                                sports: 'ورزش',
                                family: 'خانوادگی',
                                artistic: 'فعالیت‌های هنری',
                                travel: 'سفر و ایرانگردی'
                              }[item.category]}
                            </span>
                            {item.type === 'image' ? (
                              <ZoomIn className="w-5 h-5 text-white" />
                            ) : (
                              <Play className="w-5 h-5 text-white" />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="flex justify-center gap-2 mb-4">
                  <Camera className="w-12 h-12 text-gray-400" />
                  <Video className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-medium text-gray-600 mb-2">
                  {selectedMediaType === 'all' && selectedCategory === 'all' 
                    ? 'محتوایی یافت نشد'
                    : 'محتوایی در این فیلتر یافت نشد'
                  }
                </h3>
                <p className="text-gray-500">
                  {selectedMediaType === 'all' && selectedCategory === 'all'
                    ? 'محتوای جدید به زودی اضافه خواهد شد'
                    : 'لطفاً فیلتر دیگری را انتخاب کنید'
                  }
                </p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Media Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full w-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="bg-black rounded-lg overflow-hidden shadow-2xl">
              {selectedItem.type === 'image' ? (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="max-w-full max-h-[70vh] object-contain mx-auto"
                />
              ) : (
                <video
                  src={selectedItem.src}
                  poster={selectedItem.poster || undefined}
                  controls
                  className="max-w-full max-h-[70vh] object-contain mx-auto"
                  autoPlay
                >
                  مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
                </video>
              )}
              
              <div className="bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-white text-2xl font-bold mb-2">{selectedItem.title}</h3>
                    <div className="flex items-center gap-4 mb-2">
                      {selectedItem.year && (
                        <span className="text-white/80 text-lg">{selectedItem.year}</span>
                      )}
                      {selectedItem.duration && (
                        <span className="text-white/80 text-lg">مدت زمان: {selectedItem.duration}</span>
                      )}
                    </div>
                  </div>
                  
                  <div className={`p-2 rounded-full ${
                    selectedItem.type === 'image' 
                      ? 'bg-[#00a693]/90 text-white' 
                      : 'bg-[#eeaa22]/90 text-white'
                  }`}>
                    {selectedItem.type === 'image' ? (
                      <ImageIcon className="w-5 h-5" />
                    ) : (
                      <Video className="w-5 h-5" />
                    )}
                  </div>
                </div>
                
                {selectedItem.description && (
                  <p className="text-white/90 leading-relaxed mb-3">{selectedItem.description}</p>
                )}
                
                <div className="flex items-center justify-between">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                    {{
                      teaching: 'تدریس',
                      personal: 'شخصی',
                      sports: 'ورزش',
                      family: 'خانوادگی',
                      artistic: 'فعالیت‌های هنری',
                      travel: 'سفر و ایرانگردی'
                    }[selectedItem.category]}
                  </span>
                  <span className="text-white/60 text-sm">
                    {selectedItem.type === 'image' ? 'تصویر' : 'ویدیو'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}