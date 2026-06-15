
"use client";

import React, { useState } from 'react';
import Logo from './Logo';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Tree Removal', path: '/tree-removal' },
  { name: 'Tree Trimming', path: '/tree-trimming' },
  { name: 'Stump Grinding', path: '/stump-grinding' },
  { name: 'Storm Cleanup', path: '/storm-cleanup' },
  { name: 'Service Areas', path: '/service-areas' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} className="text-brand-charcoal hover:text-brand-green transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:806-555-5555" className="text-brand-charcoal font-bold">(806) 555-5555</a>
          <Link href="/contact" className="bg-brand-orange text-white px-4 py-2 rounded-md font-bold hover:bg-orange-600 transition-colors">
            Free Estimate
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-charcoal focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.path} className="text-brand-charcoal hover:text-brand-green transition-colors" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </Link>
            ))}
            <Link href="/contact" className="w-full text-center mt-4 bg-brand-orange text-white px-4 py-3 rounded-md font-bold hover:bg-orange-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Free Estimate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
