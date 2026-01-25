"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef<HTMLElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | null>(null);
  const linksRef = useRef<(HTMLLIElement | null)[]>([]);
  const mobileRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  const NAV_ITEMS = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ] as const;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, { y: -40, opacity: 0, duration: 0.8 });

      gsap.set(logoRef.current, { opacity: 1, y: 0, willChange: "transform" });
      gsap.from(logoRef.current, {
        y: -10,
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
      });

      gsap.from(linksRef.current.filter(Boolean), {
        y: -10,
        opacity: 0,
        stagger: 0.12,
        delay: 0.35,
        duration: 0.45,
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!mobileRef.current) return;

    if (open) {
      gsap.fromTo(
        mobileRef.current,
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" },
      );
    } else {
      gsap.to(mobileRef.current, {
        y: -10,
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
      });
    }
  }, [open]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <a
          ref={logoRef}
          href="#home"
          className="text-sm font-semibold tracking-[0.25em] uppercase text-white will-change-transform"
        >
          Manav
        </a>

        <ul className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.25em] text-white/70">
          {NAV_ITEMS.map((item, index) => (
            <li
              key={item.label}
              ref={(el) => void (linksRef.current[index] = el)}
              className="relative group"
            >
              <a
                href={item.href}
                className="block pb-1 text-white/80 group-hover:text-white"
              >
                {item.label}
              </a>
              <span className="absolute left-0 -bottom-[2px] w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300" />
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-white/90 text-xl"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      <div
        ref={mobileRef}
        className={`md:hidden px-6 pb-6 pt-4 flex flex-col gap-3 items-center backdrop-blur-xl bg-white/5 border-t border-white/10 transition-all ${open ? "block" : "hidden"}`}
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setOpen(false)}
            className=" w-max px-6 py-2 rounded-full text-xs uppercase tracking-[0.25em] text-white/80 hover:text-white hover:bg-white/10 transition text-center"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
