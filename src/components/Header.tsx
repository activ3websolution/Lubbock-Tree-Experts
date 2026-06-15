
import React from 'react';
import Logo from './Logo';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Tree Removal', path: '/tree-removal' },
  { name: 'Tree Trimming', path: '/tree-trimming' },
  { name: 'Stump Grinding', path: '/stump-grinding' },
  { name: 'Emergency Tree Service', path: '/emergency-tree-service' },
  { name: 'Storm Cleanup', path: '/storm-cleanup' },
  { name: 'Service Areas', path: '/service-areas' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Logo />
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} className="text-brand-charcoal hover:text-brand-green transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <a href="tel:806-XXX-XXXX" className="text-brand-charcoal font-bold">(806) XXX-XXXX</a>
          <Link href="/contact" className="bg-brand-orange text-white px-4 py-2 rounded-md font-bold hover:bg-orange-600 transition-colors">
            Free Estimate
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
