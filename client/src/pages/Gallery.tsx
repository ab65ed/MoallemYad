import { useState } from 'react';
import { X, ZoomIn, Filter, Grid, List, Camera, Heart, Calendar } from 'lucide-react';

interface GalleryImage {
  src: string;
  title: string;
  category: 'teaching' | 'personal' | 'sports' | 'students' | 'family';
  year?: string;
  description?: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: '/gallery/1000577624_1756036569847.jpg',
    title: 'عکس شناسنامه جوانی',
    category: 'personal',
    year: '۱۳۵۰',
    description: 'تصویری از دوران جوانی استاد مسعود محمدی'
  },
  {
    src: '/gallery/1000577625_1756036569848.jpg',
    title: 'با دانش‌آموزان در مدرسه',
    category: 'students',
    year: '۱۳۶۰',
    description: 'لحظات شیرین تدریس در کنار شاگردان عزیز'
  },
  {
    src: '/gallery/1000577626_1756036569848.jpg',
    title: 'همراه شاگردان در طبیعت',
    category: 'students',
    year: '۱۳۶۵',
    description: 'کلاس درس در فضای باز و طبیعت زیبا'
  },
  {
    src: '/gallery/1000577623_1756036569848.jpg',
    title: 'پرتره شخصی',
    category: 'personal',
    year: '۱۳۷۰',
    description: 'تصویری از شخصیت مهربان و دوست‌داشتنی استاد'
  },
  {
    src: '/gallery/1000577617_1756036593155.jpg',
    title: 'کلاس درس در هوای آزاد',
    category: 'teaching',
    year: '۱۳۶۲',
    description: 'روش نوآورانه تدریس در محیط طبیعی'
  },
  {
    src: '/gallery/1000577618_1756036593156.jpg',
    title: 'تدریس در طبیعت',
    category: 'teaching',
    year: '۱۳۶۳',
    description: 'آموزش جغرافیا در دل طبیعت'
  },
  {
    src: '/gallery/1000577619_1756036593156.jpg',
    title: 'با دانش‌آموزان در باغ',
    category: 'students',
    year: '۱۳۶۴',
    description: 'لحظات آموزشی در فضای سبز و دلنشین'
  },
  {
    src: '/gallery/1000577620_1756036593156.jpg',
    title: 'نمایش مدرسه',
    category: 'teaching',
    year: '۱۳۶۶',
    description: 'فعالیت‌های هنری و تربیتی مدرسه'
  },
  {
    src: '/gallery/1000577622_1756036593157.jpg',
    title: 'دوستان و همکاران',
    category: 'personal',
    year: '۱۳۶۸',
    description: 'در کنار همکاران و دوستان صمیمی'
  },
  {
    src: '/gallery/1000577614_1756036640776.jpg',
    title: 'تیم فوتبال مدرسه',
    category: 'sports',
    year: '۱۳۶۷',
    description: 'مربیگری تیم فوتبال دانش‌آموزان'
  },
  {
    src: '/gallery/1000577615_1756036640777.jpg',
    title: 'جام قهرمانی',
    category: 'sports',
    year: '۱۳۶۹',
    description: 'لحظه کسب جام قهرمانی با شاگردان'
  },
  {
    src: '/gallery/1000577616_1756036640777.jpg',
    title: 'مسابقات ورزشی',
    category: 'sports',
    year: '۱۳۷۱',
    description: 'حضور در مسابقات ورزشی مدارس'
  },
  {
    src: '/gallery/1000577612_1756036640777.jpg',
    title: 'همراه همکاران ورزشی',
    category: 'sports',
    year: '۱۳۷۲',
    description: 'با سایر مربیان و معلمان ورزش'
  },
  {
    src: '/gallery/1000577613_1756036640778.jpg',
    title: 'اردوی تربیتی',
    category: 'students',
    year: '۱۳۷۳',
    description: 'سفر آموزشی و تربیتی با دانش‌آموزان'
  },
  {
    src: '/gallery/1000577585_1756036684258.jpg',
    title: 'لحظات شاد',
    category: 'personal',
    year: '۱۳۷۴',
    description: 'خوشی و شادی در کنار عزیزان'
  },
  {
    src: '/gallery/1000577595_1756036684258.jpg',
    title: 'عکس یادگاری',
    category: 'family',
    year: '۱۳۷۵',
    description: 'یادگاری خانوادگی در روزهای خوش'
  },
  {
    src: '/gallery/1000577599_1756036684258.jpg',
    title: 'روزهای دانشجویی',
    category: 'personal',
    year: '۱۳۵۲',
    description: 'خاطرات دوران تحصیل در دانشسرا'
  },
  {
    src: '/gallery/1000577600_1756036684259.jpg',
    title: 'همراه دوستان',
    category: 'personal',
    year: '۱۳۷۶',
    description: 'در جمع دوستان و یاران صمیمی'
  },
  {
    src: '/gallery/1000577610_1756036684259.jpg',
    title: 'با اساتید دیگر',
    category: 'teaching',
    year: '۱۳۷۷',
    description: 'در کنار همکاران و اساتید محترم'
  },
  {
    src: '/gallery/1000577611_1756036684259.jpg',
    title: 'در صحنه تئاتر',
    category: 'teaching',
    year: '۱۳۷۸',
    description: 'فعالیت‌های هنری و تئاتر مدرسه'
  },
];

const categories = {
  all: { name: 'همه', icon: Grid },
  teaching: { name: 'تدریس', icon: Camera },
  students: { name: 'شاگردان', icon: Heart },
  personal: { name: 'شخصی', icon: Calendar },
  sports: { name: 'ورزش', icon: Filter },
  family: { name: 'خانوادگی', icon: List }
};

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00a693]/10 to-[#eeaa22]/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50">
            <div className="flex items-center justify-center mb-4">
              <Camera className="w-10 h-10 text-[#00a693] ml-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-serif" data-testid="page-title">
                گالری تصاویر
              </h1>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00a693] to-[#eeaa22] rounded-full mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              مجموعه‌ای از تصاویر و خاطرات زیبا از زندگی استاد مسعود محمدی
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Filter and View Controls */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-6 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {Object.entries(categories).map(([key, category]) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key)}
                    className={`flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      selectedCategory === key
                        ? 'bg-gradient-to-r from-[#00a693] to-[#eeaa22] text-white shadow-lg scale-105'
                        : 'bg-[#dfdfdf] text-gray-700 hover:bg-[#aab1b5] hover:text-white hover:scale-105'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 ml-2" />
                    {category.name}
                  </button>
                );
              })}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'grid' 
                    ? 'bg-[#00a693] text-white shadow-md' 
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('masonry')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'masonry' 
                    ? 'bg-[#00a693] text-white shadow-md' 
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-center text-gray-600">
            <span className="bg-[#00a693]/10 px-3 py-1 rounded-full text-sm">
              {filteredImages.length} تصویر یافت شد
            </span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer hover:scale-105 ${
                viewMode === 'masonry' && index % 3 === 1 ? 'md:row-span-2' : ''
              }`}
              onClick={() => openLightbox(image)}
              data-testid={`gallery-item-${index + 1}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    viewMode === 'grid' ? 'h-64' : 'h-48 md:h-80'
                  }`}
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                    {image.year && (
                      <p className="text-white/80 text-sm mb-2">{image.year}</p>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs">
                        {categories[image.category as keyof typeof categories]?.name}
                      </span>
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-600 mb-2">
              تصویری در این دسته یافت نشد
            </h3>
            <p className="text-gray-500">
              لطفاً دسته دیگری را انتخاب کنید
            </p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <X className="w-8 h-8" />
            </button>
            
            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            
            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
              {selectedImage.year && (
                <p className="text-white/80 text-lg mb-2">{selectedImage.year}</p>
              )}
              {selectedImage.description && (
                <p className="text-white/90 leading-relaxed">{selectedImage.description}</p>
              )}
              <div className="mt-3">
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                  {categories[selectedImage.category as keyof typeof categories]?.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
