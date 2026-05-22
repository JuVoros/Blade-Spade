"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ArrowLeft, ArrowRight } from "@phosphor-icons/react";

interface LightboxProps {
  images: { src: string; alt: string }[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const isOpen = currentIndex !== null;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("lightbox-open");
    } else {
      document.body.classList.remove("lightbox-open");
    }
    return () => document.body.classList.remove("lightbox-open");
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && currentIndex !== null && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-forest-950/92"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-cream-50/10 hover:bg-cream-50/20 text-cream-50 transition-colors duration-200 cursor-pointer"
            aria-label="Close image viewer"
          >
            <X size={22} weight="light" />
          </button>

          {/* Prev */}
          <button
            onClick={onPrev}
            className="absolute left-4 md:left-8 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-cream-50/10 hover:bg-cream-50/20 text-cream-50 transition-colors duration-200 cursor-pointer"
            aria-label="Previous image"
          >
            <ArrowLeft size={22} weight="light" />
          </button>

          {/* Next */}
          <button
            onClick={onNext}
            className="absolute right-4 md:right-8 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-cream-50/10 hover:bg-cream-50/20 text-cream-50 transition-colors duration-200 cursor-pointer"
            aria-label="Next image"
          >
            <ArrowRight size={22} weight="light" />
          </button>

          {/* Image */}
          <motion.div
            key={currentIndex}
            className="relative z-10 max-w-5xl w-full mx-8 aspect-[4/3] md:aspect-[16/10]"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          </motion.div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-cream-100/70 text-sm font-outfit tracking-widest">
            {currentIndex + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
