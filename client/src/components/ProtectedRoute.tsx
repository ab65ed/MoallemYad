import { ReactNode } from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2, Shield } from 'lucide-react';

interface ProtectedRouteProps {
  children: ReactNode;
  requireAdmin?: boolean;
}

export default function ProtectedRoute({ children, requireAdmin = true }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading, user } = useAuth();
  const [, setLocation] = useLocation();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="flex items-center gap-3">
          <Loader2 className="w-8 h-8 animate-spin text-[#00a693]" />
          <span className="text-gray-600 text-lg">در حال بررسی دسترسی...</span>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    setLocation('/login');
    return null;
  }

  if (requireAdmin && user?.role !== 'admin') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-2xl shadow-2xl border border-red-200/50 p-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <Shield className="w-8 h-8 text-red-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              دسترسی محدود
            </h1>
            <p className="text-gray-600 mb-6">
              شما دسترسی لازم برای مشاهده این صفحه را ندارید.
            </p>
            <button
              onClick={() => setLocation('/')}
              className="w-full px-6 py-3 bg-gradient-to-r from-[#00a693] to-[#eeaa22] text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
            >
              بازگشت به صفحه اصلی
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}