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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Opening Section - The Nature of Books */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
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
              <div className="relative group">
                <img 
                  src="/gallery/1000577623_1756036107282.jpg" 
                  alt="مسعود با کتاب"
                  className="w-full rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Iranian Literature */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-right mb-8 border-b-2 border-amber-400 pb-4">
            عاشق ادبیات ایرانی
          </h2>
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-gray-700 text-right">
              مسعود چهره‌ای یگانه بود؛ همدمی دیرین و عاشقِ کلمه. او چنان از رمان‌های ایرانی می‌گفت که عطش خواندن در جان شنونده می‌نشست: از «شلوارهای وصله‌دار» رسول پرویزی و «شازده احتجاب» گلشیری تا «همسایه‌ها»ی احمد محمود؛ از «مدیر مدرسه» آل‌احمد تا قصه‌های غبارآلود درویشیان.
            </p>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <img 
                  src="/gallery/1000577611_1756036684259.jpg" 
                  alt="مطالعه در کتابخانه"
                  className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                />
              </div>
              <div className="md:w-1/2">
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
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
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
                <img 
                  src="/gallery/1000577626_1756036107283.jpg" 
                  alt="کتابخانه شخصی"
                  className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Behman Beigi's Influence */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
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
                <img 
                  src="/gallery/1000577618_1756036593156.jpg" 
                  alt="درس و تدریس"
                  className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Book Exhibitions */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-right mb-8 border-b-2 border-amber-400 pb-4">
            همراهی در نمایشگاه کتاب
          </h2>
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-gray-700 text-right">
              همراهی با مسعود در نمایشگاه کتاب، خود روایتی دیگر داشت. کتاب‌ها را با چشمانی مشتاق ورق می‌زد، نام نویسنده‌ای را زیر لب زمزمه می‌کرد، گویی روحش را به میان شلوغی‌ها فرامی‌خوانَد.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img 
                  src="/gallery/1000577625_1756036569848.jpg" 
                  alt="در نمایشگاه کتاب"
                  className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                />
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-200">
                  <p className="text-gray-800 text-right leading-relaxed font-medium mb-4">
                    در هر غرفه می‌گفت: «این را باید بخوانم؛ اگر نخوانم، یک سال حسرتش بر دلم خواهد ماند.» و هرگز حسرت بر دل نمی‌گذاشت.
                  </p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                  <p className="text-gray-700 text-right leading-relaxed text-sm">
                    از «بادبادک‌باز» خالد حسینی که دریچه‌ای به جان مردم افغانستان می‌گشود، تا «منِ او» رضا امیرخانی، قصه‌ای از عشق و ایمان در میانه‌ی تقابل سنت و مدرنیته.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Literary Diversity */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-right mb-8 border-b-2 border-amber-400 pb-4">
            تنوع ادبی
          </h2>
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-8 rounded-xl border border-rose-200">
              <p className="text-gray-800 text-right leading-relaxed mb-4 font-medium">
                از «کوری» ساراماگو که در سکوت، فریادی عدالت‌خواهانه در گوش می‌نشاند، تا «زمستان ۶۲» اسماعیل فصیح که با اندوهی تلخ این جمله را به یاد می‌آورد: «این روزها در ایران هرکسی از سر خاک یکی بازمی‌گردد.»
              </p>
              <p className="text-gray-700 text-right leading-relaxed">
                و چون از «بینوایان» ویکتور هوگو یاد می‌کرد، چنان می‌گفت که گویی ژان والژان همین لحظه در کوچه‌های ما سرگردان است.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <img 
                  src="/gallery/1000577622_1756036593157.jpg" 
                  alt="بحث ادبی"
                  className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                />
              </div>
              <div className="md:w-1/2 space-y-4">
                <p className="text-gray-700 text-right leading-relaxed">
                  کدام خاطره و کدام کتاب را می‌توان ادامه داد؟ هر کتاب فریمی از فیلمی بی‌پایان است؛ نه حذف‌شدنی و نه فراموش‌کردنی.
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <p className="text-gray-800 text-right leading-relaxed text-sm italic">
                    باغ مارشال، شرق بهشت، قهر دریا، طاعون، آوای وحش، باغ بلور، سووشون، نفرین‌شدگان، پاییز پدرسالار، ابلوموف، دا، پاپیون، مدار صفر درجه…
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Broader Interests */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-right mb-8 border-b-2 border-amber-400 pb-4">
            علایق گسترده
          </h2>
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-gray-700 text-right">
              شور مطالعه‌اش به رمان محدود نبود؛ در نمایشنامه و سینما و تئاتر نیز حضوری هوشمند و اثرگذار داشت. در شعر، از شکوه شاهنامه‌ی فردوسی تا لطافت سپید و نو، همه را با جان و دل می‌ستود.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200 text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-3">شعر و ادب</h3>
                <p className="text-gray-700 text-sm text-right">از شاهنامه فردوسی تا شعر معاصر</p>
              </div>
              <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-6 rounded-xl border border-violet-200 text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-3">سیاست و تاریخ</h3>
                <p className="text-gray-700 text-sm text-right">تاریخ اجتماعی و سیاسی ایران و جهان</p>
              </div>
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-xl border border-sky-200 text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-3">ایران‌شناسی</h3>
                <p className="text-gray-700 text-sm text-right">کهگیلویه و بویراحمد</p>
              </div>
            </div>
          </div>
        </div>

        {/* Legacy */}
        <div className="bg-gradient-to-br from-slate-800 to-gray-900 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-8 text-amber-400">
            میراث ادبی
          </h2>
          <div className="space-y-8">
            <p className="text-xl leading-relaxed text-center">
              اکنون که جسم او از ما جداست، بی‌گمان یارانش هرگاه کتابی تازه برگشایند، در دل خواهند پرسید: «اگر مسعود این را می‌خواند، چه می‌گفت؟»
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <p className="text-lg leading-relaxed text-center mb-6">
                شاید در خلوت شب‌های آینده، در سکوتی سرشار، با ورق‌زدن کتابی، صدایش را بشنوند که آرام و شمرده، از شخصیت‌ها و مفاهیم سخن می‌گوید.
              </p>
              <p className="text-2xl font-bold text-center text-amber-400">
                آری، راز کتاب و کتاب‌خوانی همین است: همسفری که یک بار در این راه با تو گام زد، هرگز از کنارت نمی رود.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
