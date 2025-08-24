export default function Final() {
  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-memorial-blue mb-4" data-testid="page-title">
            سکانس آخر
          </h1>
          <div className="w-24 h-1 bg-memorial-gold rounded-full mx-auto mb-8"></div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 min-h-96">
          <div 
            className="text-center mb-8 rounded-lg overflow-hidden"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=400')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="bg-memorial-blue/40 p-12">
              <h2 className="text-white text-3xl font-bold mb-4" data-testid="final-title">
                به یاد ماندنی
              </h2>
              <p className="text-white text-lg" data-testid="final-subtitle">
                پیام نهایی و خداحافظی
              </p>
            </div>
          </div>
          <div className="prose prose-lg max-w-none text-right text-center" data-testid="content-area">
            {/* پیام نهایی و تقدیر */}
          </div>
        </div>
      </div>
    </main>
  );
}
