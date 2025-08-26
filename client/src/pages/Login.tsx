import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '@/contexts/AuthContext';
import { Lock, User, Eye, EyeOff, Shield, AlertCircle } from 'lucide-react';

export default function Login() {
  const [, setLocation] = useLocation();
  const { login, isAuthenticated } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);

  // اگر کاربر قبلاً وارد شده، به داشبورد هدایت شود
  useEffect(() => {
    if (isAuthenticated) {
      setLocation('/admin');
    }
  }, [isAuthenticated, setLocation]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // محدودیت تعداد تلاش
    if (attempts >= 5) {
      setError('تعداد تلاش‌های شما بیش از حد مجاز است. لطفاً 15 دقیقه صبر کنید.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // استفاده از AuthContext برای login
        login(data.token, data.user);
        
        // هدایت به داشبورد
        setLocation('/admin');
      } else {
        setError(data.error || 'نام کاربری یا رمز عبور اشتباه است');
        setAttempts(prev => prev + 1);
      }
    } catch (error) {
      setError('خطا در اتصال به سرور');
      setAttempts(prev => prev + 1);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#00a693] to-[#eeaa22] rounded-full mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            ورود مدیریت
          </h1>
          <p className="text-gray-300">
            دسترسی به پنل مدیریت سایت
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                نام کاربری
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="block w-full pr-10 pl-3 py-3 border border-white/20 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00a693] focus:border-transparent"
                  placeholder="نام کاربری خود را وارد کنید"
                  required
                  autoComplete="username"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                رمز عبور
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="block w-full pr-10 pl-12 py-3 border border-white/20 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00a693] focus:border-transparent"
                  placeholder="رمز عبور خود را وارد کنید"
                  required
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 left-0 pl-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                <p className="text-red-300 text-sm">{error}</p>
              </div>
            )}

            {/* Attempts Warning */}
            {attempts > 2 && attempts < 5 && (
              <div className="flex items-center gap-2 p-3 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
                <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <p className="text-yellow-300 text-sm">
                  تعداد تلاش‌های باقی‌مانده: {5 - attempts}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || attempts >= 5}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#00a693] to-[#eeaa22] hover:from-[#00a693]/90 hover:to-[#eeaa22]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00a693] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  در حال ورود...
                </div>
              ) : (
                'ورود به پنل مدیریت'
              )}
            </button>
          </form>

          {/* Security Notice */}
          <div className="mt-6 p-4 bg-blue-500/20 border border-blue-500/30 rounded-lg">
            <div className="flex items-start gap-2">
              <Shield className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <div className="text-blue-300 text-sm">
                <p className="font-medium mb-1">نکات امنیتی:</p>
                <ul className="text-xs space-y-1 text-blue-200">
                  <li>• از مرورگر خصوصی استفاده کنید</li>
                  <li>• پس از کار حتماً خروج کنید</li>
                  <li>• رمز عبور خود را با کسی در میان نگذارید</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <button
            onClick={() => setLocation('/')}
            className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
          >
            بازگشت به صفحه اصلی
          </button>
        </div>
      </div>
    </div>
  );
}