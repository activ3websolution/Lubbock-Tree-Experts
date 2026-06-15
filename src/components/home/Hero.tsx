
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center text-white">
      <Image
        src="/hero.jpg"
        alt="A tree service professional cutting a tree in Lubbock, TX"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Lubbock's Trusted Tree Removal & Tree Care Experts</h1>
        <p className="text-lg md:text-xl mb-8">Professional Tree Removal, Tree Trimming, Stump Grinding, and Emergency Tree Services Throughout Lubbock and the South Plains.</p>
        <div className="flex justify-center space-x-4">
          <a href="/contact" className="bg-brand-orange text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-orange-600 transition-colors">
            Get Free Estimate
          </a>
          <a href="tel:806-XXX-XXXX" className="bg-brand-green text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-green-700 transition-colors">
            Call Now
          </a>
        </div>
        <p className="mt-8 font-bold text-xl">Call for a Free Estimate: (806) XXX-XXXX</p>
      </div>
    </section>
  );
};

export default Hero;
