export default function Home() {
  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.05) 25%, #aab1b5 100%)'
    }}>
      {/* Hero Section */}
      <section className="h-[70vh] flex">
        {/* تصویر سمت راست */}
        <div className="w-1/2 h-full flex items-center justify-center">
          <img 
            src="/hero/right.png" 
            alt="Hero Right" 
            className="w-full h-auto object-contain"
          />
        </div>
        
        {/* تصویر سمت چپ */}
        <div className="w-1/2 h-full flex items-center justify-center">
          <img 
            src="/hero/left 2.png" 
            alt="Hero Left" 
            className="w-full h-auto object-contain"
          />
        </div>
      </section>
    </div>
  );
}
