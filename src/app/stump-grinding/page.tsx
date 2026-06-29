import React from 'react';

const StumpGrindingPage = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <header style={{ borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
        <h1 style={{ fontSize: '2rem', color: '#1F4D36' }}>Lubbock Tree Experts</h1>
        <nav style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <a href="/">Home</a>
          <a href="/tree-removal">Tree Removal</a>
          <a href="/tree-trimming">Tree Trimming</a>
          <a href="/stump-grinding">Stump Grinding</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <main style={{ paddingTop: '2rem' }}>
        <section>
          <h2 style={{ fontSize: '1.5rem', color: '#1F4D36' }}>Stump Grinding Services</h2>
          <p>An old tree stump can be an unsightly obstacle in your yard. We offer fast and effective stump grinding to help you reclaim your landscape.</p>
          
          <h3 style={{ fontSize: '1.2rem', color: '#1F4D36', marginTop: '2rem' }}>Why Remove a Tree Stump?</h3>
          <ul>
            <li>Improves the appearance of your property.</li>
            <li>Eliminates a tripping hazard.</li>
            <li>Prevents unwanted new tree growth.</li>
            <li>Frees up space for new landscaping.</li>
          </ul>

          <a href="/contact" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#F97316', color: 'white', textDecoration: 'none' }}>
            Get a Free Quote
          </a>
        </section>
      </main>

      <footer style={{ borderTop: '1px solid #eee', paddingTop: '1rem', marginTop: '2rem', color: '#555' }}>
        <p>&copy; 2026 Lubbock Tree Experts. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default StumpGrindingPage;
