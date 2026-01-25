"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LiquidEther from "./ui/LiquidEther";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-heading > *", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        y: 20,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".contact-card", {
        scrollTrigger: {
          trigger: ".contact-card",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".form-group", {
        scrollTrigger: {
          trigger: ".contact-card",
          start: "top 75%",
        },
        y: 20,
        opacity: 0,
        stagger: 0.12,
        duration: 0.6,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen px-6 md:px-10 py-32 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="w-full max-w-xl">
        <div className="contact-heading text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-semibold text-white tracking-tight">
            Contact
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
            Send me a message — I usually reply within a day.
          </p>
        </div>

        <div className="contact-card rounded-3xl px-6 sm:px-8 py-10 backdrop-blur-xl border border-white/10 bg-black/20 shadow-[0_0_50px_rgba(0,0,0,0.25)] space-y-10 transition-all duration-300">
          <div>
            <h3 className="text-lg sm:text-xl font-medium text-white">
              Get in Touch
            </h3>
            <p className="text-sm text-white/60 mt-1">
              Fill the form and I’ll get back to you.
            </p>

            <form className="mt-8 space-y-6">
              <div className="form-group group">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 text-sm outline-none transition-all group-hover:border-white/30 focus:border-white focus:bg-white/10"
                />
              </div>

              <div className="form-group group">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 text-sm outline-none transition-all group-hover:border-white/30 focus:border-white focus:bg-white/10"
                />
              </div>

              <div className="form-group group">
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 text-sm outline-none resize-none transition-all group-hover:border-white/30 focus:border-white focus:bg-white/10"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 rounded-lg bg-white text-black text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] shadow-[0_0_32px_rgba(255,255,255,0.5)] hover:shadow-[0_0_48px_rgba(255,255,255,0.85)] transition-all duration-300 hover:scale-[1.04]"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="pt-6 border-t border-white/10">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-4">
              Socials
            </p>

            <div className="flex flex-col gap-3">
              {["LinkedIn", "Instagram", "GitHub"].map((s) => (
                <a
                  key={s}
                  className="text-sm px-4 py-2 rounded-full border border-white/10 text-white/80 hover:text-white hover:border-white/30 transition-all duration-200"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
