import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import ErrorBoundary from './components/ErrorBoundary';
import Loading from './components/Loading';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Products = React.lazy(() => import('./pages/Products'));
const Manufacturing = React.lazy(() => import('./pages/Manufacturing'));
const Sustainability = React.lazy(() => import('./pages/Sustainability'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  useEffect(() => {
    console.log('App component mounted successfully');
    console.log('Current location:', window.location.href);
  }, []);

  return (
    <ErrorBoundary>
      <Router basename={import.meta.env.BASE_URL}>
        <div className="min-h-screen bg-white font-body">
          <Header />
          <main>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/manufacturing" element={<Manufacturing />} />
                <Route path="/sustainability" element={<Sustainability />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </main>
          <FloatingCTA />
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
