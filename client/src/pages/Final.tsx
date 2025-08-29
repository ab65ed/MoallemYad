export default function Final() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-24">
        {/* Background Banner */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/gallery/1000577623_1756036107282.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-gray-900/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-8 bg-black/70 rounded-2xl backdrop-blur-sm border border-gray-700/50">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-serif" data-testid="page-title">
              سکانس آخر
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mx-auto mb-6"></div>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              آیین پاسداشتِ معلمی و مردم‌داری او که در چهره‌ها و هم‌قدمی مردم پیدا است.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 farsi-justify">
        
        {/* The Final Moment */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl text-white">🕊️</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">لحظه وداع</h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-right leading-relaxed text-gray-700" data-testid="content-area">
            <p className="text-xl mb-8 text-center font-medium">
              در روز  سی و یک تیرماه ۱۴۰۳، در سکوت صبحگاهی که هنوز شهر در خواب بود، مسعود محمدی آرام چشم از جهان فرو بست. مردی که شصت و نه سال عمر پربار داشت، در آغوش خانواده و در سایه دعای دوستداران، به سفر ابدی رفت.
            </p>
            
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-xl border border-amber-200 mb-8">
              <p className="text-lg text-center italic text-gray-800">
                «نه مرگ پایان است، بلکه آغاز حضوری جاودان در قلب‌هایی که عشق ورزیده‌ایم»
              </p>
            </div>
          </div>
        </div>

        {/* The Farewell Procession */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8 border-b-2 border-amber-400 pb-4">
            تشییع باشکوه
          </h2>
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-gray-700 text-right">
              روز دوشنبه، بیست و نهم بهمن، شهر سوق لباس عزا پوشید. از صبح زود، مردم از هر کوی و برزن، از هر طبقه و قشر، به سوی خانه استاد روان شدند. خیابان‌ها پر از چهره‌هایی شد که اندوه در آن‌ها با احترام آمیخته بود.
            </p>
            
            {/* ویدیوی اول مراسم تشییع */}
            <div className="relative w-full overflow-hidden rounded-xl shadow-lg border border-gray-200 mb-8">
              <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                <video 
                  className="absolute top-0 left-0 w-full h-full object-cover" 
                  controls
                >
                  <source src="/tabs/final/1.mp4" type="video/mp4" />
                  مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
                </video>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm md:text-base text-right">لحظات تشییع پیکر استاد مسعود محمدی - بخش اول</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">شاگردان دیروز</h3>
                  <p className="text-gray-700 text-right leading-relaxed">
                    آن‌ها که روزی در کلاس درس او نشسته بودند، حالا با موهای سپید و چهره‌های پخته، آمده بودند تا آخرین درس را از معلم بگیرند؛ درس وداع و سپاسگزاری.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">یاران ورزش</h3>
                  <p className="text-gray-700 text-right leading-relaxed">
                    ورزشکاران و مربیان، آن‌ها که در میدان‌های فوتبال با او رقابت کرده یا از او آموخته بودند، با پیراهن‌های تیمی و چشمانی اشک‌آلود، احترام نهایی را به مربی بزرگ ادا می‌کردند.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">هنرمندان و فرهیختگان</h3>
                  <p className="text-gray-700 text-right leading-relaxed">
                    اعضای گروه‌های تئاتر، نویسندگان محلی، و کسانی که در عرصه فرهنگ و هنر فعالیت داشتند، آمده بودند تا با استادی خداحافظی کنند که راه هنر را برایشان هموار کرده بود.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-rose-50 to-red-50 p-6 rounded-xl border border-rose-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">مردم شهر</h3>
                  <p className="text-gray-700 text-right leading-relaxed">
                    پیرمردان که یادشان از جوانی او بود، زنان خانه‌دار که فرزندانشان شاگرد او بودند، جوانانی که الهام‌بخش آن‌ها بود، همه آمده بودند.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Procession */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8 border-b-2 border-amber-400 pb-4">
            راهپیمایی عشق
          </h2>
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-gray-50 to-slate-50 p-8 rounded-xl border border-gray-200">
              <p className="text-lg leading-relaxed text-gray-800 text-right mb-6">
                تابوت او را بر دوش گرفتند؛ دست‌هایی که روزی قلم در آن‌ها بود، دست‌هایی که توپ فوتبال را هدایت می‌کرد، دست‌هایی که صفحات کتاب را ورق می‌زد. حالا آرام و محکم، آخرین سفر استاد را همراهی می‌کردند.
              </p>
              <p className="text-lg leading-relaxed text-gray-800 text-right">
                خیابان‌های سوق که روزی شاهد دویدن‌های او در تمرینات صبحگاهی بود، حالا شاهد آهسته‌ترین قدم‌های زندگی‌اش شده بود. مردم در دو طرف مسیر ایستاده بودند؛ برخی گل پراکنده می‌کردند، برخی دعا می‌خواندند، و برخی فقط در سکوت، احترام می‌گذاشتند.
              </p>
            </div>
            
            {/* ویدیوی دوم مراسم تشییع */}
            <div className="relative w-full overflow-hidden rounded-xl shadow-lg border border-gray-200 mb-8">
              <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                <video 
                  className="absolute top-0 left-0 w-full h-full object-cover" 
                  controls
                >
                  <source src="/tabs/final/2.mp4" type="video/mp4" />
                  مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
                </video>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm md:text-base text-right">لحظات تشییع پیکر استاد مسعود محمدی - بخش دوم</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl border border-amber-200">
                  <p className="text-gray-800 text-right leading-relaxed font-medium">
                    صدای ضجه و گریه در هوا پیچیده بود، اما نه گریه یأس، بلکه گریه محبت؛ اشک‌هایی که از عمق قلب می‌آمد و حکایت از عشقی داشت که مرگ نمی‌تواند آن را ببرد.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200">
                  <p className="text-gray-800 text-right leading-relaxed">
                    کودکان مدرسه که او را ندیده بودند اما نامش را شنیده بودند، با کنجکاوی نگاه می‌کردند؛ گویی می‌خواستند بفهمند چرا همه بزرگ‌ترها این‌قدر او را دوست دارند.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* At the Cemetery */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8 border-b-2 border-amber-400 pb-4">
            آرامگاه ابدی
          </h2>
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-gray-700 text-right">
              در گورستان، جمعیت انبوهی گرد آمده بود. امام جماعت با صدایی لرزان دعا خواند، و همه با او همراه شدند. لحظه‌ای که تابوت به خاک سپرده شد، سکوتی عمیق بر همه سایه انداخت؛ سکوتی که پر از احترام و محبت بود.
            </p>
            
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-8 rounded-xl border border-teal-200">
              <p className="text-lg leading-relaxed text-gray-800 text-right mb-4">
                یکی از شاگردان قدیمی‌اش، با صدایی شکسته گفت: «استاد، شما به ما یاد دادید که چگونه زندگی کنیم. حالا باید یاد بگیریم چگونه بدون شما زندگی کنیم.»
              </p>
              <p className="text-lg leading-relaxed text-gray-800 text-right">
                و دیگری افزود: «شما رفتید، اما درس‌هایتان در قلب ما جاودان خواهد ماند. هر بار که کتابی بخوانیم، شما را به یاد خواهیم آورد. هر بار که به کودکی مهربانی کنیم، شما را احساس خواهیم کرد.»
              </p>
            </div>
          </div>
        </div>

        {/* The Eternal Message */}
        <div className="bg-gradient-to-br from-slate-800 to-gray-900 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-8 text-amber-400">
            پیام جاودان
          </h2>
          <div className="space-y-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">✨</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <p className="text-xl leading-relaxed text-center mb-6">
                مسعود محمدی رفت، اما میراثش باقی ماند. در هر کلاس درسی که معلمی با مهربانی تدریس می‌کند، او حضور دارد. در هر زمین فوتبالی که جوانان با شور بازی می‌کنند، او هست. در هر صحنه تئاتری که هنرمندان با عشق اجرا می‌کنند، او زنده است.
              </p>
              
              <div className="border-t border-white/20 pt-6 mt-6">
                <p className="text-2xl font-bold text-center text-amber-400 mb-4">
                  «تخته سیاه، تا دنیا پابرجاست، پاک نخواهد شد»
                </p>
                <p className="text-lg text-center text-gray-300">
                  و نام مسعود محمدی، تا قلب‌ها می‌تپد، فراموش نخواهد شد.
                </p>
              </div>
            </div>
            
            <div className="text-center pt-8">
              <p className="text-lg text-gray-300 mb-4">
                به یاد استاد عزیز، مسعود محمدی
              </p>
              <p className="text-sm text-gray-400">
                ۶ اسفند ۱۳۳۳ - 31 تیرماه ۱۴۰۳
              </p>
              <p className="text-sm text-amber-400 mt-2">
                «معلم، مربی، هنرمند، ایران شناس
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
