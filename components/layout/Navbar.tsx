"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { List, X, Phone } from "@phosphor-icons/react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          scrolled
            ? "bg-forest-900/97 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-18 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo / Brand */}
          <Link
            href="#home"
            className="flex flex-col leading-none group cursor-pointer"
            aria-label="Blade & Spade Landcare — home"
            onClick={handleNavClick}
          >
            <span
              className="font-display text-xl md:text-2xl font-semibold tracking-tight text-cream-50 group-hover:text-forest-200 transition-colors duration-200"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Blade &amp; Spade
            </span>
            <span className="text-[10px] font-outfit font-light tracking-[0.18em] uppercase text-forest-300 group-hover:text-forest-200 transition-colors duration-200">
              Landcare LLC
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-base font-outfit font-medium tracking-wide text-cream-200/90 hover:text-cream-50 transition-colors duration-200 cursor-pointer py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="tel:+12062265665"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gold-500 hover:bg-gold-400 text-forest-950 text-base font-outfit font-semibold rounded transition-all duration-200 cursor-pointer active:scale-[0.98]"
            aria-label="Call us at (206) 226-5665"
          >
            <Phone size={15} weight="bold" aria-hidden="true" />
            (206) 226-5665
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 text-cream-50 cursor-pointer"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X size={24} weight="light" aria-hidden="true" />
            ) : (
              <List size={24} weight="light" aria-hidden="true" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-20 bg-forest-900 flex flex-col pt-20 px-6"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 35 }}
          >
            <ul className="flex flex-col gap-1 mt-6" role="list">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, type: "spring", stiffness: 200, damping: 25 }}
                >
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className="block py-4 text-2xl font-display font-light text-cream-50 border-b border-forest-700 hover:text-forest-200 transition-colors duration-200 cursor-pointer"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="mt-auto pb-10 flex flex-col gap-4">
              <a
                href="tel:+12062265665"
                onClick={handleNavClick}
                className="flex items-center justify-center gap-2 py-4 bg-gold-500 hover:bg-gold-400 text-forest-950 font-outfit font-semibold rounded transition-colors duration-200 cursor-pointer"
              >
                <Phone size={18} weight="bold" aria-hidden="true" />
                (206) 226-5665
              </a>
              <a
                href="#contact"
                onClick={handleNavClick}
                className="flex items-center justify-center py-4 border border-forest-400 text-cream-100 font-outfit font-medium rounded hover:bg-forest-800 transition-colors duration-200 cursor-pointer"
              >
                Get a Free Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
