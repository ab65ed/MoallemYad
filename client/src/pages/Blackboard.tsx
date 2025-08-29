import Reveal from "@/components/Reveal";

export default function Blackboard() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-16 md:py-24">
        {/* Background Banner */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/banners/1.png')"
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-8 bg-gray-900/85 rounded-2xl backdrop-blur-sm border border-gray-700/50 shadow-2xl ring-1 ring-white/10">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-yekan" data-testid="page-title">
              تخته سیاه
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              «تخته سیاه، تا دنیا پابرجاست، پاک نخواهد شد»
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animated-grid-bg rounded-2xl farsi-justify">

        {/* Opening Section */}
        <Reveal>
        <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-2/3">
              <p className="text-lg leading-relaxed text-gray-700 text-right font-medium mb-6">
                مسعود محمدی در ششم اسفند ۱۳۳۳ در شهر سوق از توابع کهگیلویه چشم به جهان گشود و تحصیلات خود را از دبستان محمدی سوق آغاز کرد. دوره‌ راهنمایی را نیز در همان شهر گذراند. از همان آغاز مشخص بود نگاهش با دیگر کودکان متفاوت است. <span className="inline-quote">یکی از همبازی‌های آن سال‌ها</span> می‌گوید که چند کودک هم‌سن و هم‌بازی بودیم، اما مسعود همیشه سرگروه ما بود؛ قوانین بازی را خودش می‌ساخت، ساعت‌ها با اشتیاق بازی می‌کردیم و خسته نمی‌شدیم، از رویاهایش برایمان می‌گفت؛ رؤیاهایی که بعدها یکی‌یکی به واقعیت پیوستند.
              </p>
            </div>
            <div className="lg:w-1/3">
              <div className="relative group arena-image-wrapper">
                <img 
                  src="/tabs/blackboard/1.jpg" 
                  alt="کودکی مسعود"
                  className="w-full rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
        </Reveal>

        {/* High school and punishment */}
        <Reveal delayMs={80}>
        <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-2/3 space-y-6">
              <p className="text-lg leading-relaxed text-gray-700 text-right">
                برای دبیرستان یک سال به دهدشت رفت و سپس رهسپار دبیرستان سلطانی بهبهان شد.
              </p>
              <p className="pull-quote text-gray-800 text-right leading-relaxed">
                مسعود در روزگاری درس می‌خواند که تنبیه بدنی بخش جدایی ناپذیر مدارس آن روزگار بود؛ تجربه‌ای تلخ که باعث شد در نوجوانی هیچ دل‌ بستگی‌ای به معلمی نداشته باشد،اما سرنوشت برایش جوری دیگر رقم خورد.
              </p>
            </div>
            <div className="lg:w-1/3">
              <div className="relative group arena-image-wrapper">
                <img 
                  src="/tabs/blackboard/2.jpg" 
                  alt="دوران دبیرستان"
                  className="w-full rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
        </Reveal>

        {/* Entrance exam and Shiraz years */}
        <Reveal delayMs={120}>
        <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-2/3 space-y-6">
              <p className="text-lg leading-relaxed text-gray-700 text-right">
                در آزمون ورودی دانشسرای عشایری که در گچساران برگزار ‌شد، با اصرار خانواده شرکت کرد و به گفته‌ خودش «<span className="inline-quote">متاسفانه قبول شدم!</span>» سال ۱۳۵۰ در 
              </p>
              <p className="text-lg leading-relaxed text-gray-700 text-right">
                شانزده‌سالگی راهی شیراز شد و در دانشسرای عشایری که موسس آن استاد محمد بهمن‌بیگی بود نام‌نویسی کرد. در روزهای نخست که در مسافرخانه پارس در خیابان لطفعلی خان زند اقامت داشت بیش از آنکه دل‌مشغول معلم‌شدن باشد، شیفته جنب‌وجوش و گشت و گذار در شهر  بود، اما با دیدن بهمن‌بیگی، ورق برگشت و شوق معلمی در جانش شعله ور شد.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 text-right">
                از کتاب‌هایی درسی که در دانشسرا معرفی شد به «شلوارهای وصله‌دار» دکتر رسول پرویزی و «یکی بود یکی نبود» جمال‌زاده اشاره می‌کرد و می‌گفت همان هفته‌های نخست با ولع آن‌ها را به پایان رسانده، اما این «روش نوین تعلیم و تربیت» دکتر عیسی صدیق بود که نگاه او را به آموزش دگرگون کرد؛ طوری که نسخه‌ای از آن کتاب را با یادداشت‌های حاشیه‌ای‌اش برای همیشه نزد خود نگه می داشت.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 text-right">
                مسعود می‌گفت دانشسرا فقط جایی برای درس و کتاب نبود، بلکه کانونی از فرهنگ و هنر به شمار می‌رفت؛ از بلوچ و بختیاری و لر و کرمانی گرفته تا کهگیلویه و شاهسون، جوانان با میراث فرهنگی خود آمده بودند. چهارشنبه‌ها هرکس با لباس محلی و با ساز  "رضاقلی" شور می‌آفرید و کارناوالی از سنت و زندگی برپا می‌شد؛ چنان که حتی گردشگران داخلی و خارجی برای دیدن این شور به دانشسرا می آمدند. همین فضا نقطه عطفی شد برای بروز بیشتر ذوق و استعداد هنری مسعود؛ به‌گونه‌ای که گروه تئاتر دانشسرا به سرپرستی او زیر نگاه تیزبین استاد رحیم هودی، مسیرش به سالن‌های شهر باز شد و زمینه همکاری‌ نزدیک‌تر مسعود با بزرگان فرهنگ و هنر فراهم شد.
              </p>
            </div>
            <div className="lg:w-1/3">
              <div className="relative group arena-image-wrapper">
                <img 
                  src="/tabs/blackboard/3.jpg" 
                  alt="دانشسرا و سال‌های شیراز"
                  className="w-full rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
        </Reveal>

        {/* Early career and philosophy */}
        <Reveal delayMs={160}>
        <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-2/3 space-y-6">
              <p className="pull-quote text-right leading-relaxed">
                یکی از هم‌دوره‌ای‌های ایشان روایت می‌کند که ورودی آن دوره حدود ۳۷۰ نفر بودیم، هنوز یک ماه نگذشته بود که مسعود خودش را نشان داد؛ در هر برنامه‌ فرهنگی، نمایشی یا هنری جز بهترین ها بود و خیلی زود در مرکز فارس زبانزد عام و خاص شد و به افتخار همه‌ ما بدل گشت.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 text-right">
                پس از موفقیت در به اتمام رساندن دوره دانشسرا، سه ماه به سربازی در جلدیان بین اشنویه و پیرانشهر  رفت که به گفته خودش یکی از بهترین تابستانهای عمرش بود. در سال 1351 به کهگیلویه برگشت و در دبستان محمدی سوق معلم شد. چون سنش برای استخدام کم بود، شش ماه بدون حقوق تدریس کرد تا به سن قانونی استخدام برسد.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 text-right">
                مسعود با ذهنی پویا که حالا به عشق خواندن، نگاه تازه به آموزش، و آشنایی با روش‌های نوین تدریس همراه شده بود، به زادگاهش بازگشت... او آمده بود که نشان دهد مدرسه فقط جایی برای «درس دادن» نیست، بلکه می‌تواند کارگاهی برای «زندگی ساختن» باشد. در یازدهم فروردین ۱۳۵۷ با فریبا اسفندیاری، معلمی فرهیخته از ایل هفت‌لنگ بختیاری که به ‌واسطه‌ خدمت در آموزش‌وپرورش از گچساران به سوق آمده بود، ازدواج کرد. ثمره این همراهی، دختری است هنرمند و شایسته که راه خود را در عرصه‌ هنر و گرافیک دنبال کرده است.
              </p>
            </div>
            <div className="lg:w-1/3">
              <div className="relative group arena-image-wrapper">
                <img 
                  src="/tabs/blackboard/4.jpg" 
                  alt="بازگشت به زادگاه و آغاز تدریس"
                  className="w-full rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
        </Reveal>

        {/* Classroom legends and geography method */}
        <Reveal delayMs={200}>
        <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-2/3 space-y-6">
              <p className="pull-quote text-right leading-relaxed">
                یکی از شاگردانش باور دارد که همین روحیه هنری و ذوق ادبی بود که از او معلمی بی‌همتا ساخت؛ مسعود تنها آموزگار نبود، بلکه روح آموزش بود و جان‌بخش دانایی. شعر حماسی «آرش کمانگیر» را با چنان صدای نافذ و اجرای خیال‌انگیز در کلاس درس می داد که گویی نمایشنامه‌ای روی صحنه می‌رود... 
              </p>
              <p className="text-lg leading-relaxed text-gray-700 text-right">
                مسعود جغرافیا را به نمایش بدل می‌کرد؛ تدریس برای او روی نقشه‌های کاغذی نمی‌گذشت، بلکه در صحنه‌ای زنده میان شاگردانش. به هر دانش‌آموز نقشی می‌داد: یکی می‌شد کرمان، دیگری فارس، آن یکی کردستان و دیگری ایران... شاگردانش هنوز با لبخند و اشتیاق، صدای همکلاسی آن روز را به یاد می‌آورند که در کلاس مسعود می‌گفت: «من استان مازندرانم، دارای شهرهای آمل، بابل، شاهی، گرگان...»؛ صدایی که همچنان در گوش جانشان زنده است و خاموش نمی‌شود.
              </p>
            </div>
            <div className="lg:w-1/3">
              <div className="relative group arena-image-wrapper">
                <img 
                  src="/tabs/blackboard/5.jpg" 
                  alt="کلاس و روش جغرافیا"
                  className="w-full rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
        </Reveal>

        {/* Sports, life and legacy */}
        <Reveal delayMs={240}>
        <div className="bg-gradient-to-br from-slate-800 to-gray-900 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-8 text-amber-400">
            ورزش، زندگی و میراث
          </h2>
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-right">
              زنگ ورزش که فرا می‌رسید، توپ فوتبال میان دویدن‌ها و قهقهه‌ها می‌چرخید و تعادلی زیبا میان تن و ذهن می‌آفرید... همکاران مسعود نقل می کنند بارها پست های مدیریتی به او پیشنهاد می شد، اما او باور داشت: «از پشت میز نمی‌شود قلب بچه‌ها را لمس کرد.» و هرگز چشم از کلاس برنداشت. مسعود محمدی سی سال تمام خدمت کرد و تا سال ۱۳۸۰ در کلاس درس ماند و بازنشسته شد.
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <p className="text-lg leading-relaxed text-center mb-6">
                سرانجام، روزی در سکوت، از میان ما رفت؛ اما همه می‌دانیم مسعود نمی‌میرد فقط تخته سیاهش را از کلاس کوچک مدرسه به صفحه‌ای در پهنای قلب همه شاگردانش منتقل کرد؛
              </p>
              <p className="text-2xl font-bold text-center text-amber-400">
                و آن تخته سیاه، تا دنیا پابرجاست، پاک نخواهد شد.
              </p>
            </div>
          </div>
        </div>
        </Reveal>

      </div>
    </main>
  );
}
