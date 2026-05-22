"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, ArrowDown } from "@phosphor-icons/react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-end md:items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Lush professionally maintained landscape on the Eastside"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay — left-heavy so text reads cleanly */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(15,31,16,0.88) 0%, rgba(15,31,16,0.70) 42%, rgba(15,31,16,0.15) 70%, transparent 100%)",
          }}
          aria-hidden="true"
        />
        {/* Bottom fade for scroll indicator */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background: "linear-gradient(to top, rgba(15,31,16,0.55), transparent)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Content — left-aligned, asymmetric */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-24 md:pb-0 pt-28 md:pt-0">
        <div className="max-w-[600px]">
          {/* Eyebrow */}
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 100, damping: 20 }}
          >
            <span className="w-8 h-px bg-gold-400" aria-hidden="true" />
            <span className="text-xs font-outfit font-semibold tracking-[0.22em] uppercase text-gold-300">
              Serving the Eastside Since 2001
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-display font-semibold leading-[1.02] tracking-tight text-cream-50 mb-6"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, type: "spring", stiffness: 80, damping: 18 }}
          >
            Landscapes
            <br />
            <em className="not-italic text-forest-200">crafted to last.</em>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-lg md:text-xl font-outfit font-light text-cream-100/90 leading-relaxed mb-10 max-w-[46ch]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, type: "spring", stiffness: 80, damping: 18 }}
          >
            Professional landscape maintenance and care for residential and
            commercial properties across Bellevue, Kirkland, Redmond, and the
            greater Eastside.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, type: "spring", stiffness: 80, damping: 18 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 hover:bg-gold-400 text-forest-950 font-outfit font-semibold text-base rounded transition-all duration-200 cursor-pointer active:scale-[0.98]"
            >
              Get a Free Quote
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border border-cream-200/50 hover:border-cream-200/80 text-cream-50 hover:bg-cream-50/10 font-outfit font-medium text-base rounded transition-all duration-200 cursor-pointer"
            >
              Our Services
            </a>
          </motion.div>

          {/* Phone number */}
          <motion.a
            href="tel:+12062265665"
            className="inline-flex items-center gap-2 mt-8 text-base font-outfit text-cream-100/80 hover:text-cream-50 transition-colors duration-200 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            aria-label="Call (206) 226-5665"
          >
            <Phone size={14} weight="light" aria-hidden="true" />
            (206) 226-5665
          </motion.a>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-cream-100/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={18} weight="light" />
        </motion.div>
      </motion.div>
    </section>
  );
}
