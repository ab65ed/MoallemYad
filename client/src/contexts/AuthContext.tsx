import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: number;
  username: string;
  name: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (token: string, user: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // بررسی token موجود در localStorage
    const savedToken = localStorage.getItem('admin_token');
    const savedUser = localStorage.getItem('admin_user');

    if (savedToken && savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        
        // بررسی اعتبار token با سرور
        fetch('/api/auth/verify', {
          headers: {
            'Authorization': `Bearer ${savedToken}`
          }
        })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Invalid token');
          }
        })
        .then(data => {
          if (data.valid && data.user) {
            setToken(savedToken);
            setUser(data.user); // استفاده از داده‌های به‌روز شده از سرور
            // به‌روزرسانی localStorage با داده‌های جدید
            localStorage.setItem('admin_user', JSON.stringify(data.user));
          } else {
            throw new Error('Invalid response');
          }
        })
        .catch(() => {
          // خطا در اتصال یا token نامعتبر
          localStorage.removeItem('admin_token');
          localStorage.removeItem('admin_user');
          setToken(null);
          setUser(null);
        })
        .finally(() => {
          setIsLoading(false);
        });
      } catch (error) {
        localStorage.removeItem('admin_token');
        localStorage.removeItem('admin_user');
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  }, []);

  const login = (newToken: string, newUser: User) => {
    setToken(newToken);
    setUser(newUser);
    localStorage.setItem('admin_token', newToken);
    localStorage.setItem('admin_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
    
    // اطلاع به سرور (اختیاری)
    if (token) {
      fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).catch(() => {
        // خطا در logout از سرور - مهم نیست
      });
    }
  };

  const value = {
    user,
    token,
    login,
    logout,
    isAuthenticated: !!user && !!token,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}