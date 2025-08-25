import { useState } from "react";
import { Quote, Heart, User, Calendar, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  author: string;
  role: string;
  date: string;
  title: string;
  content: string;
  category: "student" | "colleague" | "friend" | "family";
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    author: "احمد رضایی",
    role: "شاگرد دوره ابتدایی",
    date: "بهمن ۱۴۰۲",
    title: "معلمی که زندگی‌ام را دگرگون کرد",
    category: "student",
    content: `استاد مسعود محمدی نه تنها معلم من، بلکه راهنمای زندگی‌ام بود. در آن سال‌های دور که من کودکی خجالتی و کم‌اعتماد به نفس بودم، او بود که دستم را گرفت و به من نشان داد که می‌توانم بال بگشایم.

یادم هست روزی که در کلاس جغرافیا، از ترس نمی‌توانستم جواب سؤالش را بدهم. به جای آنکه مرا سرزنش کند، با لبخندی مهربان نزدیکم آمد و گفت: "احمد جان، تو می‌دانی جواب را، فقط کمی اعتماد به نفس لازم داری." آن لحظه، چیزی در درونم شکست و نوری تازه در قلبم روشن شد.

استاد مسعود روش‌های تدریسش منحصر به فرد بود. او جغرافیا را زنده می‌کرد؛ وقتی از کوه‌های البرز می‌گفت، گویی خودمان در دامنه‌های آن قله‌ها ایستاده بودیم. وقتی از دریای خزر حرف می‌زد، بوی شور آب در کلاس پیچیده بود.

اما فراتر از درس، او به ما زندگی یاد می‌داد. می‌گفت: "بچه‌ها، مهم نیست از کجا آمده‌اید، مهم این است که به کجا می‌روید." این جمله، راهنمای تمام زندگی‌ام شد.

حالا که خودم معلم شده‌ام، هر روز سعی می‌کنم ردی از مهربانی و حکمت استاد مسعود در کلاس‌هایم باشد. او نشانم داد که معلم بودن، رسالتی مقدس است؛ رسالت شکل‌دادن به آینده.`
  },
  {
    id: 2,
    author: "فاطمه کریمی",
    role: "همکار در آموزش و پرورش",
    date: "آذر ۱۴۰۲",
    title: "همکاری که درسی از انسانیت بود",
    category: "colleague",
    content: `بیست سال در کنار استاد مسعود کار کردم و هر روز چیز تازه‌ای از او آموختم. او نه تنها معلمی استثنایی، بلکه انسانی فوق‌العاده بود که زندگی همه ما را تحت تأثیر قرار داد.

یکی از ویژگی‌های بارز استاد، توجه به جزئیات بود. هرگز فراموش نمی‌کنم که چطور برای هر دانش‌آموز برنامه‌ای جداگانه داشت. می‌دانست کدام بچه به تشویق بیشتری نیاز دارد و کدام یک باید با روش‌های متفاوت درس بخواند.

در جلسات شورای معلمان، همیشه صدای مدافع دانش‌آموزان بود. می‌گفت: "ما باید پل باشیم، نه دیوار. باید راه را هموار کنیم، نه سخت‌تر." این نگاه، فضای مدرسه را دگرگون کرده بود.

استاد مسعود کتابخوانی بی‌نظیری بود. دفترش همیشه پر از یادداشت‌های جالب و نقل‌قول‌های الهام‌بخش بود. گاهی در تنفس، برایمان از کتاب‌هایی که خوانده بود می‌گفت و ما را تشویق می‌کرد که ما هم بخوانیم.

یادم هست روزی که یکی از دانش‌آموزان مشکل خانوادگی داشت و نمی‌توانست تمرکز کند. استاد مسعود ساعت‌ها با او صحبت کرد، از خانواده‌اش دیدن کرد و حتی کمک مالی هم به آن‌ها رساند. این کار را بی‌سر و صدا انجام داد و هرگز از آن حرفی نزد.

او به ما نشان داد که معلم بودن فقط تدریس نیست، بلکه مربی‌گری، راهنمایی و گاهی پدری کردن هم هست. استاد مسعود، الگوی همه ما بود و خواهد بود.`
  },
  {
    id: 3,
    author: "علی اکبر نوری",
    role: "دوست صمیمی",
    date: "دی ۱۴۰۲",
    title: "دوستی که مکتبی از وفا بود",
    category: "friend",
    content: `چهل سال دوست مسعود بودم و در این سال‌ها، او را نه تنها به عنوان دوست، بلکه به عنوان برادر، معلم و راهنما می‌شناختم. مسعود انسانی بود که دوستی با او، درسی از زندگی بود.

یکی از خاطرات شیرین‌ام، سفرهای مشترکمان به نقاط مختلف ایران است. مسعود راهنمای بی‌نظیری بود؛ نه تنها مسیرها را می‌شناخت، بلکه تاریخ و فرهنگ هر منطقه را هم به زیبایی تعریف می‌کرد. با او سفر کردن، مثل خواندن کتاب زنده‌ای از جغرافیا و تاریخ ایران بود.

مسعود آدم کتاب بود. خانه‌اش کتابخانه‌ای بود پر از کتاب‌های مختلف. هر بار که به دیدنش می‌رفتم، کتاب جدیدی به من معرفی می‌کرد. می‌گفت: "علی جان، این کتاب را باید بخوانی، زندگی‌ات را عوض می‌کند." و راست می‌گفت؛ بسیاری از کتاب‌هایی که از او شنیدم، نگاهم را به زندگی تغییر داد.

اما آنچه مسعود را متمایز می‌کرد، روح بزرگ و قلب مهربانش بود. هرگز کسی را ناامید از پیشش نفرستاد. اگر کسی مشکلی داشت، مسعود اولین نفری بود که کمک می‌کرد. این کمک‌ها نه برای تشکر، بلکه از روی محبت خالص بود.

یادم هست زمانی که خودم دچار مشکل مالی شده بودم و نمی‌دانستم چه کار کنم. مسعود بدون اینکه من چیزی بگویم، متوجه شد و بی‌سر و صدا کمکم کرد. وقتی خواستم تشکر کنم، گفت: "دوستی یعنی همین؛ در سختی‌ها کنار هم بودن."

مسعود رفت، اما یادش و تعلیماتش همیشه با ما خواهد بود. او نشان داد که زندگی زیبا، زندگی در خدمت دیگران است.`
  },
  {
    id: 4,
    author: "زهرا محمدی",
    role: "دختر استاد",
    date: "اسفند ۱۴۰۲",
    title: "پدری که مکتب عشق بود",
    category: "family",
    content: `نوشتن درباره پدرم، استاد مسعود محمدی، کاری است که هم دلم می‌خواهد و هم از آن می‌ترسم. دلم می‌خواهد چون او پدری بود بی‌نظیر، و می‌ترسم چون می‌دانم کلمات قادر نیستند عمق محبت و بزرگی او را بیان کنند.

پدرم نه تنها در مدرسه معلم بود، بلکه در خانه هم معلم ما بود. اما این تعلیم، نه با کتاب و دفتر، بلکه با عمل و رفتار بود. او به ما یاد داد که چطور انسان باشیم، چطور به دیگران احترام بگذاریم و چطور در زندگی معنا پیدا کنیم.

یکی از خاطرات شیرین کودکی‌ام، شب‌هایی است که پدرم برایمان قصه می‌گفت. اما قصه‌های او متفاوت بود؛ گاهی از سفرهایش می‌گفت، گاهی از کتاب‌هایی که خوانده بود، و گاهی قصه‌هایی می‌ساخت که در آن‌ها ما قهرمان بودیم. این قصه‌ها، تخیل ما را پرورش می‌داد و به ما یاد می‌داد که زندگی پر از امکانات زیباست.

پدرم همیشه می‌گفت: "بچه‌ها، مهم نیست چه شغلی انتخاب کنید، مهم این است که در آن شغل، انسان بمانید." این جمله، راهنمای زندگی من شده است.

وقتی بزرگ شدم و خودم مادر شدم، بیشتر متوجه شدم که پدرم چه انسان استثنایی بوده است. او با وجود مشغله‌های کاری، همیشه برای ما وقت داشت. هرگز احساس نکردیم که کار او از ما مهم‌تر است.

یکی از درس‌های بزرگی که از پدرم آموختم، عشق به مطالعه بود. خانه ما پر از کتاب بود و پدرم همیشه در حال خواندن. او به ما نشان داد که کتاب، بهترین دوست انسان است و مطالعه، راهی برای رشد روح است.

حالا که پدرم نیست، هر روز چیزی از او یاد می‌گیرم. صدایش را در گوشم می‌شنوم، نصایحش را به یاد می‌آورم و سعی می‌کنم راهش را ادامه دهم. او رفت، اما عشق و تعلیماتش همیشه با ما خواهد بود.

پدر عزیزم، تو نه تنها پدر من بودی، بلکه معلم زندگی‌ام بودی. ممنونم که به من یاد دادی چطور زندگی کنم، چطور عشق بورزم و چطور انسان باشم.`
  },
  {
    id: 5,
    author: "محمد حسن پور",
    role: "شاگرد دوره راهنمایی",
    date: "بهمن ۱۴۰۲",
    title: "معلمی که امید را زنده کرد",
    category: "student",
    content: `من یکی از آن دانش‌آموزانی بودم که همه فکر می‌کردند آینده‌ای ندارم. خانواده‌ام فقیر بود، نمرات‌ام پایین، و اعتماد به نفسم صفر. تا اینکه استاد مسعود محمدی وارد زندگی‌ام شد و همه چیز تغییر کرد.

اولین باری که استاد مسعود مرا دید، چیزی در نگاهش بود که تا آن موقع در چشم هیچ معلمی ندیده بودم: امید. او نگاهم نمی‌کرد که ببیند چه کم‌آوردگی‌هایی دارم، بلکه نگاهش این بود که ببیند چه استعدادهایی در من نهفته است.

یادم هست روزی که در کلاس جغرافیا، سؤالی پرسید و من جواب اشتباهی دادم. بقیه بچه‌ها خندیدند، اما استاد مسعود گفت: "محمد، جوابت کاملاً درست نیست، اما نکته جالبی گفتی. بیا کمی بیشتر فکر کنیم." آن لحظه، برای اولین بار در زندگی‌ام احساس کردم که نظرم ارزش دارد.

استاد مسعود متوجه شده بود که من مشکل مالی دارم. یک روز بعد از کلاس، مرا کنار کشید و گفت: "محمد، می‌خواهی بعد از مدرسه کمکم کنی کتاب‌های کتابخانه را مرتب کنم؟ البته در ازای این کار، مقداری پول هم می‌گیری." من می‌دانستم که او فقط می‌خواهد کمکم کند، اما طوری گفته بود که غرورم جریحه‌دار نشود.

آن بعدازظهرها در کتابخانه، نقطه عطف زندگی‌ام بود. استاد مسعود در حین مرتب کردن کتاب‌ها، برایم از آن‌ها می‌گفت. کتاب‌هایی که تا آن موقع برایم مثل دیوار بودند، ناگهان دریچه‌هایی شدند به دنیای جدید.

او به من یاد داد که فقر مالی، فقر فکری نیست. گفت: "محمد، تو می‌توانی هر چیزی که بخواهی باشی. فقط باید باور داشته باشی و تلاش کنی." این جمله، شعار زندگی‌ام شد.

حالا که خودم مهندس شده‌ام و زندگی خوبی دارم، می‌دانم که همه اینها مدیون استاد مسعودم. او نه تنها به من درس یاد داد، بلکه به من زندگی یاد داد. او نشان داد که هر انسانی، صرف‌نظر از وضعیت اجتماعی‌اش، می‌تواند بدرخشد.

استاد مسعود، شما فرشته زندگی من بودید. ممنونم که باور داشتید، ممنونم که امید دادید، و ممنونم که نشان دادید زندگی زیباست.`
  },
  {
    id: 6,
    author: "مریم صادقی",
    role: "همکار و دوست خانوادگی",
    date: "دی ۱۴۰۲",
    title: "خانواده‌ای که مکتب محبت بود",
    category: "friend",
    content: `بیست و پنج سال است که خانواده محمدی را می‌شناسم و در این سال‌ها، آن‌ها را نه تنها دوست، بلکه خانواده دوم خودم می‌دانم. استاد مسعود و خانم فریبا، زوجی بودند که زندگی مشترکشان درسی از عشق، احترام و همراهی بود.

خانه آن‌ها همیشه پر از مهمان بود؛ شاگردان، همکاران، دوستان و حتی غریبه‌هایی که به کمک نیاز داشتند. استاد مسعود و خانم فریبا با چنان گرمی از همه پذیرایی می‌کردند که هر کس احساس می‌کرد عضوی از خانواده است.

یکی از خاطرات شیرین‌ام، شب‌های جمعه در خانه آن‌هاست. استاد مسعود کتاب‌های جدیدش را نشانمان می‌داد، از سفرهایش می‌گفت، و ما ساعت‌ها گپ می‌زدیم. این گپ‌ها نه فقط سرگرمی، بلکه درس‌هایی از زندگی بود.

استاد مسعود پدری مهربان و دلسوز بود. فرزندانش را نه با اجبار، بلکه با عشق و منطق تربیت می‌کرد. همیشه می‌گفت: "بچه‌ها باید آزاد باشند تا شخصیت واقعی‌شان شکل بگیرد." و این آزادی، همراه با محبت و راهنمایی بود.

خانم فریبا هم زنی فوق‌العاده بود که در کنار استاد مسعود، خانه‌ای پر از عشق و آرامش ساخته بود. آن‌ها نشان دادند که ازدواج موفق، یعنی همراهی در تمام لحظات زندگی.

یادم هست زمانی که خودم مشکل خانوادگی داشتم و نمی‌دانستم چه کار کنم. استاد مسعود و خانم فریبا ساعت‌ها با من صحبت کردند، مشورت دادند و حمایتم کردند. آن‌ها نشان دادند که دوستی واقعی یعنی چه.

حالا که استاد مسعود نیست، خانه آن‌ها هنوز پر از عشق است، اما حس می‌کنیم چیزی کم است. او ستون خانواده بود، اما میراثش همچنان زنده است. فرزندانش راه او را ادامه می‌دهند و خانم فریبا با صبر و استقامت، خانواده را حفظ می‌کند.

استاد مسعود و خانواده‌اش به ما نشان دادند که زندگی زیبا، زندگی در کنار عزیزان است. آن‌ها الگوی همه ما بودند و خواهند بود.`
  }
];

export default function Mirror() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const filteredTestimonials = selectedCategory === "all" 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory);

  const totalPages = Math.ceil(filteredTestimonials.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTestimonials = filteredTestimonials.slice(startIndex, startIndex + itemsPerPage);

  const categoryNames = {
    all: "همه",
    student: "شاگردان",
    colleague: "همکاران", 
    friend: "دوستان",
    family: "خانواده"
  };

  const categoryIcons = {
    student: "👨‍🎓",
    colleague: "👥",
    friend: "🤝",
    family: "❤️"
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23667eea' fill-opacity='0.1'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50">
            <div className="flex items-center justify-center mb-6">
              <Quote className="w-12 h-12 text-[#00a693] ml-4" />
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 font-serif" data-testid="page-title">
                در آینه دیگران
              </h1>
              <Quote className="w-12 h-12 text-[#00a693] mr-4 rotate-180" />
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-[#00a693] to-[#eeaa22] rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              دل‌نوشته‌ها و خاطرات کسانی که زندگی‌شان را استاد مسعود محمدی لمس کرده است
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Category Filter */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-6 mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(categoryNames).map(([key, name]) => (
              <button
                key={key}
                onClick={() => {
                  setSelectedCategory(key);
                  setCurrentPage(1);
                }}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === key
                    ? 'bg-gradient-to-r from-[#00a693] to-[#eeaa22] text-white shadow-lg scale-105'
                    : 'bg-[#dfdfdf] text-gray-700 hover:bg-[#aab1b5] hover:text-white hover:scale-105'
                }`}
              >
                {key !== 'all' && categoryIcons[key as keyof typeof categoryIcons]} {name}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="space-y-12">
          {currentTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex`}
            >
              {/* Content Side */}
              <div className="flex-1 p-8 lg:p-12">
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-gradient-to-r from-[#00a693] to-[#eeaa22] rounded-full text-white ml-4">
                        <User className="w-6 h-6" />
                      </div>
                      <div className="text-right">
                        <h3 className="text-2xl font-bold text-gray-800 mb-1">
                          {testimonial.author}
                        </h3>
                        <p className="text-[#00a693] font-medium">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 text-right leading-tight">
                      {testimonial.title}
                    </h2>
                  </div>
                  <div className="flex items-center text-gray-500 mr-4">
                    <Calendar className="w-5 h-5 ml-2" />
                    <span className="text-sm">{testimonial.date}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none text-right">
                  {testimonial.content.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-700 leading-relaxed mb-6 text-justify">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-8 border-t border-gray-200">
                  <div className="flex items-center">
                    <Heart className="w-5 h-5 text-red-500 ml-2" />
                    <span className="text-gray-600 text-sm">با محبت نوشته شده</span>
                  </div>
                  <div className="text-2xl">
                    {categoryIcons[testimonial.category as keyof typeof categoryIcons]}
                  </div>
                </div>
              </div>

              {/* Decorative Side */}
              <div className="lg:w-2 bg-gradient-to-b from-[#00a693] via-[#eeaa22] to-[#aab1b5]"></div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center mt-16 space-x-4 space-x-reverse">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 ml-2" />
              صفحه قبل
            </button>
            
            <div className="flex space-x-2 space-x-reverse">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-12 h-12 rounded-xl font-medium transition-all duration-300 ${
                    currentPage === page
                      ? 'bg-gradient-to-r from-[#00a693] to-[#eeaa22] text-white shadow-lg scale-110'
                      : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-[#dfdfdf] shadow-lg border border-gray-200/50'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              صفحه بعد
              <ChevronLeft className="w-5 h-5 mr-2" />
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-20 bg-gradient-to-r from-slate-800 to-gray-900 rounded-3xl shadow-2xl p-8 lg:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">
            شما هم خاطره‌ای از استاد دارید؟
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            اگر شما نیز خاطره یا دل‌نوشته‌ای از استاد مسعود محمدی دارید، خوشحال می‌شویم آن را با ما و دیگران به اشتراک بگذارید
          </p>
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#00a693] to-[#eeaa22] rounded-xl font-medium hover:from-[#00a693]/80 hover:to-[#eeaa22]/80 transition-all duration-300 hover:scale-105 shadow-lg">
            <Heart className="w-6 h-6 ml-3" />
            ارسال خاطره
          </div>
        </div>

      </div>
    </main>
  );
}
