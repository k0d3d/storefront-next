'use client';

import Link from 'next/link';
import { useState } from 'react';

interface MenuItem {
  label: string;
  href: string;
  children?: MenuItem[];
}

interface HeaderProps {
  logo?: string;
  menuItems?: MenuItem[];
}

const defaultMenuItems: MenuItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Web Design', href: '/services/web-design' },
      { label: 'UI/UX Design', href: '/services/ui-ux' },
      { label: 'Graphic Design', href: '/services/graphic-design' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export default function Header({ menuItems = defaultMenuItems, logo = 'Your Brand' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="section-header site-header fixed top-0 z-30 w-full py-2 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Header Left Block */}
          <div className="flex items-center gap-x-10">
            {/* Header Logo */}
            <Link href="/" className="h-auto w-auto">
              <span className="text-colorButteryWhite font-bold text-2xl font-syne">
                {logo}
              </span>
            </Link>

            {/* Header Navigation - Desktop */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-x-8">
                {menuItems.map((item, index) => (
                  <li key={index} className="relative group">
                    <Link
                      href={item.href}
                      className="text-white hover:text-colorLightLime transition-colors duration-300 flex items-center gap-2 py-2"
                    >
                      {item.label}
                      {item.children && (
                        <svg width="7" height="4" viewBox="0 0 7 4" fill="currentColor">
                          <path d="M3.5 4L0 0H7L3.5 4Z" />
                        </svg>
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    {item.children && (
                      <ul className="absolute top-full left-0 mt-2 w-48 bg-white border-2 border-black rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-lg">
                        {item.children.map((child, childIndex) => (
                          <li key={childIndex}>
                            <Link
                              href={child.href}
                              className="block px-4 py-3 text-black hover:bg-colorLightLime transition-colors duration-300 first:rounded-t-md last:rounded-b-md"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Header Right Block */}
          <div className="flex items-center gap-x-6">
            <Link
              href="/contact"
              className="btn-primary relative hidden px-[30px] py-[10px] sm:inline-flex text-sm"
            >
              Contact Us
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="block lg:hidden"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4">
            <ul className="flex flex-col gap-y-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-colorLightLime transition-colors duration-300 block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="ml-4 mt-2 flex flex-col gap-y-2">
                      {item.children.map((child, childIndex) => (
                        <li key={childIndex}>
                          <Link
                            href={child.href}
                            className="text-white/80 hover:text-colorLightLime transition-colors duration-300 block py-1"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
