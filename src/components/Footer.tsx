'use client';

import Link from 'next/link';
import { useCallback } from 'react';

const footerNavLinks = [
  { name: 'Über mich', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Leistungen', href: '#services' },
  { name: 'Kontakt', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <footer className="bg-[var(--color-black)] border-t border-[var(--color-green-chili)]/10">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center gap-3">
                <img 
                  src="/assets/greenchili/greenchili_logo.png" 
                  alt="Green Chili Productions Logo" 
                  className="h-8 w-auto"
                />
                <div className="flex flex-col">
                  <span className="font-display text-2xl text-[var(--color-text-bright)]">
                    GREEN CHILI
                  </span>
                  <span className="font-mono text-xs tracking-[0.2em] -mt-1 text-[var(--color-green-chili)]">
                    PRODUCTIONS
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-[var(--color-text-dim)] max-w-sm leading-relaxed">
              Kreativität trifft auf Technologie. Wir produzieren visuelle Erlebnisse, 
              die Deine Marke nachhaltig stärken und Deine Botschaft präzise vermitteln.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl text-[var(--color-text-bright)] mb-6">Navigation</h4>
            <ul className="space-y-3">
              {footerNavLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="text-[var(--color-text-dim)] hover:text-[var(--color-green-chili)] transition-colors text-sm cursor-pointer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl text-[var(--color-text-bright)] mb-6">Kontakt</h4>
            <ul className="space-y-3 text-[var(--color-text-dim)] text-sm">
              <li>
                <a href="tel:+436767901777" className="hover:text-[var(--color-green-chili)] transition-colors">
                  +43 676 7901777
                </a>
              </li>
              <li>
                <a href="mailto:office@greenchili.at" className="hover:text-[var(--color-green-chili)] transition-colors">
                  office@greenchili.at
                </a>
              </li>
              <li>Salzburg, Österreich</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--color-green-chili)]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--color-text-dim)]/40 text-sm">
            © {currentYear} Green Chili Productions. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/faq" className="text-[var(--color-text-dim)]/40 hover:text-[var(--color-green-chili)] transition-colors">
              FAQ
            </Link>
            <Link href="/impressum" className="text-[var(--color-text-dim)]/40 hover:text-[var(--color-green-chili)] transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-[var(--color-text-dim)]/40 hover:text-[var(--color-green-chili)] transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
