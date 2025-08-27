export default function Cafe() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-24">
        {/* Background Banner */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/gallery/1000577610_1756036684259.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-8 bg-gray-900/80 rounded-2xl backdrop-blur-sm border border-gray-700/50">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-serif" data-testid="page-title">
              کافه نادری
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              «کتاب، این رفیق خاموش و بی‌تکلّف، آینه‌ای است که هم جهان را بازمی‌تاباند و هم ژرفای درون را»
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animated-grid-bg rounded-2xl">
        
        {/* Opening Section - The Nature of Books */}
        <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-2/3">
              <p className="text-lg leading-relaxed text-gray-700 text-right font-medium mb-6">
                کتاب، این رفیق خاموش و بی‌تکلّف، آینه‌ای است که هم جهان را بازمی‌تاباند و هم ژرفای درون را. از نخستین دم که بشر اندیشه‌هایش را بر لوح گلی یا کاغذی نقش زد، کتاب فانوسی شد برای گذر از تاریکی‌ها؛ راه‌گشای تمدن بیرونی و چراغ سلوک درونی.
              </p>
              <div className="bg-amber-50 border-r-4 border-amber-400 p-6 rounded-lg">
                <p className="text-gray-800 text-right leading-relaxed">
                  لیک نه هر دست که کتابی می‌گیرد، کتاب‌خوان است؛ کتاب‌خوان راستین آن است که نه برای کشتن وقت، که برای زنده کردن روح و فهمیدن جهان، ورق بر ورق را بگشاید.
                </p>
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="relative group arena-image-wrapper">
                <img 
                  src="/tabs/cafe/1.png" 
                  alt="کافه نادری - فضای مطالعه"
                  className="w-full rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Iranian Literature */}
        <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-right mb-8 border-b-2 border-amber-400 pb-4">
            عاشق ادبیات ایرانی
          </h2>
          <div className="space-y-8">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="lg:w-1/3 order-2 lg:order-1">
                <div className="relative group arena-image-wrapper">
                  <img 
                    src="/tabs/cafe/2.png" 
                    alt="کافه نادری - ادبیات ایرانی"
                    className="w-full rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="lg:w-2/3 order-1 lg:order-2 space-y-6">
                <p className="text-lg leading-relaxed text-gray-700 text-right">
                  مسعود چهره‌ای یگانه بود؛ همدمی دیرین و عاشقِ کلمه. او چنان از رمان‌های ایرانی می‌گفت که عطش خواندن در جان شنونده می‌نشست: از «شلوارهای وصله‌دار» رسول پرویزی و «شازده احتجاب» گلشیری تا «همسایه‌ها»ی احمد محمود؛ از «مدیر مدرسه» آل‌احمد تا قصه‌های غبارآلود درویشیان.
                </p>
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
                  <p className="text-gray-800 text-right leading-relaxed mb-4">
                    درباره‌ی «کلیدر» دولت‌آبادی آن‌چنان سخن می‌راند که شخصیت‌ها زنده می‌شدند و گویی از دشت‌های خراسان قدم به کوچه‌های شهر کوچکمان می‌گذاشتند.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* World Literature */}
        <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-right mb-8 border-b-2 border-amber-400 pb-4">
            پرواز در ادبیات جهان
          </h2>
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-gray-700 text-right">
              اما پرواز ذهن مسعود در مرزهای ایران متوقف نمی‌مانْد. گاه از پلکان کلمات بالا می‌رفت و خود را در سن‌پترزبورگ داستایوفسکی می‌یافت؛ جایی که «راسكولنیكوف» در میانه‌ی خون و وجدان دست‌وپا می‌زد.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                  <p className="text-gray-800 text-right leading-relaxed font-medium mb-4">
                    گاه با همینگوی به دل اقیانوس می‌زد، هم‌قدم با پیرمرد کوبایی که طناب را با صبری تلخ در مشت می‌فشرد و در پی ماهی افسانه‌ای‌اش می‌رفت.
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <p className="text-gray-700 text-right leading-relaxed text-sm">
                    کلام مسعود، ثمره‌ی سال‌ها انس با کتاب، بر جان می‌نشست؛ یادآور این نکته‌ی حکیمانه که: «کتاب نه تنها آینه‌ی نویسنده، که آینه‌ی خواننده نیز هست»
                  </p>
                </div>
              </div>
              <div>
                <div className="relative group arena-image-wrapper">
                  <img 
                    src="/tabs/cafe/3.png" 
                    alt="کافه نادری - فضای مطالعه"
                    className="w-full rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Behman Beigi's Influence */}
        <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-right mb-8 border-b-2 border-amber-400 pb-4">
            تأثیر حضرت بهمن‌بیگی
          </h2>
          <div className="space-y-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3 space-y-6">
                <p className="text-lg leading-relaxed text-gray-700 text-right">
                  از میان چهره‌هایی که مسیر زندگی‌اش را دگرگون ساختند، محمد بهمن‌بیگی جایگاهی ویژه داشت؛ همان که مسعود همواره با احترام، او را «حضرت بهمن‌بیگی» می‌خواند.
                </p>
                <div className="bg-green-50 border-r-4 border-green-400 p-6 rounded-lg">
                  <p className="text-gray-800 text-right leading-relaxed mb-4">
                    «اگر قره‌قاج نبود» صرفاً خاطره نبود، سندی بود از دگرگونی‌های اجتماعی؛ و «بخارای من، ایل من» تنها عنوانی شاعرانه نبود، که حکایت هویت و ریشه‌ها بود.
                  </p>
                  <p className="text-gray-700 text-right leading-relaxed text-sm">
                    مسعود باور داشت بهمن‌بیگی واژه‌ها را چون بذر بر خاک ذهن کودکان عشایر می‌پاشید، و این بذرها روزی تا افق‌های بی‌انتها ریشه می‌دوانند.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/3">
                <div className="relative group arena-image-wrapper">
                  <img 
                    src="/tabs/cafe/4.png" 
                    alt="کافه نادری - فضای مطالعه"
                    className="w-full rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legacy */}
        <div className="bg-gradient-to-br from-slate-800 to-gray-900 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-8 text-amber-400">
            میراث ادبی کافه نادری
          </h2>
          <div className="space-y-8">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/3">
                <div className="relative group arena-image-wrapper">
                  <img 
                    src="/tabs/cafe/1.png" 
                    alt="کافه نادری - میراث ادبی"
                    className="w-full rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border-2 border-amber-400"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="lg:w-2/3">
                <p className="text-xl leading-relaxed text-right">
                  کافه نادری، پاتوق روشنفکران و نویسندگان، جایی که کلمات در آن جان می‌گیرند و داستان‌ها شکل می‌گیرند. فضایی که در آن، ادبیات نفس می‌کشد.
                </p>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 mt-6">
                  <p className="text-lg leading-relaxed text-right mb-6">
                    در گوشه‌ای از این کافه، شاید صادق هدایت نشسته بود و «بوف کور» را می‌نوشت، و در گوشه‌ای دیگر، شاید جلال آل احمد درباره «غرب‌زدگی» می‌اندیشید.
                  </p>
                  <p className="text-2xl font-bold text-right text-amber-400">
                    کافه نادری، نه فقط یک مکان، بلکه بخشی از تاریخ فرهنگی و ادبی ایران است.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
