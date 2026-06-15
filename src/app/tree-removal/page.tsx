
import React from 'react';
import { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tree Removal Lubbock TX | Safe & Affordable',
  description: 'Need tree removal in Lubbock, TX? We offer safe, affordable, and professional tree removal for residential and commercial properties. Call for a free estimate.',
};

const TreeRemovalPage = () => {
  const faqs = [
    {
      question: 'How much does tree removal cost in Lubbock?',
      answer: 'The cost varies depending on the tree\'s size, location, and complexity. We provide free, no-obligation estimates for all our services.'
    },
    {
      question: 'Are you licensed and insured?',
      answer: 'Yes, we are fully licensed and insured for your protection and peace of mind.'
    },
    {
      question: 'How long does the tree removal process take?',
      answer: 'Most standard tree removals can be completed in a single day. However, larger or more complex jobs may take longer. We will provide you with a time estimate during our initial consultation.'
    }
  ];

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Tree Removal', url: '/tree-removal' }
  ];

  const service = {
    name: 'Tree Removal',
    description: 'Safe and efficient tree removal services in Lubbock, TX. We handle everything from dead and diseased trees to hazardous and storm-damaged tree removal.'
  };

  return (
    <>
      <SchemaMarkup faqs={faqs} breadcrumbs={breadcrumbs} service={service} />
      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl sm:text-5xl font-bold text-brand-green mb-6">Expert Tree Removal in Lubbock, TX</h1>
            <div className="text-lg text-gray-700 space-y-6">
              <p>
                Welcome to the premier tree removal service in Lubbock and the surrounding West Texas area. At Lubbock Tree Experts, we specialize in safe, efficient, and affordable tree removal for both residential and commercial properties. Whether you have a dead, diseased, or dangerously located tree, our team of experienced professionals is here to help.
              </p>
              
              <div className="bg-green-50 border-l-4 border-brand-green p-6 rounded-r-lg">
                <h2 className="text-2xl font-bold text-brand-green mb-4">Our Safety-First Approach</h2>
                <p>
                  Safety is our number one priority. Our process for residential and commercial tree removal begins with a free on-site assessment and estimate. We'll evaluate the tree, its location, and any potential hazards. We use modern equipment and proven techniques, such as rigging and roping, to dismantle the tree piece by piece, ensuring no damage to your property. Our professional arborists are trained to handle even the most complex tree cutting service jobs with precision and care. After the tree is removed, we can also take care of the remaining stump with our <Link href="/stump-grinding" className="text-brand-orange hover:underline font-semibold">stump grinding</Link> service.
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
              <h3 className="text-2xl font-bold text-brand-green mb-4">When is Removal Necessary?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-orange mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>The tree is dead or dying.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-orange mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>The tree is diseased beyond recovery.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-orange mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>The tree has been damaged by a storm.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-orange mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>It's leaning dangerously close to a structure.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-orange mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Its roots are damaging foundations or plumbing.</span>
                </li>
                 <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-orange mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>It's blocking new construction.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-brand-orange text-white p-8 rounded-lg my-8 text-center shadow-lg">
              <h3 className="text-2xl font-bold text-white">Get a Free Estimate!</h3>
              <p className="mt-2">Don't wait for a hazardous tree to become a disaster. Call us now for a fast, free quote.</p>
              <a href="/contact" className="bg-white text-brand-green px-8 py-3 rounded-md font-bold text-lg hover:bg-gray-200 transition-colors mt-4 inline-block">
                Request a Quote
              </a>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default TreeRemovalPage;
