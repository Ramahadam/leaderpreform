import { useEffect, useRef, lazy, Suspense } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './sections/Hero';
import Navigation from './components/Navigation';
import CustomCursor from './components/CustomCursor';

// Lazy load below-the-fold sections
const ProductShowcase = lazy(() => import('./sections/ProductShowcase'));
const ColorPalette = lazy(() => import('./sections/ColorPalette'));
const Finale = lazy(() => import('./sections/Finale'));
const Footer = lazy(() => import('./sections/Footer'));

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    // Velocity-based skew effect
    let currentSkew = 0;
    let targetSkew = 0;
    const lastScrollY = { current: window.scrollY };
    let rafId: number;
    let scrollTimeout: ReturnType<typeof setTimeout>;
    
    const updateSkew = () => {
      currentSkew += (targetSkew - currentSkew) * 0.1;
      if (mainRef.current) {
        mainRef.current.style.transform = `skewY(${currentSkew}deg)`;
      }
      rafId = requestAnimationFrame(updateSkew);
    };
    
    const handleScroll = () => {
      const scrollSpeed = Math.abs(window.scrollY - lastScrollY.current);
      targetSkew = Math.min(scrollSpeed * 0.02, 3);
      lastScrollY.current = window.scrollY;
      
      // Reset skew when scroll stops
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        targetSkew = 0;
      }, 100);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    updateSkew();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
      clearTimeout(scrollTimeout);
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
    };
  }, []);

  return (
    <div className="relative bg-black min-h-screen overflow-x-hidden">
      {/* Grain overlay */}
      <div className="grain-overlay" />
      
      {/* Custom cursor */}
      <CustomCursor />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main ref={mainRef} className="relative transition-transform duration-100 ease-out will-change-transform">
        <Hero />
        <Suspense fallback={<div className="h-screen bg-black" />}>
          <ProductShowcase />
          <ColorPalette />
          <Finale />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
