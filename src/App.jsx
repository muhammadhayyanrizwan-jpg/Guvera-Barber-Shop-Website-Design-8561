import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingAnimation from './components/LoadingAnimation';
import PWAInstallPrompt from './components/PWAInstallPrompt';
import Home from './pages/Home';
import Reviews from './pages/Reviews';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import About from './pages/About';
import './App.css';

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Register service worker for PWA
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered successfully:', registration);
            
            // Check for updates
            registration.addEventListener('updatefound', () => {
              const newWorker = registration.installing;
              if (newWorker) {
                newWorker.addEventListener('statechange', () => {
                  if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                    console.log('New service worker available');
                    // You could show a notification here
                  }
                });
              }
            });
          })
          .catch((registrationError) => {
            console.log('SW registration failed:', registrationError);
          });
      });
    }

    // Add meta tags for SEO and PWA
    document.title = 'Guvera Barber Shop - Premium Men\'s Haircuts & Styling in Paris';
    
    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional men\'s barber shop near Saint Lazare Station, Paris. Expert haircuts, beard styling, and grooming services. Book your appointment today! ✂️');
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      metaDescription.content = 'Professional men\'s barber shop near Saint Lazare Station, Paris. Expert haircuts, beard styling, and grooming services. Book your appointment today! ✂️';
      document.head.appendChild(metaDescription);
    }

    // Keywords meta tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      metaKeywords.content = 'barber shop, men\'s haircuts, beard styling, Paris, Saint Lazare, grooming, professional haircuts, Guvera';
      document.head.appendChild(metaKeywords);
    }

    // PWA meta tags
    let themeColor = document.querySelector('meta[name="theme-color"]');
    if (!themeColor) {
      themeColor = document.createElement('meta');
      themeColor.name = 'theme-color';
      themeColor.content = '#FFD700';
      document.head.appendChild(themeColor);
    }

    let viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.content = 'width=device-width, initial-scale=1.0, user-scalable=no';
    }

    // Apple PWA meta tags
    let appleWebApp = document.querySelector('meta[name="apple-mobile-web-app-capable"]');
    if (!appleWebApp) {
      appleWebApp = document.createElement('meta');
      appleWebApp.name = 'apple-mobile-web-app-capable';
      appleWebApp.content = 'yes';
      document.head.appendChild(appleWebApp);
    }

    let appleStatusBar = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
    if (!appleStatusBar) {
      appleStatusBar = document.createElement('meta');
      appleStatusBar.name = 'apple-mobile-web-app-status-bar-style';
      appleStatusBar.content = 'black-translucent';
      document.head.appendChild(appleStatusBar);
    }

    let appleTitle = document.querySelector('meta[name="apple-mobile-web-app-title"]');
    if (!appleTitle) {
      appleTitle = document.createElement('meta');
      appleTitle.name = 'apple-mobile-web-app-title';
      appleTitle.content = 'Guvera Barber';
      document.head.appendChild(appleTitle);
    }

    // Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      ogTitle.content = 'Guvera Barber Shop - Premium Men\'s Grooming';
      document.head.appendChild(ogTitle);
    }

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      ogDescription.content = 'Professional men\'s barber shop in Paris. Expert cuts, styling, and grooming services.';
      document.head.appendChild(ogDescription);
    }

    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      ogImage.content = 'https://cdn-icons-png.flaticon.com/512/2103/2103633.png';
      document.head.appendChild(ogImage);
    }

    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      ogType.content = 'website';
      document.head.appendChild(ogType);
    }

    // Manifest link
    let manifestLink = document.querySelector('link[rel="manifest"]');
    if (!manifestLink) {
      manifestLink = document.createElement('link');
      manifestLink.rel = 'manifest';
      manifestLink.href = '/manifest.json';
      document.head.appendChild(manifestLink);
    }

    // Apple touch icon
    let appleIcon = document.querySelector('link[rel="apple-touch-icon"]');
    if (!appleIcon) {
      appleIcon = document.createElement('link');
      appleIcon.rel = 'apple-touch-icon';
      appleIcon.href = 'https://cdn-icons-png.flaticon.com/192/2103/2103633.png';
      document.head.appendChild(appleIcon);
    }

  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingAnimation key="loading" onComplete={handleLoadingComplete} />
        ) : (
          <Router key="app">
            <div className="min-h-screen bg-black">
              <ScrollToTop />
              <Header />
              
              <AnimatePresence mode="wait">
                <Routes>
                  <Route 
                    path="/" 
                    element={
                      <motion.div
                        key="home"
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={pageVariants}
                        transition={pageTransition}
                      >
                        <Home />
                      </motion.div>
                    } 
                  />
                  <Route 
                    path="/reviews" 
                    element={
                      <motion.div
                        key="reviews"
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={pageVariants}
                        transition={pageTransition}
                      >
                        <Reviews />
                      </motion.div>
                    } 
                  />
                  <Route 
                    path="/gallery" 
                    element={
                      <motion.div
                        key="gallery"
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={pageVariants}
                        transition={pageTransition}
                      >
                        <Gallery />
                      </motion.div>
                    } 
                  />
                  <Route 
                    path="/contact" 
                    element={
                      <motion.div
                        key="contact"
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={pageVariants}
                        transition={pageTransition}
                      >
                        <Contact />
                      </motion.div>
                    } 
                  />
                  <Route 
                    path="/about" 
                    element={
                      <motion.div
                        key="about"
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={pageVariants}
                        transition={pageTransition}
                      >
                        <About />
                      </motion.div>
                    } 
                  />
                </Routes>
              </AnimatePresence>

              <Footer />
              <PWAInstallPrompt />
            </div>
          </Router>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;