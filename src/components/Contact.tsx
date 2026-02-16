"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const LiquidEther = dynamic(() => import("./ui/LiquidEther"), {
  ssr: false,
});

export default function Contact() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully ✅");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Failed to send message ❌");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error sending message ❌");
    }

    setLoading(false);
  };

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
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black font-mono uppercase tracking-tighter text-white">
            Contact Me
          </h2>
          <p className="mt-6 text-sm sm:text-base text-white/60 font-mono tracking-wide">
            Send me a message, I usually reply within a day.
          </p>
        </header>

        <div className="rounded-3xl px-6 sm:px-8 py-10 backdrop-blur-xl border border-[#7cff67]/30 bg-black/40 shadow-[0_0_50px_rgba(124,255,103,0.15)] space-y-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Your Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full px-8 py-4 rounded-full bg-[#7cff67] text-black text-xs sm:text-sm font-bold font-mono uppercase tracking-[0.25em] transition-all duration-300 hover:scale-[1.02] shadow-[0_0_28px_rgba(124,255,103,0.4)] hover:shadow-[0_0_40px_rgba(124,255,103,0.6)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {status && (
              <p className="text-sm mt-2 text-center font-mono font-bold text-[#7cff67]">
                {status}
              </p>
            )}
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
      className="w-full bg-black/40 border border-[#7cff67]/30 text-white rounded-xl px-4 py-3 text-sm font-mono outline-none focus:border-[#7cff67] focus:shadow-[0_0_20px_rgba(124,255,103,0.2)] transition-all placeholder:text-white/40"
    />
  );
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      rows={4}
      className="w-full bg-black/40 border border-[#7cff67]/30 text-white rounded-xl px-4 py-3 text-sm font-mono outline-none resize-none focus:border-[#7cff67] focus:shadow-[0_0_20px_rgba(124,255,103,0.2)] transition-all placeholder:text-white/40"
    />
  );
}
