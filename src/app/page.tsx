import React from 'react';

const HomePage = () => {
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
          <h2 style={{ fontSize: '1.5rem', color: '#1F4D36' }}>Your Trusted Local Tree Service</h2>
          <p>Welcome to Lubbock Tree Experts. We provide professional, reliable tree services throughout the Lubbock, TX area. Contact us today for a free estimate.</p>
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

export default HomePage;
