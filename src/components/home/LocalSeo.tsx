
import React from 'react';
import Link from 'next/link';

const LocalSeo = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-green mb-4">Your West Texas Tree Service Partner</h2>
          <p className="text-lg text-gray-600">
            As a locally owned business in the 'Hub City', we understand the unique challenges facing trees on the South Plains. We offer a full range of services designed for our local climate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Column 1: Wind & Storms */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-brand-green mb-4">Wind & Storm Damage</h3>
            <p className="text-gray-700">
              From the relentless West Texas wind to major weather events, storm damage is a serious risk. Our <Link href="/tree-removal" className="text-brand-orange hover:underline font-semibold">tree removal</Link> and <Link href="/storm-cleanup" className="text-brand-orange hover:underline font-semibold">storm cleanup</Link> services are essential for dealing with the aftermath.
            </p>
          </div>

          {/* Column 2: Drought & Health */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-brand-green mb-4">Drought & Tree Health</h3>
            <p className="text-gray-700">
              The harsh realities of drought conditions require special expertise. We offer routine <Link href="/tree-trimming" className="text-brand-orange hover:underline font-semibold">tree trimming</Link> and cutting services to improve tree health, helping them survive and thrive in our climate.
            </p>
          </div>

          {/* Column 3: Property Maintenance */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-brand-green mb-4">Property Maintenance</h3>
            <p className="text-gray-700">
              Whether you need routine care to prepare for the changing seasons or <Link href="/land-clearing" className="text-brand-orange hover:underline font-semibold">land & brush clearing</Link> for a new project, our team has the local knowledge to manage and protect your valuable trees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalSeo;
