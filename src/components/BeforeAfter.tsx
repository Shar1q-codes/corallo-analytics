'use client';

import { motion } from 'framer-motion';

const beforeItems = [
  'Disconnected tools across departments',
  'Manual weekly/monthly reporting',
  'No single source of truth',
  'Decisions made on gut feel',
  'Data siloed in spreadsheets',
  'Delayed insights, missed opportunities',
];

const afterItems = [
  'Unified intelligence system',
  'Real-time automated reporting',
  'Single source of truth for all data',
  'Data-driven decisions, daily',
  'All systems connected and synced',
  'Predictive insights, ahead of problems',
];

export default function BeforeAfter() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-14"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
            From Fragmented to Fully Connected
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Before column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
            className="rounded-2xl p-8"
            style={{
              background: 'rgba(239,68,68,0.05)',
              border: '1px solid rgba(239,68,68,0.2)',
            }}
          >
            <h3
              className="font-heading font-bold text-xl mb-6"
              style={{ color: '#f87171' }}
            >
              Before Corallo
            </h3>
            <ul className="flex flex-col gap-4">
              {beforeItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: 'easeOut',
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true, margin: '-100px' }}
                  className="flex items-start gap-3 text-sm"
                  style={{ color: 'var(--muted-text)' }}
                >
                  <span className="mt-0.5 flex-shrink-0" style={{ color: '#f87171' }}>
                    ✕
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* After column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
            className="rounded-2xl p-8"
            style={{
              background: 'rgba(37,99,235,0.05)',
              border: '1px solid rgba(37,99,235,0.3)',
            }}
          >
            <h3
              className="font-heading font-bold text-xl mb-6"
              style={{ color: 'var(--accent-light)' }}
            >
              After Corallo
            </h3>
            <ul className="flex flex-col gap-4">
              {afterItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: 'easeOut',
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true, margin: '-100px' }}
                  className="flex items-start gap-3 text-sm"
                  style={{ color: 'var(--brand-text)' }}
                >
                  <span className="mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }}>
                    ✓
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
