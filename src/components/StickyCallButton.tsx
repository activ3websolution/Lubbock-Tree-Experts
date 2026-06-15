
import React from 'react';

const StickyCallButton = () => {
  return (
    <a 
      href="tel:806-XXX-XXXX"
      className="md:hidden fixed bottom-0 left-0 right-0 bg-brand-orange text-white text-center py-4 text-xl font-bold z-50"
    >
      Call Now for a Free Estimate
    </a>
  );
};

export default StickyCallButton;
