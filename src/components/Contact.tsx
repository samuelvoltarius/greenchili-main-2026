'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type FormState = {
  name: string;
  email: string;
  phone: string;
  date: string;
  location: string;
  service: string;
  budget: string;
  message: string;
  whatsappConfirm: boolean;
};

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  date: '',
  location: '',
  service: 'Imagefilm',
  budget: '',
  message: '',
  whatsappConfirm: false,
};

export default function Contact({ prefilledService }: { prefilledService?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [formState, setFormState] = useState<FormState>(initialForm);
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [blockedDates, setBlockedDates] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (prefilledService) {
      setFormState(prev => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  useEffect(() => {
    fetch('/api/bookings/blocked')
      .then((r) => r.json())
      .then((data) => setBlockedDates(new Set(data.blockedDates || [])))
      .catch(() => {});
  }, []);

  const handleChange = (key: keyof FormState, value: string | boolean) => {
    setFormState((prev) => ({ ...prev, [key]: value } as FormState));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitState('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formState, brand: 'CHILI' }),
      });

      if (!res.ok) {
        throw new Error('Fehler beim Absenden');
      }

      setSubmitState('success');
      setFormState(initialForm);
    } catch (err) {
      setSubmitState('error');
      setErrorMsg('Senden fehlgeschlagen. Bitte später erneut versuchen oder direkt anrufen.');
    }
  };

  const resetForm = () => {
    setSubmitState('idle');
    setFormState(initialForm);
    setErrorMsg('');
  };

  return (
    <section
      id="contact"
      className="bg-[var(--color-black)] relative overflow-hidden section"
      ref={ref}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--color-green-chili)]/20 to-transparent" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start max-w-6xl mx-auto">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[var(--color-green-chili)] font-mono text-sm tracking-[0.2em] uppercase mb-4 block">
              Kontakt & Buchung
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-[var(--color-text-bright)] mb-6">
              Lass uns dein Projekt
              <br />
              <span className="text-[var(--color-green-chili)]">realisieren</span>
            </h2>
            <div className="w-16 h-[2px] bg-[var(--color-green-chili)] mb-8" />

            <p className="text-[var(--color-text-dim)] leading-relaxed mb-12 text-xl max-w-md">
              Wir begleiten dich von der Vision bis zum fertigen Master. Schreib uns dein Vorhaben – wir melden uns innerhalb von 24 Stunden.
            </p>

            {/* Contact Details */}
            <div className="space-y-8">
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 border border-[var(--color-green-chili)]/20 flex items-center justify-center transition-all duration-300 group-hover:border-[var(--color-green-chili)]/50">
                  <svg className="w-6 h-6 text-[var(--color-green-chili)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[var(--color-text-dim)] text-xs uppercase tracking-widest">Telefon</p>
                  <a href="tel:+436767901777" className="text-[var(--color-text-bright)] text-xl hover:text-[var(--color-green-chili)] transition-colors font-bold">
                    +43 676 790 1777
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 border border-[var(--color-green-chili)]/20 flex items-center justify-center transition-all duration-300 group-hover:border-[var(--color-green-chili)]/50">
                  <svg className="w-6 h-6 text-[var(--color-green-chili)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[var(--color-text-dim)] text-xs uppercase tracking-widest">E-Mail</p>
                  <a href="mailto:office@greenchili.at" className="text-[var(--color-text-bright)] text-xl hover:text-[var(--color-green-chili)] transition-colors font-bold">
                    office@greenchili.at
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            <div className="bg-[var(--color-black-accent)] p-8 md:p-12 border border-[var(--color-green-chili)]/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <AnimatePresence mode="wait">
                {submitState === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                      className="w-20 h-20 mx-auto mb-8 bg-[var(--color-green-chili)] rounded-full flex items-center justify-center"
                    >
                      <svg className="w-10 h-10 text-[var(--color-black)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <h3 className="font-serif text-3xl text-[var(--color-text-bright)] mb-4">Vielen Dank!</h3>
                    <p className="text-[var(--color-text-dim)] leading-relaxed mb-8 text-lg max-w-sm mx-auto">
                      Deine Anfrage ist eingegangen. Wir melden uns innerhalb von 24 Stunden.
                    </p>
                    <button onClick={resetForm} className="btn-outline text-sm">
                      Neue Anfrage senden
                    </button>
                  </motion.div>
                ) : (
                  <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit}>
                    <h3 className="font-serif text-3xl lg:text-4xl text-[var(--color-text-bright)] mb-4">
                      Buchungsanfrage
                    </h3>
                    <p className="text-[var(--color-text-dim)] mb-12 text-xl">
                      Teile uns die Details deines Vorhabens mit.
                    </p>

                    <div className="space-y-8">
                      <div>
                        <label className="block text-xs uppercase tracking-widest font-bold text-[var(--color-green-chili)] mb-3">Dein Name *</label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          className="w-full px-5 py-5 bg-[var(--color-black)] border border-[var(--color-green-chili)]/10 text-[var(--color-text-bright)] focus:border-[var(--color-green-chili)] outline-none transition-all font-mono text-base"
                          placeholder="Name / Firma"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <label className="block text-xs uppercase tracking-widest font-bold text-[var(--color-green-chili)] mb-3">E-Mail *</label>
                          <input
                            type="email"
                            required
                            value={formState.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            className="w-full px-5 py-5 bg-[var(--color-black)] border border-[var(--color-green-chili)]/10 text-[var(--color-text-bright)] focus:border-[var(--color-green-chili)] outline-none transition-all font-mono text-base"
                            placeholder="deine@email.at"
                          />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-widest font-bold text-[var(--color-green-chili)] mb-3">Telefon</label>
                          <input
                            type="tel"
                            value={formState.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            className="w-full px-5 py-5 bg-[var(--color-black)] border border-[var(--color-green-chili)]/10 text-[var(--color-text-bright)] focus:border-[var(--color-green-chili)] outline-none transition-all font-mono text-base"
                            placeholder="+43 ..."
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <label className="block text-xs uppercase tracking-widest font-bold text-[var(--color-green-chili)] mb-3">Datum</label>
                          <input
                            type="date"
                            value={formState.date}
                            onChange={(e) => handleChange('date', e.target.value)}
                            className="w-full px-5 py-5 bg-[var(--color-black)] border border-[var(--color-green-chili)]/10 text-[var(--color-text-bright)] focus:border-[var(--color-green-chili)] outline-none transition-all font-mono text-base"
                          />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-widest font-bold text-[var(--color-green-chili)] mb-3">Leistung</label>
                          <select
                            value={formState.service}
                            onChange={(e) => handleChange('service', e.target.value)}
                            className="w-full px-5 py-5 bg-[var(--color-black)] border border-[var(--color-green-chili)]/10 text-[var(--color-text-bright)] focus:border-[var(--color-green-chili)] outline-none transition-all font-mono text-base"
                          >
                            <option>Imagefilm</option>
                            <option>Social Media</option>
                            <option>Event</option>
                            <option>Immobilien</option>
                            <option>Thermografie</option>
                            <option>Industrie</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-widest font-bold text-[var(--color-green-chili)] mb-3">Nachricht *</label>
                        <textarea
                          required
                          rows={5}
                          value={formState.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          className="w-full px-5 py-5 bg-[var(--color-black)] border border-[var(--color-green-chili)]/10 text-[var(--color-text-bright)] focus:border-[var(--color-green-chili)] outline-none transition-all font-mono text-base resize-none"
                          placeholder="Beschreibe kurz dein Projekt..."
                        />
                      </div>

                      <div className="flex items-start gap-4 pt-4">
                        <input
                          id="whatsappConfirm"
                          type="checkbox"
                          checked={formState.whatsappConfirm}
                          onChange={(e) => handleChange('whatsappConfirm', e.target.checked)}
                          className="mt-1.5 h-6 w-6 rounded-none border-[var(--color-green-chili)]/40 bg-[var(--color-black)] text-[var(--color-green-chili)] focus:ring-[var(--color-green-chili)]"
                        />
                        <label htmlFor="whatsappConfirm" className="text-sm text-[var(--color-text-dim)] uppercase tracking-wider leading-relaxed">
                          WhatsApp-Bestätigung senden. Kurze Info: Anfrage erhalten, Rückmeldung folgt.
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={submitState === 'submitting'}
                      className="btn-primary w-full mt-10 py-6 relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <span className={`transition-all duration-300 text-base font-bold tracking-widest ${submitState === 'submitting' ? 'opacity-0' : 'opacity-100'}`}>
                        Anfrage absenden
                      </span>
                      {submitState === 'submitting' && (
                        <span className="absolute inset-0 flex items-center justify-center text-[var(--color-black)] text-base tracking-widest font-bold">
                          SENDING...
                        </span>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
