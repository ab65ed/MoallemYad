export default function Canvas() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-24">
        {/* Background Banner */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/banners/3.png')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-pink-800/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-8 bg-purple-900/90 rounded-2xl backdrop-blur-sm border border-purple-700/50">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-serif" data-testid="page-title">
              بوم رنگ خیال
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
              «هنر برایش فقط آفرینش فردی نبود، تجربه‌ای جمعی بود برای پرورش روح»
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Theater Beginnings */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-gray-800 text-right mb-6 border-b-2 border-purple-400 pb-4">
                عشق نخست: صحنه تئاتر
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 text-right font-medium mb-6">
                مسعود محمدی پیش از آنکه پا به میدان تربیت‌بدنی و ورزش بگذارد، دلش جای دیگری بود: صحنه‌ی تئاتر. برای او جهانی تازه بود، جایی که انسان می‌توانست حس انسان بودنش را با دیگری بی‌واسطه به اشتراک بگذارد.
              </p>
              <div className="bg-purple-50 border-r-4 border-purple-400 p-6 rounded-lg">
                <p className="text-gray-800 text-right leading-relaxed italic">
                  «از همان سال‌های دانشسرا در شیراز، روزها کتاب می‌خواندم و شب‌ها نمایش می‌دیدم. هر آنچه در سالن‌های شیراز روی صحنه می‌رفت، در دانشسرا با گروهی از دوستان نوجوانم در خوابگاه بازسازی می‌کردیم.»
                </p>
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="relative group">
                <img 
                  src="/gallery/1000577611_1756036684259.jpg" 
                  alt="در صحنه تئاتر"
                  className="w-full rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>    
    {/* Discovery and Early Success */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-right mb-8 border-b-2 border-purple-400 pb-4">
            کشف استعداد
          </h2>
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-gray-700 text-right">
              هنوز یک سال از ورودش به دانشسرا نگذشته بود که نگاه تیزبین رحیم هودی، معاون دبیرستان عشایری، استعداد او را کشف کرد. گفت: «این گروه و این آدم با بقیه فرق دارد.»
            </p>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl border border-amber-200">
              <p className="text-gray-800 text-right leading-relaxed mb-4">
                خیلی زود گروه تئاتر دانشسرا، به سرپرستی مسعود، به سالن‌های شهر راه یافت. آن روزها تئاتر برایش نه سرگرمی، بلکه اولویت نخست زندگی بود.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <img 
                  src="/gallery/1000577610_1756036684259.jpg" 
                  alt="با اساتید دیگر"
                  className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                />
              </div>
              <div className="md:w-1/2">
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl border border-rose-200">
                  <p className="text-gray-800 text-right leading-relaxed">
                    پس از بازگشت به سوق، تئاتر همچنان با او ماند. در سال ۱۳۵۱، در روستای کوچک سوق که فاقد بسیاری از امکانات اولیه بود، گروه تئاتری تشکیل داد که ابتدا «بلازه» نام گذاری شد و سپس به «خوشه» تغییر نام داد.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Khosheh Theater Group */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-right mb-8 border-b-2 border-purple-400 pb-4">
            گروه خوشه
          </h2>
          <div className="space-y-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3 space-y-6">
                <p className="text-lg leading-relaxed text-gray-700 text-right">
                  آن گروه برای دیاری محروم، خاطرات فراموش‌نشدنی شب‌های نمایش را رقم زد. مردم با اشتیاق بلیت می‌خریدند و در سالن کوچک طرح کاد سوق جمع می‌شدند.
                </p>
                <div className="bg-indigo-50 border-r-4 border-indigo-400 p-6 rounded-lg">
                  <p className="text-gray-800 text-right leading-relaxed">
                    «اسم شب»، «گروهبان صفدر»، «آب و آیینه»، «سگ ژنرال» و «مست و تریاک» را می‌دیدند، نمایش‌هایی که گاه طنز اجتماعی بودند و گاه نقدی تند بر کاپیتالیسم و استبداد.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/3">
                <img 
                  src="/gallery/1000577620_1756036593156.jpg" 
                  alt="نمایش مدرسه"
                  className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-xl border border-red-200">
              <p className="text-gray-800 text-right leading-relaxed font-medium">
                اوج کار گروه خوشه، اجرای تراژیک «اسم شب» در سال ۱۳۵۶ بود، نمایشی که تاریخ تئاتر حرفه‌ای استان کهگیلویه و بویراحمد را آغاز کرد. تماشاگرانی از اهواز و بهبهان و گچساران برای دیدن آن به سوق آمدند.
              </p>
            </div>
          </div>
        </div>

        {/* Acting Excellence */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-right mb-8 border-b-2 border-purple-400 pb-4">
            هنرپیشگی بی‌نظیر
          </h2>
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-xl border border-violet-200">
              <p className="text-gray-800 text-right leading-relaxed mb-4">
                به گفته‌ی همکاران، پرستیژ، فیزیک بدنی و نگاه ژرف مسعود خود صحنه را به هنر بدل می‌کرد و بر مخاطبان اثر می‌گذاشت. مسعود مثل هیچ‌کس نبود، همه را بخشی از خود می‌دید، حتی تماشاگرانش را.
              </p>
              <p className="text-gray-800 text-right leading-relaxed">
                سال‌ها شب و روز با یارانش از جان و مال مایه گذاشت تا نوجوانان سوق را بیازمایند و بهترین‌ها به سوی تئاتر هدایت شوند.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <img 
                  src="/gallery/1000577600_1756036684259.jpg" 
                  alt="همراه دوستان"
                  className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                />
              </div>
              <div className="md:w-1/2 space-y-4">
                <p className="text-gray-700 text-right leading-relaxed">
                  آن صحنه‌ی خون و سرنیزه، که سال‌ها بعد بچه‌های آن روز تازه فهمیدند بازی بود، هنوز در ذهن بسیاری زنده است، داستان سربازی که از مرزهای وطن محافظت می‌کرد.
                </p>
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                  <p className="text-gray-800 text-right leading-relaxed text-sm">
                    پس از انقلاب و در اوایل دهه‌ی شصت، اجرای تئاتر مدتی در مضیقه افتاد. جمعی از فرهنگ‌دوستان از مسعود خواستند میدان را خالی نگذارد.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>     
   {/* Diyar Group */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-right mb-8 border-b-2 border-purple-400 pb-4">
            گروه فرهنگی و هنری دیار
          </h2>
          <div className="space-y-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3 space-y-6">
                <p className="text-lg leading-relaxed text-gray-700 text-right">
                  سرانجام در سال ۱۳۶۲، به اصرار یاران لبخند زد و همراه با مجید پرهیز و چند دوست، در سوق و دهدشت گروه «فرهنگی و هنری دیار» را بنیان گذاشت.
                </p>
                <div className="bg-cyan-50 border-r-4 border-cyan-400 p-6 rounded-lg">
                  <p className="text-gray-800 text-right leading-relaxed">
                    واژه «دیار» ایهامی زیبا در آن نهفته بود که در گویش لری به معنای «بیداری» و در زبان فارسی معنای «منطقه» دارد. بودجه‌ای در کار نبود؛ مسعود راهی ساده و مردمی پیشنهاد کرد: با «جنگ شادی» آغاز کنیم.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/3">
                <img 
                  src="/gallery/1000577622_1756036593157.jpg" 
                  alt="دوستان و همکاران"
                  className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-8 rounded-xl border border-yellow-200">
              <p className="text-gray-800 text-right leading-relaxed font-medium">
                این گروه در جشنواره‌های دانش‌آموزی و استانی خوش درخشید. همکاری‌اش با مجید پرهیز نقطه‌ای تازه در کارنامه‌ی او بود.
              </p>
            </div>
          </div>
        </div>

        {/* Khab-gardha Performance */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-right mb-8 border-b-2 border-purple-400 pb-4">
            اجرای خوابگردها
          </h2>
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200">
              <p className="text-gray-800 text-right leading-relaxed mb-4">
                در جشنواره‌ی استانی فجر، با نمایش «خوابگردها» نوشته‌ی حسین پناهی و کارگردانی پرهیز، مسعود بر صحنه‌ی تالار وحدت ایستاد و نقش‌آفرینی‌اش نگاه تماشاگران و داوران را خیره کرد.
              </p>
              <p className="text-gray-800 text-right leading-relaxed font-medium">
                زنده‌یاد پناهی آن اجرا را «دیوانه‌کننده» توصیف کرد و گفت: «بی‌آنکه با من گفت‌وگو کنید تمام ذهنیات و برداشت‌هایم از متن را بر صحنه آورده‌اید»
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img 
                  src="/gallery/1000577585_1756036684258.jpg" 
                  alt="لحظات شاد"
                  className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                />
              </div>
              <div className="space-y-4">
                <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
                  <p className="text-gray-800 text-right leading-relaxed font-medium">
                    پناهی روبه مسعود کرد و گفت «حیف که تهران تو را ندارد!»
                  </p>
                </div>
                <p className="text-gray-700 text-right leading-relaxed text-sm">
                  مجید پرهیز روایت می‌کند: گروه تثبیت شد و به پختگی کامل رسید. او و مسعود شانه‌به‌شانه پیش رفتند.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Collaboration and Humility */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-right mb-8 border-b-2 border-purple-400 pb-4">
            تواضع و همکاری
          </h2>
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-8 rounded-xl border border-teal-200">
              <p className="text-gray-800 text-right leading-relaxed mb-4">
                پرهیز می‌گوید تنها چیزی که همیشه آزارم می‌داد این بود که مسعود نمی‌گذاشت اسم من و او کنار هم به‌عنوان کارگردان نوشته شود.
              </p>
              <p className="text-gray-800 text-right leading-relaxed">
                بزرگ منشی وی اجازه می‌داد نام من به عنوان کارگردان بیاید، در حالی که زحمات اصلی بر دوش او بود و خودش در حد دستیار یا مشاور کارگردان معرفی می‌شد.
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
                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                  <p className="text-gray-800 text-right leading-relaxed">
                    شهرام نوشیر، بازیگر و کارگردان برجسته، در یکی از جلسات نقد و بررسی کار گروه دیار گفت: «من همیشه یک نارنج در جیبم می‌گذارم تا اگر کار خسته‌کننده شد، آن را جلو دماغم فشار دهم که بیدار بمانم. اما در کار شما، عالی بود!»
                  </p>
                </div>
                <p className="text-gray-700 text-right leading-relaxed text-sm">
                  همان‌جا بود که اشک شوق در چشمان مسعود حلقه زد.
                </p>
              </div>
            </div>
          </div>
        </div>      
  {/* Art and Sports Integration */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-right mb-8 border-b-2 border-purple-400 pb-4">
            تلفیق هنر و ورزش
          </h2>
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-gray-700 text-right">
              او هنر را با ورزش و ورزش را با هنر می‌خواست. جشنواره‌های ورزشی را با نگاه هنری هدایت می‌کرد و در کار هنری هم از اصول ورزشی بهره می‌گرفت.
            </p>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200">
              <p className="text-gray-800 text-right leading-relaxed mb-4">
                این روش در گروه دیار هم جاری بود. برای اجرای «خوابگردها»، اعضای گروه هفت ماه تمرین بدن و بیان داشتند، سهم تمرین بدنی سه برابر تمرین نمایشی بود.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img 
                  src="/gallery/1000577599_1756036684258.jpg" 
                  alt="روزهای دانشجویی"
                  className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                />
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 text-right leading-relaxed">
                  علاوه بر تئاتر، مسعود محمدی در سال ۱۳۶۴ در اولین فیلم ساخته‌شده در استان کهگیلویه و بویراحمد به نام «شیرتپه» به کارگردانی سید علی قنبر موسوی نیز به‌عنوان بازیگر و مشاور کارگردان حضور داشت.
                </p>
                <div className="bg-violet-50 p-4 rounded-lg border border-violet-200">
                  <p className="text-gray-800 text-right leading-relaxed text-sm">
                    مسعود همچنین در نمایش‌های «اخت لر»، «ایستگاه آخر»، «منم تو» و چند کار دیگر در کنار مجید پرهیز حضور داشت.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Multiple Arts */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-right mb-8 border-b-2 border-purple-400 pb-4">
            هنرهای متنوع
          </h2>
          <div className="space-y-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3 space-y-6">
                <p className="text-lg leading-relaxed text-gray-700 text-right">
                  مسعود در تئاتر فقط بازیگر یا کارگردان نبود؛ مربی و آموزگار نسل تازه‌ای از هنرمندان شد. از اجرای نمایش‌های اجتماعی گرفته تا همکاری با تعزیه‌های سنتی، همه را با شور و خلاقیت پیش می‌برد.
                </p>
                <div className="bg-rose-50 border-r-4 border-rose-400 p-6 rounded-lg">
                  <p className="text-gray-800 text-right leading-relaxed">
                    در تعزیه‌های محرم، او هم بازیگردان بود، هم طراح صحنه و هم نقش‌پوش، کاری کرد که آیین تعزیه‌ی سوق درخشان‌تر و ماندگارتر شود.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/3">
                <img 
                  src="/gallery/1000577626_1756036569848.jpg" 
                  alt="همراه شاگردان در طبیعت"
                  className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl border border-indigo-200">
              <p className="text-gray-800 text-right leading-relaxed mb-4">
                اما هنر مسعود به تئاتر محدود نماند. او از نخستین خطاطان حرفه‌ای شهر بود، قلمش بر دیوارها و پارچه‌ها پیام‌های فرهنگی می‌نشاند و دل‌های بسیاری را جذب می‌کرد.
              </p>
              <p className="text-gray-800 text-right leading-relaxed">
                نقاشی می‌کرد و با همان ظرافت نقش‌هایی دل‌انگیز بر تابلوهای ساده می‌آفرید. همزمان با مطبوعات محلی و کشوری همکاری داشت.
              </p>
            </div>
          </div>
        </div>

        {/* Cultural Impact */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-right mb-8 border-b-2 border-purple-400 pb-4">
            تأثیر فرهنگی
          </h2>
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-xl border border-amber-200">
              <p className="text-gray-800 text-right leading-relaxed mb-4">
                ذوق هنری‌اش با زندگی اجتماعی درهم تنیده بود. او پایه‌گذار کلاس‌های فرهنگی و هنری، اردوهای تابستانی و فعالیت‌های فوق‌برنامه در سوق بود.
              </p>
              <p className="text-gray-800 text-right leading-relaxed">
                برای نخستین بار هنر را از کلاس درس به میان مردم آورد و به نسل تازه امکان تجربه و آموختن داد.
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
                  در همین مسیر، جوانان بسیاری را با نمایشنامه‌های چخوف، گوگول، لورکا و نویسندگان ایرانی آشنا کرد و ادبیات و نمایش را به روستایی کوچک پیوند زد.
                </p>
                <div className="bg-sky-50 p-4 rounded-lg border border-sky-200">
                  <p className="text-gray-800 text-right leading-relaxed text-sm">
                    از نگاه دوستان و کنشگران فرهنگی، مسعود محمدی یکی از افراد شاخص در شکل‌گیری لقب «شهر فرهنگ و هنر» برای سوق بود.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Eternal Legacy */}
        <div className="bg-gradient-to-br from-slate-800 to-gray-900 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-8 text-purple-400">
            میراث جاودان
          </h2>
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-center">
              مسعود محمدی تنها هنرمند یک رشته نبود؛ او آیینه‌ای بود از همه‌ی هنرها: تئاتر، خطاطی، نقاشی، تعزیه، روزنامه‌نگاری و حتی گردشگری فرهنگی.
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <p className="text-lg leading-relaxed text-right mb-6">
                شاگردان، همکاران و دوستانش امروز او را به یاد می‌آورند: گاهی در صحنه‌ای از یک نمایش قدیمی، گاهی در خطی بر دیوار، گاهی در خاطره‌ای از یک اردوی تابستانی.
              </p>
              <p className="text-2xl font-bold text-center text-purple-400">
                در حافظه‌ی کسانی که با او زیستند و از او آموختند پرده‌ی ناتمام او هیچ‌گاه فرو نیفتاد، صحنه‌ی او هنوز روشن است.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}