export default function Gallery() {
  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-memorial-blue mb-4" data-testid="page-title">
            گالری
          </h1>
          <div className="w-24 h-1 bg-memorial-gold rounded-full mx-auto mb-8"></div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 min-h-96">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }, (_, i) => (
              <div 
                key={i}
                className="bg-memorial-cream rounded-lg p-6 text-center h-64 flex items-center justify-center hover:shadow-lg transition-shadow duration-200"
                data-testid={`gallery-item-${i + 1}`}
              >
                <span className="text-memorial-text">تصویر {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
