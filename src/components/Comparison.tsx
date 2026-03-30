interface ComparisonRow {
  dimension: string;
  traditional: string;
  corallo: string;
}

const rows: ComparisonRow[] = [
  { dimension: 'Output', traditional: 'Static dashboards', corallo: 'Intelligence systems' },
  { dimension: 'Reporting', traditional: 'Manual reporting', corallo: 'Automated workflows' },
  { dimension: 'Architecture', traditional: 'Disconnected tools', corallo: 'Unified architecture' },
  { dimension: 'Insights', traditional: 'Historical only', corallo: 'Predictive + prescriptive' },
  { dimension: 'End result', traditional: 'Reports', corallo: 'Business operating system' },
  { dimension: 'Approach', traditional: 'One-size-fits-all', corallo: 'Custom-built for your industry' },
];

export default function Comparison() {
  return (
    <section id="comparison" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            Why Corallo Analytics is Different
          </h2>
        </div>

        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: '1px solid var(--border-brand)' }}
        >
          {/* Header row */}
          <div
            className="grid grid-cols-3 px-6 py-4"
            style={{
              background: 'rgba(255,255,255,0.03)',
              borderBottom: '1px solid var(--border-brand)',
            }}
          >
            <div />
            <div className="text-sm font-medium text-center" style={{ color: 'var(--muted-text)' }}>
              Traditional Analytics
            </div>
            <div
              className="text-sm font-bold text-center"
              style={{ color: 'var(--accent)' }}
            >
              Corallo Analytics
            </div>
          </div>

          {/* Data rows */}
          {rows.map((row, index) => (
            <div
              key={row.dimension}
              className="grid grid-cols-3 px-6 py-4 items-center"
              style={{
                borderBottom: index < rows.length - 1 ? '1px solid var(--border-brand)' : 'none',
                background: index % 2 === 0 ? 'var(--card)' : 'transparent',
              }}
            >
              <div
                className="text-sm font-medium"
                style={{ color: 'var(--muted-text)' }}
              >
                {row.dimension}
              </div>

              {/* Traditional */}
              <div className="text-sm text-center" style={{ color: 'var(--muted-text)', opacity: 0.6 }}>
                {row.traditional}
              </div>

              {/* Corallo */}
              <div className="flex justify-center">
                <div
                  className="text-sm font-medium text-center px-4 py-1.5 rounded-lg"
                  style={{
                    color: 'var(--brand-text)',
                    borderLeft: '2px solid var(--accent)',
                    background: 'rgba(37,99,235,0.08)',
                  }}
                >
                  {row.corallo}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
