import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import NewConstruction from './pages/services/NewConstruction';
import Remodeling from './pages/services/Remodeling';
import BasementFinishing from './pages/services/BasementFinishing';
import Additions from './pages/services/Additions';
import Locations from './pages/Locations';
import LocationDetail from './pages/locations/LocationDetail';
import Portfolio from './pages/Portfolio';
import Process from './pages/Process';
import About from './pages/About';
import Contact from './pages/Contact';

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
            <Route path="services" element={<Services />} />
            <Route path="services/new-construction" element={<NewConstruction />} />
            <Route path="services/remodeling" element={<Remodeling />} />
            <Route path="services/basement-finishing" element={<BasementFinishing />} />
            <Route path="services/additions" element={<Additions />} />
            <Route path="locations" element={<Locations />} />
            <Route path="locations/:city" element={<LocationDetail />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="process" element={<Process />} />
            <Route path="blog" element={<Placeholder title="Insights Blog" />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Placeholder title="Page Not Found" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
