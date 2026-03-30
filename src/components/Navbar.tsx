'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Systems', href: '#systems' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Industries', href: '#industries' },
  { label: 'Process', href: '#process' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(10,10,15,0.85)',
        borderBottom: '1px solid var(--border-brand)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <span
          className="font-heading text-white font-bold text-xl select-none"
          style={{ letterSpacing: '0.18em' }}
        >
          CORALLO
        </span>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleScrollTo(link.href)}
              className="text-sm font-medium transition-colors cursor-pointer bg-transparent border-none"
              style={{ color: 'var(--muted-text)' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = '#f8fafc';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = 'var(--muted-text)';
              }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button
            className="px-5 py-2 rounded-full text-sm font-medium text-white transition-opacity hover:opacity-90 cursor-pointer border-none"
            style={{ background: 'var(--accent)' }}
          >
            Get Free Audit
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white cursor-pointer bg-transparent border-none p-1"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{
              overflow: 'hidden',
              borderTop: '1px solid var(--border-brand)',
              background: 'rgba(10,10,15,0.97)',
            }}
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleScrollTo(link.href)}
                  className="text-left text-sm font-medium cursor-pointer bg-transparent border-none"
                  style={{ color: 'var(--muted-text)' }}
                >
                  {link.label}
                </button>
              ))}
              <button
                className="mt-2 px-5 py-2 rounded-full text-sm font-medium text-white w-fit cursor-pointer border-none"
                style={{ background: 'var(--accent)' }}
              >
                Get Free Audit
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
