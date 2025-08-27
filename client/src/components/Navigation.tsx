"use client";

export default function Navigation() {
  return (
    <div className="w-full">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#00a693]">
        <div className="mx-auto w-full px-4 md:px-6">
          <div className="h-12 md:h-14 flex items-center justify-between">
            <img
              src="/icons/navbar.svg"
              alt="icon"
              className="w-6 h-6 md:w-7 md:h-7 opacity-85"
            />
            <h1 className="text-white text-[13px] md:text-sm font-medium text-center select-none">
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
      <div className="h-12 md:h-14" />
    </div>
  );
}
