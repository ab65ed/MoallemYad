import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navigationItems = [
  { href: '/', label: 'خانه', key: 'home' },
  { href: '/blackboard', label: 'تخته سیاه', key: 'blackboard' },
  { href: '/arena', label: 'گوی و میدان', key: 'arena' },
  { href: '/canvas', label: 'بوم رنگ خیال', key: 'canvas' },
  { href: '/guide', label: 'دانای راه بلد', key: 'guide' },
  { href: '/cafe', label: 'کافه نادری', key: 'cafe' },
  { href: '/mirror', label: 'در آیینه دیگران', key: 'mirror' },
  { href: '/final', label: 'سکانس آخر', key: 'final' },
  { href: '/gallery', label: 'گالری', key: 'gallery' },
];

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow-sm border-b border-gray-100 sticky top-0 z-50" style={{ backgroundColor: '#00a693' }}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center">
            {/* Logo/Title removed */}
          </div>

          {/* Mobile Title - Only visible on small devices */}
          <div className="md:hidden flex-1 text-center">
            <h1 className="text-white text-sm font-medium px-2">
              یادبود مجازی همیشه معلم، مسعود محمدی
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-reverse space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                data-testid={`nav-link-${item.key}`}
              >
                <span
                  className={`px-3 py-2 font-medium transition-colors duration-200 ${
                    location === item.href
                      ? 'text-white font-bold'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
          
          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-white/80"
                  data-testid="mobile-menu-button"
                >
                  <Menu className="w-6 h-6" />
                  <span className="sr-only">منوی اصلی</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 bg-white">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.key}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      data-testid={`mobile-nav-link-${item.key}`}
                    >
                      <span
                        className={`block px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
                          location === item.href
                            ? 'text-gray-900 bg-white/20 font-bold'
                            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
