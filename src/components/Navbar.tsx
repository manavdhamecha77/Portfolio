"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef<HTMLElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | null>(null);
  const linksRef = useRef<(HTMLLIElement | null)[]>([]);
  const mobileRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, { y: -40, opacity: 0, duration: 0.8 });

      gsap.set(logoRef.current, { opacity: 1, y: 0, willChange: "transform" });
      gsap.from(logoRef.current, { y: -10, opacity: 0, duration: 0.5, delay: 0.2 });

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
        { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" }
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
      className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-lg"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        {/* Logo */}
        <a
          ref={logoRef}
          href="#home"
          className="text-sm font-semibold tracking-wide text-neutral-100 will-change-transform"
        >
          Manav Dhamecha
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 text-xs uppercase tracking-widest text-neutral-300">
          {["Home", "About", "Portfolio", "Contact"].map((item, index) => (
            <li
              key={item}
              ref={(el) => void (linksRef.current[index] = el)}
              className="will-change-transform"
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-neutral-200"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileRef}
        className={`md:hidden flex flex-col gap-6 px-6 pb-6 text-neutral-200 text-sm uppercase tracking-widest ${
          open ? "block" : "hidden"
        }`}
      >
        {["Home", "About", "Portfolio", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setOpen(false)}
            className="opacity-90 hover:opacity-100 transition"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}
