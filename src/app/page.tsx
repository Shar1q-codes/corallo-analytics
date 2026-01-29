'use client';

import { useEffect, useMemo, useState } from 'react';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#authority', label: 'Authority' },
  { href: '#analysis', label: 'Domains' },
  { href: '#method', label: 'Method' },
  { href: '#systems', label: 'Interfaces' },
  { href: '#bridge', label: 'Bridge' },
  { href: '#about', label: 'About' },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const revealSelector = useMemo(
    () =>
      '.section, .hero, .panel, .card, .method-step, .system-block, .bridge-card, .about-grid > div',
    []
  );

  useEffect(() => {
    const nodes = document.querySelectorAll(revealSelector);
    nodes.forEach((node) => node.classList.add('reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [revealSelector]);

  useEffect(() => {
    const nav = document.querySelector('.nav');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const smoothScrollTo = (top: number, duration = 700) => {
      const start = window.scrollY;
      const distance = top - start;
      const startTime = performance.now();

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeInOutCubic(progress);
        window.scrollTo(0, start + distance * eased);
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const hash = anchor.getAttribute('href');
      if (!hash || hash === '#') return;

      const section = document.querySelector(hash);
      if (!section) return;

      event.preventDefault();

      const navHeight = nav?.getBoundingClientRect().height ?? 0;
      const top = section.getBoundingClientRect().top + window.scrollY - navHeight - 12;

      window.history.pushState(null, '', hash);
      if (prefersReducedMotion) {
        window.scrollTo(0, top);
        return;
      }

      smoothScrollTo(top);
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="site">
      <header className="nav">
        <div className="logo">
          <img className="logo-mark" src="/images/logo.png" alt="Corallo Analytics" />
        </div>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Analytical authority for operators</p>
              <h1>Signals, not noise. Findings, not dashboards.</h1>
              <p className="hero-lede">
                Corallo Analytics builds decision intelligence systems that extract signal, reveal constraints, and align
                teams on what to do next.
              </p>
              <div className="hero-actions">
                <a href="#analysis" className="btn">
                  Explore analytical domains
                </a>
                <a href="#method" className="btn ghost">
                  See how insights are built
                </a>
              </div>
              <div className="hero-metrics">
                <div>
                  <span>Signal extraction</span>
                  <strong>Noise stripped, outcomes exposed</strong>
                </div>
                <div>
                  <span>Decision layer</span>
                  <strong>Actions mapped to causal drivers</strong>
                </div>
                <div>
                  <span>System ownership</span>
                  <strong>Insights live beyond one report</strong>
                </div>
              </div>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="orb"></div>
              <div className="grid-layer"></div>
              <div className="signal-lines"></div>
              <div className="analysis-panels">
                <div className="panel">
                  <h3>Signal Density</h3>
                  <p>Variance, seasonality, anomaly lift.</p>
                  <div className="mini-chart"></div>
                </div>
                <div className="panel">
                  <h3>Decision Layer</h3>
                  <p>Interpretation mapping to levers.</p>
                  <div className="mini-chart"></div>
                </div>
                <div className="panel">
                  <h3>Risk Index</h3>
                  <p>Leakage detection, unit drift.</p>
                  <div className="mini-chart"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="authority" className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Analytical authority</p>
              <h2>Evidence layers that move decisions</h2>
              <p>
                Corallo Analytics is built around three core intelligence layers that surface signal, interpret risk, and
                align teams on action.
              </p>
            </div>
            <div className="grid three">
              <article className="card tight">
                <h3>Signal Density</h3>
                <p>Quantifies variance and movement that matter, separating meaningful drift from noise.</p>
              </article>
              <article className="card tight">
                <h3>Decision Layer</h3>
                <p>Frames findings as operational levers with clear implications and ownership.</p>
              </article>
              <article className="card tight">
                <h3>Risk Index</h3>
                <p>Detects leakage, anomalies, and margin erosion before they compound.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="analysis" className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">What we analyze</p>
              <h2>Analytical domains that surface operational truth</h2>
              <p>
                Each domain isolates a decision axis. We define the data required, the questions answered, and the
                findings produced, then connect those findings to strategic action.
              </p>
            </div>
            <div className="grid two">
              <article className="card domain">
                <h3>Revenue & Unit Economics</h3>
                <div className="domain-row">
                  <span>Data</span>
                  <p>Pricing, margin, CAC, contribution, payback windows.</p>
                </div>
                <div className="domain-row">
                  <span>Questions</span>
                  <p>Which cohorts sustain profitability? Where does unit drift emerge?</p>
                </div>
                <div className="domain-row">
                  <span>Findings</span>
                  <p>Margin compression points, acquisition efficiency ranges.</p>
                </div>
              </article>
              <article className="card domain">
                <h3>Customer Behavior & Retention</h3>
                <div className="domain-row">
                  <span>Data</span>
                  <p>Cohort retention, engagement events, lifecycle stage progress.</p>
                </div>
                <div className="domain-row">
                  <span>Questions</span>
                  <p>Where does adoption stall? Which behaviors predict longevity?</p>
                </div>
                <div className="domain-row">
                  <span>Findings</span>
                  <p>Retention inflection points, behavior-to-revenue paths.</p>
                </div>
              </article>
              <article className="card domain">
                <h3>Funnel & Conversion Dynamics</h3>
                <div className="domain-row">
                  <span>Data</span>
                  <p>Journey steps, channel attribution, drop-off sequences.</p>
                </div>
                <div className="domain-row">
                  <span>Questions</span>
                  <p>Where does intent break? Which channels drive qualified users?</p>
                </div>
                <div className="domain-row">
                  <span>Findings</span>
                  <p>Conversion bottlenecks, friction nodes, channel saturation.</p>
                </div>
              </article>
              <article className="card domain">
                <h3>Operational Efficiency</h3>
                <div className="domain-row">
                  <span>Data</span>
                  <p>Cycle times, throughput, staffing, utilization ratios.</p>
                </div>
                <div className="domain-row">
                  <span>Questions</span>
                  <p>Where does throughput decay? What slows delivery velocity?</p>
                </div>
                <div className="domain-row">
                  <span>Findings</span>
                  <p>Capacity constraints, efficiency lift opportunities.</p>
                </div>
              </article>
              <article className="card domain">
                <h3>Risk, Leakage, and Anomalies</h3>
                <div className="domain-row">
                  <span>Data</span>
                  <p>Variance logs, billing deltas, support incidents, fraud signals.</p>
                </div>
                <div className="domain-row">
                  <span>Questions</span>
                  <p>What breaks expected baselines? Where does leakage compound?</p>
                </div>
                <div className="domain-row">
                  <span>Findings</span>
                  <p>Anomaly clusters, systemic leakage sources.</p>
                </div>
              </article>
              <article className="card domain">
                <h3>Growth Constraints & Bottlenecks</h3>
                <div className="domain-row">
                  <span>Data</span>
                  <p>Acquisition velocity, activation, expansion signals.</p>
                </div>
                <div className="domain-row">
                  <span>Questions</span>
                  <p>What limits growth rate? Which levers underperform?</p>
                </div>
                <div className="domain-row">
                  <span>Findings</span>
                  <p>Constraint ranking, growth unlock sequences.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="method" className="section dark">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">How insights are built</p>
              <h2>Methodology designed for interpretability</h2>
              <p>
                We treat analytics as a decision system: structured inputs, validated signal detection, and interpretive
                layers that align evidence to action.
              </p>
            </div>
            <div className="method-grid">
              <div className="method-step">
                <span>01</span>
                <h3>Ingestion & Normalization</h3>
                <p>Data sources are standardized into a coherent model. Definitions are locked before insight begins.</p>
              </div>
              <div className="method-step">
                <span>02</span>
                <h3>Signal Detection</h3>
                <p>Variance is separated from trend to isolate statistically meaningful shifts.</p>
              </div>
              <div className="method-step">
                <span>03</span>
                <h3>Metric Hierarchy</h3>
                <p>Leading and lagging indicators are mapped so dependency is explicit.</p>
              </div>
              <div className="method-step">
                <span>04</span>
                <h3>Pattern Recognition</h3>
                <p>Cohorts, sequences, and anomalies surface behavior with measurable impact.</p>
              </div>
              <div className="method-step">
                <span>05</span>
                <h3>Interpretation Layers</h3>
                <p>Findings are translated into a decision layer that frames implications.</p>
              </div>
              <div className="method-step">
                <span>06</span>
                <h3>Decision Framing</h3>
                <p>Insights are ranked by leverage and aligned to leadership cadence.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="systems" className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Interfaces for findings</p>
              <h2>Dashboards are translation layers</h2>
              <p>
                Interfaces are built to match decision context: executive alignment, diagnostic depth, and experiment
                feedback. The surface is the final interpretive layer.
              </p>
            </div>
            <div className="grid two">
              <div className="system-block">
                <h3>Executive Intelligence</h3>
                <p>Condensed decision views that prioritize leading indicators and risk signals.</p>
                <div className="system-visual">
                  <div className="system-bar"></div>
                  <div className="system-bar"></div>
                  <div className="system-bar"></div>
                </div>
              </div>
              <div className="system-block">
                <h3>Diagnostic Views</h3>
                <p>Layered drill-downs for cohorts, funnel variance, and behavior segmentation.</p>
                <div className="system-visual">
                  <div className="system-bar"></div>
                  <div className="system-bar"></div>
                  <div className="system-bar"></div>
                </div>
              </div>
              <div className="system-block">
                <h3>Deep Dive Panels</h3>
                <p>Specialized modules for retention decay, unit economics drift, and anomaly clusters.</p>
                <div className="system-visual">
                  <div className="system-bar"></div>
                  <div className="system-bar"></div>
                  <div className="system-bar"></div>
                </div>
              </div>
              <div className="system-block">
                <h3>Growth Experiment Tracking</h3>
                <p>Experiment rollups linking hypothesis, signal movement, and causal attribution.</p>
                <div className="system-visual">
                  <div className="system-bar"></div>
                  <div className="system-bar"></div>
                  <div className="system-bar"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="bridge" className="section dark">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Findings to strategy bridge</p>
              <h2>From analytical findings to prioritized decisions</h2>
              <p>
                We translate findings into operational moves. Each insight is framed as a strategic lever, scored by
                impact and sequenced into action.
              </p>
            </div>
            <div className="bridge-flow">
              <div className="bridge-card">
                <h3>Finding</h3>
                <p>Retention drops after week four for high-velocity acquisition cohorts.</p>
                <span>Signal confidence: high</span>
              </div>
              <div className="bridge-arrow" aria-hidden="true">
                -&gt;
              </div>
              <div className="bridge-card">
                <h3>Interpretation</h3>
                <p>Activation quality varies by channel; conversion volume hides long-term value.</p>
                <span>Risk: margin leakage</span>
              </div>
              <div className="bridge-arrow" aria-hidden="true">
                -&gt;
              </div>
              <div className="bridge-card">
                <h3>Strategy Move</h3>
                <p>Rebalance acquisition spend to channels aligned with high-activation behavior.</p>
                <span>Priority: immediate</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">About Corallo Analytics</p>
              <h2>A discipline-driven analytics organization</h2>
              <p>
                Corallo Analytics builds long-term analytical systems for businesses that already own data but lack
                interpretive clarity. We focus on decision intelligence, not reporting volume.
              </p>
            </div>
            <div className="about-grid">
              <div>
                <h3>Built for operators</h3>
                <p>Designed to serve leaders who make decisions under uncertainty and need interpretable evidence.</p>
              </div>
              <div>
                <h3>System ownership</h3>
                <p>We operate the analytical stack as a living system, continuously refined as data evolves.</p>
              </div>
              <div>
                <h3>Analytical integrity</h3>
                <p>Findings are grounded in statistical clarity, not optimized for visual appeal.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Engage on data intelligence</p>
              <h2>Discuss analytical context</h2>
              <p>
                For teams evaluating analytical depth, systems design, or insight translation. We prioritize context and
                data maturity over sales funnel mechanics.
              </p>
            </div>
            <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
              <label>
                Organization
                <input type="text" name="org" placeholder="Company or operating unit" />
              </label>
              <label>
                Data maturity
                <select name="maturity">
                  <option>Basic data collection</option>
                  <option>Structured dashboards</option>
                  <option>Advanced analytics, limited interpretation</option>
                  <option>Decision intelligence focus</option>
                </select>
              </label>
              <label>
                Analytical intent
                <input type="text" name="intent" placeholder="What decision requires clarity?" />
              </label>
              <label>
                Context
                <textarea
                  name="context"
                  rows={4}
                  placeholder="Share the data environment, constraints, or strategic focus"
                ></textarea>
              </label>
              <button type="submit" className="btn">
                Submit context
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <div className="logo-name">Corallo Analytics</div>
          <p>Decision intelligence systems built for operational clarity.</p>
        </div>
        <div className="footer-links">
          <a href="#analysis">Domains</a>
          <a href="#method">Methodology</a>
          <a href="#systems">Interfaces</a>
          <a href="#bridge">Strategy Bridge</a>
        </div>
        <div className="footer-meta">(c) 2026 Corallo Analytics. Analytical authority, not noise.</div>
      </footer>
    </div>
  );
}
