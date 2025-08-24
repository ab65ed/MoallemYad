export default function Arena() {
  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-memorial-blue mb-4" data-testid="page-title">
            گوی و میدان
          </h1>
          <div className="w-24 h-1 bg-memorial-gold rounded-full mx-auto mb-8"></div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 min-h-96">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img 
                src="https://pixabay.com/get/g53c8a0720258cfd9bbbe121b1a172bf592fd1df21f494a7667aa9bfc16b17c8c7e7e8a70236df695318c0af608044bf50ca99bfe55bbb3b7a7a3419c35d9e70d_1280.jpg" 
                alt="Academic discussion" 
                className="rounded-lg shadow-lg w-full h-auto"
                data-testid="arena-image"
              />
            </div>
            <div className="prose prose-lg max-w-none text-right" data-testid="content-area">
              {/* محتوای مربوط به بحث‌های علمی و فکری استاد */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
