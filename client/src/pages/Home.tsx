export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Perfect Hero Section - Full width responsive images */}
      <section className="hero-section">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="/hero/desktop.png"
            type="image/png"
          />
          <source
            media="(min-width: 768px) and (max-width: 1023px)"
            srcSet="/hero/tablet.png"
            type="image/png"
          />
          <source
            media="(max-width: 767px)"
            srcSet="/hero/mobile.png"
            type="image/png"
          />
          <img
            src="/hero/desktop.png"
            alt="معلم یاد - صفحه اصلی"
            loading="eager"
            decoding="async"
            data-testid="hero-image-responsive"
          />
        </picture>
      </section>

      {/* Biography Text Section with gradient blend */}
      <section className="biography-section">
        <div className="sharp-edge-right"></div>
        <div className="sharp-edge-left"></div>
        <div className="sharp-edge-bottom"></div>
        <div className="biography-container">
          {/* Title Section with Sparrow */}
          <div className="biography-title-section">
            <div className="title-header">
              <h1 className="biography-title">مسعود محمدی</h1>
              <img 
                src="/gonjeshk.png" 
                alt="گنجشک" 
                className="sparrow-icon"
              />
            </div>
            <div className="title-underline"></div>
          </div>
          
          <p className="biography-text">
            کلاسِ بچگیِ مسعود محمدی به جبر روزگار بوی ترکه و ترس می‌داد و در نوجوانی دلش با معلمی ساز نبود. اما قدم که به دانشسرای محمد بهمن‌بیگی گذاشت، ورق زندگی برگشت. مسعود معلم شد، به زادگاهش بازگشت و در کلاس به جای اخم، لبخند نشاند؛ به جای تنبیه، اعتماد و تشویق آورد. در سی سال معلمی افقی تازه پیش چشم شاگردانش گشود تا به کودکان سوق بیاموزد که می‌توانند فراتر از آنچه در اطرافشان می‌بینند، باشند.
            <br /><br />
            در میدان ورزش نیز همین راه را ادامه داد. مسعود خود بازیکنی توانمند بود، مربی‌ای کاردان و مفسری دقیق. با کمترین بودجه و دلی انباشته از همت، داوطلبانه مجموعه‌ای ورزشی برپا کرد تا استعدادها از خانه ها و کوچه های گلِی و خاکی،جوانه بزنند. رقابت سالم را رسم کرد و استادیوم شهر را به جایگاهی برای شور و شادی جوانان تبدیل نمود.
            <br /><br />
            کنشگری اجتماعی او با استعدادهای هنری‌اش درآمیخته بود. مسعود محمدی نمایش‌های فاخر ایرانی و جهانی را به زبان مردم روی صحنه آورد تا مسائل روزِ جامعه روشن‌تر شود. جوان‌ها را گرد آورد، گروه ساخت و از کوچه‌های سوق تا تالار وحدت، نام شهر را آبرومندانه بر زبان‌ها انداخت. مسعود نشان داد اگر هنر به جان مردم گره بخورد، مدرسه‌ای بی‌زنگ و دفتری است که انسانیت را زنده‌تر می‌کند. در روزنامه نیز از حقِ شهری نوشت که باید سهم خود را بگیرد و آن‌قدر پیگیر ماند تا کار از گفتن به شدن برسد.
            <br /><br />
            کتاب یار همیشگی‌اش بود. هرچه مسعود می‌خواند با زبانی ساده و شیرین در حلقه‌های دوستانه بازمی‌گفت؛ از داستان و تاریخ تا جغرافیا و هنر، گفت‌وگو را به جای خطابه می‌نشاند و شنونده را شریک اندیشه می‌کرد. ایران را وجب به وجب پیموده بود؛ روستا و شهر، کویر و جنگل، کوه و دریا را می‌شناخت و از لهجه‌ها، غذاها و آیین‌های هر دیار آگاه بود. با همه این سفرها، ریشه، مسعود محمدی را در خاک زادگاهش نگه داشت. همان‌جا ماند، همان‌جا کاشت و همان‌جا رویاند تا نامش در یاد شاگردان و مردم شهر بماند.
          </p>
        </div>
      </section>

      {/* Content Section with gradient background */}
      <div
        className="min-h-screen px-4 sm:px-6 lg:px-8"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.05) 25%, #aab1b5 100%)",
        }}
      >
        {/* Additional content can be added here */}
      </div>
    </div>
  );
}
