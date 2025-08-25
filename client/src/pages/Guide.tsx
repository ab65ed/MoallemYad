export default function Guide() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-24">
        {/* Background Banner */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/gallery/1000577617_1756036593155.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-8 bg-gray-900/80 rounded-2xl backdrop-blur-sm border border-gray-700/50">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-serif" data-testid="page-title">
              دانای راه بلد
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              «مردی با ذهنی جغرافیا‌محور که سفر را راهی برای شناخت اقلیم، تاریخ، فرهنگ و خلق‌وخوی مردمان می‌دید»
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Opening Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-2/3">
              <p className="text-lg leading-relaxed text-gray-700 text-right font-medium mb-6">
                مسعود در طول زندگی، به جای جای ایران سفر کرد، دوستانش می‌گویند به‌سختی می‌توان جایی در ایران نام برد که او درباره‌اش جزئیاتی نداند. مسعود برای بسیاری از همراهانش نه فقط یک هم‌سفر، که «دانشنامه‌ای زنده» از ایران بود؛ مردی با ذهنی جغرافیا‌محور که سفر را راهی برای شناخت اقلیم، تاریخ، فرهنگ و خلق‌وخوی مردمان می‌دید.
              </p>
              <div className="bg-emerald-50 border-r-4 border-emerald-400 p-6 rounded-lg">
                <p className="text-gray-800 text-right leading-relaxed">
                  در حلقه دوستان، بسیاری از دانسته‌هایشان درباره روستا ها، بخش ها، طبیعت و ریزه‌کاری‌های اقلیمی هر ناحیه را وامدار او بودند. او جغرافیا، تاریخ و سیاست را با هم پیوند می‌زد.
                </p>
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="relative group">
                <img 
                  src="/gallery/1000577599_1756036684258.jpg" 
                  alt="مسعود در سفر"
                  className="w-full rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Observation and Recording */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-right mb-8 border-b-2 border-emerald-400 pb-4">
            نگاه ژرف و ثبت دقیق
          </h2>
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-gray-700 text-right">
              در سفرها، آنچه را می‌دید با دقتی کم‌نظیر ثبتِ ذهن می‌کرد: رفتار مردم، بافت اجتماعی، الگوی معیشت، و نسبت انسان با مکان. نگاه ژرف و بی‌اغراقش چنان در جزئیات فرو می‌رفت که همسفران را ترغیب می‌کرد دوباره به همان نقطه بازگردند و «با چشم مسعود» دوباره ببینند.
            </p>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <img 
                  src="/gallery/1000577618_1756036593156.jpg" 
                  alt="مطالعه و تحقیق"
                  className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                />
              </div>
              <div className="md:w-1/2">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                  <p className="text-gray-800 text-right leading-relaxed mb-4">
                    مسعود عاشق خواندن سفرنامه‌ها بود؛ مطالعه منابع تاریخی و پژوهشی برایش نوعی «پیش‌سفر» بود که با مشاهده میدانی گره می‌خورد و «نقشه ذهنی» و شناختش را نسبت به مام میهن کامل می کرد.
                  </p>
                  <p className="text-gray-800 text-right leading-relaxed text-sm italic">
                    این نگاه منسجم تا واپسین روزهای زندگی‌اش پایدار ماند که در حال مطالعه کتاب دو جلدی دکتر توکلی در نقد سفرنامه ﻧﺎﺻر ﺧﺳرو بودند.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Travel Scope */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-right mb-8 border-b-2 border-emerald-400 pb-4">
            دامنه وسیع سفرها
          </h2>
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-gray-700 text-right">
              تابستان‌ها تقریباً هیچ‌گاه در سوق نمی‌مانْد. دامنه سفرهای مسعود وسیع و کم‌نظیر بود. از خوزستان و لرستان و کرمانشاه تا کردستان و اردبیل و آذربایجان‌ها، از غرب ایران تا شمال‌غرب، ونیز شهرها و روستاهای مرکز و غرب کشور را بارها پیمود.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-200">
                  <p className="text-gray-800 text-right leading-relaxed font-medium mb-4">
                    کل ایران، به جز بخشی از سیستان و بلوچستان، را موشکافانه سفر کرده بود و شناخت کامل داشت.
                  </p>
                  <p className="text-gray-700 text-right leading-relaxed text-sm">
                    آنچه را ندیده بود با مطالعه و تحقیق جبران می‌کرد و آنچه را دیده بود، کارشناسانه و دقیق مورد توجه قرار می‌داد.
                  </p>
                </div>
              </div>
              <div>
                <img 
                  src="/gallery/1000577620_1756036593156.jpg" 
                  alt="نقشه ایران"
                  className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Photography and Memory */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-right mb-8 border-b-2 border-emerald-400 pb-4">
            عکاسی و حافظه
          </h2>
          <div className="space-y-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3 space-y-6">
                <p className="text-lg leading-relaxed text-gray-700 text-right">
                  از دهه پنجاه همیشه دوربین عکاسی همراهش بود. با این همه، حافظه‌اش از هر دوربینی نیرومندتر بود هیچ‌جا را سرسری نمی‌دید، برای هر مقصد فهرست آثار تاریخی و طبیعی می‌ساخت، با مردم محلی گفت‌وگو می‌کرد و زمان‌بندی بازدیدها را چنان می‌چید که هر مکان در بهترین زمان دیده شود.
                </p>
                <div className="bg-orange-50 border-r-4 border-orange-400 p-6 rounded-lg">
                  <p className="text-gray-800 text-right leading-relaxed">
                    در دهه‌های ۶۰ و ۷۰ شمسی، بدون ‌اینترنت و بدون ‌نقشهٔ دیجیتال، با نقشه‌های کاغذی و شبکهٔ آشنایان برنامه می‌چید و زمان‌بندی حرکت، توقف‌های کلیدی و حتی تدارکات را خودش تنظیم می‌کرد.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/3">
                <img 
                  src="/gallery/1000577614_1756036640776.jpg" 
                  alt="دوربین عکاسی"
                  className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Travel Leadership */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-right mb-8 border-b-2 border-emerald-400 pb-4">
            رهبری سفر
          </h2>
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-gray-700 text-right">
              به شهر ناشناخته ای که می‌رسید، با شوخ‌طبعی سرِ صحبت را با بومیان آنجا باز می‌کرد و اطلاعات دقیق می‌گرفت. همسفران مسعود می‌گویند مسعود راهبر سفر ها بود و مسیر را به کلاسِ سیّارِ جغرافیا بدل می‌کرد با لحنی شیرین و جذاب مسیر با او کوتاه و دلنشین می‌ شد.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img 
                  src="/gallery/1000577622_1756036593157.jpg" 
                  alt="همسفران در سفر"
                  className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                />
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                  <p className="text-gray-800 text-right leading-relaxed font-medium mb-4">
                    در جمع دوستان، نقش او فراتر از همسفر بود. برنامه‌ریزِ سفر، راهنمای مسیر و مرجع مشورت بود.
                  </p>
                  <p className="text-gray-700 text-right leading-relaxed text-sm">
                    مدیریتی قاطع و مهربان داشت و اگر اختلاف سلیقه ای پیش می‌آمد با رفتار سنجیده او حل می‌شد.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-gray-800 text-right leading-relaxed text-sm">
                    مسئولیت مالی سفرها را اغلب خود بر عهده می‌گرفت؛ هم صرفه‌جو بود و هم خوش‌سفر. به جای هتل، اقامتگاههای بومگردی را ترجیح می‌داد.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Storytelling */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-right mb-8 border-b-2 border-emerald-400 pb-4">
            روایتگری چیره‌دست
          </h2>
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-8 rounded-xl border border-amber-200">
              <p className="text-gray-800 text-right leading-relaxed mb-4 font-medium">
                برای کسانی که هرگز همسفر مسعود نبودند، او روایتگری چیره‌دست از سفر بود؛ شنیدن حکایت‌هایش چون ورق‌زدنِ سفرنامه‌ای ناطق، مسیر را گام‌به‌گام پیش می‌برد و از پیچ‌وخم جاده‌ها و نام کوه‌ها و رودها تا حال‌وهوای بازارها و لهجهٔ مردم را چنان زنده بازمی‌گفت که شنونده خود را در دلِ سفر می‌یافت.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <img 
                  src="/gallery/1000577625_1756036569848.jpg" 
                  alt="جمع دوستان"
                  className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                />
              </div>
              <div className="md:w-1/2 space-y-4">
                <p className="text-gray-700 text-right leading-relaxed">
                  دانش ژرف جغرافیایی و فرهنگیِ مسعود در ذهنش تصویری چند لایه از ایران می‌ساخت؛ روشی که در آن مطالعه، مشاهده، گفت‌وگو و ثبت به‌هم گره می خورد، هر سفر را به تجربه‌ای یادگیرانه بدل می‌کرد.
                </p>
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                  <p className="text-gray-800 text-right leading-relaxed text-sm">
                    روحیهٔ انسانی و معاشرتی‌اش از هر مسیر فرصتی برای ساختن شبکه‌ای از دوستی‌ها و انتقال دانسته‌ها فراهم می‌آورد.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legacy */}
        <div className="bg-gradient-to-br from-slate-800 to-gray-900 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-8 text-emerald-400">
            میراث جغرافیایی
          </h2>
          <div className="space-y-8">
            <p className="text-xl leading-relaxed text-center">
              برای نسلِ همراهانش، او کسی بود که سفر را از «دیدنِ راه» به «راهِ دیدن» تبدیل کرد
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <p className="text-lg leading-relaxed text-center mb-6">
                دانستن را به سلوکی پیوسته در شهرها، روستاها، کوه‌ها و دشت‌های ایران رساند؛ مردی که جغرافیا را با انسان پیوند زد و نقشه‌ای انسانی از این سرزمین به‌جا گذاشت،
              </p>
              <p className="text-2xl font-bold text-center text-emerald-400">
                نقشه‌ای که در آن هر رود و هر کوه درسی برای فهمیدن است.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
