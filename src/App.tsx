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
import Loveland from './pages/locations/Loveland';
import FortCollins from './pages/locations/FortCollins';
import Windsor from './pages/locations/Windsor';
import Boulder from './pages/locations/Boulder';
import Greeley from './pages/locations/Greeley';
import Longmont from './pages/locations/Longmont';
import Timnath from './pages/locations/Timnath';
import Wellington from './pages/locations/Wellington';
import Berthoud from './pages/locations/Berthoud';
import Mead from './pages/locations/Mead';
import Erie from './pages/locations/Erie';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/portfolio/ProjectDetail';
import Process from './pages/Process';
import Blog from './pages/Blog';
import BlogPost from './pages/blog/BlogPost';
import About from './pages/About';
import Partners from './pages/Partners';
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Sitemap from './pages/Sitemap';
import Contact from './pages/Contact';
import Application from './pages/Application';
import Booking from './pages/Booking';
import ThankYou from './pages/ThankYou';
import CostGuideOptIn from './pages/resources/CostGuideOptIn';
import CostGuide from './pages/resources/CostGuide';
import Resources from './pages/Resources';

// Placeholder components for other routes to prevent errors
const Placeholder = ({ title }: { title: string }) => (
  <div className="container mx-auto px-6 py-24 text-center">
    <h1 className="text-4xl font-serif font-bold text-primary mb-4">{title}</h1>
    <p className="text-slate-600">This page is under construction.</p>
  </div>
);

import ScrollToTop from './components/ScrollToTop';
import MetaPixel from './components/MetaPixel';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <MetaPixel />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="services/new-construction" element={<NewConstruction />} />
            <Route path="services/remodeling" element={<Remodeling />} />
            <Route path="services/basement-finishing" element={<BasementFinishing />} />
            <Route path="services/additions" element={<Additions />} />
            <Route path="locations" element={<Locations />} />
            <Route path="locations/loveland" element={<Loveland />} />
            <Route path="locations/fort-collins" element={<FortCollins />} />
            <Route path="locations/windsor" element={<Windsor />} />
            <Route path="locations/boulder" element={<Boulder />} />
            <Route path="locations/greeley" element={<Greeley />} />
            <Route path="locations/longmont" element={<Longmont />} />
            <Route path="locations/timnath" element={<Timnath />} />
            <Route path="locations/wellington" element={<Wellington />} />
            <Route path="locations/berthoud" element={<Berthoud />} />
            <Route path="locations/mead" element={<Mead />} />
            <Route path="locations/erie" element={<Erie />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="portfolio/:slug" element={<ProjectDetail />} />
            <Route path="process" element={<Process />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogPost />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route path="application" element={<Application />} />  moved outside layout */}
            <Route path="resources/cost-guide-optin" element={<CostGuideOptIn />} />
            <Route path="resources/cost-guide" element={<CostGuide />} />
            <Route path="resources/cost-guide" element={<CostGuide />} />
            <Route path="resources" element={<Resources />} />
            <Route path="about" element={<About />} />
            <Route path="partners" element={<Partners />} />
            <Route path="careers" element={<Careers />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="sitemap" element={<Sitemap />} />
            <Route path="*" element={<Placeholder title="Page Not Found" />} />
          </Route>

          {/* Funnel Routes (No Main Config) */}
          <Route path="application" element={<Application />} />
          <Route path="booking" element={<Booking />} />
          <Route path="thank-you" element={<ThankYou />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
