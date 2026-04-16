'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { value: '4K', label: 'RAW Cinema' },
    { value: 'FX6', label: 'Sony Cine Kamera' },
    { value: 'M30T', label: 'DJI Drohne' },
    { value: '120', label: 'FPS Slow Motion' },
  ];

  return (
    <section id="about" className="section" style={{ background: 'var(--color-black-soft)' }} ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden img-reveal">
              <img
                src="/images/alfred.jpg"
                alt="Alfred Aigner — Green Chili Productions"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              {/* Green accent line */}
              <div className="absolute bottom-0 left-0 w-1 h-full bg-[var(--color-green-chili)]/30" />
            </div>

            {/* Floating credential badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="absolute -bottom-8 -right-4 lg:-right-8 bg-[var(--color-black)] border border-[var(--color-green-chili)]/20 p-6"
            >
              <div className="label mb-1 block">Seit</div>
              <span className="font-display text-5xl text-[var(--color-green-chili)]" style={{ fontWeight: 300 }}>
                2019
              </span>
              <p className="label text-[var(--color-text-dim)] mt-1">in der Branche</p>
            </motion.div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="label mb-5 block">Der Mensch dahinter</span>
            <h2 className="font-display text-[var(--color-text-bright)] mb-2" style={{ fontWeight: 300 }}>
              Alfred Aigner
            </h2>
            <h3 className="font-display mb-8" style={{ fontWeight: 300, fontStyle: 'italic', color: 'var(--color-green-chili)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>
              Green Chili Productions
            </h3>

            <div className="w-12 h-px bg-[var(--color-green-chili)]/50 mb-10" />

            <div className="space-y-6 mb-12">
              <p>
                Ich bin Videograf, Luftbildfilmer und Medienproduzent aus Salzburg —
                mit einer Leidenschaft für Bilder, die mehr erzählen als tausend Worte.
              </p>
              <p>
                Mit der <strong className="text-[var(--color-text-bright)] font-normal">Sony FX6</strong> und 
                professionellen Drohnensystemen entstehen Produktionen auf Kinoniveau:
                von Immobilienfilmen über Unternehmensvideos bis hin zu
                thermografischen Gebäudeinspektionen mit dem DJI M30T.
              </p>
              <p>
                Was mich antreibt? Jedes Projekt ist eine neue Geschichte.
                Ich höre zu, verstehe — und erschaffe visuelle Erlebnisse,
                die Ihre Marke nachhaltig in Erinnerung bleiben lassen.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12 pt-8 border-t border-white/5">
              {stats.map((s) => (
                <div key={s.value}>
                  <span className="font-display text-[var(--color-green-chili)] block"
                        style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 300 }}>
                    {s.value}
                  </span>
                  <span className="label text-[var(--color-text-dim)] text-[9px]">{s.label}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary">
              Projekt besprechen
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
