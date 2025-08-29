import { useLocation } from "wouter";
import { Home, ArrowRight, BookOpen, Map, Coffee } from "lucide-react";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const navigateToSection = (path: string) => {
    setLocation(path);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-100 to-blue-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">

          {/* Main Error Display */}
          <div className="mb-12">
            <div className="inline-block p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 mb-8">
              <div className="text-8xl md:text-9xl font-bold text-transparent bg-gradient-to-r from-memorial-blue to-memorial-gold bg-clip-text mb-4">
                ۴۰۴
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-memorial-blue to-memorial-gold rounded-full mx-auto"></div>
            </div>
          </div>

          {/* Persian Message */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12 mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-right">
              صفحه مورد نظر یافت نشد
            </h1>
            <div className="space-y-4 text-right">
              <p className="text-lg text-gray-700 leading-relaxed">
                صفحه‌ای که به دنبال آن بودید پیدا نشد.
              </p>
              <p className="text-gray-600 leading-relaxed">
                لطفاً مسیر خود را بررسی کنید یا از گزینه‌های زیر برای ادامه استفاده نمایید.
              </p>
            </div>
          </div>

          {/* Navigation Options */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

            {/* Home */}
            <div
              onClick={() => navigateToSection('/')}
              className="group bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 p-6 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-white group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                  <Home className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">خانه</h3>
                  <p className="text-sm text-gray-600">بازگشت به صفحه اصلی</p>
                </div>
              </div>
            </div>

            {/* Blackboard */}
            <div
              onClick={() => navigateToSection('/blackboard')}
              className="group bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 p-6 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-gradient-to-r from-slate-700 to-slate-800 rounded-full text-white group-hover:from-slate-800 group-hover:to-slate-900 transition-all duration-300">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">تخته سیاه</h3>
                  <p className="text-sm text-gray-600">زندگی‌نامه استاد</p>
                </div>
              </div>
            </div>

            {/* Guide */}
            <div
              onClick={() => navigateToSection('/guide')}
              className="group bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 p-6 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full text-white group-hover:from-emerald-600 group-hover:to-emerald-700 transition-all duration-300">
                  <Map className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">دانای راه بلد</h3>
                  <p className="text-sm text-gray-600">سفرهای جغرافیایی</p>
                </div>
              </div>
            </div>

            {/* Cafe */}
            <div
              onClick={() => navigateToSection('/cafe')}
              className="group bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 p-6 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full text-white group-hover:from-amber-600 group-hover:to-amber-700 transition-all duration-300">
                  <Coffee className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">کافه نادری</h3>
                  <p className="text-sm text-gray-600">عشق به کتاب و ادبیات</p>
                </div>
              </div>
            </div>

          </div>

          {/* Inspirational Quote */}
          <div className="bg-gradient-to-r from-slate-800 to-gray-900 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto">
              <div className="text-6xl text-memorial-gold mb-6">"</div>
              <p className="text-xl md:text-2xl leading-relaxed text-center mb-6 font-medium">
                هر راه گمشده، آغازی است برای یافتن مسیری نو
              </p>
              <div className="flex items-center justify-center space-x-4 space-x-reverse">
                <div className="w-12 h-0.5 bg-gradient-to-r from-memorial-gold to-transparent"></div>
                <p className="text-memorial-gold font-medium">به یاد استاد مسعود محمدی</p>
                <div className="w-12 h-0.5 bg-gradient-to-l from-memorial-gold to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-12">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center space-x-2 space-x-reverse bg-memorial-blue hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <ArrowRight className="w-5 h-5" />
              <span>بازگشت به صفحه قبل</span>
            </button>
          </div>

        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-memorial-gold/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-memorial-blue/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-emerald-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
    </main>
  );
}
