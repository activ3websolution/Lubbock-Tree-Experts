
import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-green">Get in Touch</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">We're ready to help. Call us today or fill out the form for a fast, free, and no-obligation estimate.</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-brand-green mb-4">Contact Information</h2>
              <p className="text-lg text-gray-600">Have questions? Need a quote? We're here to help. Our team is available to answer your calls and emails promptly.</p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-brand-orange text-white p-3 rounded-full">
                  {/* Phone Icon */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-xl text-brand-green">Phone:</h3>
                  <a href="tel:806-555-5555" className="text-lg text-gray-700 hover:text-brand-orange">(806) 555-5555</a>
                </div>
              </div>
              <div className="flex items-center">
                 <div className="bg-brand-orange text-white p-3 rounded-full">
                  {/* Map Pin Icon */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-xl text-brand-green">Service Area:</h3>
                  <p className="text-lg text-gray-700">Lubbock, TX and the surrounding South Plains</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md border-t-4 border-brand-orange">
            <h2 className="text-3xl font-bold text-brand-green mb-2">Get Your Free Estimate!</h2>
            <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you shortly.</p>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange" required />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
                <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">How can we help?</label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange" required></textarea>
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
