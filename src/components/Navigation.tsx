'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const navLinks = [
  { name: 'Über mich', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Leistungen', href: '#services' },
  { name: 'Kontakt', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed nav
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[var(--color-black)]/95 backdrop-blur-md border-b border-white/5 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/greenchili/greenchili_logo.png" 
                alt="Green Chili Productions Logo" 
                className="h-10 w-auto"
              />
              <div className="flex flex-col">
                <span
                  className={`font-serif text-xl tracking-[0.1em] transition-colors duration-300 ${
                    isScrolled ? 'text-[var(--color-text-bright)]' : 'text-[var(--color-green-chili)]'
                  }`}
                >
                  GREEN CHILI
                </span>
                <span
                  className={`font-mono text-xs tracking-[0.2em] -mt-1 transition-colors duration-300 ${
                    isScrolled ? 'text-[var(--color-green-chili)]' : 'text-[var(--color-text-dim)]'
                  }`}
                >
                  PRODUCTIONS
                </span>
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-sm tracking-[0.15em] uppercase font-bold transition-colors duration-300 hover:text-[var(--color-green-chili)] cursor-pointer ${
                  isScrolled ? 'text-[var(--color-text-bright)]' : 'text-[var(--color-text-bright)]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden flex flex-col gap-1.5 p-2 transition-colors ${
              isScrolled ? 'text-[var(--color-text-bright)]' : 'text-[var(--color-text-dim)]'
            }`}
            aria-label="Menu"
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className={`w-6 h-0.5 ${isScrolled ? 'bg-[var(--color-text-bright)]' : 'bg-[var(--color-text-bright)]'}`}
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className={`w-6 h-0.5 ${isScrolled ? 'bg-[var(--color-text-bright)]' : 'bg-[var(--color-text-bright)]'}`}
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className={`w-6 h-0.5 ${isScrolled ? 'bg-[var(--color-text-bright)]' : 'bg-[var(--color-text-bright)]'}`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[var(--color-black)] flex items-center justify-center lg:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-[var(--color-text-bright)] font-serif text-3xl tracking-widest hover:text-[var(--color-green-chili)] transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
