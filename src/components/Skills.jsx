"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skills-title", {
        scrollTrigger: {
          trigger: ".skills-title",
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
      });

      gsap.from(".skill-category", {
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(".skill-item", {
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 80%",
        },
        scale: 0.9,
        opacity: 0,
        stagger: 0.05,
        duration: 0.5,
        delay: 0.3,
        ease: "back.out(1.7)",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={containerRef}
      className="py-24 px-10 max-w-6xl mx-auto"
    >
      <h2
        className="
          skills-title
          text-3xl font-semibold tracking-wider uppercase
          mb-16 text-black
        "
      >
        Skills
      </h2>

      <div
        className="
          skills-grid
          grid grid-cols-1 md:grid-cols-3 gap-12
        "
      >
        {/* Frontend */}
        <div className="skill-category space-y-4">
          <h3 className="text-xs uppercase tracking-widest text-neutral-500">
            Frontend
          </h3>
          <ul className="space-y-1">
            <li className="skill-item text-neutral-700 text-sm">HTML</li>
            <li className="skill-item text-neutral-700 text-sm">CSS</li>
            <li className="skill-item text-neutral-700 text-sm">JavaScript</li>
            <li className="skill-item text-neutral-700 text-sm">React</li>
          </ul>
        </div>

        {/* Backend */}
        <div className="skill-category space-y-4">
          <h3 className="text-xs uppercase tracking-widest text-neutral-500">
            Backend
          </h3>
          <ul className="space-y-1">
            <li className="skill-item text-neutral-700 text-sm">Node.js</li>
            <li className="skill-item text-neutral-700 text-sm">Express</li>
            <li className="skill-item text-neutral-700 text-sm">MongoDB</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="skill-category space-y-4">
          <h3 className="text-xs uppercase tracking-widest text-neutral-500">
            Tools
          </h3>
          <ul className="space-y-1">
            <li className="skill-item text-neutral-700 text-sm">Git</li>
            <li className="skill-item text-neutral-700 text-sm">GitHub</li>
            <li className="skill-item text-neutral-700 text-sm">Linux</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
