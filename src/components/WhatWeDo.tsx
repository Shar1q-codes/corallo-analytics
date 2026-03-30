'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Activity, Zap, Brain, CheckCircle } from 'lucide-react';

interface Pillar {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  bullets: string[];
  explanation: string;
}

const pillars: Pillar[] = [
  {
    id: 0,
    title: 'Data Unification',
    icon: <Database size={24} />,
    description: 'Connect every data source into one clean, reliable foundation.',
    bullets: [
      'CRM + POS + Marketing unified',
      'Automated data cleaning',
      'Single source of truth',
      'No more spreadsheet chaos',
      'Real-time sync across sources',
    ],
    explanation:
      'We connect every tool your business uses — CRMs, point-of-sale systems, marketing platforms, and financial data — into a single, clean, reliable data layer. No more siloed exports or manual consolidation.',
  },
  {
    id: 1,
    title: 'Real-Time Visibility',
    icon: <Activity size={24} />,
    description: 'See your entire business in motion, updated live, second by second.',
    bullets: [
      'Live KPI dashboards',
      'Role-based views (exec/ops/finance)',
      'Mobile-ready reporting',
      'Anomaly detection',
      'Custom alerts & thresholds',
    ],
    explanation:
      'Your team gets live dashboards tailored to their role. Executives see the big picture, operations sees the details, and finance sees the numbers — all updated in real time with automatic anomaly alerts.',
  },
  {
    id: 2,
    title: 'Automation & Workflows',
    icon: <Zap size={24} />,
    description: 'Trigger intelligent actions automatically based on what your data reveals.',
    bullets: [
      'Automated reports + delivery',
      'Trigger-based workflows',
      'Slack/email alert systems',
      'Scheduled intelligence digests',
      'No-code action rules',
    ],
    explanation:
      "Your intelligence system doesn't just show you what's happening — it acts on it. Reports deliver themselves, alerts fire when thresholds are crossed, and workflows execute automatically so your team can focus on decisions.",
  },
  {
    id: 3,
    title: 'Intelligence & Prediction',
    icon: <Brain size={24} />,
    description: 'Go beyond reporting — forecast outcomes and surface hidden opportunities.',
    bullets: [
      'Predictive revenue modeling',
      'Churn risk scoring',
      'Demand forecasting',
      'Customer segmentation',
      'Opportunity scoring',
    ],
    explanation:
      "We layer machine learning and statistical models on top of your unified data to give you foresight — not just hindsight. Know what's coming before it arrives and act with confidence.",
  },
];

export default function WhatWeDo() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section id="systems" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-14"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            Not Analytics. A Complete Intelligence Layer.
          </h2>
          <p style={{ color: 'var(--muted-text)' }}>
            Four pillars that work together as one unified system.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, index) => {
            const isOpen = openId === pillar.id;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : pillar.id)}
                  className="w-full text-left rounded-2xl p-6 transition-all cursor-pointer"
                  style={{
                    background: 'var(--card)',
                    border: isOpen
                      ? '1px solid var(--accent)'
                      : '1px solid var(--border-brand)',
                  }}
                >
                  <div
                    className="mb-4"
                    style={{ color: isOpen ? 'var(--accent)' : 'var(--muted-text)' }}
                  >
                    {pillar.icon}
                  </div>
                  <h3 className="font-heading font-bold text-white text-base mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--muted-text)' }}>
                    {pillar.description}
                  </p>
                </button>
              </motion.div>
            );
          })}
        </div>

        <AnimatePresence>
          {openId !== null && (
            <motion.div
              key={openId}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}
            >
              <div
                className="mt-4 rounded-2xl p-8"
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--accent)',
                }}
              >
                {(() => {
                  const p = pillars[openId];
                  return (
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="flex-1">
                        <div
                          className="flex items-center gap-3 mb-4"
                          style={{ color: 'var(--accent)' }}
                        >
                          {p.icon}
                          <h3 className="font-heading font-bold text-white text-xl">
                            {p.title}
                          </h3>
                        </div>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: 'var(--muted-text)' }}
                        >
                          {p.explanation}
                        </p>
                      </div>
                      <div className="flex-1">
                        <ul className="flex flex-col gap-3">
                          {p.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex items-center gap-3 text-sm"
                              style={{ color: 'var(--brand-text)' }}
                            >
                              <CheckCircle
                                size={16}
                                style={{ color: 'var(--accent)', flexShrink: 0 }}
                              />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
