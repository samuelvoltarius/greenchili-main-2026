'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function VideoHighlight() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="video-highlight" style={styles.section}>
      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={styles.header}
        >
          <span style={styles.subtitle}>Einblicke</span>
          <h2 style={styles.title}>Unsere Arbeit in Bewegung</h2>
          <div style={styles.divider} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={styles.videoWrapper}
        >
          <div style={styles.videoFrame}>
            {!playing ? (
              <div
                style={styles.thumbnailWrapper}
                onClick={() => setPlaying(true)}
              >
                <img
                  src={`https://img.youtube.com/vi/tcXt7rEEHgA/maxresdefault.jpg`}
                  alt="Green Chili Showreel"
                  style={styles.thumbnail}
                />
                <div style={styles.playOverlay}>
                  <div style={styles.playButton}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="black">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span style={styles.playLabel}>Showreel ansehen</span>
                </div>
              </div>
            ) : (
              <iframe
                style={styles.video}
                src="https://www.youtube.com/embed/tcXt7rEEHgA?autoplay=1&rel=0&modestbranding=1&vq=hd1080"
                title="Green Chili Productions – Showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
            {/* Decorative corners */}
            <div style={{ ...styles.corner, ...styles.cornerTopLeft }} />
            <div style={{ ...styles.corner, ...styles.cornerTopRight }} />
            <div style={{ ...styles.corner, ...styles.cornerBottomLeft }} />
            <div style={{ ...styles.corner, ...styles.cornerBottomRight }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    padding: 'clamp(4rem, 10vw, 8rem) 0',
    backgroundColor: 'var(--color-black-soft)',
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 clamp(1.5rem, 5vw, 4rem)',
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: '3rem',
  },
  subtitle: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    fontWeight: 500,
    letterSpacing: '0.4em',
    textTransform: 'uppercase' as const,
    color: 'var(--color-green-chili)',
    display: 'block',
    marginBottom: '1rem',
  },
  title: {
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
    fontWeight: 600,
    color: 'var(--color-text-bright)',
    letterSpacing: '0.02em',
    margin: 0,
    textTransform: 'uppercase' as const,
  },
  divider: {
    width: '60px',
    height: '2px',
    background: 'var(--color-green-chili)',
    margin: '1.5rem auto 0',
  },
  videoWrapper: {
    position: 'relative' as const,
    maxWidth: '1100px',
    margin: '0 auto',
  },
  videoFrame: {
    position: 'relative' as const,
    borderRadius: '2px',
    overflow: 'hidden',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    border: '1px solid rgba(0, 255, 65, 0.1)',
    aspectRatio: '16/9',
  },
  thumbnailWrapper: {
    position: 'relative' as const,
    width: '100%',
    height: '100%',
    cursor: 'pointer',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    display: 'block',
  },
  playOverlay: {
    position: 'absolute' as const,
    inset: 0,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(0,0,0,0.4)',
    gap: '1rem',
    transition: 'background 0.3s',
  },
  playButton: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: 'var(--color-green-chili)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 40px rgba(0,255,65,0.5)',
  },
  playLabel: {
    color: 'white',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    letterSpacing: '0.3em',
    textTransform: 'uppercase' as const,
  },
  video: {
    width: '100%',
    height: '100%',
    display: 'block',
    border: 'none',
    backgroundColor: 'var(--color-black)',
  },
  corner: {
    position: 'absolute' as const,
    width: '30px',
    height: '30px',
    borderColor: 'var(--color-green-chili)',
    borderStyle: 'solid',
    borderWidth: '0',
    pointerEvents: 'none' as const,
    opacity: 0.5,
    zIndex: 2,
  },
  cornerTopLeft: { top: '15px', left: '15px', borderTopWidth: '1px', borderLeftWidth: '1px' },
  cornerTopRight: { top: '15px', right: '15px', borderTopWidth: '1px', borderRightWidth: '1px' },
  cornerBottomLeft: { bottom: '15px', left: '15px', borderBottomWidth: '1px', borderLeftWidth: '1px' },
  cornerBottomRight: { bottom: '15px', right: '15px', borderBottomWidth: '1px', borderRightWidth: '1px' },
};
