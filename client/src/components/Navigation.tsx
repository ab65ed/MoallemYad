"use client";

export default function Navigation() {
  return (
    <div className="w-full">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-gray-900/85 backdrop-blur">
        <div className="mx-auto w-full px-4 md:px-6">
          <div className="h-14 md:h-16 flex items-center justify-between">
            <img
              src="/icons/navbar.svg"
              alt="icon"
              className="w-6 h-6 md:w-7 md:h-7 opacity-85"
            />
            <h1 className="text-white text-sm md:text-base font-medium text-center select-none">
              یادبود مجازی هنرمند همیشه معلم; مسعود محمدی
            </h1>
            <img
              src="/icons/navbar.svg"
              alt="icon"
              className="w-6 h-6 md:w-7 md:h-7 opacity-85"
            />
          </div>
        </div>
      </header>
      {/* Spacer to prevent content being hidden behind fixed header */}
      <div className="h-14 md:h-16" />
    </div>
  );
}
