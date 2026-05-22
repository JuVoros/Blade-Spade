import ScrollReveal from "@/components/ui/ScrollReveal";
import { MapPin } from "@phosphor-icons/react/dist/ssr";

const AREAS = [
  { city: "Bellevue", note: "Including Clyde Hill" },
  { city: "Kirkland", note: "" },
  { city: "Redmond", note: "Our home base" },
  { city: "Sammamish", note: "" },
  { city: "Issaquah", note: "" },
  { city: "Woodinville", note: "" },
];

export default function ServiceAreas() {
  return (
    <section
      id="service-areas"
      className="bg-forest-900 py-14 md:py-16"
      aria-label="Service areas"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-16">
          {/* Label */}
          <ScrollReveal direction="left" className="shrink-0">
            <div className="flex items-center gap-3">
              <MapPin
                size={18}
                className="text-gold-400 shrink-0"
                aria-hidden="true"
              />
              <p className="text-xs font-outfit font-semibold tracking-[0.18em] uppercase text-forest-300">
                Serving the Eastside
              </p>
            </div>
          </ScrollReveal>

          {/* Divider */}
          <div
            className="hidden md:block w-px self-stretch bg-forest-700"
            aria-hidden="true"
          />

          {/* Cities */}
          <ul
            className="flex flex-wrap gap-x-8 gap-y-3"
            role="list"
            aria-label="Cities served"
          >
            {AREAS.map((area, i) => (
              <ScrollReveal key={area.city} delay={i * 0.05} direction="up">
                <li className="group flex items-baseline gap-2">
                  <span className="text-base md:text-lg font-display font-medium text-cream-100 group-hover:text-forest-200 transition-colors duration-200"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}>
                    {area.city}
                  </span>
                  {area.note && (
                    <span className="text-xs font-outfit text-forest-400 hidden sm:inline">
                      {area.note}
                    </span>
                  )}
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
