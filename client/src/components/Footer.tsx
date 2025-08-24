export default function Footer() {
  return (
    <footer className="bg-memorial-blue text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4" data-testid="footer-title">
            به یاد استاد گرامی
          </h3>
          <p className="text-lg text-gray-200 mb-6" data-testid="footer-quote">
            "علم آموختن و آموزاندن، رسالت زندگی"
          </p>
          <div className="w-24 h-1 bg-memorial-gold rounded-full mx-auto"></div>
        </div>
      </div>
    </footer>
  );
}
