export default function Canvas() {
  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-memorial-blue mb-4" data-testid="page-title">
            بوم رنگ خیال
          </h1>
          <div className="w-24 h-1 bg-memorial-gold rounded-full mx-auto mb-8"></div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 min-h-96">
          <div className="text-center mb-8">
            <div className="w-full h-64 bg-gradient-to-br from-memorial-blue via-memorial-gold to-memorial-green rounded-lg shadow-inner flex items-center justify-center" data-testid="canvas-visual">
              <p className="text-white text-xl font-medium">محتوای هنری و خلاقانه</p>
            </div>
          </div>
          <div className="prose prose-lg max-w-none text-right" data-testid="content-area">
            {/* محتوای مربوط به جنبه‌های هنری و خلاقانه شخصیت استاد */}
          </div>
        </div>
      </div>
    </main>
  );
}
