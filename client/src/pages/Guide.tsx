import Reveal from "@/components/Reveal";

export default function Guide() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-24">
        {/* Background (no external image; keep gradient overlay only) */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-teal-800/80"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-8 bg-gray-900/80 rounded-2xl backdrop-blur-sm border border-gray-700/50">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-serif" data-testid="page-title">
              راه بلد دانا
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              «مردی با ذهنی جغرافیا‌محور که سفر را راهی برای شناخت اقلیم، تاریخ، فرهنگ و خلق‌وخوی مردمان می‌دید»
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animated-grid-bg rounded-2xl">
        
        {/* Block 1 + Image 1 */}
        <Reveal>
        <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <div className="flex flex-col gap-8 items-start">
            <div className="w-full space-y-4">
              <p className="text-lg leading-relaxed text-gray-700 text-right font-medium">
                مسعود در طول زندگی، به جای جای ایران سفر کرد ،دوستانش می‌گویند به‌سختی می‌توان جایی در ایران نام برد که او درباره‌اش جزئیاتی نداند. مسعود  برای بسیاری از همراهانش نه فقط یک هم‌سفر، که «دانشنامه‌ای زنده» از ایران بود؛ مردی با ذهنی جغرافیا‌محور که سفر را راهی برای شناخت اقلیم، تاریخ، فرهنگ و خلق‌وخوی مردمان می‌دید. در حلقه دوستان، بسیاری از دانسته‌هایشان درباره روستا ها، بخش ها، طبیعت و ریزه‌کاری‌های اقلیمی هر ناحیه را وامدار او بودند. او جغرافیا،تاریخ و سیاست را با هم پیوند می‌زد.
              </p>
            </div>
            {/* محل قرار گرفتن عکس شماره 1 */}
            <div className="w-full">
              <div className="relative group arena-image-wrapper">
                <img src="/tabs/guide/1.jpg" alt="عکس شماره 1" className="w-full rounded-xl shadow-lg transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
        </Reveal>

        {/* Block 2 + Image 2 */}
        <Reveal delayMs={80}>
        <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-gray-700 text-right">
              در سفرها، آنچه را می‌دید با دقتی کم‌نظیر ثبتِ ذهن می‌کرد: رفتار مردم، بافت اجتماعی، الگوی معیشت، و نسبت انسان با مکان. نگاه ژرف و بی‌اغراقش چنان در جزئیات فرو می‌رفت که همسفران را ترغیب می‌کرد دوباره به همان نقطه بازگردند و «با چشم مسعود» دوباره ببینند. مسعود عاشق خواندن سفرنامه‌ها بود؛ مطالعه منابع تاریخی و پژوهشی برایش نوعی «پیش‌سفر» بود که با مشاهده میدانی گره می‌خورد و «نقشه ذهنی» و شناختش را نسبت به مام میهن کامل می کرد. این نگاه منسجم تا واپسین روزهای زندگی‌اش پایدار ماند که در حال مطالعه کتاب دو جلدی دکتر توکلی در نقد سفرنامه ﻧﺎﺻر ﺧﺳرو بودند.
            </p>
            {/* محل قرار گرفتن عکس شماره 2 */}
            <div className="w-full">
              <div className="relative group arena-image-wrapper">
                <img src="/tabs/guide/2.jpg" alt="عکس شماره 2" className="w-full rounded-xl shadow-lg transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
        </Reveal>

        {/* Block 3 + Image 3 */}
        <Reveal delayMs={120}>
        <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700 text-right">
              تابستان‌ها تقریباً هیچ‌گاه در سوق نمی‌مانْد. دامنه سفرهای مسعود وسیع و کم‌نظیر بود. از خوزستان و لرستان و کرمانشاه تا کردستان و اردبیل و آذربایجان‌ها، از غرب ایران تا شمال‌غرب، ونیز شهرها و روستاهای مرکز و غرب کشور را بارها پیمود.  کل ایران ،به جز بخشی از سیستان و بلوچستان، را موشکافانه سفر کرده بود و شناخت کامل داشت. آنچه را ندیده بود با مطالعه و تحقیق جبران می‌کرد و آنچه را دیده بود، کارشناسانه و دقیق مورد توجه قرار می‌داد.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 text-right">
              از دهه پنجاه همیشه دوربین عکاسی همراهش بود . با این همه، حافظه‌اش از هر دوربینی نیرومندتر بود هیچ‌جا را سرسری نمی‌دید، برای هر مقصد فهرست آثار تاریخی و طبیعی می‌ساخت، با مردم محلی گفت‌وگو می‌کرد و زمان‌بندی بازدیدها را چنان می‌چید که  هر مکان در بهترین زمان دیده شود.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 text-right">
              در دهه‌های ۶۰ و ۷۰ شمسی، بدون ‌اینترنت و بدون ‌نقشهٔ دیجیتال، با نقشه‌های کاغذی و شبکهٔ آشنایان برنامه می‌چید و زمان‌بندی حرکت، توقف‌های کلیدی و حتی تدارکات را خودش تنظیم می‌کرد. به شهر ناشناخته ای که می‌رسید، با شوخ‌طبعی سرِ صحبت را با بومیان آنجا باز می‌کرد و اطلاعات دقیق می‌گرفت. همسفران مسعود می‌گویند مسعود راهبر سفر ها بود و مسیر را به کلاسِ سیّارِ جغرافیا بدل می‌کرد با لحنی شیرین و جذاب  مسیر با او کوتاه و دلنشین می‌ شد.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 text-right">
              در جمع دوستان، نقش او فراتر از همسفر بود. برنامه‌ریزِ سفر، راهنمای مسیر و مرجع مشورت بود. مدیریتی قاطع و مهربان داشت و اگر اختلاف سلیقه ای پیش می‌آمد با رفتار سنجیده او حل می‌شد. مسئولیت مالی سفرها را اغلب خود بر عهده می‌گرفت؛ هم صرفه‌جو بود و هم خوش‌سفر. به جای هتل، اقامتگاههای بومگردی را ترجیح می‌داد.
            </p>
            {/* محل قرار گرفتن عکس شماره 3 */}
            <div className="w-full">
              <div className="relative group arena-image-wrapper">
                <img src="/tabs/guide/3.jpg" alt="عکس شماره 3" className="w-full rounded-xl shadow-lg transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
        </Reveal>

        {/* Block 4 (closing) */}
        <Reveal delayMs={160}>
        <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700 text-right">
              برای کسانی که هرگز همسفر مسعود نبودند، او روایتگری چیره‌دست از سفر بود؛ شنیدن حکایت‌هایش چون ورق‌زدنِ سفرنامه‌ای ناطق، مسیر را گام‌به‌گام پیش می‌برد و از پیچ‌وخم جاده‌ها و نام کوه‌ها و رودها تا حال‌وهوای بازارها و لهجهٔ مردم را چنان زنده بازمی‌گفت که شنونده خود را در دلِ سفر می‌یافت.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 text-right">
              دانش ژرف جغرافیایی و فرهنگیِ مسعود در ذهنش تصویری چند لایه از ایران می‌ساخت؛ روشی که در آن مطالعه، مشاهده، گفت‌وگو و ثبت به‌هم گره می خورد، هر سفر را به تجربه‌ای یادگیرانه بدل می‌کرد؛ و روحیهٔ انسانی و معاشرتی‌اش از هر مسیر فرصتی برای ساختن شبکه‌ای از دوستی‌ها و انتقال دانسته‌ها فراهم می‌آورد.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 text-right">
              برای نسلِ همراهانش، او کسی بود که سفر را از «دیدنِ راه» به «راهِ دیدن» تبدیل کرد و دانستن را به سلوکی پیوسته در شهرها، روستاها، کوه‌ها و دشت‌های ایران رساند؛ مردی که جغرافیا را با انسان پیوند زد و نقشه‌ای انسانی از این سرزمین به‌جا گذاشت، نقشه‌ای که در آن هر رود و هر کوه درسی برای فهمیدن است.
            </p>
          </div>
        </div>
        </Reveal>

        {/* Legacy: removed separate dark card to keep exact text flow */}

      </div>
    </main>
  );
}
