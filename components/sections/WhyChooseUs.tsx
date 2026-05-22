import ScrollReveal from "@/components/ui/ScrollReveal";

const VALUES = [
  {
    number: "01",
    heading: "Family-owned since 2001",
    body: "Over two decades under the same ownership means consistent standards, long-term relationships, and a reputation built property by property.",
  },
  {
    number: "02",
    heading: "Eastside specialists",
    body: "We work exclusively on the Eastside — Bellevue, Kirkland, Redmond, Sammamish, Woodinville, and the communities in between. We know this terrain.",
  },
  {
    number: "03",
    heading: "Residential and commercial",
    body: "Whether it's a single-family home, a multi-property HOA, or a commercial campus, we bring the same level of care and professionalism.",
  },
  {
    number: "04",
    heading: "Reliable and responsive",
    body: "We show up when scheduled, communicate clearly, and adapt quickly to storm events, pre-inspection needs, or seasonal changes.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-20 md:py-28 bg-forest-900"
      aria-label="Why choose Blade & Spade"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header row */}
        <ScrollReveal direction="up" className="mb-14 md:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-end">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-px bg-gold-400" aria-hidden="true" />
                <p className="text-xs font-outfit font-semibold tracking-[0.18em] uppercase text-forest-300">
                  Why Choose Us
                </p>
              </div>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-cream-50 leading-[1.05]"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                Built on trust.
                <br />
                <em className="italic text-forest-200">Proven over time.</em>
              </h2>
            </div>
            <p className="text-base font-outfit text-cream-200/80 leading-relaxed max-w-[40ch] lg:ml-auto">
              We&apos;re not the newest landscaping company on the Eastside —
              and that&apos;s exactly the point.
            </p>
          </div>
        </ScrollReveal>

        {/* Value list — editorial, divided by lines, no cards */}
        <div
          className="border-t border-forest-700"
          role="list"
          aria-label="Our values"
        >
          {VALUES.map((value, i) => (
            <ScrollReveal
              key={value.number}
              direction="up"
              delay={i * 0.07}
            >
              <div
                className="grid grid-cols-[3rem_1fr] md:grid-cols-[4rem_1fr_1fr] gap-x-6 md:gap-x-10 gap-y-2 py-8 md:py-10 border-b border-forest-700 group cursor-default"
                role="listitem"
              >
                {/* Number */}
                <span
                  className="font-display font-light text-3xl text-forest-500 group-hover:text-gold-400 transition-colors duration-300 leading-none pt-1"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                  aria-hidden="true"
                >
                  {value.number}
                </span>

                {/* Heading */}
                <h3
                  className="text-xl md:text-2xl font-display font-medium text-cream-100 group-hover:text-cream-50 transition-colors duration-300 leading-snug pt-1 self-center"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  {value.heading}
                </h3>

                {/* Body — takes second row on mobile, third col on desktop */}
                <p className="col-start-2 md:col-start-3 text-base md:text-lg font-outfit text-cream-200/80 leading-relaxed max-w-[44ch]">
                  {value.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
