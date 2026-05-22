"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GALLERY_IMAGES } from "@/lib/gallery";
import Lightbox from "@/components/ui/Lightbox";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { MagnifyingGlassPlus } from "@phosphor-icons/react";

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const prevImage = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
    );
  }, []);

  const nextImage = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i + 1) % GALLERY_IMAGES.length
    );
  }, []);

  return (
    <>
      <section
        id="gallery"
        className="py-20 md:py-28 bg-cream-100"
        aria-label="Our work gallery"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Header */}
          <ScrollReveal direction="up" className="mb-14 md:mb-20">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-px bg-forest-500" aria-hidden="true" />
              <p className="text-xs font-outfit font-semibold tracking-[0.18em] uppercase text-forest-600">
                Our Work
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-forest-900"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                Over two decades
                <br />
                <em className="italic text-stone-600">of craftsmanship.</em>
              </h2>
              <p className="text-sm font-outfit text-stone-600 max-w-[34ch] md:text-right leading-relaxed">
                A selection of landscapes we maintain and transform across the
                Eastside.
              </p>
            </div>
          </ScrollReveal>

          {/* Masonry grid */}
          <div
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5"
            style={{ columnFill: "balance" }}
            role="list"
            aria-label="Gallery images"
          >
            {GALLERY_IMAGES.map((image, index) => (
              <motion.div
                key={image.src}
                className="relative mb-4 md:mb-5 overflow-hidden rounded-sm cursor-pointer group break-inside-avoid"
                role="listitem"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 20,
                  delay: (index % 3) * 0.06,
                }}
                onClick={() => openLightbox(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox(index);
                  }
                }}
                tabIndex={0}
                aria-label={`View ${image.alt}`}
              >
                <div className="relative w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 bg-forest-950/0 group-hover:bg-forest-950/30 transition-all duration-300 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <MagnifyingGlassPlus
                      size={32}
                      weight="light"
                      className="text-cream-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-2 group-hover:translate-y-0"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        images={GALLERY_IMAGES}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </>
  );
}
