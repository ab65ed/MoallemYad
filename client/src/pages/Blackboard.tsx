export default function Blackboard() {
  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-memorial-blue mb-4" data-testid="page-title">
            تخته سیاه
          </h1>
          <div className="w-24 h-1 bg-memorial-gold rounded-full mx-auto mb-8"></div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 min-h-96">
          <div 
            className="bg-gray-800 rounded-lg p-8 mb-8"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=400')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="bg-gray-900/50 rounded p-4">
              <p className="text-white text-center text-lg" data-testid="blackboard-content">
                {/* محتوای مربوط به تخته سیاه و روش‌های تدریس استاد */}
              </p>
            </div>
          </div>
          <div className="prose prose-lg max-w-none text-right" data-testid="content-area">
            {/* محتوای تکمیلی این بخش در اینجا قرار خواهد گرفت */}
          </div>
        </div>
      </div>
    </main>
  );
}
