import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <section id="home" className="hero">
          <Hero />
        </section>
        <section id="products" className="section">
          <h2>Our Products</h2>
          <Products />
        </section>
      </main>
      <Footer />
    </div>
  );
}
