import React from 'react';

const TreeTrimmingPage = () => {
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
          <h2 style={{ fontSize: '1.5rem', color: '#1F4D36' }}>Tree Trimming Services</h2>
          <p>Proper tree trimming and pruning are essential for the health and beauty of your trees. We provide professional trimming services to keep your trees looking their best.</p>
          
          <h3 style={{ fontSize: '1.2rem', color: '#1F4D36', marginTop: '2rem' }}>Benefits of Tree Trimming:</h3>
          <ul>
            <li>Improves tree health by removing dead or diseased branches.</li>
            <li>Enhances the structural integrity of the tree.</li>
            <li>Reduces the risk of storm damage.</li>
            <li>Improves the overall aesthetic of your property.</li>
          </ul>

          <a href="/contact" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#F97316', color: 'white', textDecoration: 'none' }}>
            Get a Free Estimate
          </a>
        </section>
      </main>

      <footer style={{ borderTop: '1px solid #eee', paddingTop: '1rem', marginTop: '2rem', color: '#555' }}>
        <p>&copy; 2026 Lubbock Tree Experts. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default TreeTrimmingPage;
