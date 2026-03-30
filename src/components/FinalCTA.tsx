'use client';

import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative flex items-center justify-center px-6 py-24 overflow-hidden"
      style={{ minHeight: '70vh' }}
    >
      {/* Animated background blob */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div
          style={{
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background:
              'radial-gradient(ellipse at center, rgba(37,99,235,0.18) 0%, rgba(124,58,237,0.10) 50%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-100px' }}
        className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center gap-6"
      >
        <p
          className="text-xs font-medium uppercase tracking-widest"
          style={{ color: 'var(--muted-text)' }}
        >
          Ready to Transform Your Business?
        </p>

        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
          Stop Guessing. Start Operating with Intelligence.
        </h2>

        <p className="text-base leading-relaxed max-w-xl" style={{ color: 'var(--muted-text)' }}>
          Join businesses that have replaced fragmented reporting with a complete intelligence system.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <button
            className="px-8 py-4 rounded-full text-white font-medium text-base transition-opacity hover:opacity-90 cursor-pointer border-none"
            style={{ background: 'var(--accent)' }}
          >
            Get Free Data Audit
          </button>
          <button
            className="px-8 py-4 rounded-full font-medium text-base transition-colors cursor-pointer"
            style={{
              border: '1px solid var(--border-brand)',
              color: 'var(--brand-text)',
              background: 'transparent',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--accent)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border-brand)';
            }}
          >
            Book a Demo
          </button>
        </div>

        <p className="text-xs" style={{ color: 'var(--muted-text)' }}>
          No commitment required &bull; Results in 30 days &bull; Built for your industry
        </p>
      </motion.div>
    </section>
  );
}
