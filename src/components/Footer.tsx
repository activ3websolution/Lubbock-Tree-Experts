
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Lubbock Tree Experts</h3>
            <p>Your trusted partner for professional tree services in West Texas.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-brand-orange">Home</a></li>
              <li><a href="/tree-removal" className="hover:text-brand-orange">Tree Removal</a></li>
              <li><a href="/tree-trimming" className="hover:text-brand-orange">Tree Trimming</a></li>
              <li><a href="/about" className="hover:text-brand-orange">About Us</a></li>
              <li><a href="/contact" className="hover:text-brand-orange">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>Lubbock, TX</p>
            <p>Phone: <a href="tel:806-XXX-XXXX" className="hover:text-brand-orange">(806) XXX-XXXX</a></p>
            <a href="/contact" className="bg-brand-orange text-white px-4 py-2 rounded-md font-bold hover:bg-orange-600 transition-colors mt-4 inline-block">
              Request a Free Quote
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          <p>&copy; {currentYear} Lubbock Tree Experts. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
