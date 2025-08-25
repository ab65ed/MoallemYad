"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavItemsProps {
  items: Array<{ name: string; link: string }>;
  className?: string;
}

interface NavbarButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

interface MobileNavToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export function Navbar({ children, className }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled 
          ? "py-2 shadow-lg backdrop-blur-md" 
          : "py-4 shadow-sm",
        className
      )}
      style={{ backgroundColor: scrolled ? 'rgba(0, 166, 147, 0.95)' : '#00a693' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </nav>
  );
}

export function NavBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-between items-center">
      {children}
    </div>
  );
}

export function NavItems({ items, className }: NavItemsProps) {
  return (
    <div className={cn("hidden md:flex space-x-reverse space-x-8", className)}>
      {items.map((item, idx) => (
        <a
          key={idx}
          href={item.link}
          className="px-3 py-2 font-medium text-white/90 hover:text-white transition-colors duration-200"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
}

export function NavbarLogo() {
  return (
    <div className="flex items-center">
      {/* Logo placeholder */}
    </div>
  );
}

export function NavbarButton({ 
  children, 
  variant = "primary", 
  className, 
  onClick 
}: NavbarButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-md font-medium transition-colors duration-200",
        variant === "primary" 
          ? "bg-white text-gray-900 hover:bg-gray-100" 
          : "bg-transparent text-white border border-white/30 hover:bg-white/10",
        className
      )}
    >
      {children}
    </button>
  );
}

export function MobileNav({ children }: { children: React.ReactNode }) {
  return (
    <div className="md:hidden">
      {children}
    </div>
  );
}

export function MobileNavHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-between items-center">
      {children}
    </div>
  );
}

export function MobileNavToggle({ isOpen, onClick }: MobileNavToggleProps) {
  return (
    <button
      onClick={onClick}
      className="text-white hover:text-white/80 p-2"
    >
      {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  );
}

export function MobileNavMenu({ children, isOpen, onClose }: MobileNavMenuProps) {
  return (
    <div
      className={cn(
        "absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out",
        isOpen 
          ? "opacity-100 translate-y-0 visible" 
          : "opacity-0 -translate-y-4 invisible"
      )}
    >
      <div className="p-6 space-y-4">
        {children}
      </div>
    </div>
  );
}