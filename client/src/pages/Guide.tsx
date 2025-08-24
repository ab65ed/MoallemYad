export default function Guide() {
  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-memorial-blue mb-4" data-testid="page-title">
            دانای راه بلد
          </h1>
          <div className="w-24 h-1 bg-memorial-gold rounded-full mx-auto mb-8"></div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 min-h-96">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-memorial-cream p-6 rounded-lg text-center" data-testid="guide-card-1">
              <h3 className="text-xl font-bold text-memorial-blue mb-4">راهنمایی اول</h3>
              <div className="text-memorial-text">
                {/* محتوا */}
              </div>
            </div>
            <div className="bg-memorial-cream p-6 rounded-lg text-center" data-testid="guide-card-2">
              <h3 className="text-xl font-bold text-memorial-blue mb-4">راهنمایی دوم</h3>
              <div className="text-memorial-text">
                {/* محتوا */}
              </div>
            </div>
            <div className="bg-memorial-cream p-6 rounded-lg text-center" data-testid="guide-card-3">
              <h3 className="text-xl font-bold text-memorial-blue mb-4">راهنمایی سوم</h3>
              <div className="text-memorial-text">
                {/* محتوا */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
