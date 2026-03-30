'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, PenTool, Code, Rocket, TrendingUp } from 'lucide-react';

interface Step {
  number: number;
  title: string;
  icon: React.ReactNode;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Diagnose',
    icon: <Search size={20} />,
    description: 'We audit your current data, tools, and business needs to map what exists and what\'s missing.',
  },
  {
    number: 2,
    title: 'Design',
    icon: <PenTool size={20} />,
    description: 'We architect the full intelligence system blueprint — data model, dashboards, automations, and integrations.',
  },
  {
    number: 3,
    title: 'Build',
    icon: <Code size={20} />,
    description: 'We build pipelines, dashboards, and automation workflows — engineered for your specific business logic.',
  },
  {
    number: 4,
    title: 'Deploy',
    icon: <Rocket size={20} />,
    description: 'We go live with full testing and team onboarding — so everyone knows exactly how to use the system.',
  },
  {
    number: 5,
    title: 'Scale',
    icon: <TrendingUp size={20} />,
    description: 'We optimize, expand, and evolve the system with you — adding new modules as your business grows.',
  },
];

export default function Process() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section id="process" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            How We Build Your System
          </h2>
          <p style={{ color: 'var(--muted-text)' }}>
            A proven 5-stage process from strategy to scale.
          </p>
        </motion.div>

        {/* Desktop horizontal stepper */}
        <div className="hidden md:flex items-start gap-0">
          {steps.map((step, index) => {
            const isHovered = hoveredStep === step.number;

            return (
              <div key={step.number} className="flex items-start flex-1">
                <div className="flex flex-col items-center flex-1">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="flex flex-col items-center"
                    onMouseEnter={() => setHoveredStep(step.number)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    {/* Step circle */}
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all cursor-default mb-4"
                      style={{
                        background: isHovered ? 'var(--accent)' : 'transparent',
                        border: isHovered
                          ? '2px solid var(--accent)'
                          : '2px solid var(--border-brand)',
                        color: isHovered ? 'white' : 'var(--muted-text)',
                        boxShadow: isHovered ? '0 0 20px rgba(37,99,235,0.4)' : 'none',
                      }}
                    >
                      {step.number}
                    </div>

                    {/* Icon + title */}
                    <div
                      className="flex flex-col items-center gap-2 mb-3"
                      style={{ color: isHovered ? 'var(--accent)' : 'var(--muted-text)' }}
                    >
                      {step.icon}
                      <span className="font-heading font-bold text-white text-sm">
                        {step.title}
                      </span>
                    </div>

                    {/* Animated description */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.p
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="text-xs text-center px-2 leading-relaxed"
                          style={{ color: 'var(--muted-text)' }}
                        >
                          {step.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="flex items-center mt-6 w-8 flex-shrink-0">
                    <div
                      className="h-0.5 w-full transition-colors"
                      style={{
                        background:
                          hoveredStep === step.number || hoveredStep === step.number + 1
                            ? 'var(--accent)'
                            : 'var(--border-brand)',
                      }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile vertical stepper */}
        <div className="flex flex-col gap-6 md:hidden">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="flex gap-4"
            >
              {/* Left: circle + line */}
              <div className="flex flex-col items-center gap-0">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{
                    border: '2px solid var(--accent)',
                    color: 'white',
                    background: 'rgba(37,99,235,0.15)',
                  }}
                >
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className="w-0.5 flex-1 mt-2"
                    style={{ background: 'var(--border-brand)', minHeight: '32px' }}
                  />
                )}
              </div>

              {/* Right: content */}
              <div className="pb-4">
                <div className="flex items-center gap-2 mb-1" style={{ color: 'var(--accent)' }}>
                  {step.icon}
                  <span className="font-heading font-bold text-white text-sm">
                    {step.title}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-text)' }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
