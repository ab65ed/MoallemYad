export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-memorial-blue text-white">
        <div 
          className="absolute inset-0 bg-gradient-to-l from-memorial-blue/80 to-memorial-blue/60"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="hero-title">
              به یاد استاد گرامی
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed" data-testid="hero-description">
              جایگاه ویژه‌ای برای گرامیداشت یادبود و معرفی شخصیت علمی و انسانی استاد محترم
            </p>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-memorial-gold rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-memorial-blue mb-6" data-testid="about-title">
              درباره این مجموعه
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="text-lg text-gray-600 leading-relaxed space-y-4" data-testid="content-area">
                <p>
                  {/* محتوای معرفی کلی سایت در اینجا قرار خواهد گرفت */}
                </p>
                <p>
                  {/* توضیحات تکمیلی درباره هدف و ساختار سایت */}
                </p>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Academic setting" 
              className="rounded-lg shadow-lg w-full h-auto"
              data-testid="hero-image"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
