'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Brain, Zap } from 'lucide-react';

interface ArchBlock {
  id: number;
  title: string;
  icon: React.ReactNode;
  tools: string[];
}

const blocks: ArchBlock[] = [
  {
    id: 0,
    title: 'Data Sources',
    icon: <Database size={24} />,
    tools: [
      'Salesforce / HubSpot',
      'Square / Shopify POS',
      'Google/Meta Ads',
      'Phone systems',
      'Financial data',
    ],
  },
  {
    id: 1,
    title: 'Data Engine',
    icon: <Server size={24} />,
    tools: [
      'BigQuery / Snowflake',
      'Fivetran / Airbyte',
      'dbt transformations',
      'Data quality checks',
      'Custom ETL pipelines',
    ],
  },
  {
    id: 2,
    title: 'Intelligence Layer',
    icon: <Brain size={24} />,
    tools: [
      'KPI frameworks',
      'Live dashboards',
      'Business logic rules',
      'Anomaly detection',
      'Predictive models',
    ],
  },
  {
    id: 3,
    title: 'Action Layer',
    icon: <Zap size={24} />,
    tools: [
      'Slack / email alerts',
      'Workflow automation',
      'CRM updates',
      'Scheduled reports',
      'API triggers',
    ],
  },
];

function AnimatedConnector() {
  return (
    <div className="hidden lg:flex items-center justify-center w-12 flex-shrink-0">
      <div className="relative w-full flex items-center">
        <div
          className="w-full h-0.5"
          style={{ background: 'var(--border-brand)' }}
        />
        <motion.div
          className="absolute right-0 w-2 h-2 rounded-full"
          style={{ background: 'var(--accent)' }}
          animate={{ x: [-24, 0, -24] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <svg
          className="absolute right-0 translate-x-1.5"
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
        >
          <path d="M0 0L8 6L0 12" fill="var(--accent)" />
        </svg>
      </div>
    </div>
  );
}

export default function Architecture() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="architecture" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            Built as a System. Not a Tool.
          </h2>
          <p style={{ color: 'var(--muted-text)' }}>
            Every layer connected, every data point in motion.
          </p>
        </motion.div>

        {/* Flow diagram */}
        <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-0">
          {blocks.map((block, index) => (
            <div key={block.id} className="flex flex-col lg:flex-row items-center flex-1">
              <motion.div
                className="flex-1 w-full relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.15 }}
                viewport={{ once: true, margin: '-100px' }}
                onMouseEnter={() => setHoveredId(block.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className="rounded-2xl p-6 cursor-default h-full transition-all"
                  style={{
                    background: 'var(--card)',
                    border:
                      hoveredId === block.id
                        ? '1px solid var(--accent)'
                        : '1px solid var(--border-brand)',
                    boxShadow:
                      hoveredId === block.id
                        ? '0 0 24px rgba(37,99,235,0.2)'
                        : 'none',
                  }}
                >
                  <div
                    className="mb-3"
                    style={{
                      color:
                        hoveredId === block.id ? 'var(--accent)' : 'var(--muted-text)',
                    }}
                  >
                    {block.icon}
                  </div>
                  <h3 className="font-heading font-bold text-white text-base mb-4">
                    {block.title}
                  </h3>
                  <ul className="flex flex-col gap-1.5">
                    {block.tools.map((tool) => (
                      <li
                        key={tool}
                        className="text-xs"
                        style={{ color: 'var(--muted-text)' }}
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tooltip */}
                {hoveredId === block.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-3 w-44 rounded-xl p-3 text-xs"
                    style={{
                      background: 'var(--card)',
                      border: '1px solid var(--accent)',
                      color: 'var(--muted-text)',
                    }}
                  >
                    <p className="font-medium text-white mb-1">{block.title}</p>
                    {block.tools.map((tool) => (
                      <p key={tool}>{tool}</p>
                    ))}
                  </motion.div>
                )}
              </motion.div>

              {index < blocks.length - 1 && <AnimatedConnector />}

              {/* Mobile vertical connector */}
              {index < blocks.length - 1 && (
                <div className="lg:hidden flex flex-col items-center py-2">
                  <div
                    className="w-0.5 h-6"
                    style={{ background: 'var(--border-brand)' }}
                  />
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: 'var(--accent)' }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mt-16"
        >
          <h3
            className="font-heading font-bold text-2xl md:text-3xl"
            style={{
              background: 'linear-gradient(135deg, var(--accent-light), var(--secondary))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Your Business Operating System
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
