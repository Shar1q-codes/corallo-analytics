'use client';

import { motion } from 'framer-motion';
import { Building2, Coffee, Home, TrendingUp, Heart } from 'lucide-react';

interface Industry {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const industries: Industry[] = [
  {
    title: 'Multi-Location Businesses',
    icon: <Building2 size={24} />,
    description: 'Unified view across all locations, staff, and revenue streams.',
  },
  {
    title: 'Coffee & Hospitality Chains',
    icon: <Coffee size={24} />,
    description: 'Track each location\'s performance, staff, and inventory in real time.',
  },
  {
    title: 'Property Management',
    icon: <Home size={24} />,
    description: 'Portfolio analytics, tenant insights, and maintenance intelligence.',
  },
  {
    title: 'Financial Services',
    icon: <TrendingUp size={24} />,
    description: 'Risk dashboards, portfolio performance, and compliance reporting.',
  },
  {
    title: 'Clinics & Healthcare',
    icon: <Heart size={24} />,
    description: 'Patient flow, operational efficiency, and revenue cycle analytics.',
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-14"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            Built for Complex Businesses
          </h2>
          <p style={{ color: 'var(--muted-text)' }}>
            Industry-specific intelligence, not generic analytics.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((ind, index) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ y: -4 }}
              className="relative group"
              style={{ width: 'clamp(200px, 18%, 240px)', flexGrow: 0 }}
            >
              <div
                className="rounded-2xl p-6 h-full cursor-default transition-all"
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border-brand)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    '0 0 20px rgba(37,99,235,0.3)';
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border-brand)';
                }}
              >
                <div className="mb-4" style={{ color: 'var(--accent)' }}>
                  {ind.icon}
                </div>
                <h3 className="font-heading font-bold text-white text-sm mb-2">
                  {ind.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--muted-text)' }}>
                  {ind.description}
                </p>

                {/* Tooltip */}
                <div
                  className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-3 rounded-xl px-3 py-2 text-xs text-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none w-48"
                  style={{
                    background: 'var(--card)',
                    border: '1px solid var(--accent)',
                    color: 'var(--muted-text)',
                  }}
                >
                  Each system is tailored to the way your industry operates.
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
