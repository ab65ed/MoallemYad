import { useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    src: '/gallery/1000577624_1756036569847.jpg',
    title: 'عکس شناسنامه جوانی',
  },
  {
    src: '/gallery/1000577625_1756036569848.jpg',
    title: 'با دانش‌آموزان در مدرسه',
  },
  {
    src: '/gallery/1000577626_1756036569848.jpg',
    title: 'همراه شاگردان در طبیعت',
  },
  {
    src: '/gallery/1000577623_1756036569848.jpg',
    title: 'پرتره شخصی',
  },
  {
    src: '/gallery/1000577617_1756036593155.jpg',
    title: 'کلاس درس در هوای آزاد',
  },
  {
    src: '/gallery/1000577618_1756036593156.jpg',
    title: 'تدریس در طبیعت',
  },
  {
    src: '/gallery/1000577619_1756036593156.jpg',
    title: 'با دانش‌آموزان در باغ',
  },
  {
    src: '/gallery/1000577620_1756036593156.jpg',
    title: 'نمایش مدرسه',
  },
  {
    src: '/gallery/1000577622_1756036593157.jpg',
    title: 'دوستان و همکاران',
  },
  {
    src: '/gallery/1000577614_1756036640776.jpg',
    title: 'تیم فوتبال مدرسه',
  },
  {
    src: '/gallery/1000577615_1756036640777.jpg',
    title: 'جام قهرمانی',
  },
  {
    src: '/gallery/1000577616_1756036640777.jpg',
    title: 'مسابقات ورزشی',
  },
  {
    src: '/gallery/1000577612_1756036640777.jpg',
    title: 'همراه همکاران ورزشی',
  },
  {
    src: '/gallery/1000577613_1756036640778.jpg',
    title: 'اردوی تربیتی',
  },
  {
    src: '/gallery/1000577585_1756036684258.jpg',
    title: 'لحظات شاد',
  },
  {
    src: '/gallery/1000577595_1756036684258.jpg',
    title: 'عکس یادگاری',
  },
  {
    src: '/gallery/1000577599_1756036684258.jpg',
    title: 'روزهای دانشجویی',
  },
  {
    src: '/gallery/1000577600_1756036684259.jpg',
    title: 'همراه دوستان',
  },
  {
    src: '/gallery/1000577610_1756036684259.jpg',
    title: 'با اساتید دیگر',
  },
  {
    src: '/gallery/1000577611_1756036684259.jpg',
    title: 'در صحنه تئاتر',
  },
];

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-memorial-blue mb-4" data-testid="page-title">
            گالری
          </h1>
          <div className="w-24 h-1 bg-memorial-gold rounded-full mx-auto mb-8"></div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden" ref={emblaRef} data-testid="gallery-carousel">
              <div className="flex">
                {galleryImages.map((image, index) => (
                  <div key={index} className="flex-none w-full md:w-1/2 lg:w-1/3 px-4">
                    <div 
                      className="relative group bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                      data-testid={`gallery-item-${index + 1}`}
                    >
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-80 object-cover"
                        loading="lazy"
                      />
                      {/* Hover Title */}
                      <div className="absolute inset-x-0 bottom-0 bg-black/60 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-center font-medium" data-testid={`image-title-${index + 1}`}>
                          {image.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={scrollPrev}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-memorial-blue hover:bg-memorial-gold text-white p-2 rounded-full shadow-lg transition-colors duration-200 z-10"
              data-testid="carousel-prev-button"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-memorial-blue hover:bg-memorial-gold text-white p-2 rounded-full shadow-lg transition-colors duration-200 z-10"
              data-testid="carousel-next-button"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
