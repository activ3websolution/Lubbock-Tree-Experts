
'use client';

import React, { useState, useEffect } from 'react';

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setIsVisible(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-md">
        <h2 className="text-3xl font-bold text-brand-green mb-4">Wait! Don't Go!</h2>
        <p className="text-lg text-brand-charcoal mb-6">Before you leave, let us give you a free, no-obligation estimate on your tree service needs.</p>
        <a href="/contact" className="bg-brand-orange text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-orange-600 transition-colors">
          Get My Free Quote
        </a>
        <button onClick={() => setIsVisible(false)} className="mt-4 text-gray-500 hover:text-gray-700">
          Close
        </button>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
