
import React from 'react';
import Link from 'next/link';

const LocalSeo = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-green text-center mb-6">Your West Texas Tree Service Partner</h2>
          <div className="prose lg:prose-xl mx-auto text-brand-charcoal">
            <p>
              As a locally owned business right here in the 'Hub City', we understand the unique challenges that face trees on the South Plains. From the relentless West Texas wind and the risk of storm damage to the harsh realities of drought conditions, property maintenance in Lubbock requires a special kind of expertise. That's where our professional arborists come in. As a leading tree company in Lubbock, we provide a full range of tree services designed for the local climate.
            </p>
            <p>
              Our residential and commercial <Link href="/tree-removal">tree removal</Link> services are essential for dealing with the aftermath of the region's notorious wind damage. We also offer routine <Link href="/tree-trimming">tree trimming</Link> and tree cutting services to improve tree health and prevent future problems. Whether you need urgent <Link href="/storm-cleanup">storm cleanup</Link> after a major weather event or routine property maintenance to prepare for the changing seasons, our team has the local knowledge and experience to protect and care for your valuable trees. For those in need of land or brush clearing, our team is equipped to handle projects of any size.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalSeo;
