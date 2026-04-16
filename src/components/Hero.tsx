'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-end overflow-hidden">

      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover scale-[1.03]"
          style={{ pointerEvents: 'none' }}
        >
          <source src="/assets/greenchili/logo_bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-[var(--color-black)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
      </div>

      {/* Content — pinned to bottom-left for cinematic poster feel */}
      <div className="relative z-10 container pb-24 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="label mb-6 block">
            Videoproduktion &amp; Luftaufnahmen · Salzburg
          </span>

          <h1 className="font-display text-[var(--color-text-bright)] leading-[0.95] mb-8"
              style={{ fontSize: 'clamp(4rem, 11vw, 10rem)', fontWeight: 300 }}>
            Green
            <br />
            <em className="not-italic" style={{ color: 'var(--color-green-chili)', fontStyle: 'italic', fontWeight: 400 }}>
              Chili.
            </em>
          </h1>

          <p className="text-[var(--color-text-bright)]/70 font-sans text-lg md:text-xl max-w-xl leading-relaxed mb-12"
             style={{ fontWeight: 300 }}>
            Cineastische Videoproduktion, Drohnenaufnahmen und<br className="hidden md:block" />
            Thermografie — für Immobilien, Hotels &amp; Unternehmen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#portfolio" className="btn-primary">
              Arbeiten ansehen
            </a>
            <a href="#contact" className="btn-outline">
              Projekt anfragen
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 right-8 flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-px h-14 bg-gradient-to-b from-transparent via-[var(--color-green-chili)] to-transparent" />
          <span className="label text-[8px]">scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
