import Reveal from "@/components/Reveal";

export default function Arena() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-16 md:py-24">
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
          <div className="inline-block p-8 bg-green-900/85 rounded-2xl backdrop-blur-sm border border-green-700/50 shadow-2xl ring-1 ring-white/10">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-yekan" data-testid="page-title">
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animated-grid-bg rounded-2xl">
        
        {/* Early Football Days */}
        <Reveal>
        <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-gray-800 text-right mb-6 border-b-2 border-green-400 pb-4">
                آغاز از زمین‌های خاکی
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 text-right font-medium mb-6">
                مسعود محمدی از زمین‌های خاکی سوق قد کشید؛ فوتبال را از چارچوب دروازه آغاز کرد و با تکیه بر قامت ورزشکارانه و اندام متناسبی که او را در درگیری‌های تن‌به‌تن برتری می‌داد، به‌تدریج به هافبک/مهاجم تغییر پست داد. آن سال‌ها در سوق و دهدشت، فوتبال بدون ‌مربی رسمی و تنها با همت جوانان می‌چرخید و او از دل همین زمین‌های خاکی بیرون آمد.
              </p>
            </div>
            <div className="lg:w-1/3">
              <div className="relative group arena-image-wrapper">
                <img 
                  src="/tabs/arena/1.jpg" 
                  alt="آغاز فوتبال"
                  className="w-full rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
        </Reveal>

        {/* Professional Training */}
        <Reveal delayMs={80}>
        <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-gray-800 text-right mb-6 border-b-2 border-green-400 pb-4">
                آموزش حرفه‌ای
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 text-right mb-6">
                او استعداد ذاتی و مسیر خودآموختگی را با آموزش رسمی پیوند زد؛ دوره مربیگری را تا سطح بالا طی می کند و با ارزیابی عالی به پایان می رساند. سپس در سال 1363 در دوره بین‌المللی مربیگری فوتبال در مجموعه ورزشی آزادی تهران- که با حضور ایوان تاپلاک، مدرس یوگسلاویایی، و جمعی از چهره‌های شاخص فوتبال ایران تشکیل شده بود شرکت می کند. در این دوره چهره هایی نام آشنا همچون محمد مایلی‌کهن و رحیم میرآخوری نیز حضور داشتند که نشان‌دهنده اعتبار بالای این کلاس ها بوده است.
              </p>
              <div className="bg-blue-50 border-r-4 border-blue-400 p-6 rounded-lg">
                <p className="text-gray-800 text-right leading-relaxed">
                  شخصیت کاریزمای و مهارت های ارتباطی مسعود باعث شد که با بزرگان فوتبال ایران مانند: حسن روشن ، علی پروین، منصور پورحیدری ، حمید درخشان ، جواد زرینچه و فرشاد پیوس ارتباط داشته باشد و تبادل اطلاعات میان آنها صورت گیرد. مسعود، دانش، علاقه و تجربه اش را به کهگیلویه آورد تا بتواند فوتبال مدرن را در کهگیلویه پایه گذاری و آن را توسعه دهد.
                </p>
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="relative group arena-image-wrapper">
                <img 
                  src="/tabs/arena/2.jpg" 
                  alt="آموزش حرفه‌ای"
                  className="w-full rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
        </Reveal>

        {/* Team Management */}
        <Reveal delayMs={120}>
        <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-gray-800 text-right mb-6 border-b-2 border-green-400 pb-4">
                هدایت تیم‌ها
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 text-right mb-6">
                مسعود، هدایت تیم‌های توحید سوق و آزادی سوق را بر عهده گرفت، به کادر فنی منتخب بزرگسالان کهگیلویه پیوست و در مقاطعی سرمربی تیم منتخب شهرستان شد. گرچه در دلبستگی میان قرمز و آبی، پرسپولیسی شناخته می‌شد اما هرگز هواداری او به حرفه اش راه نیافت و منافع فوتبال کهگیلویه بر هر رنگ و سلیقه‌ای برایش مقدم بود.
              </p>
              <div className="bg-yellow-50 border-r-4 border-yellow-400 p-6 rounded-lg">
                <p className="text-gray-800 text-right leading-relaxed font-medium">
                  روایت‌ها هنوز از روزهایی می‌گویند که استقلال دهدشت با هدایت او در میانه دهه ۱۳۶۰ قهرمان شد؛ روزهایی که سکوها غرق در فریاد، زمین لبریز از شور و جوانان شهر سرمست از افتخار بودند.
                </p>
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="relative group arena-image-wrapper">
                <img 
                  src="/tabs/arena/3.jpg" 
                  alt="قهرمانی تیم"
                  className="w-full rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
        </Reveal>

        {/* Coaching Philosophy */}
        <Reveal delayMs={160}>
        <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-gray-800 text-right mb-6 border-b-2 border-green-400 pb-4">
                فلسفه مربی‌گری
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 text-right mb-6">
                فلسفه مربی‌گری او بر سه ستون استوار بود. دیسیپلین، اخلاق حرفه‌ای، تاکتیک هجومی. او معتقد بود تیمی که ذهن منسجم و رفتار منظم دارد می‌تواند سبک تهاجمی را با ریسک کمتر اجرا کند. در روز مسابقه اگر تیم به بن‌بست تاکتیکی می‌رسید با جابه‌جایی مهره‌ها یا تغییر چیدمان در لحظه پاسخ می‌داد. اگر بازیکنی حاشیه می‌ساخت حتی اگر ستاره بود از زمین بیرون می‌رفت تا آرامش جمعی حفظ شود. احترام به داور و حریف، عدم تبعیض، و پیگیری خطای رفتاری با تنبیه‌های آموزشی مانند دویدن اضافه بخشی از انضباط عملی او بود.
              </p>
              <div className="bg-teal-50 border-r-4 border-teal-400 p-6 rounded-lg">
                <p className="text-gray-800 text-right leading-relaxed">
                  غالبا در مباحث فوتبالی میان مستمعان و دوستان، کلام ایشان فصل الخطاب بود و همگی گوش شنوایی می شدند برای نظرات و دیدگاه های مسعود.
                </p>
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="relative group arena-image-wrapper">
                <img 
                  src="/tabs/arena/4.jpg" 
                  alt="فلسفه مربی‌گری"
                  className="w-full rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
        </Reveal>

        {/* Social Harmony and Fair Play */}
        <Reveal delayMs={200}>
        <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-right mb-8 border-b-2 border-green-400 pb-4">
            هم‌گرایی و Fair Play
          </h2>
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-gray-700 text-right">
              بافت اجتماعی کهگیلویه گاه مستعد تنش‌های رنگی و طایفه‌ای بود. مسعود این واقعیت را می‌شناخت و پیشگیری را بر درمان ترجیح می‌داد. در شهر سوق هرگز اجازه نداد تیم‌هایی با نام استقلال و پرسپولیس شکل گیرد تا رقابت‌های رنگی به میدان نیاید. از شکل‌گیری تیم‌های طایفه‌ای جلوگیری می کرد و به جای آن میدان مسابقه برای هم‌گرایی طراحی شد. انتخاب چهره‌های مورد اعتماد محلی برای رئیس هیئت فوتبال سوق و مشارکت دادن تیم‌های توابع و روستاهای همجوار مانند چنگلوا، خلیفه‌ای و راک در تورنمنت‌ها از همین نگاه می‌آمد. نتیجه، فضای امن‌تر برای تماشاگر و تمرکز بیش‌تر برای بازیکنان بود.
            </p>
            
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl border border-indigo-200">
              <p className="text-gray-800 text-right leading-relaxed font-medium">
                فوتبال دوستان معتقدند جنبشی که در سالهای اخیر به نام FAIR PLAY در فوتبال به صورت فرعی مد شده است، سالها قبل در مکتب فوتبالی مسعود یک اصل بود.
              </p>
            </div>

            <p className="text-lg leading-relaxed text-gray-700 text-right">
              تبعیض، خط قرمز وی بود و در مکتب او قومیت در گزینش هرگز جایی نداشت. به جوان‌ترها میدان می‌داد و از آنان در تیم‌های بزرگسال استفاده های هدفمند می‌کرد تا انگیزه، تجربه و دیده‌شدن در آنها متجلی شود. روایت‌ها از معرفی سه بازیکن جوان سوق به اردوی تیم ملی جوانان در مشهد در سال ۱۳۶۶ یاد می‌کنند. به گفته شاهدان چند سال بعد نیز یکی از شاگردانش به تیم ملی جوانان دعوت شد.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 text-right">
              مسعود فقط تیم‌سازی نمی‌کرد. از آنجایی که خود از اولین داورهای استان بود به فکر تربیت داور در شهرستان نیز بود. در ۱۳۷۳ به همت ایشان کلاس داوری فوتبال زیر نظر فدراسیون را با مدرسی استاد نوذر رودنیل در دهدشت برگزار کرد. نزدیک به سی نفر دوره دیدند و شهرستان تا حد زیادی از داوران غیربومی بی‌نیاز شد. اثر این دوره ها منتج به این شد بعضی از آموزش دیدگان تا درجات ملی و قضاوت در لیگ یک پیش رفتند و برای لیگ برتر نیز معرفی شدند.
            </p>
          </div>
        </div>
        </Reveal>

        {/* Sports Management and Legacy */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-gray-800 text-right mb-6 border-b-2 border-green-400 pb-4">
                مدیریت ورزشی و میراث
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 text-right mb-6">
                مسعود محمدی چند دهه مسئولیت تربیت‌بدنی سوق را داوطلبانه بدون هیچ چشم داشت مالی و با حداقل بودجه پذیرفت. مسعود می گفت که سال ۱۳۵۸ طرحی بود که در سوق، لنده و بهمئی نمایندگی تربیت‌بدنی راه‌اندازی شود. مسعود، با آنکه به میدان و ورزش دل بسته بود، در ابتدا قبول مسئولیت را انکار می‌کرد و می‌گفت دلش با ورزشکاران است ودوست دارد داخل میدان باشد تا پشت میز؛ اما به اصرار دوستان لایق و جوانان ورزش دوست برگزیده شد.
              </p>
              <div className="bg-amber-50 border-r-4 border-amber-400 p-6 rounded-lg mb-6">
                <p className="text-gray-800 text-right leading-relaxed italic font-medium">
                  «هر نوجوانِ مستعد باید جایی برای شروع داشته باشد.»
                </p>
              </div>
              <p className="text-lg leading-relaxed text-gray-700 text-right mb-6">
                چهار هکتار از ده هکتار زمینی که برای توسعه سوق در نظر گرفته شده بود در اختیار تربیت بدنی سوق قرار گرفت. با همت مردم و دانش‌آموزان همان سال‌ها، زمین صاف شد، دو تیر دروازه برپا شد و همان‌جا نخستین سنگ بنای اداره ورزش در سوق نهاده شد. کمبود را به اهرم تبدیل کرد؛ پیگیری‌های او در نهایت به توپ و تور و زمین‌های مختلف ورزش بدل شد و مجموعه‌ای ورزشی زنده و منظم برای شهر ساخت؛ همه با بودجه‌ای اندک اما مدیریتی دقیق.
              </p>
              <div className="bg-cyan-50 border-r-4 border-cyan-400 p-6 rounded-lg">
                <p className="text-gray-800 text-right leading-relaxed">
                  وقتی مدیران و ورزشکاران ملی و استانی از مجموعه‌ی ورزشی سوق بازدید می‌کردند، سؤال مشترک همه آنها این بود: «چطور با این بودجه؟» پاسخ در الگوی رهبری او پنهان بود: مسئولیت‌پذیری، ارتباط‌سازی، شفافیت و پیگیری مداوم؛ خیلی از ورزشکاران اعتقاد دارند که زیرساخت انسانی و مجموعه ورزشی سوق از محل " سازمان تربیت بدنی یک نفره ای" به نام مسعود محمدی درست شده است.
                </p>
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="relative group arena-image-wrapper">
                <img 
                  src="/tabs/arena/5.jpg" 
                  alt="میراث ورزشی"
                  className="w-full rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stadium Atmosphere and Commentary Legacy */}
        <Reveal delayMs={240}>
        <div className="bg-gradient-to-br from-slate-800 to-gray-900 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-400">
            فضای استادیوم و میراث تفسیری
          </h2>
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <p className="text-lg leading-relaxed text-right mb-6">
                از نگاه ورزشکاران آن روزگار، استادیوم سوق هر هفته به صحنه‌ ی پرشور ورزشی بدل می‌شد؛ ۲۲ بازیکن در زمین، دو نیمکت پرتلاش و انبوهی از تماشاگران از همه نسل‌ها ، از پیرمردان عصا به دست تا نوجوانان پرشور و کودکان کنجکاو، با فریادها و تشویق‌های بی‌امان، فضایی می‌ساختند که در شهرهای بزرگ نیز مشابه آن کمتر دیده می‌شد. در میان آن شور و ازدحام، هیجانِ بازی‌ها و تشویق‌ها چنان در جان‌ها می‌نشست که استادیوم سوق، فراتر از یک زمین ورزشی، به بخشی از هویت و غرور نسل‌ها تبدیل می شد؛ یادگاری از روزهای پرهیجان که هنوز در ذهن و قلب ورزش‌دوستان زنده است .این تلاش فوتبالی او تا زمانی ادامه داشت که در زمین فوتبال با نوجوانانی که حکم نوه های او را داشتند لباس ورزشی می پوشید و با آنها هم بازی می شدند.
              </p>
              <p className="text-lg leading-relaxed text-right mb-6">
                مسعود محمدی فقط مربی و مدیر نبود؛ مفسر غیررسمیِ بیشتر ورزش‌ها در شهر بود. ورزشکاران و علاقه‌مندان بازی‌های ملی و بین‌المللی در کنار او می‌نشستند تا با تحلیل‌های روشن و موشکافانه‌اش از چیدمان، تاکتیک، روانِ بازی و جزئیات فردی لذت ببرند. گویی به یک رسم تبدیل شده بود و چند نسل از نوجوانان و جوانان بعد از هر بازی مهم، همه منتظر بودند که مسعود از در خانه بیرون بیایید و آنها مشتاقانه به گردش حلقه می زدند تا روایت او را از آن بازی بشنوند، تحلیلی ساده، دقیق و قابل‌فهم.
              </p>
              <p className="text-xl font-bold text-center text-green-400">
                این دورهمی‌های خودجوش تا چند روز پیش از درگذشتش در سوق ادامه داشت و نام او را به صدای معتبر شهر برای فهمِ ورزش تبدیل کرده بود.
              </p>
            </div>
          </div>
        </div>
        </Reveal>

      </div>
    </main>
  );
}