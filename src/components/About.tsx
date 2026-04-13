'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section bg-[var(--color-black-soft)]" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src="/images/alfred.jpg"
                alt="Alfred Aigner - Green Chili Productions"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Decorative frame */}
              <div className="absolute inset-4 border border-[var(--color-green-chili)]/20 pointer-events-none" />
            </div>
            {/* Floating accent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-[var(--color-green-chili)] text-[var(--color-black)] px-8 py-6 text-center"
            >
              <span className="font-serif text-4xl block">24/7</span>
              <span className="font-mono text-[10px] tracking-widest uppercase font-bold">Inspiration</span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[var(--color-green-chili)] font-mono text-sm tracking-[0.2em] uppercase mb-4 block">
              Wer wir sind
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-[var(--color-text-bright)] mb-6">
              Green Chili Productions
            </h2>
            <div className="w-16 h-[2px] bg-[var(--color-green-chili)] mb-8" />
            
            <div className="space-y-8 text-[var(--color-text-dim)] leading-relaxed text-lg">
              <p>
                Mein Name ist Alfred Aigner. Mit Green Chili Productions verbinde ich meine Leidenschaft für 
                High-End Videoproduktion mit modernster Visualisierungstechnologie.
              </p>
              <p>
                Was als kreative Vision in Salzburg begann, hat sich zu einem professionellen Studio für 
                cineastischen Content und technische Spezial-Dienstleistungen entwickelt.
              </p>
              <p>
                Mit der Sony FX6 und FX3 produzieren wir High-End Content auf Kino-Niveau, 
                der nicht nur informiert, sondern emotional fesselt.
              </p>
            </div>

            <div className="mt-14 flex flex-wrap gap-16">
              <div>
                <span className="font-serif text-4xl text-[var(--color-green-chili)]">4K RAW</span>
                <p className="font-mono text-xs text-[var(--color-text-dim)] mt-2 tracking-widest uppercase">Cine-Qualität</p>
              </div>
              <div>
                <span className="font-serif text-4xl text-[var(--color-green-chili)]">120 FPS</span>
                <p className="font-mono text-xs text-[var(--color-text-dim)] mt-2 tracking-widest uppercase">Slow Motion</p>
              </div>
            </div>

            <a href="#contact" className="btn-primary mt-14 inline-block">
              Projekt starten
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
