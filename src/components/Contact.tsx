"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const LiquidEther = dynamic(() => import("./ui/LiquidEther"), {
  ssr: false,
});

export default function Contact() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen px-6 md:px-10 py-32 flex items-center justify-center overflow-hidden"
    >
      {visible && !prefersReducedMotion && !isMobile && (
        <div className="absolute inset-0 -z-10">
          <LiquidEther
            colors={["#5227FF", "#FF9FFC"]}
            resolution={0.35}
            viscous={20}
            iterationsViscous={16}
            iterationsPoisson={16}
            mouseForce={10}
            cursorSize={80}
            autoDemo
            autoSpeed={0.35}
            autoIntensity={1.6}
            isBounce={false}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      )}

      <div
        className={`w-full max-w-xl transition-all duration-700 will-change-transform
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        <header className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-semibold text-white">
            Contact Me
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/70">
            Send me a message, I usually relpy within a day.
          </p>
        </header>

        <div className="rounded-3xl px-6 sm:px-8 py-10 backdrop-blur-xl border border-white/10 bg-black/20 shadow-[0_0_50px_rgba(0,0,0,0.25)] space-y-8">
          <form className="space-y-6">
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" type="email" />
            <Textarea placeholder="Your Message" />

            <button
              type="submit"
              className="w-full px-8 py-3 rounded-lg bg-white text-black text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] transition-transform duration-300 hover:scale-[1.04]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 text-sm outline-none focus:border-white transition-colors"
    />
  );
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      rows={4}
      className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 text-sm outline-none resize-none focus:border-white transition-colors"
    />
  );
}
