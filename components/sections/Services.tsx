"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Plus, Minus } from "@phosphor-icons/react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const SERVICES = [
  {
    id: "residential",
    title: "Residential",
    tagline: "Your home deserves ongoing care.",
    description:
      "From weekly maintenance to full-scale renovations, we treat every residential property with the same attention to detail — whether it's a small Redmond lot or a lakefront estate in Clyde Hill.",
    image: "/images/residential.jpg",
    imageAlt: "Professionally maintained residential lawn and garden",
    services: [
      "Full landscape maintenance",
      "Lawn care",
      "Landscape and lawn renovations",
      "Lawn aeration and seeding",
      "Hedge and tree trimming",
      "Surface cleaning and pressure washing",
      "Spring and Fall clean-ups",
      "Bark and mulch installation",
      "Bark/mulch/soil/gravel delivery",
      "Irrigation management and winterization",
      "Soil amendments",
      "Water features and pond maintenance",
      "Debris removal",
    ],
  },
  {
    id: "commercial",
    title: "Commercial & Association",
    tagline: "Grounds that reflect your reputation.",
    description:
      "HOAs, office parks, and commercial properties require consistency and professionalism. We deliver both — with reliable scheduling, pre-inspection readiness, and responsive service.",
    image: "/images/commercial.jpg",
    imageAlt: "Well-maintained commercial property grounds",
    services: [
      "Full landscape and grounds maintenance",
      "Lawn & ornamental bed services",
      "Hedge and tree trimming",
      "Surface cleaning and pressure washing",
      "Bark and mulch installation",
      "Landscape renovations",
      "Seasonal planting",
      "Irrigation management",
      "Pre-inspection clean-ups",
      "Water features and pond maintenance",
      "Storm and snow response",
    ],
  },
  {
    id: "specialty",
    title: "Specialty & Realtor",
    tagline: "First impressions start at the curb.",
    description:
      "Selling or preparing a property? We specialize in the kind of detail work that elevates listings — from pre-listing clean-ups to landscape design consultations and lighting upgrades.",
    image: "/images/specialty.jpg",
    imageAlt: "Beautifully staged property landscape for real estate listing",
    services: [
      "Pre-listing clean-ups",
      "Landscape and lawn renovations",
      "Lawn aeration and seeding",
      "Hedge and tree trimming",
      "Surface cleaning and pressure washing",
      "Hard surface sealing",
      "Spring and Fall clean-ups",
      "Bark and mulch installation",
      "Irrigation management",
      "Plant delivery and installation",
      "Landscape installation",
      "Irrigation winterizing",
      "Landscape lighting upgrades",
      "Landscape consultations",
      "Landscape and garden design",
      "Small yardage material delivery",
    ],
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[0];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <ScrollReveal direction="up" delay={index * 0.08}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-sm">
        {/* Image */}
        <div
          className={`relative w-full aspect-[16/10] lg:aspect-auto lg:min-h-[340px] ${
            !isEven ? "lg:order-last" : ""
          }`}
        >
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div
            className="absolute inset-0 bg-forest-950/20"
            aria-hidden="true"
          />
        </div>

        {/* Content */}
        <div className="bg-cream-100 px-8 md:px-12 py-10 md:py-14 flex flex-col justify-center">
          <p className="text-xs font-outfit font-semibold tracking-[0.18em] uppercase text-forest-600 mb-3">
            {service.tagline}
          </p>
          <h3
            className="text-3xl md:text-4xl font-display font-semibold text-forest-900 mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            {service.title}
          </h3>
          <p className="text-base md:text-lg font-outfit text-stone-700 leading-relaxed mb-6 max-w-[44ch]">
            {service.description}
          </p>

          {/* Accordion toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-3 px-5 py-3 border border-forest-600 text-forest-700 hover:bg-forest-700 hover:text-cream-50 font-outfit font-semibold text-base rounded transition-all duration-200 cursor-pointer w-fit"
            aria-expanded={open}
            aria-controls={`services-list-${service.id}`}
          >
            {open ? (
              <Minus size={18} weight="bold" aria-hidden="true" />
            ) : (
              <Plus size={18} weight="bold" aria-hidden="true" />
            )}
            {open ? "Hide all services" : "View all services"}
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                id={`services-list-${service.id}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 28 }}
                style={{ overflow: "hidden" }}
              >
                <ul
                  className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2"
                  role="list"
                  aria-label={`${service.title} services`}
                >
                  {service.services.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-2 text-base font-outfit text-stone-700"
                    >
                      <span
                        className="w-1 h-1 rounded-full bg-forest-500 shrink-0 mt-[0.4em]"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-cream-50"
      aria-label="Services"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <ScrollReveal direction="up" className="mb-14 md:mb-20">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-8 h-px bg-forest-500" aria-hidden="true" />
            <p className="text-xs font-outfit font-semibold tracking-[0.18em] uppercase text-forest-600">
              What We Do
            </p>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-forest-900 max-w-[18ch]"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Full-service care,
            <br />
            <em className="italic text-stone-600">every season.</em>
          </h2>
        </ScrollReveal>

        {/* Service cards */}
        <div className="flex flex-col gap-6 md:gap-8">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
