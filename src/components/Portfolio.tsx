'use client';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

// YouTube Thumbnail-Helper
const ytThumb = (id: string) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

const portfolioItems = [
  {
    id: 1,
    type: 'youtube',
    src: 'vU3sz-Xdtt0',
    alt: 'Immobilien Produktion',
    category: 'immo',
  },
  {
    id: 2,
    type: 'image',
    src: 'https://greenchili.at/wp-content/uploads/2025/07/poolside-2024-09-22-02-59-31-utc.jpg',
    alt: 'Premium Immobilien',
    category: 'immo',
  },
  {
    id: 3,
    type: 'image',
    src: 'https://greenchili.at/wp-content/uploads/2025/07/3d-rendering-beige-sofa-contemporary-wood-living-r-2025-01-07-23-20-42-utc.jpg',
    alt: 'Modernes Wohnen',
    category: 'immo',
  },
  {
    id: 4,
    type: 'youtube',
    src: 'tYwwtJadPTQ',
    alt: 'Cineastisches Storytelling',
    category: 'cine',
  },
  {
    id: 5,
    type: 'image',
    src: 'https://greenchili.at/wp-content/uploads/2025/07/bright-airy-modern-living-room-2024-10-17-10-30-39-utc.jpg',
    alt: 'Helle Räume',
    category: 'details',
  },
  {
    id: 6,
    type: 'image',
    src: 'https://greenchili.at/wp-content/uploads/2025/07/elegant-living-room-2025-02-12-00-14-34-utc.jpg',
    alt: 'Elegante Interieurs',
    category: 'details',
  },
  {
    id: 7,
    type: 'youtube',
    src: 'vLb6ShloRWo',
    alt: 'Spotlight on Home',
    category: 'cine',
  },
  {
    id: 8,
    type: 'youtube',
    src: 'tcXt7rEEHgA',
    alt: 'Showreel',
    category: 'immo',
  },
];

const categories = [
  { id: 'all', name: 'Alle' },
  { id: 'cine', name: 'Cinema' },
  { id: 'immo', name: 'Immobilien' },
  { id: 'details', name: 'Details' },
];

function YouTubeItem({ videoId, alt }: { videoId: string; alt: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="w-full h-full" onClick={() => setPlaying(true)}>
      {!playing ? (
        <div className="relative w-full h-full cursor-pointer group/yt">
          <img
            src={ytThumb(videoId)}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-[var(--color-green-chili)] flex items-center justify-center shadow-[0_0_30px_rgba(0,255,65,0.6)] transition-transform duration-300 group-hover/yt:scale-110">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="black">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          className="w-full h-full border-none"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredItems =
    activeCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="section bg-[var(--color-black)]" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[var(--color-green-chili)] text-sm tracking-[0.2em] uppercase mb-4 block font-mono">
            Portfolio
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-[var(--color-text-bright)] mb-6 uppercase">
            Ausgewählte Arbeiten
          </h2>
          <div className="w-16 h-px bg-[var(--color-green-chili)] mx-auto" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-24"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-8 py-3 text-xs tracking-widest uppercase transition-all duration-300 font-mono border \${
                activeCategory === cat.id
                  ? 'bg-[var(--color-green-chili)] text-black border-[var(--color-green-chili)]'
                  : 'text-[var(--color-text-bright)]/60 hover:text-[var(--color-green-chili)] border-[var(--color-text-bright)]/10'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden cursor-pointer group aspect-video bg-black"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {item.type === 'youtube' ? (
                <YouTubeItem videoId={item.src} alt={item.alt} />
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  className={`w-full h-full object-cover transition-transform duration-700 \${
                    hoveredId === item.id ? 'scale-110' : 'scale-100'
                  }`}
                />
              )}

              {/* Hover Overlay (nur für Bilder) */}
              {item.type === 'image' && (
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-8 transition-opacity duration-300 pointer-events-none \${
                    hoveredId === item.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div>
                    <span className="text-[var(--color-green-chili)] text-[10px] font-mono uppercase tracking-[0.2em] mb-2 block">
                      {item.category}
                    </span>
                    <p className="text-[var(--color-text-bright)] font-serif text-xl uppercase">{item.alt}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-24"
        >
          <a href="#contact" className="btn-outline">
            Eigenes Projekt anfragen
          </a>
        </motion.div>
      </div>
    </section>
  );
}
