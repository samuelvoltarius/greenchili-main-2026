'use client';

import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const serviceCategories = [
  {
    id: 'cine',
    title: 'Cine Video',
    icon: '🎥',
    desc: 'High-End Videoproduktion auf Kino-Niveau mit Sony FX6 & FX3.',
    packages: [
      { name: 'Content Mini', price: '599', desc: 'Social Media Boost.', features: ['1x Reel / Short', 'FPV Sequence', 'Sound Design'] },
      { name: 'Image Kickstart', price: '1.499', desc: 'Deine cineastische Visitenkarte.', features: ['Imagefilm (2 Min)', 'Interview', '4K Drohne'] },
      { name: 'Business Impact', price: '2.999', highlight: true, desc: 'Die visuelle Komplettlösung.', features: ['FX6 Cinema Workflow', 'High-End 4K Drohne', 'Storyboarding'] },
      { name: 'Cine Signature', price: '5.499', desc: 'Kino-Qualität ohne Kompromisse.', features: ['Full Crew', '4K RAW', 'Complex VFX/FPV'] }
    ]
  },
  {
    id: 'immobilien',
    title: 'Immobilien',
    icon: '🏠',
    desc: 'Exklusive Immobilienpräsentationen und FPV-Rundflüge.',
    packages: [
      { name: 'STARTER', price: '349', desc: 'Perfekt für kleine Objekte.', features: ['High-Res Foto', 'Basis Video'] },
      { name: 'PROFESSIONAL', price: '699', desc: 'Optimale Präsentation.', features: ['Umfangreiche Galerie', 'FPV Sequence'] },
      { name: 'PREMIUM', price: '1.199', desc: 'High-End Visuals.', features: ['Cine-Video', 'Detail-Aufnahmen'] },
      { name: 'ENTERPRISE', price: '2.499', desc: 'Maximale Marktmacht.', features: ['Full Production', 'Exklusiv-Nutzung'] }
    ]
  },
  {
    id: 'gastro',
    title: 'Hotellerie & Gastro',
    icon: '🏨',
    desc: 'Emotionale Bildwelten für Gäste, die das Besondere suchen.',
    packages: [
      { name: 'Gastro Standard', price: '899', desc: 'Ambiente & Flair.', features: ['Interior Foto', 'Mood Video'] },
      { name: 'Hotellerie Exklusiv', price: '1.999', desc: 'Emotionale Gästeansprache.', features: ['High-End Cine-Film', 'Social Media Pakete'] },
      { name: 'Resort Luxus', price: '3.499', desc: 'Full Branding Experience.', features: ['Full Production', 'Drone Tours'] }
    ]
  },
  {
    id: 'thermo',
    title: 'ChiliView Thermografie',
    icon: '🌡️',
    desc: 'Präzise energetische Analysen und PV-Inspektionen.',
    packages: [
      { name: 'PV SmartCheck', price: '499', desc: 'Analyse privater PV-Anlagen.', features: ['Thermal Scan', 'Hotspot Check'] },
      { name: 'PV Pro', price: '1.299', desc: 'Gewerbliche PV-Inspektion.', features: ['Detaillierte Analyse', 'Full Report'] },
      { name: 'Thermo Gebäude', price: '1.199', desc: 'Gebäude-Energieanalyse.', features: ['Wärmebrücken', 'Außenhüllen-Check'] }
    ]
  },
  {
    id: 'mapping',
    title: 'Mapping & Industrie',
    icon: '🛰️',
    desc: 'Zentimetergenaue 3D-Daten und Baufortschritts-Monitoring.',
    packages: [
      { name: '3D-Vermessung', price: '749', desc: 'Digitale Zwillinge.', features: ['Volumenberechnung', 'CAD Export'] },
      { name: 'Virtual Staging', price: '1.200', desc: 'Digitale Möblierung.', features: ['FX6 Tracking', 'Photorealistic 3D'] },
      { name: 'Baufortschritt', price: '499', desc: 'Monatliches Monitoring.', features: ['Lückenlose Doku', 'Status-Reporting'] }
    ]
  },
  {
    id: 'agrar',
    title: 'Land- & Forstwirtschaft',
    icon: '🌲',
    desc: 'Moderne Analyse-Methoden für effiziente Bewirtschaftung.',
    packages: [
      { name: 'Agri Basic', price: '649', desc: 'Zustandskontrolle Agrar.', features: ['Feld-Analyse', 'Drohnen-Monitoring'] },
      { name: 'Forest Pro', price: '1.499', desc: 'Präzise Forst-Analyse.', features: ['Bestand-Mapping', 'Schadstellen-Scan'] }
    ]
  }
];

export default function Services({ onSelectService }: { onSelectService?: (name: string) => void }) {
  const [activeTab, setActiveTab] = useState(serviceCategories[0].id);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const activeCategory = serviceCategories.find(c => c.id === activeTab) || serviceCategories[0];

  const handleRequest = (packageName: string) => {
    if (onSelectService) {
      onSelectService(packageName);
    }
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section bg-[var(--color-black)] py-40" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-40">
          <span className="text-[var(--color-green-chili)] font-mono text-sm tracking-[0.4em] uppercase block mb-4">
            Expertise & Pakete
          </span>
          <h2 className="text-5xl lg:text-8xl text-[var(--color-text-bright)] mb-8 uppercase font-serif tracking-tighter">Meine Leistungen</h2>
          <div className="w-24 h-1 bg-[var(--color-green-chili)] mx-auto" />
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-32">
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-12 py-8 font-serif text-sm md:text-lg uppercase tracking-[0.2em] transition-all duration-500 ${
                activeTab === cat.id
                ? 'bg-[var(--color-green-chili)] text-black font-black shadow-[0_0_50px_rgba(0,255,65,0.5)] scale-110 z-10'
                : 'bg-[var(--color-black-accent)] border border-[var(--color-green-chili)]/20 text-[var(--color-text-dim)] hover:border-[var(--color-green-chili)]/50 hover:text-[var(--color-text-bright)]'
              }`}
            >
              <span className="block text-2xl mb-2">{cat.icon}</span>
              {cat.title}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid lg:grid-cols-3 gap-20 items-start">
                {/* Left Info Column */}
                <div className="lg:col-span-1">
                  <h3 className="text-4xl text-[var(--color-text-bright)] font-serif mb-8 uppercase tracking-tighter">
                    {activeCategory.title}
                  </h3>
                  <p className="text-[var(--color-text-dim)] text-xl leading-relaxed mb-12">
                    {activeCategory.desc}
                  </p>
                  <div className="w-16 h-px bg-[var(--color-green-chili)]" />
                </div>

                {/* Right Package Grid */}
                <div className="lg:col-span-2 grid md:grid-cols-2 gap-10">
                  {activeCategory.packages.map((pkg) => (
                    <div
                      key={pkg.name}
                      className={`p-12 border border-[var(--color-green-chili)]/10 flex flex-col justify-between transition-all duration-500 hover:border-[var(--color-green-chili)]/60 ${
                        pkg.highlight 
                        ? 'bg-[var(--color-green-chili)]/5 border-[var(--color-green-chili)]/30 shadow-[0_30px_70px_rgba(0,0,0,0.6)] z-10 scale-[1.05]'
                        : 'bg-[var(--color-black-accent)]'
                      }`}
                    >
                      <div>
                        <div className="flex justify-between items-start mb-10">
                          <h4 className="text-3xl text-[var(--color-text-bright)] font-bold uppercase tracking-tighter">
                            {pkg.name}
                          </h4>
                          {pkg.highlight && (
                            <span className="text-[10px] bg-[var(--color-green-chili)] text-black px-3 py-1 font-black uppercase tracking-widest">
                              Premium
                            </span>
                          )}
                        </div>
                        
                        <ul className="space-y-4 mb-14">
                          {pkg.features.map(f => (
                            <li key={f} className="text-base text-[var(--color-text-bright)]/80 flex items-start gap-4">
                              <span className="text-[var(--color-green-chili)] shrink-0 font-bold">✓</span>
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-auto">
                        <div className="flex items-baseline gap-3 mb-10">
                          <span className="text-[var(--color-green-chili)] font-serif text-5xl font-bold">€{pkg.price}</span>
                          <span className="text-xs text-[var(--color-text-dim)] uppercase tracking-[0.2em]">exkl. MwSt.</span>
                        </div>
                        <button 
                          onClick={() => handleRequest(pkg.name)}
                          className={`w-full py-6 text-center font-black uppercase tracking-[0.3em] text-xs transition-all duration-300 ${
                            pkg.highlight
                            ? 'bg-[var(--color-green-chili)] text-black hover:bg-[var(--color-green-light)] shadow-[0_0_25px_rgba(0,255,65,0.4)]'
                            : 'border border-[var(--color-green-chili)]/40 text-[var(--color-text-bright)] hover:bg-[var(--color-green-chili)] hover:text-black'
                          }`}
                        >
                          Paket anfragen
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
