'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart2, Search, TrendingUp, Target, Cpu } from 'lucide-react';

interface AnalyticsCard {
  id: number;
  type: string;
  question: string;
  icon: React.ReactNode;
  definition: string;
  useCase: string;
  exampleOutput: string;
  wide?: boolean;
  gradient?: boolean;
}

const cards: AnalyticsCard[] = [
  {
    id: 0,
    type: 'Descriptive',
    question: 'What happened?',
    icon: <BarChart2 size={22} />,
    definition:
      'Descriptive analytics summarizes historical data to understand what has already occurred in your business.',
    useCase:
      'A retail chain uses descriptive analytics to review last month\'s sales by location, product category, and staff performance.',
    exampleOutput: 'Total Revenue: $284,500 | Top SKU: Product #1042 | Best Location: Downtown (↑18%)',
  },
  {
    id: 1,
    type: 'Diagnostic',
    question: 'Why did it happen?',
    icon: <Search size={22} />,
    definition:
      'Diagnostic analytics drills into historical data to identify the root causes behind performance trends.',
    useCase:
      'Sales dropped 12% in Q3. Diagnostic analysis reveals a correlation with a supplier delay and a failed ad campaign.',
    exampleOutput: 'Root cause identified: Stock-out event on 3 SKUs (Aug 14–21) + CAC spike of +34% from Paid Social',
  },
  {
    id: 2,
    type: 'Predictive',
    question: 'What will happen?',
    icon: <TrendingUp size={22} />,
    definition:
      'Predictive analytics uses statistical models and machine learning to forecast future outcomes.',
    useCase:
      'A hospitality group forecasts bookings for the next 90 days by location, enabling proactive staffing and inventory decisions.',
    exampleOutput: 'Forecast: +22% demand spike — Oct 12–19 | Churn risk: 3 enterprise accounts (score > 0.8)',
  },
  {
    id: 3,
    type: 'Prescriptive',
    question: 'What should we do?',
    icon: <Target size={22} />,
    definition:
      'Prescriptive analytics goes beyond predicting outcomes — it recommends specific actions to achieve optimal results.',
    useCase:
      'The system detects declining margins on a product line and prescribes a price adjustment and supplier renegotiation.',
    exampleOutput: 'Recommended action: Increase Product A price by 8% → projected margin recovery: +$14,200/mo',
  },
  {
    id: 4,
    type: 'AI / Automated Intelligence',
    question: 'System thinks, predicts, and acts autonomously',
    icon: <Cpu size={22} />,
    definition:
      'AI-driven intelligence closes the loop entirely — detecting patterns, triggering decisions, and executing workflows without human input.',
    useCase:
      'When churn risk crosses a threshold, the system automatically enrolls the customer in a retention sequence, alerts the account manager, and logs the action.',
    exampleOutput: 'Auto-triggered: Retention workflow → Customer #8841 | Slack alert sent → AE: Sarah M. | CRM updated',
    wide: true,
    gradient: true,
  },
];

export default function AnalyticsTypes() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section id="analytics-types" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-14"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            From Data → Insights → Decisions → Actions
          </h2>
        </motion.div>

        {/* 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {cards.slice(0, 4).map((card, index) => {
            const isOpen = openId === card.id;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : card.id)}
                  className="w-full text-left rounded-2xl p-6 transition-all cursor-pointer"
                  style={{
                    background: 'var(--card)',
                    border: isOpen
                      ? '1px solid var(--accent)'
                      : '1px solid var(--border-brand)',
                  }}
                >
                  <div
                    className="flex items-center gap-3 mb-3"
                    style={{ color: isOpen ? 'var(--accent)' : 'var(--muted-text)' }}
                  >
                    {card.icon}
                    <span className="font-heading font-bold text-white text-base">
                      {card.type}
                    </span>
                  </div>
                  <p className="text-sm font-medium" style={{ color: 'var(--accent-light)' }}>
                    {card.question}
                  </p>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="mt-4 flex flex-col gap-3">
                          <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-text)' }}>
                            {card.definition}
                          </p>
                          <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-text)' }}>
                            <span className="text-white font-medium">Use case: </span>
                            {card.useCase}
                          </p>
                          <div
                            className="rounded-lg p-3 text-xs font-mono"
                            style={{
                              background: 'rgba(0,0,0,0.4)',
                              border: '1px solid var(--border-brand)',
                              color: '#22c55e',
                            }}
                          >
                            {card.exampleOutput}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Wide AI card */}
        {(() => {
          const card = cards[4];
          const isOpen = openId === card.id;
          return (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <button
                onClick={() => setOpenId(isOpen ? null : card.id)}
                className="w-full text-left rounded-2xl p-6 transition-all cursor-pointer"
                style={{
                  background: 'var(--card)',
                  border: isOpen
                    ? '2px solid var(--accent)'
                    : '2px solid transparent',
                  backgroundClip: 'padding-box',
                  boxShadow: isOpen
                    ? '0 0 0 2px var(--accent)'
                    : '0 0 0 2px transparent, inset 0 0 0 2px var(--secondary)',
                  outline: !isOpen ? '1px solid var(--secondary)' : 'none',
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    style={{
                      background: 'linear-gradient(135deg, var(--accent), var(--secondary))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {card.icon}
                  </span>
                  <span
                    className="font-heading font-bold text-lg"
                    style={{
                      background: 'linear-gradient(135deg, var(--accent-light), var(--secondary))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {card.type}
                  </span>
                </div>
                <p className="text-sm font-medium text-white">
                  {card.question}
                </p>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="mt-4 flex flex-col gap-3">
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-text)' }}>
                          {card.definition}
                        </p>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-text)' }}>
                          <span className="text-white font-medium">Use case: </span>
                          {card.useCase}
                        </p>
                        <div
                          className="rounded-lg p-3 text-xs font-mono"
                          style={{
                            background: 'rgba(0,0,0,0.4)',
                            border: '1px solid var(--border-brand)',
                            color: '#22c55e',
                          }}
                        >
                          {card.exampleOutput}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          );
        })()}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mt-12 text-sm italic"
          style={{ color: 'var(--muted-text)' }}
        >
          Most companies stop at reporting. We build systems that think, predict, and act.
        </motion.p>
      </div>
    </section>
  );
}
