'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Settings,
  Megaphone,
  DollarSign,
  Users,
  Bot,
} from 'lucide-react';

interface Module {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  hoverBullets: string[];
  useCase: string;
  outcomes: string[];
}

const modules: Module[] = [
  {
    id: 0,
    title: 'Executive Command Center',
    icon: <LayoutDashboard size={22} />,
    description: 'Real-time business health at the executive level.',
    hoverBullets: ['Real-time P&L', 'Board-ready KPIs', 'Multi-location rollup'],
    useCase:
      'Give your leadership team a single view of business performance across all departments, locations, and time periods — updated live.',
    outcomes: [
      'Unified P&L dashboard updated in real time',
      'Board-ready KPI reports generated automatically',
      'Multi-location performance rollup with drill-down',
      'Executive alerts for threshold breaches',
      'Goal tracking vs targets across all teams',
    ],
  },
  {
    id: 1,
    title: 'Operations Intelligence',
    icon: <Settings size={22} />,
    description: 'Surface bottlenecks and optimize operational efficiency.',
    hoverBullets: ['Inventory alerts', 'Staff efficiency', 'Process bottlenecks'],
    useCase:
      'Monitor and optimize your operations in real time — from inventory levels and staff productivity to process throughput and fulfillment rates.',
    outcomes: [
      'Automated low-stock and reorder alerts',
      'Staff efficiency scoring by role and shift',
      'Process bottleneck identification and alerts',
      'Fulfillment rate and on-time delivery tracking',
      'Operational cost breakdown by department',
    ],
  },
  {
    id: 2,
    title: 'Marketing Intelligence',
    icon: <Megaphone size={22} />,
    description: 'Measure every dollar of marketing spend and its impact.',
    hoverBullets: ['Campaign ROI', 'Attribution modeling', 'Audience segments'],
    useCase:
      'Connect every marketing channel to revenue outcomes — so you know exactly which campaigns, audiences, and creatives are driving real business results.',
    outcomes: [
      'Multi-touch attribution across all channels',
      'Campaign ROI by platform, ad set, and audience',
      'CAC trending with blended vs channel-level view',
      'Audience segment performance comparison',
      'Marketing influence on pipeline and revenue',
    ],
  },
  {
    id: 3,
    title: 'Financial Intelligence',
    icon: <DollarSign size={22} />,
    description: 'Real-time financial visibility and forward-looking forecasts.',
    hoverBullets: ['Cash flow forecasting', 'Budget vs actual', 'Margin by product'],
    useCase:
      'Move beyond static spreadsheets — get a live financial intelligence layer that tracks margins, forecasts cash flow, and flags budget variances automatically.',
    outcomes: [
      '13-week cash flow forecast updated weekly',
      'Budget vs actual tracking with variance alerts',
      'Gross and net margin by product and location',
      'Revenue recognition and deferred revenue tracking',
      'Automated financial digest delivered to leadership',
    ],
  },
  {
    id: 4,
    title: 'Customer Intelligence',
    icon: <Users size={22} />,
    description: 'Understand, predict, and act on customer behavior.',
    hoverBullets: ['LTV scoring', 'Churn prediction', 'Satisfaction tracking'],
    useCase:
      'Build a 360-degree view of every customer — from acquisition source and purchase history to churn risk and lifetime value — and act on it automatically.',
    outcomes: [
      'Customer LTV scoring and segmentation',
      'Churn risk model with early warning alerts',
      'NPS and satisfaction trend tracking',
      'Cohort analysis by acquisition source',
      'Automated retention workflows for at-risk accounts',
    ],
  },
  {
    id: 5,
    title: 'Automation Systems',
    icon: <Bot size={22} />,
    description: 'Replace manual work with intelligent automated workflows.',
    hoverBullets: ['Auto-reports', 'Trigger workflows', 'Alert systems'],
    useCase:
      'Design and deploy automated workflows that respond to your data — reports that deliver themselves, alerts that fire on thresholds, and actions that happen without manual effort.',
    outcomes: [
      'Scheduled report delivery to stakeholders',
      'Trigger-based workflow automation',
      'Real-time alert system (Slack, email, SMS)',
      'CRM auto-update on data events',
      'No-code rule builder for business teams',
    ],
  },
];

export default function Capabilities() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="capabilities" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-14"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            What Your System Can Do
          </h2>
          <p style={{ color: 'var(--muted-text)' }}>
            Six intelligence modules. One unified platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((mod, index) => {
            const isExpanded = expandedId === mod.id;
            const isHovered = hoveredId === mod.id;

            return (
              <motion.div
                key={mod.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <div
                  className="rounded-2xl p-6 cursor-pointer transition-all h-full"
                  style={{
                    background: 'var(--card)',
                    border: isExpanded
                      ? '1px solid var(--accent)'
                      : '1px solid var(--border-brand)',
                    boxShadow: isHovered && !isExpanded
                      ? '0 0 20px rgba(37,99,235,0.15)'
                      : 'none',
                  }}
                  onMouseEnter={() => setHoveredId(mod.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setExpandedId(isExpanded ? null : mod.id)}
                >
                  <div
                    className="mb-3 transition-colors"
                    style={{ color: isExpanded || isHovered ? 'var(--accent)' : 'var(--muted-text)' }}
                  >
                    {mod.icon}
                  </div>
                  <h3 className="font-heading font-bold text-white text-base mb-2">
                    {mod.title}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--muted-text)' }}>
                    {mod.description}
                  </p>

                  {/* Hover bullets */}
                  <AnimatePresence>
                    {isHovered && !isExpanded && (
                      <motion.ul
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        transition={{ duration: 0.2 }}
                        className="mt-4 flex flex-col gap-1.5"
                      >
                        {mod.hoverBullets.map((b) => (
                          <li
                            key={b}
                            className="text-xs"
                            style={{ color: 'var(--accent-light)' }}
                          >
                            → {b}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--border-brand)' }}>
                          <p
                            className="text-sm leading-relaxed mb-4"
                            style={{ color: 'var(--muted-text)' }}
                          >
                            {mod.useCase}
                          </p>
                          <ul className="flex flex-col gap-2">
                            {mod.outcomes.map((outcome) => (
                              <li
                                key={outcome}
                                className="text-xs flex items-start gap-2"
                                style={{ color: 'var(--brand-text)' }}
                              >
                                <span style={{ color: 'var(--accent)', marginTop: '2px' }}>✓</span>
                                {outcome}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
