'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video - lokales MP4, kein YouTube-Konflikt */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-[1.05]"
          style={{ pointerEvents: 'none' }}
        >
          <source src="/assets/greenchili/logo_bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-black)] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="text-[var(--color-green-chili)] font-mono text-sm tracking-[0.5em] uppercase mb-4 block">
            Digital Media Production
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[var(--color-text-bright)] font-serif text-5xl md:text-7xl lg:text-9xl tracking-tighter mb-6 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]"
        >
          GREEN
          <br />
          <span className="shimmer-gold drop-shadow-[0_5px_15px_rgba(0,255,65,0.3)]">CHILI</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="divider bg-gradient-to-r from-transparent via-[var(--color-green-chili)] to-transparent"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-[var(--color-text-bright)] font-sans text-lg md:text-xl max-w-2xl mx-auto mt-6 mb-10 leading-relaxed font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
        >
          Grenzenlose Kreativität trifft auf modernste Technologie.{' '}
          Visuelle Erlebnisse, die Deine Marke nachhaltig in Szene setzen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a href="#portfolio" className="btn-primary px-12 py-5 text-sm tracking-[0.2em] font-bold shadow-[0_10px_30px_rgba(0,255,65,0.3)]">
            Portfolio ansehen
          </a>
          <a href="#contact" className="btn-outline px-12 py-5 text-sm tracking-[0.2em] font-bold backdrop-blur-sm">
            Projekt anfragen
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[var(--color-green-chili)] text-[10px] tracking-[0.4em] uppercase font-mono">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-[var(--color-green-chili)] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
