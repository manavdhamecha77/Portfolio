"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const LiquidEther = dynamic(() => import("./ui/LiquidEther"), {
  ssr: false,
});

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/manavdhamecha77",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/manavdhamecha",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Download CV",
    url: "https://drive.google.com/file/d/12HYXe97z9oe_ekEPBxPsNk2o1hmNP1TE/view?usp=drive_link",
    download: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
  {
    name: "Email",
    url: "mailto:manavdhamecha77@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 7L2 7" />
      </svg>
    ),
  },
];

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
        className={`w-full max-w-6xl transition-all duration-700 will-change-transform
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        <header className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black font-mono uppercase tracking-tighter text-white">
            Get In Touch
          </h2>
          <p className="mt-6 text-sm sm:text-base text-white/60 font-mono tracking-wide max-w-lg mx-auto">
            Have a project in mind or just want to say hello? Reach out through the form or connect with me on socials.
          </p>
        </header>

        {/* Two-column grid: form + links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Left: Contact Form */}
          <div className="rounded-3xl px-6 sm:px-8 py-10 backdrop-blur-xl border border-[#7cff67]/30 bg-black/40 shadow-[0_0_50px_rgba(124,255,103,0.15)]">
            <h3 className="text-lg font-bold font-mono uppercase tracking-wider text-white/80 mb-6">
              Send a Message
            </h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
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

          {/* Right: Social Links */}
          <div className="rounded-3xl px-6 sm:px-8 py-10 backdrop-blur-xl border border-[#7cff67]/30 bg-black/40 shadow-[0_0_50px_rgba(124,255,103,0.15)] flex flex-col justify-between gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                {...(link.download ? { download: true } : {})}
                className="group flex items-center gap-5 flex-1 rounded-2xl px-6 py-5 border border-[#7cff67]/15 bg-[#7cff67]/[0.03] transition-all duration-300 hover:border-[#7cff67]/40 hover:bg-[#7cff67]/[0.08] hover:shadow-[0_0_30px_rgba(124,255,103,0.12)]"
              >
                {/* Icon circle */}
                <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#7cff67]/[0.06] border border-[#7cff67]/20 text-[#7cff67]/60 transition-all duration-300 group-hover:text-[#7cff67] group-hover:border-[#7cff67]/40 group-hover:bg-[#7cff67]/15 group-hover:shadow-[0_0_20px_rgba(124,255,103,0.2)]">
                  {link.icon}
                </span>

                {/* Text */}
                <div className="flex flex-col">
                  <span className="text-base font-bold font-mono text-white/90 tracking-wide group-hover:text-white transition-colors duration-300">
                    {link.name}
                  </span>
                  <span className="text-xs font-mono text-white/40 group-hover:text-white/60 transition-colors duration-300 truncate max-w-[200px]">
                    {link.url.replace(/^https?:\/\//, "").replace(/^mailto:/, "")}
                  </span>
                </div>

                {/* Arrow */}
                <span className="ml-auto text-white/20 group-hover:text-[#7cff67] transition-all duration-300 transform group-hover:translate-x-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
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
