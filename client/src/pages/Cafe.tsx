export default function Cafe() {
  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-memorial-blue mb-4" data-testid="page-title">
            کافه نادری
          </h1>
          <div className="w-24 h-1 bg-memorial-gold rounded-full mx-auto mb-8"></div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 min-h-96">
          <div 
            className="mb-8 rounded-lg overflow-hidden"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=400')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="bg-memorial-blue/30 p-8">
              <h2 className="text-white text-2xl font-bold text-center" data-testid="cafe-subtitle">
                فضایی برای گفتگوها و خاطرات
              </h2>
            </div>
          </div>
          <div className="prose prose-lg max-w-none text-right" data-testid="content-area">
            {/* محتوای مربوط به خاطرات و گفتگوهای دوستانه */}
          </div>
        </div>
      </div>
    </main>
  );
}
