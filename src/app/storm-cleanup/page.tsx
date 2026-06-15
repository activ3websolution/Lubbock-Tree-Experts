
import React from 'react';
import { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Storm Cleanup Lubbock TX | Fast Debris Removal',
  description: 'Fast and complete storm cleanup service in Lubbock, TX. We remove fallen trees, branches, and debris after a storm. Call us for a free cleanup estimate.',
};

const StormCleanupPage = () => {
  const faqs = [
    {
      question: 'How quickly can you clean up my property?',
      answer: 'We prioritize storm cleanup jobs and will work to get a crew to your property as soon as possible. Our goal is to provide prompt and efficient service to our community in times of need.'
    },
    {
      question: 'Can you help with my insurance claim?',
      answer: 'Yes, we can provide detailed documentation and photos to assist you with your homeowners insurance claim for storm damage.'
    }
  ];

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Storm Cleanup', url: '/storm-cleanup' }
  ];

  const service = {
    name: 'Storm Cleanup',
    description: 'Quick and thorough storm damage cleanup services in Lubbock, TX. We remove fallen trees, branches, and debris to restore your property.'
  };

  return (
    <>
      <SchemaMarkup faqs={faqs} breadcrumbs={breadcrumbs} service={service} />
      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl sm:text-5xl font-bold text-brand-green mb-6">Fast Storm Damage Cleanup</h1>
            <div className="text-lg text-gray-700 space-y-6">
              <p>
                The powerful storms of West Texas can leave your property littered with fallen branches, leaves, and other debris. Cleaning up after a major storm can be an overwhelming task. Lubbock Tree Experts provides fast, thorough, and professional storm damage cleanup services for the entire Lubbock area and beyond.
              </p>
              
              <div className="bg-green-50 border-l-4 border-brand-green p-6 rounded-r-lg">
                <h2 className="text-2xl font-bold text-brand-green mb-4">Reclaim Your Property Quickly</h2>
                <p>
                  Our team will work quickly to restore your property to its pre-storm condition. We have the equipment and manpower to handle jobs of any size, from small residential yards to large commercial properties. We'll handle all the heavy lifting, including land clearing and brush clearing, so you can get back to normal as quickly as possible.
                </p>
              </div>

              <div className="mt-10">
                <h2 className="text-3xl font-bold text-brand-green mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <details key={index} className="group border-b pb-4">
                      <summary className="flex justify-between items-center cursor-pointer text-xl font-semibold text-gray-800 hover:text-brand-green">
                        {faq.question}
                        <span className="transform transition-transform duration-200 group-open:rotate-180">&#9660;</span>
                      </summary>
                      <p className="mt-2 text-gray-600">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Sidebar */}
          <aside>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-brand-green mb-4">Our Cleanup Services Include:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-orange mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Removal of fallen trees and large branches.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-orange mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Clearing of scattered limbs, leaves, and debris.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-orange mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Assessment of remaining trees for damage.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-orange mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Trimming of broken or damaged branches.</span>
                </li>
                 <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-orange mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Complete hauling and disposal of all debris.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-brand-orange text-white p-8 rounded-lg my-8 text-center shadow-lg">
              <h3 className="text-2xl font-bold text-white">Recovering from a Storm?</h3>
              <p className="mt-2">Let us handle the cleanup. Contact us today for a free estimate.</p>
              <a href="/contact" className="bg-white text-brand-green px-8 py-3 rounded-md font-bold text-lg hover:bg-gray-200 transition-colors mt-4 inline-block">
                Request a Free Estimate
              </a>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default StormCleanupPage;
