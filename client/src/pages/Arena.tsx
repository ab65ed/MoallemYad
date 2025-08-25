export default function Arena() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-24">
        {/* Background Banner */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/banners/2.png')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-emerald-800/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-8 bg-green-900/90 rounded-2xl backdrop-blur-sm border border-green-700/50">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-serif" data-testid="page-title">
              گوی و میدان
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-green-100 max-w-2xl mx-auto leading-relaxed">
              «هر نوجوانِ مستعد باید جایی برای شروع داشته باشد»
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Early Football Days */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-gray-800 text-right mb-6 border-b-2 border-green-400 pb-4">
                آغاز از زمین‌های خاکی
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 text-right font-medium mb-6">
                مسعود محمدی از زمین‌های خاکی سوق قد کشید؛ فوتبال را از چارچوب دروازه آغاز کرد و با تکیه بر قامت ورزشکارانه و اندام متناسبی که او را در درگیری‌های تن‌به‌تن برتری می‌داد، به‌تدریج به هافبک/مهاجم تغییر پست داد.
              </p>
              <div className="bg-green-50 border-r-4 border-green-400 p-6 rounded-lg">
                <p className="text-gray-800 text-right leading-relaxed">
                  آن سال‌ها در سوق و دهدشت، فوتبال بدون ‌مربی رسمی و تنها با همت جوانان می‌چرخید و او از دل همان زمین‌های خاکی بیرون آمد.
                </p>
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="relative group">
                <img 
                  src="/gallery/1000577614_1756036640776.jpg" 
                  alt="تیم فوتبال مدرسه"
                  className="w-full rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Training */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-right mb-8 border-b-2 border-green-400 pb-4">
            آموزش حرفه‌ای
          </h2>
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-gray-700 text-right">
              او استعداد ذاتی و مسیر خودآموختگی را با آموزش رسمی پیوند زد؛ دوره مربیگری را تا سطح بالا طی می کند و با ارزیابی عالی به پایان می رساند.
            </p>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200">
              <p className="text-gray-800 text-right leading-relaxed mb-4">
                سپس در سال 1363 در دوره بین‌المللی مربیگری فوتبال در مجموعه ورزشی آزادی تهران- که با حضور ایوان تاپلاک، مدرس یوگسلاویایی، و جمعی از چهره‌های شاخص فوتبال ایران تشکیل شده بود شرکت می کند.
              </p>
              <p className="text-gray-800 text-right leading-relaxed">
                در این دوره چهره هایی نام آشنا همچون محمد مایلی‌کهن و رحیم میرآخوری نیز حضور داشتند که نشان‌دهنده اعتبار بالای این کلاس ها بوده است.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <img 
                  src="/gallery/1000577612_1756036640777.jpg" 
                  alt="همراه همکاران ورزشی"
                  className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                />
              </div>
              <div className="md:w-1/2">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
                  <p className="text-gray-800 text-right leading-relaxed">
                    شخصیت کاریزمای و مهارت های ارتباطی مسعود باعث شد که با بزرگان فوتبال ایران مانند: حسن روشن، علی پروین، منصور پورحیدری، حمید درخشان، جواد زرینچه و فرشاد پیوس ارتباط داشته باشد.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Management */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-right mb-8 border-b-2 border-green-400 pb-4">
            هدایت تیم‌ها
          </h2>
          <div className="space-y-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3 space-y-6">
                <p className="text-lg leading-relaxed text-gray-700 text-right">
                  مسعود، هدایت تیم‌های توحید سوق و آزادی سوق را بر عهده گرفت، به کادر فنی منتخب بزرگسالان کهگیلویه پیوست و در مقاطعی سرمربی تیم منتخب شهرستان شد.
                </p>
                <div className="bg-red-50 border-r-4 border-red-400 p-6 rounded-lg">
                  <p className="text-gray-800 text-right leading-relaxed">
                    گرچه در دلبستگی میان قرمز و آبی، پرسپولیسی شناخته می‌شد اما هرگز هواداری او به حرفه اش راه نیافت و منافع فوتبال کهگیلویه بر هر رنگ و سلیقه‌ای برایش مقدم بود.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/3">
                <img 
                  src="/gallery/1000577615_1756036640777.jpg" 
                  alt="جام قهرمانی"
                  className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-8 rounded-xl border border-yellow-200">
              <p className="text-gray-800 text-right leading-relaxed font-medium">
                روایت‌ها هنوز از روزهایی می‌گویند که استقلال دهدشت با هدایت او در میانه دهه ۱۳۶۰ قهرمان شد؛ روزهایی که سکوها غرق در فریاد، زمین لبریز از شور و جوانان شهر سرمست از افتخار بودند.
              </p>
            </div>
          </div>
        </div>

        {/* Coaching Philosophy */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-right mb-8 border-b-2 border-green-400 pb-4">
            فلسفه مربی‌گری
          </h2>
          <div className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-200 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-3">دیسیپلین</h3>
                <p className="text-gray-700 text-sm">نظم و انضباط در تمرین و بازی</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-3">اخلاق حرفه‌ای</h3>
                <p className="text-gray-700 text-sm">احترام و رفتار شایسته</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-3">تاکتیک هجومی</h3>
                <p className="text-gray-700 text-sm">بازی تهاجمی و خلاقانه</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <img 
                  src="/gallery/1000577616_1756036640777.jpg" 
                  alt="مسابقات ورزشی"
                  className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                />
              </div>
              <div className="md:w-1/2 space-y-4">
                <p className="text-gray-700 text-right leading-relaxed">
                  او معتقد بود تیمی که ذهن منسجم و رفتار منظم دارد می‌تواند سبک تهاجمی را با ریسک کمتر اجرا کند. در روز مسابقه اگر تیم به بن‌بست تاکتیکی می‌رسید با جابه‌جایی مهره‌ها یا تغییر چیدمان در لحظه پاسخ می‌داد.
                </p>
                <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
                  <p className="text-gray-800 text-right leading-relaxed text-sm">
                    غالبا در مباحث فوتبالی میان مستمعان و دوستان، کلام ایشان فصل الخطاب بود و همگی گوش شنوایی می شدند برای نظرات و دیدگاه های مسعود.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Harmony */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-right mb-8 border-b-2 border-green-400 pb-4">
            هم‌گرایی اجتماعی
          </h2>
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-gray-700 text-right">
              بافت اجتماعی کهگیلویه گاه مستعد تنش‌های رنگی و طایفه‌ای بود. مسعود این واقعیت را می‌شناخت و پیشگیری را بر درمان ترجیح می‌داد.
            </p>
            
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl border border-indigo-200">
              <p className="text-gray-800 text-right leading-relaxed mb-4">
                در شهر سوق هرگز اجازه نداد تیم‌هایی با نام استقلال و پرسپولیس شکل گیرد تا رقابت‌های رنگی به میدان نیاید. از شکل‌گیری تیم‌های طایفه‌ای جلوگیری می کرد و به جای آن میدان مسابقه برای هم‌گرایی طراحی شد.
              </p>
              <p className="text-gray-800 text-right leading-relaxed">
                فوتبال دوستان معتقدند جنبشی که در سالهای اخیر به نام FAIR PLAY در فوتبال به صورت فرعی مد شده است، سالها قبل در مکتب فوتبالی مسعود یک اصل بود.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img 
                  src="/gallery/1000577613_1756036640778.jpg" 
                  alt="اردوی تربیتی"
                  className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                />
              </div>
              <div className="space-y-4">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <p className="text-gray-800 text-right leading-relaxed">
                    تبعیض، خط قرمز وی بود و در مکتب او قومیت در گزینش هرگز جایی نداشت. به جوان‌ترها میدان می‌داد و از آنان در تیم‌های بزرگسال استفاده های هدفمند می‌کرد.
                  </p>
                </div>
                <p className="text-gray-700 text-right leading-relaxed text-sm">
                  روایت‌ها از معرفی سه بازیکن جوان سوق به اردوی تیم ملی جوانان در مشهد در سال ۱۳۶۶ یاد می‌کنند.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sports Management */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-right mb-8 border-b-2 border-green-400 pb-4">
            مدیریت ورزشی
          </h2>
          <div className="space-y-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3 space-y-6">
                <p className="text-lg leading-relaxed text-gray-700 text-right">
                  مسعود محمدی چند دهه مسئولیت تربیت‌بدنی سوق را داوطلبانه بدون هیچ چشم داشت مالی و با حداقل بودجه پذیرفت.
                </p>
                <div className="bg-amber-50 border-r-4 border-amber-400 p-6 rounded-lg">
                  <p className="text-gray-800 text-right leading-relaxed italic">
                    «هر نوجوانِ مستعد باید جایی برای شروع داشته باشد.»
                  </p>
                </div>
                <p className="text-gray-700 text-right leading-relaxed">
                  کمبود را به اهرم تبدیل کرد؛ پیگیری‌های او در نهایت به توپ و تور و زمین‌های مختلف ورزش بدل شد و مجموعه‌ای ورزشی زنده و منظم برای شهر ساخت.
                </p>
              </div>
              <div className="lg:w-1/3">
                <img 
                  src="/gallery/1000577585_1756036684258.jpg" 
                  alt="لحظات شاد"
                  className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                />
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-xl border border-cyan-200">
              <p className="text-gray-800 text-right leading-relaxed mb-4">
                وقتی مدیران و ورزشکاران ملی و استانی از مجموعه‌ی ورزشی سوق بازدید می‌کردند، سؤال مشترک همه آنها این بود: «چطور با این بودجه؟»
              </p>
              <p className="text-gray-800 text-right leading-relaxed font-medium">
                پاسخ در الگوی رهبری او پنهان بود: مسئولیت‌پذیری، ارتباط‌سازی، شفافیت و پیگیری مداوم.
              </p>
            </div>
          </div>
        </div>

        {/* Stadium Atmosphere */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-right mb-8 border-b-2 border-green-400 pb-4">
            فضای استادیوم
          </h2>
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-xl border border-orange-200">
              <p className="text-gray-800 text-right leading-relaxed mb-4">
                از نگاه ورزشکاران آن روزگار، استادیوم سوق هر هفته به صحنه‌ ی پرشور ورزشی بدل می‌شد؛ ۲۲ بازیکن در زمین، دو نیمکت پرتلاش و انبوهی از تماشاگران از همه نسل‌ها، از پیرمردان عصا به دست تا نوجوانان پرشور و کودکان کنجکاو.
              </p>
              <p className="text-gray-800 text-right leading-relaxed">
                با فریادها و تشویق‌های بی‌امان، فضایی می‌ساختند که در شهرهای بزرگ نیز مشابه آن کمتر دیده می‌شد.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <img 
                  src="/gallery/1000577595_1756036684258.jpg" 
                  alt="عکس یادگاری"
                  className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                />
              </div>
              <div className="md:w-1/2 space-y-4">
                <p className="text-gray-700 text-right leading-relaxed">
                  در میان آن شور و ازدحام، هیجانِ بازی‌ها و تشویق‌ها چنان در جان‌ها می‌نشست که استادیوم سوق، فراتر از یک زمین ورزشی، به بخشی از هویت و غرور نسل‌ها تبدیل می شد.
                </p>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <p className="text-gray-800 text-right leading-relaxed text-sm">
                    این تلاش فوتبالی او تا زمانی ادامه داشت که در زمین فوتبال با نوجوانانی که حکم نوه های او را داشتند لباس ورزشی می پوشید.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sports Commentator */}
        <div className="bg-gradient-to-br from-slate-800 to-gray-900 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-400">
            مفسر ورزش
          </h2>
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-center">
              مسعود محمدی فقط مربی و مدیر نبود؛ مفسر غیررسمیِ بیشتر ورزش‌ها در شهر بود.
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <p className="text-lg leading-relaxed text-right mb-6">
                ورزشکاران و علاقه‌مندان بازی‌های ملی و بین‌المللی در کنار او می‌نشستند تا با تحلیل‌های روشن و موشکافانه‌اش از چیدمان، تاکتیک، روانِ بازی و جزئیات فردی لذت ببرند.
              </p>
              <p className="text-xl font-bold text-center text-green-400">
                این دورهمی‌های خودجوش تا چند روز پیش از درگذشتش در سوق ادامه داشت و نام او را به صدای معتبر شهر برای فهمِ ورزش تبدیل کرده بود.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}