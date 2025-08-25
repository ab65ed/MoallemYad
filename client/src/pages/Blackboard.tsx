export default function Blackboard() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-24">
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
          <div className="inline-block p-8 bg-gray-900/80 rounded-2xl backdrop-blur-sm border border-gray-700/50">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-serif" data-testid="page-title">
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Opening Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-2/3">
              <p className="text-lg leading-relaxed text-gray-700 text-right font-medium mb-6">
                مسعود محمدی در ششم اسفند ۱۳۳۳ در شهر سوق از توابع کهگیلویه چشم به جهان گشود و تحصیلات خود را از دبستان محمدی سوق آغاز کرد. دوره‌ راهنمایی را نیز در همان شهر گذراند. از همان آغاز مشخص بود نگاهش با دیگر کودکان متفاوت است.
              </p>
              <div className="bg-amber-50 border-r-4 border-amber-400 p-6 rounded-lg">
                <p className="text-gray-800 italic text-right leading-relaxed">
                  یکی از همبازی‌های آن سال‌ها می‌گوید که چند کودک هم‌سن و هم‌بازی بودیم، اما مسعود همیشه سرگروه ما بود؛ قوانین بازی را خودش می‌ساخت، ساعت‌ها با اشتیاق بازی می‌کردیم و خسته نمی‌شدیم، از رویاهایش برایمان می‌گفت؛ رؤیاهایی که بعدها یکی‌یکی به واقعیت پیوستند.
                </p>
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="relative group">
                <img 
                  src="/gallery/1000577624_1756036569847.jpg" 
                  alt="عکس شناسنامه جوانی مسعود محمدی"
                  className="w-full rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Journey */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-right mb-8 border-b-2 border-amber-400 pb-4">
            سفر تحصیل
          </h2>
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-gray-700 text-right">
              برای دبیرستان یک سال به دهدشت رفت و سپس رهسپار دبیرستان سلطانی بهبهان شد. مسعود در روزگاری درس می‌خواند که تنبیه بدنی بخش جدایی ناپذیر مدارس آن روزگار بود؛ تجربه‌ای تلخ که باعث شد در نوجوانی هیچ دل‌ بستگی‌ای به معلمی نداشته باشد، اما سرنوشت برایش جوری دیگر رقم خورد.
            </p>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <img 
                  src="/gallery/1000577599_1756036684258.jpg" 
                  alt="روزهای دانشجویی"
                  className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                />
              </div>
              <div className="md:w-1/2">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                  <p className="text-gray-800 text-right leading-relaxed">
                    در آزمون ورودی دانشسرای عشایری که در گچساران برگزار ‌شد، با اصرار خانواده شرکت کرد و به گفته‌ خودش «متاسفانه قبول شدم!» سال ۱۳۵۰ درشانزده‌سالگی راهی شیراز شد و در دانشسرای عشایری که موسس آن استاد محمد بهمن‌بیگی بود نام‌نویسی کرد.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shiraz Years */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-right mb-8 border-b-2 border-amber-400 pb-4">
            سال‌های شیراز
          </h2>
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-gray-700 text-right">
              در روزهای نخست که در مسافرخانه پارس در خیابان لطفعلی خان زند اقامت داشت بیش از آنکه دل‌مشغول معلم‌شدن باشد، شیفته جنب‌وجوش و گشت و گذار در شهر بود، اما با دیدن بهمن‌بیگی، ورق برگشت و شوق معلمی در جانش شعله ور شد.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-gray-700 text-right leading-relaxed">
                  از کتاب‌هایی درسی که در دانشسرا معرفی شد به «شلوارهای وصله‌دار» دکتر رسول پرویزی و «یکی بود یکی نبود» جمال‌زاده اشاره می‌کرد و می‌گفت همان هفته‌های نخست با ولع آن‌ها را به پایان رسانده، اما این «روش نوین تعلیم و تربیت» دکتر عیسی صدیق بود که نگاه او را به آموزش دگرگون کرد.
                </p>
              </div>
              <div>
                <img 
                  src="/gallery/1000577611_1756036684259.jpg" 
                  alt="در صحنه تئاتر"
                  className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-200">
              <p className="text-gray-800 text-right leading-relaxed mb-4">
                مسعود می‌گفت دانشسرا فقط جایی برای درس و کتاب نبود، بلکه کانونی از فرهنگ و هنر به شمار می‌رفت؛ از بلوچ و بختیاری و لر و کرمانی گرفته تا کهگیلویه و شاهسون، جوانان با میراث فرهنگی خود آمده بودند.
              </p>
              <p className="text-gray-800 text-right leading-relaxed">
                چهارشنبه‌ها هرکس با لباس محلی و با ساز "رضاقلی" شور می‌آفرید و کارناوالی از سنت و زندگی برپا می‌شد؛ چنان که حتی گردشگران داخلی و خارجی برای دیدن این شور به دانشسرا می آمدند.
              </p>
            </div>
          </div>
        </div>

        {/* Teaching Career */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-right mb-8 border-b-2 border-amber-400 pb-4">
            آغاز رسالت
          </h2>
          <div className="space-y-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3 space-y-6">
                <p className="text-lg leading-relaxed text-gray-700 text-right">
                  پس از موفقیت در به اتمام رساندن دوره دانشسرا، سه ماه به سربازی در جلدیان بین اشنویه و پیرانشهر رفت که به گفته خودش یکی از بهترین تابستانهای عمرش بود. در سال 1351 به کهگیلویه برگشت و در دبستان محمدی سوق معلم شد.
                </p>
                <div className="bg-green-50 border-r-4 border-green-400 p-6 rounded-lg">
                  <p className="text-gray-800 text-right leading-relaxed">
                    چون سنش برای استخدام کم بود، شش ماه بدون حقوق تدریس کرد تا به سن قانونی استخدام برسد.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/3">
                <img 
                  src="/gallery/1000577625_1756036569848.jpg" 
                  alt="با دانش‌آموزان در مدرسه"
                  className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Teaching Philosophy */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-right mb-8 border-b-2 border-amber-400 pb-4">
            فلسفه تدریس
          </h2>
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-gray-700 text-right">
              مسعود با ذهنی پویا که حالا به عشق خواندن، نگاه تازه به آموزش، و آشنایی با روش‌های نوین تدریس همراه شده بود، به زادگاهش بازگشت. شوقِ خدمت به سوق و دلبستگی عمیق به فرهنگ و مردم آن، در کنار ذوق هنری و روحیه ورزشکاری، باعث شد معلمی را نه به عنوان یک شغل، بلکه رسالتی بزرگ بداند.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img 
                  src="/gallery/1000577617_1756036593155.jpg" 
                  alt="کلاس درس در هوای آزاد"
                  className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                />
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
                  <p className="text-gray-800 text-right leading-relaxed font-medium">
                    او آمده بود که نشان دهد مدرسه فقط جایی برای «درس دادن» نیست، بلکه می‌تواند کارگاهی برای «زندگی ساختن» باشد.
                  </p>
                </div>
                <p className="text-gray-700 text-right leading-relaxed">
                  در یازدهم فروردین ۱۳۵۷ با فریبا اسفندیاری، معلمی فرهیخته از ایل هفت‌لنگ بختیاری که به ‌واسطه‌ خدمت در آموزش‌وپرورش از گچساران به سوق آمده بود، ازدواج کرد.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Teaching Methods */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-right mb-8 border-b-2 border-amber-400 pb-4">
            روش‌های نوآورانه
          </h2>
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-gray-700 text-right">
              مسعود فرهنگ دیار خود را به‌خوبی می‌شناخت و هرچه آموخته بود، با ظرافت در همان بستر بومی بازآفرینی می‌کرد؛ تا دانایی با جان و جهان شاگردانش گره بخورد، نه بر آن‌ها تحمیل شود.
            </p>
            
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-8 rounded-xl border border-teal-200">
              <p className="text-gray-800 text-right leading-relaxed mb-4">
                آنچه در نوجوانی او را از معلمی می‌ترساند ـ ترکه، ترس و تنبیه ـ را کنار گذاشت و در نظام آموزشی‌اش، به جای سختگیری و هراس، بنای تشویق و اعتماد را گذاشت.
              </p>
              <p className="text-gray-800 text-right leading-relaxed">
                کلاس او نه فقط محل درس، که پناهگاهی شد برای دانش‌آموزانی که از فضای ترس‌آلود مدارس سنتی گریزان بودند؛ جایی که می‌شد در امنیت آموخت، پرسید، رشد کرد و شکفت.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <img 
                  src="/gallery/1000577618_1756036593156.jpg" 
                  alt="تدریس در طبیعت"
                  className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                />
              </div>
              <div className="md:w-1/2 space-y-4">
                <p className="text-gray-700 text-right leading-relaxed">
                  هم دوره ای های ‌ مسعود اعتقاد داشتند که او همواره در حال مطالعه بود و هر تابستان سفری تازه در گوشه‌ای از ایران آغاز می‌کرد. آنچه از این سیر و سیاحت ها و سفر ها برداشت می کرد به کلاس درس راه پیدا می‌کرد.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-gray-800 text-right leading-relaxed text-sm">
                    او می‌خواست پنجره‌ای تازه و نگاهی نو به صفحه ذهن شاگردانش باز کند، افق آینده را پیش چشمشان بگذارد و به آن‌ها اعتماد به نفس ببخشد.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legendary Teaching */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-right mb-8 border-b-2 border-amber-400 pb-4">
            تدریس اسطوره‌ای
          </h2>
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-xl border border-yellow-200">
              <p className="text-gray-800 text-right leading-relaxed mb-4 font-medium">
                یکی از شاگردانش باور دارد که همین روحیه هنری و ذوق ادبی بود که از او معلمی بی‌همتا ساخت؛ مسعود تنها آموزگار نبود، بلکه روح آموزش بود و جان‌بخش دانایی.
              </p>
              <p className="text-gray-800 text-right leading-relaxed">
                شعر حماسی «آرش کمانگیر» را با چنان صدای نافذ و اجرای خیال‌انگیز در کلاس درس می داد که گویی نمایشنامه‌ای روی صحنه می‌رود.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2">
                <img 
                  src="/gallery/1000577620_1756036593156.jpg" 
                  alt="نمایش مدرسه"
                  className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                />
              </div>
              <div className="lg:w-1/2 space-y-6">
                <p className="text-gray-700 text-right leading-relaxed">
                  مسعود جغرافیا را به نمایش بدل می‌کرد؛ تدریس برای او روی نقشه‌های کاغذی نمی‌گذشت، بلکه در صحنه‌ای زنده میان شاگردانش. به هر دانش‌آموز نقشی می‌داد: یکی می‌شد کرمان، دیگری فارس، آن یکی کردستان و دیگری ایران.
                </p>
                <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                  <p className="text-gray-800 text-right leading-relaxed italic">
                    «من استان مازندرانم، دارای شهرهای آمل، بابل، شاهی، گرگان...»؛ صدایی که همچنان در گوش جانشان زنده است و خاموش نمی‌شود.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sports and Life */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-right mb-8 border-b-2 border-amber-400 pb-4">
            ورزش و زندگی
          </h2>
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img 
                  src="/gallery/1000577614_1756036640776.jpg" 
                  alt="تیم فوتبال مدرسه"
                  className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 mb-4"
                />
                <img 
                  src="/gallery/1000577615_1756036640777.jpg" 
                  alt="جام قهرمانی"
                  className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                />
              </div>
              <div className="space-y-6">
                <p className="text-gray-700 text-right leading-relaxed">
                  زنگ ورزش که فرا می‌رسید، توپ فوتبال میان دویدن‌ها و قهقهه‌ها می‌چرخید و تعادلی زیبا میان تن و ذهن می‌آفرید. در آن هیاهوی شاد، باز هم مسعود حضور داشت؛ نه فقط معلم، که مربی؛ و نه فقط مربی، که دوستی همراه و شورآفرینی دلگرم‌کننده بود.
                </p>
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <p className="text-gray-800 text-right leading-relaxed">
                    همکاران مسعود نقل می کنند بارها پست های مدیریتی به او پیشنهاد می شد، اما او باور داشت: «از پشت میز نمی‌شود قلب بچه‌ها را لمس کرد.» و هرگز چشم از کلاس برنداشت.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legacy */}
        <div className="bg-gradient-to-br from-slate-800 to-gray-900 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-8 text-amber-400">
            میراث جاودان
          </h2>
          <div className="space-y-8">
            <p className="text-xl leading-relaxed text-center">
              مسعود محمدی سی سال تمام خدمت کرد و تا سال ۱۳۸۰ در کلاس درس ماند و بازنشسته شد.
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

      </div>
    </main>
  );
}
