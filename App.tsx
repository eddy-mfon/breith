import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { AppShowcase } from './components/AppShowcase';
import { Footer } from './components/Footer';
import { TrustBar } from './components/TrustBar';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { CallToAction } from './components/CallToAction';
import { FAQ } from './components/FAQ';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans overflow-x-hidden selection:bg-emerald-200 selection:text-forest-900">
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-400 origin-left z-[60]"
        style={{ scaleX }}
      />
      
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <AppShowcase />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;