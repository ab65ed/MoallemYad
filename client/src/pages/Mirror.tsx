import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Heart, Loader2, BookOpen, X } from "lucide-react";
import { useTestimonials, useCommentsForTestimonial, useSubmitComment } from '@/hooks/useApi';
import type { Testimonial } from '@shared/schema';

export default function Mirror() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // API hook
  const { data: testimonials = [], isLoading, error } = useTestimonials();

  // فیلتر کردن دل‌نوشته‌ها بر اساس دسته
  const filteredTestimonials = testimonials.filter(testimonial => 
    selectedCategory === 'all' || testimonial.category === selectedCategory
  );

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && filteredTestimonials.length > 0) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
      }, 4000); // تغییر هر 4 ثانیه
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, filteredTestimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // شروع مجدد بعد از 10 ثانیه
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const openTestimonialModal = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsAutoPlaying(false);
  };

  const closeTestimonialModal = () => {
    setSelectedTestimonial(null);
    setIsAutoPlaying(true);
  };

  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const categories = {
    all: 'همه دل‌نوشته‌ها',
    student: 'جامعه هنری',
    colleague: 'روزنامه ها و جراید',
    friend: 'اهالی ورزش',
    family: 'دوستان و آشنایان',
    intellectuals: 'فرهیختگان و معلمین'
  };

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="flex items-center gap-3">
          <Loader2 className="w-8 h-8 animate-spin text-[#00a693]" />
          <span className="text-gray-600 text-lg">در حال بارگذاری دل‌نوشته‌ها...</span>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
            <h3 className="text-red-800 font-medium mb-2">خطا در بارگذاری</h3>
            <p className="text-red-600">امکان دریافت دل‌نوشته‌ها وجود ندارد</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-12 h-12 text-[#00a693] ml-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              آینه دیگران
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
یادداشت‌های دوستداران مسعود محمدی در اینجا آورده شده است؛ شما نیز می‌توانید روایت خود را به این آینه بیفزایید.          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.entries(categories).map(([key, value]) => (
            <button
              key={key}
              onClick={() => {
                setSelectedCategory(key);
                setCurrentIndex(0);
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === key
                  ? 'bg-gradient-to-r from-[#00a693] to-[#eeaa22] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
              }`}
            >
              {value}
            </button>
          ))}
        </div>

        {filteredTestimonials.length === 0 ? (
          <div className="text-center py-20">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-medium text-gray-500 mb-2">
              {selectedCategory === 'all' ? 'هنوز دل‌نوشته‌ای ثبت نشده' : 'دل‌نوشته‌ای در این دسته یافت نشد'}
            </h3>
            <p className="text-gray-400">
              {selectedCategory === 'all' ? 'به زودی دل‌نوشته‌های جدید اضافه خواهد شد' : 'لطفاً دسته دیگری را انتخاب کنید'}
            </p>
          </div>
        ) : (
          <div className="relative z-[70]">
            {/* Simple Carousel - Show Current Item Only */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="max-w-4xl mx-auto text-right" dir="rtl">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#00a693] to-[#eeaa22] rounded-full flex items-center justify-center mx-auto">
                      <span className="text-2xl text-white font-bold">"</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                    {filteredTestimonials[currentIndex]?.title}
                  </h2>

                  {/* Truncated Content */}
                  <div className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto text-right" dir="rtl">
                    <p className="mb-4">
                      {truncateText(filteredTestimonials[currentIndex]?.content || '')}
                    </p>
                    
                    {/* Read More Button */}
                    {(filteredTestimonials[currentIndex]?.content?.length || 0) > 150 && (
                      <button
                        onClick={() => openTestimonialModal(filteredTestimonials[currentIndex])}
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#00a693] to-[#eeaa22] text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                      >
                        <BookOpen className="w-4 h-4 ml-2" />
                        ادامه مطلب
                      </button>
                    )}
                  </div>

                  {/* Author Info */}
                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-600">
                      <div className="text-center md:text-right">
                        <h3 className="font-bold text-lg text-gray-800">
                          {filteredTestimonials[currentIndex]?.author}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {filteredTestimonials[currentIndex]?.role}
                        </p>
                      </div>
                      <div className="hidden md:block w-px h-10 bg-gray-300"></div>
                      <div className="text-center md:text-left">
                        <p className="text-sm text-gray-500">
                          {filteredTestimonials[currentIndex]?.date}
                        </p>
                        <p className="text-sm text-[#00a693] font-medium">
                          {categories[filteredTestimonials[currentIndex]?.category as keyof typeof categories]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            {filteredTestimonials.length > 1 && (
              <>
                <button
                  onClick={prevTestimonial}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 group"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-[#00a693]" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 group"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-[#00a693]" />
                </button>
              </>
            )}

            {/* Dots Navigation */}
            {filteredTestimonials.length > 1 && (
              <div className="flex justify-center mt-8 gap-2">
                {filteredTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-gradient-to-r from-[#00a693] to-[#eeaa22] scale-125'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Auto-play Indicator */}
            {isAutoPlaying && filteredTestimonials.length > 1 && (
              <div className="absolute top-4 left-4 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white text-xs">خودکار</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Full Testimonial Modal */}
      {selectedTestimonial && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[1000] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl max-h-[90vh] overflow-y-auto w-full">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">
                {selectedTestimonial.title}
              </h2>
              <button
                onClick={closeTestimonialModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            
            <div className="p-8" dir="rtl">
              {/* Quote Icon */}
              <div className="mb-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#00a693] to-[#eeaa22] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl text-white font-bold">"</span>
                </div>
              </div>

              {/* Full Content */}
              <div className="text-lg text-gray-700 leading-relaxed mb-8 text-right max-w-3xl mx-auto">
                <p className="whitespace-pre-line">
                  {selectedTestimonial.content}
                </p>
              </div>

              {/* Author Info */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-600">
                  <div className="text-center">
                    <h3 className="font-bold text-xl text-gray-800 mb-1">
                      {selectedTestimonial.author}
                    </h3>
                    <p className="text-gray-600">
                      {selectedTestimonial.role}
                    </p>
                  </div>
                  <div className="hidden md:block w-px h-16 bg-gray-300"></div>
                  <div className="text-center">
                    <p className="text-gray-500 mb-1">
                      {selectedTestimonial.date}
                    </p>
                    <p className="text-[#00a693] font-medium">
                      {categories[selectedTestimonial.category as keyof typeof categories]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <CommentsSection testimonialId={selectedTestimonial.id} />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function CommentsSection({ testimonialId }: { testimonialId: number }) {
  const { data: comments = [], isLoading } = useCommentsForTestimonial(testimonialId);
  const submitMutation = useSubmitComment();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const nameRegex = /^[\u0600-\u06FF\s]{2,30}$/;
  const contentRegex = /^[\u0600-\u06FF\s\.,!؟،؛:\-\(\)\n]{5,600}$/;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    if (!nameRegex.test(firstName)) {
      setError("نام باید فارسی و بین ۲ تا ۳۰ کاراکتر باشد");
      return;
    }
    if (!nameRegex.test(lastName)) {
      setError("نام خانوادگی باید فارسی و بین ۲ تا ۳۰ کاراکتر باشد");
      return;
    }
    if (!contentRegex.test(content)) {
      setError("متن کامنت باید فارسی و بین ۵ تا ۶۰۰ کاراکتر باشد");
      return;
    }
    try {
      const result = await submitMutation.mutateAsync({ testimonialId, firstName, lastName, content });
      if (result.status === 'pending') {
        setSuccess("کامنت شما ثبت شد و پس از تایید نمایش داده می‌شود.");
      } else if (result.status === 'banned') {
        setSuccess("کامنت شما شامل کلمات نامناسب بود و تأیید نشد.");
      } else {
        setSuccess("کامنت ثبت شد.");
      }
      setFirstName("");
      setLastName("");
      setContent("");
    } catch (err: any) {
      setError(err?.message || 'خطا در ارسال کامنت');
    }
  };

  return (
    <div className="mt-10" dir="rtl">
      <h3 className="text-xl font-bold text-gray-800 mb-4">نظرات</h3>
      <div className="space-y-4 mb-8">
        {isLoading ? (
          <div className="text-gray-500">در حال بارگذاری نظرات...</div>
        ) : comments.length === 0 ? (
          <div className="text-gray-500">نظری ثبت نشده است.</div>
        ) : (
          comments.map((c) => (
            <div key={c.id} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <div className="text-sm text-gray-600 mb-2">{c.firstName} {c.lastName}</div>
              <div className="text-gray-800 whitespace-pre-line">{c.content}</div>
            </div>
          ))
        )}
      </div>

      <h4 className="text-lg font-semibold text-gray-800 mb-3">ثبت نظر</h4>
      <form onSubmit={onSubmit} className="space-y-4">
        {error && <div className="text-red-600 text-sm">{error}</div>}
        {success && <div className="text-green-600 text-sm">{success}</div>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="نام"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00a693] text-right"
            dir="rtl"
            required
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="نام خانوادگی"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00a693] text-right"
            dir="rtl"
            required
          />
        </div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="متن نظر شما..."
          className="w-full border border-gray-300 rounded-xl px-4 py-3 h-28 focus:outline-none focus:ring-2 focus:ring-[#00a693] text-right"
          dir="rtl"
          required
        />
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={submitMutation.isPending}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#00a693] to-[#eeaa22] text-white font-medium disabled:opacity-60"
          >
            {submitMutation.isPending ? 'در حال ارسال...' : 'ارسال نظر'}
          </button>
        </div>
      </form>
    </div>
  );
}