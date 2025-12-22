import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';

// Placeholder components for other routes to prevent errors
const Placeholder = ({ title }: { title: string }) => (
  <div className="container mx-auto px-6 py-24 text-center">
    <h1 className="text-4xl font-serif font-bold text-primary mb-4">{title}</h1>
    <p className="text-slate-600">This page is under construction.</p>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<Placeholder title="About Us" />} />
            <Route path="services" element={<Placeholder title="Our Services" />} />
            <Route path="services/*" element={<Placeholder title="Service Detail" />} />
            <Route path="portfolio" element={<Placeholder title="Our Portfolio" />} />
            <Route path="blog" element={<Placeholder title="Insights Blog" />} />
            <Route path="contact" element={<Placeholder title="Contact Us" />} />
            <Route path="*" element={<Placeholder title="Page Not Found" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
