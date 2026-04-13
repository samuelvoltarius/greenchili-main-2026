'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import VideoHighlight from '@/components/VideoHighlight';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

export default function Home() {
  const [selectedService, setSelectedService] = useState<string>('');

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Navigation />
      <Hero />
      <VideoHighlight />
      <About />
      <Portfolio />
      <Services onSelectService={setSelectedService} />
      <Contact prefilledService={selectedService} />
      <Footer />
      <CookieBanner />
    </motion.main>
  );
}
