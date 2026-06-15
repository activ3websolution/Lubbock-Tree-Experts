
import React from 'react';
import { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Emergency Tree Removal Lubbock TX | 24/7 Service',
  description: '24/7 emergency tree removal in Lubbock, TX. If you have a fallen or storm-damaged tree, call us now for a rapid response. We are available day or night.',
};

const EmergencyTreeServicePage = () => {
  const faqs = [
    {
      question: 'Will my insurance cover emergency tree removal?',
      answer: 'In many cases, homeowners insurance will cover at least a portion of the cost to remove a tree that has fallen on a covered structure. We can provide you with the necessary documentation to assist with your insurance claim.'
    },
    {
      question: 'What should I do while waiting for the emergency crew?',
      answer: 'For your safety, stay clear of the hazardous area. Do not attempt to remove any branches or debris yourself, especially if they are near power lines. If a tree has fallen on your home, consider evacuating the immediate area until it has been assessed by a professional.'
    }
  ];

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Emergency Tree Service', url: '/emergency-tree-service' }
  ];

  const service = {
    name: 'Emergency Tree Service',
    description: 'Fast and reliable 24/7 emergency tree service in Lubbock, TX. If you have a fallen or hazardous tree, call us immediately for a rapid response.'
  };

  return (
    <>
      <SchemaMarkup faqs={faqs} breadcrumbs={breadcrumbs} service={service} />
      <div className="container mx-auto px-4 py-12">
        <article className="prose lg:prose-xl mx-auto">
          <h1>24/7 Emergency Tree Service in Lubbock, TX</h1>
          <p>
            Storms and high winds can strike at any time in West Texas, often leaving a trail of destruction that includes fallen trees and damaged property. Lubbock Tree Experts offers 24/7 emergency tree service to help you when you need it most. We proudly serve the entire South Plains area, including Plainview and Post.
          </p>

          <h2>When to Call for Emergency Service</h2>
          <p>
            You should call for emergency service immediately if you have:
          </p>
          <ul>
            <li>A tree that has fallen on your home, vehicle, or other structure.</li>
            <li>A large branch that is broken and hanging precariously.</li>
            <li>A tree that is suddenly leaning and threatening to fall.</li>
            <li>A tree blocking a driveway, street, or other essential access point.</li>
          </ul>

          <h2>Our Rapid Response Team</h2>
          <p>
            Our emergency response team is on standby 24 hours a day, 7 days a week. We will dispatch a crew to your location as quickly as possible to assess the situation and safely remove the immediate threat. Our goal is to secure your property and prevent further damage. We are equipped for emergency storm cleanup and can handle any tree-related crisis.
          </p>

          <h2>Frequently Asked Questions (FAQs)</h2>
          <h3>Will my insurance cover emergency tree removal?</h3>
          <p>In many cases, homeowners insurance will cover at least a portion of the cost to remove a tree that has fallen on a covered structure. We can provide you with the necessary documentation to assist with your insurance claim.</p>
          <h3>What should I do while waiting for the emergency crew?</h3>
          <p>For your safety, stay clear of the hazardous area. Do not attempt to remove any branches or debris yourself, especially if they are near power lines. If a tree has fallen on your home, consider evacuating the immediate area until it has been assessed by a professional.</p>

          <div className="bg-brand-orange text-white p-8 rounded-lg my-12 text-center">
            <h2 className="!text-white">Need Urgent Tree Care? Call Us Now!</h2>
            <p className="text-lg">Don't wait. If you have a tree emergency, call us immediately for a rapid response.</p>
            <a href="tel:806-XXX-XXXX" className="bg-white text-brand-green px-8 py-3 rounded-md font-bold text-lg hover:bg-gray-200 transition-colors mt-4 inline-block">
              Call (806) XXX-XXXX
            </a>
          </div>

        </article>
      </div>
    </>
  );
};

export default EmergencyTreeServicePage;
