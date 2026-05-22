export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Gallery images — place photos in /public/images/gallery/
// Scaffolded with placeholders (gallery-1.jpg through gallery-12.jpg)
export const GALLERY_IMAGES: GalleryImage[] = [
  { src: "/images/gallery/gallery-1.jpg",  alt: "Lush lawn after professional maintenance",         width: 800, height: 600 },
  { src: "/images/gallery/gallery-2.jpg",  alt: "Trimmed hedges along a residential driveway",      width: 800, height: 1000 },
  { src: "/images/gallery/gallery-3.jpg",  alt: "Commercial property grounds after seasonal care",  width: 800, height: 600 },
  { src: "/images/gallery/gallery-4.jpg",  alt: "Before and after landscape renovation",            width: 800, height: 800 },
  { src: "/images/gallery/gallery-5.jpg",  alt: "Water feature installation in backyard garden",    width: 800, height: 600 },
  { src: "/images/gallery/gallery-6.jpg",  alt: "Bark mulch installation around ornamental beds",   width: 800, height: 1000 },
  { src: "/images/gallery/gallery-7.jpg",  alt: "Spring clean-up on Eastside residential property", width: 800, height: 600 },
  { src: "/images/gallery/gallery-8.jpg",  alt: "Pressure-washed stone patio and walkway",          width: 800, height: 600 },
  { src: "/images/gallery/gallery-9.jpg",  alt: "Irrigation system winterization",                  width: 800, height: 800 },
  { src: "/images/gallery/gallery-10.jpg", alt: "Pre-listing curb appeal landscape work",           width: 800, height: 600 },
  { src: "/images/gallery/gallery-11.jpg", alt: "Ornamental garden bed after renovation",           width: 800, height: 1000 },
  { src: "/images/gallery/gallery-12.jpg", alt: "Landscape lighting upgrade at dusk",               width: 800, height: 600 },
];
