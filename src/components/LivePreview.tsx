'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type TabId = 'sales' | 'operations' | 'marketing' | 'finance';

const tabs: { id: TabId; label: string }[] = [
  { id: 'sales', label: 'Sales' },
  { id: 'operations', label: 'Operations' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'finance', label: 'Finance' },
];

interface KpiItem {
  label: string;
  value: string;
  change: string;
  positive: boolean;
}

function KpiCard({ item }: { item: KpiItem }) {
  return (
    <div
      className="rounded-xl p-4 flex-1"
      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-brand)' }}
    >
      <p className="text-xs mb-1" style={{ color: 'var(--muted-text)' }}>{item.label}</p>
      <p className="text-white font-bold text-lg font-heading">{item.value}</p>
      <p className="text-xs mt-0.5" style={{ color: item.positive ? '#22c55e' : '#ef4444' }}>
        {item.change}
      </p>
    </div>
  );
}

function SalesTab() {
  const kpis: KpiItem[] = [
    { label: 'Total Revenue', value: '$1.24M', change: '+18% vs last period', positive: true },
    { label: 'New Deals', value: '47', change: '+12% vs last period', positive: true },
    { label: 'Pipeline Value', value: '$3.8M', change: '+24% vs last period', positive: true },
  ];

  const barHeights = [45, 60, 50, 75, 65, 90];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  const reps = [
    { name: 'Sarah Mitchell', deals: 12, revenue: '$284K' },
    { name: 'James Okafor', deals: 9, revenue: '$211K' },
    { name: 'Priya Sharma', deals: 8, revenue: '$198K' },
    { name: 'Marcus Chen', deals: 7, revenue: '$176K' },
    { name: 'Leila Hassan', deals: 6, revenue: '$154K' },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap gap-3">
        {kpis.map((k) => <KpiCard key={k.label} item={k} />)}
      </div>

      <div
        className="rounded-xl p-4"
        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-brand)' }}
      >
        <p className="text-xs mb-3 font-medium text-white">Monthly Revenue</p>
        <div className="flex items-end gap-2 h-20">
          {barHeights.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full rounded-t transition-all"
                style={{
                  height: `${h}%`,
                  background: 'var(--accent)',
                  opacity: 0.8,
                }}
              />
              <span className="text-xs" style={{ color: 'var(--muted-text)' }}>
                {months[i]}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="rounded-xl p-4"
        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-brand)' }}
      >
        <p className="text-xs mb-3 font-medium text-white">Top 5 Sales Reps</p>
        <div className="flex flex-col gap-2">
          {reps.map((rep, i) => (
            <div key={rep.name} className="flex items-center justify-between text-xs">
              <span style={{ color: 'var(--muted-text)' }}>{i + 1}. {rep.name}</span>
              <div className="flex gap-4">
                <span style={{ color: 'var(--muted-text)' }}>{rep.deals} deals</span>
                <span className="text-white font-medium">{rep.revenue}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OperationsTab() {
  const kpis: KpiItem[] = [
    { label: 'Orders Fulfilled', value: '1,847', change: '+9% vs last period', positive: true },
    { label: 'On-Time Rate', value: '96.2%', change: '+1.4% vs last period', positive: true },
    { label: 'Avg Handle Time', value: '4.2min', change: '-0.8min vs last period', positive: true },
  ];

  const linePoints = '0,50 30,40 60,45 90,30 120,35 150,20 180,25';

  const ops = [
    { name: 'Warehouse Fulfillment', status: 'Optimal', color: '#22c55e' },
    { name: 'Shipping Partners', status: 'On Track', color: '#22c55e' },
    { name: 'Returns Processing', status: 'Delayed', color: '#f59e0b' },
    { name: 'Customer Support', status: 'Optimal', color: '#22c55e' },
    { name: 'Inventory Replenishment', status: 'On Track', color: '#22c55e' },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap gap-3">
        {kpis.map((k) => <KpiCard key={k.label} item={k} />)}
      </div>

      <div
        className="rounded-xl p-4"
        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-brand)' }}
      >
        <p className="text-xs mb-3 font-medium text-white">Fulfillment Trend</p>
        <svg viewBox="0 0 180 60" className="w-full" height="60">
          <polyline
            points={linePoints}
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div
        className="rounded-xl p-4"
        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-brand)' }}
      >
        <p className="text-xs mb-3 font-medium text-white">Operations Status</p>
        <div className="flex flex-col gap-2">
          {ops.map((op) => (
            <div key={op.name} className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ background: op.color }} />
                <span style={{ color: 'var(--muted-text)' }}>{op.name}</span>
              </div>
              <span style={{ color: op.color }}>{op.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MarketingTab() {
  const kpis: KpiItem[] = [
    { label: 'Impressions', value: '284K', change: '+31% vs last period', positive: true },
    { label: 'CTR', value: '3.8%', change: '+0.6% vs last period', positive: true },
    { label: 'CAC', value: '$42', change: '-$8 vs last period', positive: true },
  ];

  const campaigns = [
    { name: 'Google Search', value: 85, revenue: '$182K' },
    { name: 'Meta Ads', value: 68, revenue: '$144K' },
    { name: 'Email Marketing', value: 52, revenue: '$98K' },
    { name: 'Organic SEO', value: 40, revenue: '$72K' },
    { name: 'Referral', value: 28, revenue: '$41K' },
  ];

  const channels = [
    { channel: 'Paid Search', spend: '$18,400', revenue: '$182K', roas: '9.9x' },
    { channel: 'Paid Social', spend: '$12,200', revenue: '$144K', roas: '11.8x' },
    { channel: 'Email', spend: '$1,800', revenue: '$98K', roas: '54.4x' },
    { channel: 'Organic', spend: '$0', revenue: '$72K', roas: '—' },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap gap-3">
        {kpis.map((k) => <KpiCard key={k.label} item={k} />)}
      </div>

      <div
        className="rounded-xl p-4"
        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-brand)' }}
      >
        <p className="text-xs mb-3 font-medium text-white">Campaign Performance</p>
        <div className="flex flex-col gap-2">
          {campaigns.map((c) => (
            <div key={c.name} className="flex flex-col gap-1">
              <div className="flex justify-between text-xs">
                <span style={{ color: 'var(--muted-text)' }}>{c.name}</span>
                <span className="text-white">{c.revenue}</span>
              </div>
              <div
                className="w-full rounded-full"
                style={{ height: '6px', background: 'var(--border-brand)' }}
              >
                <div
                  className="rounded-full"
                  style={{
                    width: `${c.value}%`,
                    height: '6px',
                    background: 'var(--accent)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="rounded-xl p-4"
        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-brand)' }}
      >
        <p className="text-xs mb-3 font-medium text-white">Channel Breakdown</p>
        <div className="flex flex-col gap-2">
          <div className="flex text-xs gap-2 pb-1" style={{ borderBottom: '1px solid var(--border-brand)' }}>
            <span className="flex-1" style={{ color: 'var(--muted-text)' }}>Channel</span>
            <span className="w-16 text-right" style={{ color: 'var(--muted-text)' }}>Spend</span>
            <span className="w-16 text-right" style={{ color: 'var(--muted-text)' }}>Revenue</span>
            <span className="w-12 text-right" style={{ color: 'var(--muted-text)' }}>ROAS</span>
          </div>
          {channels.map((ch) => (
            <div key={ch.channel} className="flex text-xs gap-2">
              <span className="flex-1" style={{ color: 'var(--brand-text)' }}>{ch.channel}</span>
              <span className="w-16 text-right" style={{ color: 'var(--muted-text)' }}>{ch.spend}</span>
              <span className="w-16 text-right" style={{ color: 'var(--muted-text)' }}>{ch.revenue}</span>
              <span className="w-12 text-right" style={{ color: '#22c55e' }}>{ch.roas}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FinanceTab() {
  const kpis: KpiItem[] = [
    { label: 'Gross Margin', value: '38.4%', change: '+2.1% vs last period', positive: true },
    { label: 'MoM Growth', value: '+6.2%', change: 'vs +4.8% prior month', positive: true },
    { label: 'Runway', value: '18 mo', change: '+2mo vs last forecast', positive: true },
  ];

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const revenues = [180, 195, 210, 225, 238, 252];
  const costs = [120, 128, 138, 144, 150, 156];
  const maxVal = 280;
  const h = 80;

  const revenuePoints = revenues.map((v, i) => `${(i / 5) * 180},${h - (v / maxVal) * h}`).join(' ');
  const costPoints = costs.map((v, i) => `${(i / 5) * 180},${h - (v / maxVal) * h}`).join(' ');

  const budget = [
    { item: 'Marketing', budget: '$25,000', actual: '$23,400', variance: '+$1,600' },
    { item: 'Operations', budget: '$80,000', actual: '$82,100', variance: '-$2,100' },
    { item: 'Sales', budget: '$40,000', actual: '$38,900', variance: '+$1,100' },
    { item: 'G&A', budget: '$30,000', actual: '$29,200', variance: '+$800' },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap gap-3">
        {kpis.map((k) => <KpiCard key={k.label} item={k} />)}
      </div>

      <div
        className="rounded-xl p-4"
        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-brand)' }}
      >
        <p className="text-xs mb-3 font-medium text-white">Monthly P&L</p>
        <svg viewBox={`0 0 180 ${h}`} className="w-full" height="80">
          <defs>
            <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon
            points={`0,${h} ${revenuePoints} 180,${h}`}
            fill="url(#revGrad)"
          />
          <polyline
            points={revenuePoints}
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points={costPoints}
            fill="none"
            stroke="var(--secondary)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="4 2"
          />
        </svg>
        <div className="flex gap-4 mt-2">
          <span className="text-xs flex items-center gap-1" style={{ color: 'var(--accent)' }}>
            <span className="inline-block w-4 h-0.5" style={{ background: 'var(--accent)' }} /> Revenue
          </span>
          <span className="text-xs flex items-center gap-1" style={{ color: 'var(--secondary)' }}>
            <span className="inline-block w-4 h-0.5" style={{ background: 'var(--secondary)' }} /> Costs
          </span>
        </div>
        <div className="flex justify-between mt-1">
          {months.map((m) => (
            <span key={m} className="text-xs" style={{ color: 'var(--muted-text)' }}>{m}</span>
          ))}
        </div>
      </div>

      <div
        className="rounded-xl p-4"
        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-brand)' }}
      >
        <p className="text-xs mb-3 font-medium text-white">Budget vs Actual</p>
        <div className="flex flex-col gap-2">
          <div className="flex text-xs gap-2 pb-1" style={{ borderBottom: '1px solid var(--border-brand)' }}>
            <span className="flex-1" style={{ color: 'var(--muted-text)' }}>Department</span>
            <span className="w-16 text-right" style={{ color: 'var(--muted-text)' }}>Budget</span>
            <span className="w-16 text-right" style={{ color: 'var(--muted-text)' }}>Actual</span>
            <span className="w-16 text-right" style={{ color: 'var(--muted-text)' }}>Variance</span>
          </div>
          {budget.map((b) => (
            <div key={b.item} className="flex text-xs gap-2">
              <span className="flex-1" style={{ color: 'var(--brand-text)' }}>{b.item}</span>
              <span className="w-16 text-right" style={{ color: 'var(--muted-text)' }}>{b.budget}</span>
              <span className="w-16 text-right" style={{ color: 'var(--muted-text)' }}>{b.actual}</span>
              <span
                className="w-16 text-right"
                style={{ color: b.variance.startsWith('+') ? '#22c55e' : '#ef4444' }}
              >
                {b.variance}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const tabContent: Record<TabId, React.ReactNode> = {
  sales: <SalesTab />,
  operations: <OperationsTab />,
  marketing: <MarketingTab />,
  finance: <FinanceTab />,
};

export default function LivePreview() {
  const [activeTab, setActiveTab] = useState<TabId>('sales');

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            This Isn&apos;t a Dashboard. It&apos;s Your Business — Live.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true, margin: '-100px' }}
          className="rounded-2xl overflow-hidden"
          style={{ background: 'var(--card)', border: '1px solid var(--border-brand)' }}
        >
          {/* Tab bar */}
          <div
            className="flex border-b"
            style={{ borderColor: 'var(--border-brand)' }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="px-6 py-4 text-sm font-medium transition-all cursor-pointer relative border-none"
                style={{
                  color: activeTab === tab.id ? 'var(--brand-text)' : 'var(--muted-text)',
                  background: 'transparent',
                }}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ background: 'var(--accent)' }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {tabContent[activeTab]}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mt-8 text-sm"
          style={{ color: 'var(--muted-text)' }}
        >
          Every number above is connected to your live data. No manual exports. No stale reports.
        </motion.p>
      </div>
    </section>
  );
}
