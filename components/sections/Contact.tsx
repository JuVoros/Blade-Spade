"use client";

import { useState, FormEvent } from "react";
import { Phone, MapPin, Clock, CheckCircle } from "@phosphor-icons/react";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email address.";
    if (!form.message.trim()) next.message = "Message is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    // Submission handler — wire up to your preferred service
    try {
      await new Promise((res) => setTimeout(res, 900));
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputBase =
    "w-full px-4 py-3 bg-cream-50 border text-forest-900 font-outfit text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-forest-500/40 focus:border-forest-500 transition-colors duration-200 rounded-sm";
  const labelBase = "block text-xs font-outfit font-semibold tracking-wide text-forest-700 mb-1.5";

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-cream-50 overflow-hidden"
      aria-label="Contact us"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <ScrollReveal direction="up" className="mb-14 md:mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-8 h-px bg-forest-500" aria-hidden="true" />
            <p className="text-xs font-outfit font-semibold tracking-[0.18em] uppercase text-forest-600">
              Get in Touch
            </p>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-forest-900"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Let&apos;s talk about
            <br />
            <em className="italic text-stone-600">your property.</em>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact info + map */}
          <ScrollReveal direction="left">
            <div className="flex flex-col gap-8">
              {/* Info list */}
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-forest-100 shrink-0">
                    <Phone
                      size={18}
                      className="text-forest-700"
                      aria-hidden="true"
                    />
                  </span>
                  <div>
                    <p className="text-xs font-outfit font-semibold tracking-[0.12em] uppercase text-stone-500 mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:+12062265665"
                      className="text-lg font-outfit text-forest-900 hover:text-forest-600 transition-colors duration-200 cursor-pointer"
                    >
                      (206) 226-5665
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-forest-100 shrink-0">
                    <MapPin
                      size={18}
                      className="text-forest-700"
                      aria-hidden="true"
                    />
                  </span>
                  <div>
                    <p className="text-xs font-outfit font-semibold tracking-[0.12em] uppercase text-stone-500 mb-1">
                      Address
                    </p>
                    <address className="text-base font-outfit text-forest-900 not-italic">
                      23724 NE 65th Pl
                      <br />
                      Redmond, WA 98053
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-forest-100 shrink-0">
                    <Clock
                      size={18}
                      className="text-forest-700"
                      aria-hidden="true"
                    />
                  </span>
                  <div>
                    <p className="text-xs font-outfit font-semibold tracking-[0.12em] uppercase text-stone-500 mb-1">
                      Hours
                    </p>
                    <div className="text-base font-outfit text-forest-900 leading-relaxed">
                      <p>Mon–Fri: 9am–5pm</p>
                      <p className="text-stone-500">Sat: by appointment</p>
                      <p className="text-stone-500">Sun: closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps embed */}
              <div className="rounded-sm overflow-hidden border border-cream-300 aspect-[4/3]">
                <iframe
                  title="Blade & Spade Landcare location in Redmond, WA"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2688.8!2d-122.0299!3d47.6798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906d7a9f9a3a9f%3A0x0!2s23724+NE+65th+Pl%2C+Redmond%2C+WA+98053!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Map showing Blade & Spade Landcare location at 23724 NE 65th Pl, Redmond, WA"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal direction="right">
            {status === "success" ? (
              <div className="flex flex-col items-start gap-4 py-12">
                <CheckCircle
                  size={48}
                  weight="light"
                  className="text-forest-500"
                  aria-hidden="true"
                />
                <h3
                  className="text-2xl font-display font-semibold text-forest-900"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  Message received.
                </h3>
                <p className="text-base font-outfit text-stone-600 leading-relaxed">
                  Thank you for reaching out. We&apos;ll be in touch within one
                  business day.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-sm font-outfit font-medium text-forest-700 hover:text-forest-900 underline underline-offset-2 cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
              >
                <div className="flex flex-col gap-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className={labelBase}>
                      Full name <span className="text-forest-600">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className={`${inputBase} ${
                        errors.name ? "border-red-400" : "border-cream-300"
                      }`}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1.5 text-xs text-red-600 font-outfit" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className={labelBase}>
                      Email address <span className="text-forest-600">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className={`${inputBase} ${
                        errors.email ? "border-red-400" : "border-cream-300"
                      }`}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-xs text-red-600 font-outfit" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone (optional) */}
                  <div>
                    <label htmlFor="phone" className={labelBase}>
                      Phone number{" "}
                      <span className="font-normal text-stone-400">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(206) 555-0100"
                      className={`${inputBase} border-cream-300`}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className={labelBase}>
                      Message <span className="text-forest-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your property, what services you need, or any questions you have..."
                      className={`${inputBase} resize-none ${
                        errors.message ? "border-red-400" : "border-cream-300"
                      }`}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1.5 text-xs text-red-600 font-outfit" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Error state */}
                  {status === "error" && (
                    <p className="text-sm text-red-600 font-outfit" role="alert">
                      Something went wrong. Please try again or call us directly.
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 bg-forest-800 hover:bg-forest-700 disabled:bg-forest-800/50 text-cream-50 font-outfit font-semibold text-sm rounded transition-all duration-200 cursor-pointer active:scale-[0.99] disabled:cursor-not-allowed"
                    aria-disabled={status === "loading"}
                  >
                    {status === "loading" ? "Sending…" : "Send Message"}
                  </button>

                  <p className="text-xs font-outfit text-stone-400 text-center">
                    Or call us at{" "}
                    <a
                      href="tel:+12062265665"
                      className="text-forest-600 hover:text-forest-800 cursor-pointer"
                    >
                      (206) 226-5665
                    </a>{" "}
                    · Mon–Fri 9am–5pm
                  </p>
                </div>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
