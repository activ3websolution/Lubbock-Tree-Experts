
import React from 'react';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold text-brand-green mb-4">Contact Us</h1>
          <p className="text-lg text-brand-charcoal mb-8">We're ready to help. Call us today for a fast, free estimate on any of our tree services.</p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-brand-green">Phone:</h3>
              <a href="tel:806-XXX-XXXX" className="text-brand-charcoal hover:text-brand-orange">(806) XXX-XXXX</a>
            </div>
            <div>
              <h3 className="font-bold text-brand-green">Service Area:</h3>
              <p className="text-brand-charcoal">Lubbock, TX and the surrounding South Plains</p>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-brand-green mb-2">Get Your Free Estimate Today!</h2>
            <p className="text-brand-charcoal mb-6">Fill out the form below and we'll get back to you shortly. We respect your privacy.</p>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-brand-charcoal font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-brand-charcoal font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md" required />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-brand-charcoal font-bold mb-2">Phone</label>
                <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 border rounded-md" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-brand-charcoal font-bold mb-2">How can we help?</label>
                <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border rounded-md" required></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-orange text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-orange-600 transition-colors">
                Get My Free Estimate
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
