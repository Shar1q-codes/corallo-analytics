'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface KpiTarget {
  label: string;
  target: number;
  prefix: string;
  suffix: string;
  change: string;
}

const kpiTargets: KpiTarget[] = [
  { label: 'Revenue', target: 284500, prefix: '$', suffix: '', change: '+12.4%' },
  { label: 'Customers', target: 3812, prefix: '', suffix: '', change: '+6.1%' },
  { label: 'Margin', target: 34.2, prefix: '', suffix: '%', change: '+2.1%' },
];

const sparklinePoints = '0,60 20,50 40,55 60,35 80,40 100,25 120,30 140,15 160,20 180,10';

const statusItems = [
  { label: 'Sales Pipeline', status: 'Active', color: '#22c55e' },
  { label: 'Inventory', status: 'Synced', color: '#3b82f6' },
  { label: 'Marketing', status: 'Running', color: '#a855f7' },
];

const microTags = ['Real-time', 'Predictive', 'Automated', 'Scalable'];

function useCountUp(target: number, duration: number, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setValue(progress * target);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, active]);
  return value;
}

function KpiCard({ item, active }: { item: KpiTarget; active: boolean }) {
  const raw = useCountUp(item.target, 2000, active);

  const formatted =
    item.target >= 1000
      ? Math.round(raw).toLocaleString()
      : raw.toFixed(1);

  return (
    <div
      className="flex-1 rounded-xl p-3"
      style={{ background: 'rgba(255,255,255,0.04)' }}
    >
      <p className="text-xs mb-1" style={{ color: 'var(--muted-text)' }}>
        {item.label}
      </p>
      <p className="text-white font-bold text-lg font-heading">
        {item.prefix}{formatted}{item.suffix}
      </p>
      <p className="text-xs mt-0.5" style={{ color: '#22c55e' }}>
        {item.change} ↑
      </p>
    </div>
  );
}

export default function Hero() {
  const [kpiActive, setKpiActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setKpiActive(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="flex flex-col lg:flex-row items-center gap-12 px-6 py-16 max-w-7xl mx-auto"
      style={{ minHeight: '90vh' }}
    >
      {/* Left */}
      <motion.div
        className="flex-1 flex flex-col gap-6"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <p
          className="text-xs font-medium uppercase tracking-widest"
          style={{ color: 'var(--muted-text)' }}
        >
          Intelligence Systems
        </p>

        <h1
          className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight"
        >
          Your Business. One Intelligence System.
        </h1>

        <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--muted-text)' }}>
          We build unified data systems that connect every part of your business — delivering
          real-time visibility, predictive intelligence, and automated workflows.
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            className="px-6 py-3 rounded-full text-white font-medium text-sm transition-opacity hover:opacity-90 cursor-pointer border-none"
            style={{ background: 'var(--accent)' }}
          >
            See System Demo
          </button>
          <button
            className="px-6 py-3 rounded-full font-medium text-sm transition-colors cursor-pointer"
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
            Get Free Data Audit
          </button>
        </div>

        {/* Micro tags */}
        <div className="flex flex-wrap gap-2">
          {microTags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full"
              style={{
                border: '1px solid var(--border-brand)',
                color: 'var(--muted-text)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Right — Dashboard mockup */}
      <motion.div
        className="flex-1 w-full max-w-md lg:max-w-none"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="rounded-2xl p-6"
          style={{
            background: 'var(--card)',
            border: '1px solid var(--border-brand)',
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <span className="font-heading font-bold text-white text-sm">
              Live Business Dashboard
            </span>
            <span className="flex items-center gap-1.5 text-xs" style={{ color: '#22c55e' }}>
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: '#22c55e' }}
              />
              Live
            </span>
          </div>

          {/* KPI row */}
          <div className="flex gap-3 mb-5">
            {kpiTargets.map((item) => (
              <KpiCard key={item.label} item={item} active={kpiActive} />
            ))}
          </div>

          {/* Sparkline */}
          <div
            className="rounded-xl p-3 mb-5"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-brand)' }}
          >
            <p className="text-xs mb-2" style={{ color: 'var(--muted-text)' }}>
              Revenue Trend
            </p>
            <svg
              viewBox="0 0 180 70"
              className="w-full"
              height="60"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polygon
                points={`0,70 ${sparklinePoints} 180,70`}
                fill="url(#sparkFill)"
              />
              <polyline
                points={sparklinePoints}
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Status rows */}
          <div className="flex flex-col gap-2">
            {statusItems.map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: item.color }}
                  />
                  <span className="text-xs" style={{ color: 'var(--muted-text)' }}>
                    {item.label}
                  </span>
                </div>
                <span className="text-xs font-medium" style={{ color: item.color }}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
