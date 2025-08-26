"use client";

import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

const navigationItems = [
  { name: 'خانه', link: '/', key: 'home' },
  { name: 'تخته سیاه', link: '/blackboard', key: 'blackboard' },
  { name: 'گوی و میدان', link: '/arena', key: 'arena' },
  { name: 'بوم رنگ خیال', link: '/canvas', key: 'canvas' },
  { name: 'دانای راه بلد', link: '/guide', key: 'guide' },
  { name: 'کافه نادری', link: '/cafe', key: 'cafe' },
  { name: 'در آیینه دیگران', link: '/mirror', key: 'mirror' },
  { name: 'سکانس آخر', link: '/final', key: 'final' },
  { name: 'گالری', link: '/gallery', key: 'gallery' },
  { name: 'داشبورد مدیریت', link: '/admin', key: 'admin' },
];

// Custom NavItems component with wouter integration
function CustomNavItems() {
  const [location] = useLocation();
  
  return (
    <div className="hidden md:flex space-x-reverse space-x-8">
      {navigationItems.map((item) => (
        <Link
          key={item.key}
          href={item.link}
          data-testid={`nav-link-${item.key}`}
        >
          <span
            className={`px-3 py-2 font-medium transition-colors duration-200 ${
              location === item.link
                ? 'text-white font-bold'
                : 'text-white/90 hover:text-white'
            }`}
          >
            {item.name}
          </span>
        </Link>
      ))}
    </div>
  );
}

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          
          {/* Mobile Title - Only visible on small devices */}
          <div className="md:hidden flex-1 text-center">
            <h1 className="text-white text-sm font-medium px-2">
              یادبود مجازی همیشه معلم، مسعود محمدی
            </h1>
          </div>
          
          <CustomNavItems />
          
          <div className="md:hidden">
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid={`mobile-nav-link-${item.key}`}
              >
                <span
                  className={`block px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
                    location === item.link
                      ? 'text-gray-900 bg-gray-100 font-bold'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
