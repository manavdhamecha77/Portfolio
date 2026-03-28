"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ACHIEVEMENTS } from "@/constants";

export default function Achievements() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const total = ACHIEVEMENTS.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  // Swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  };

  const achievement = ACHIEVEMENTS[current];

  return (
    <section id="achievements" className="py-32 px-6 sm:px-10 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black font-mono uppercase tracking-tighter text-white">
            Achievements
          </h2>
          <p className="mt-6 text-sm sm:text-base md:text-lg text-white/60 leading-relaxed font-mono tracking-wide max-w-2xl mx-auto">
            Milestones and recognitions that mark my growth and contributions in
            the tech community.
          </p>
        </div>

        {/* Slideshow Container */}
        <div
          className="relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Image + overlay */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#7cff67]/20 bg-black/40 backdrop-blur-sm shadow-[0_0_60px_rgba(124,255,103,0.08)]">
            {ACHIEVEMENTS.map((a, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  i === current
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-105"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={a.image}
                  alt={a.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Bottom gradient overlay for text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 md:p-10">
              <h3
                key={`title-${current}`}
                className="text-xl sm:text-2xl md:text-3xl font-bold font-mono uppercase tracking-tight text-white transition-all duration-500"
              >
                {achievement.title}
              </h3>
              <p
                key={`desc-${current}`}
                className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-white/70 font-mono leading-relaxed max-w-2xl transition-all duration-500 delay-100"
              >
                {achievement.desc}
              </p>
            </div>

            {/* Nav arrows — desktop only */}
            <button
              onClick={prev}
              aria-label="Previous achievement"
              className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-black/50 border border-white/10 text-white/60 hover:text-[#7cff67] hover:border-[#7cff67]/40 transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next achievement"
              className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-black/50 border border-white/10 text-white/60 hover:text-[#7cff67] hover:border-[#7cff67]/40 transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {ACHIEVEMENTS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === current
                    ? "w-8 bg-[#7cff67] shadow-[0_0_12px_rgba(124,255,103,0.5)]"
                    : "w-3 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>


    </section>
  );
}
