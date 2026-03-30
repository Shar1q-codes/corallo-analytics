'use client';

type LinkAction =
  | { kind: 'scroll'; target: string }
  | { kind: 'mailto'; target: string }
  | { kind: 'external'; target: string }
  | { kind: 'none' };

interface FooterLink {
  label: string;
  action: LinkAction;
}

const footerLinks: Record<string, FooterLink[]> = {
  Company: [
    { label: 'About', action: { kind: 'scroll', target: '#systems' } },
    { label: 'Team', action: { kind: 'none' } },
    { label: 'Careers', action: { kind: 'none' } },
    { label: 'Blog', action: { kind: 'none' } },
  ],
  Services: [
    { label: 'Intelligence Systems', action: { kind: 'scroll', target: '#systems' } },
    { label: 'Data Engineering', action: { kind: 'scroll', target: '#architecture' } },
    { label: 'Analytics Consulting', action: { kind: 'scroll', target: '#capabilities' } },
    { label: 'Custom Dashboards', action: { kind: 'scroll', target: '#capabilities' } },
  ],
  Industries: [
    { label: 'Multi-Location', action: { kind: 'scroll', target: '#industries' } },
    { label: 'Hospitality', action: { kind: 'scroll', target: '#industries' } },
    { label: 'Property', action: { kind: 'scroll', target: '#industries' } },
    { label: 'Finance', action: { kind: 'scroll', target: '#industries' } },
    { label: 'Healthcare', action: { kind: 'scroll', target: '#industries' } },
  ],
  Contact: [
    {
      label: 'hello@coralloanalytics.com',
      action: { kind: 'mailto', target: 'mailto:hello@coralloanalytics.com' },
    },
    { label: 'Schedule a Call', action: { kind: 'scroll', target: '#contact' } },
    { label: 'LinkedIn', action: { kind: 'external', target: 'https://www.linkedin.com' } },
    { label: 'Twitter / X', action: { kind: 'external', target: 'https://www.twitter.com' } },
  ],
};

function scrollTo(selector: string) {
  const el = document.querySelector(selector);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function FooterLink({ link }: { link: FooterLink }) {
  const base: React.CSSProperties = { color: 'var(--muted-text)' };

  if (link.action.kind === 'scroll') {
    return (
      <button
        onClick={() => scrollTo((link.action as { kind: 'scroll'; target: string }).target)}
        className="text-sm text-left cursor-pointer bg-transparent border-none p-0 transition-colors hover:text-white"
        style={base}
      >
        {link.label}
      </button>
    );
  }

  if (link.action.kind === 'mailto') {
    return (
      <a
        href={(link.action as { kind: 'mailto'; target: string }).target}
        className="text-sm transition-colors hover:text-white break-all"
        style={base}
      >
        {link.label}
      </a>
    );
  }

  if (link.action.kind === 'external') {
    return (
      <a
        href={(link.action as { kind: 'external'; target: string }).target}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm transition-colors hover:text-white"
        style={base}
      >
        {link.label}
      </a>
    );
  }

  // kind: 'none' — coming soon, no navigation
  return (
    <span
      className="text-sm cursor-default"
      style={{ ...base, opacity: 0.5 }}
      title="Coming soon"
    >
      {link.label}
    </span>
  );
}

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border-brand)', background: 'var(--card)' }}>
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
        {/* Brand column */}
        <div className="col-span-2 md:col-span-1">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-heading font-bold text-white text-lg block mb-3 cursor-pointer bg-transparent border-none p-0"
            style={{ letterSpacing: '0.15em' }}
          >
            CORALLO
          </button>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-text)' }}>
            Building intelligent systems for modern businesses.
          </p>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category}>
            <h4 className="font-heading font-bold text-white text-sm mb-4">{category}</h4>
            <ul className="flex flex-col gap-2">
              {links.map((link) => (
                <li key={link.label}>
                  <FooterLink link={link} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{ borderTop: '1px solid var(--border-brand)' }}
      >
        <p className="text-xs" style={{ color: 'var(--muted-text)' }}>
          &copy; {new Date().getFullYear()} Corallo Digital Systems — Building intelligent systems for modern businesses.
        </p>
        <div className="flex gap-6">
          {(['Privacy', 'Terms'] as const).map((label) => (
            <span
              key={label}
              className="text-xs cursor-default"
              style={{ color: 'var(--muted-text)', opacity: 0.5 }}
              title="Coming soon"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
