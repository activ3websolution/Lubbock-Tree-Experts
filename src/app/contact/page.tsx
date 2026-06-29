import React from 'react';

const ContactPage = () => {
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
          <h2 style={{ fontSize: '1.5rem', color: '#1F4D36' }}>Contact Us</h2>
          <p>We're ready to help. Call us today for a fast, free estimate on any of our tree services.</p>
          
          <div style={{ marginTop: '2rem' }}>
            <p><strong>Phone:</strong> <a href="tel:806-555-5555">(806) 555-5555</a></p>
            <p><strong>Service Area:</strong> Lubbock, TX and the surrounding South Plains</p>
          </div>

          <form style={{ marginTop: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', color: '#1F4D36' }}>Get a Free Estimate</h3>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>Name</label>
              <input type="text" id="name" name="name" style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc' }} required />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
              <input type="email" id="email" name="email" style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc' }} required />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem' }}>How can we help?</label>
              <textarea id="message" name="message" rows={4} style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc' }} required></textarea>
            </div>
            <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#F97316', color: 'white', border: 'none' }}>Submit</button>
          </form>
        </section>
      </main>

      <footer style={{ borderTop: '1px solid #eee', paddingTop: '1rem', marginTop: '2rem', color: '#555' }}>
        <p>&copy; 2026 Lubbock Tree Experts. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;
