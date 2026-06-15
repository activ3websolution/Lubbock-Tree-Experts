
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
      <div className="container mx-auto px-4 py-12">
        <article className="prose lg:prose-xl mx-auto">
          <h1>Fast Storm Damage Cleanup in Lubbock, TX</h1>
          <p>
            The powerful storms of West Texas can leave your property littered with fallen branches, leaves, and other debris. Cleaning up after a major storm can be an overwhelming task. Lubbock Tree Experts provides fast, thorough, and professional storm damage cleanup services for the entire Lubbock area and beyond.
          </p>

          <h2>Our Storm Cleanup Services Include:</h2>
          <ul>
            <li>Removal of fallen trees and large branches.</li>
            <li>Clearing of scattered limbs, leaves, and debris.</li>
            <li>Assessment of remaining trees for storm-related damage.</li>
            <li>Trimming of broken or damaged branches to prevent future hazards.</li>
            <li>Complete hauling and disposal of all debris.</li>
          </ul>

          <h2>Reclaim Your Property Quickly</h2>
          <p>
            Our team will work quickly to restore your property to its pre-storm condition. We have the equipment and manpower to handle jobs of any size, from small residential yards to large commercial properties. We'll handle all the heavy lifting, including land clearing and brush clearing, so you can get back to normal as quickly as possible. For immediate assistance after a storm, we also offer <Link href="/emergency-tree-service">24/7 emergency tree service</Link>.
          </p>

          <h2>Frequently Asked Questions (FAQs)</h2>
          <h3>How quickly can you clean up my property?</h3>
          <p>We prioritize storm cleanup jobs and will work to get a crew to your property as soon as possible. Our goal is to provide prompt and efficient service to our community in times of need.</p>
          <h3>Can you help with my insurance claim?</h3>
          <p>Yes, we can provide detailed documentation and photos to assist you with your homeowners insurance claim for storm damage.</p>

          <div className="bg-brand-orange text-white p-8 rounded-lg my-12 text-center">
            <h2 className="!text-white">Recovering from a Storm? We Can Help.</h2>
            <p className="text-lg">Let us handle the cleanup. Contact us today for a free estimate on our storm damage services.</p>
            <a href="/contact" className="bg-white text-brand-green px-8 py-3 rounded-md font-bold text-lg hover:bg-gray-200 transition-colors mt-4 inline-block">
              Request a Free Estimate
            </a>
          </div>

        </article>
      </div>
    </>
  );
};

export default StormCleanupPage;
