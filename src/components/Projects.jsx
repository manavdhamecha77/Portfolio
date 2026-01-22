"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-title", {
        scrollTrigger: {
          trigger: ".projects-title",
          start: "top 90%",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
      });

      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: ".projects-wrapper",
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
      });

      const buttons = gsap.utils.toArray(".project-btn");
      buttons.forEach((btn) => {
        btn.addEventListener("mouseenter", () => {
          gsap.to(btn, { y: -2, opacity: 0.6, duration: 0.2 });
        });
        btn.addEventListener("mouseleave", () => {
          gsap.to(btn, { y: 0, opacity: 1, duration: 0.2 });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-24 px-10 max-w-6xl mx-auto"
    >
      <h2
        className="
          projects-title
          text-3xl font-semibold tracking-wider uppercase
          mb-16 text-black
        "
      >
        Projects
      </h2>

      <div className="projects-wrapper space-y-20">
        {/* Project 1 */}
        <div className="project-card flex flex-col md:flex-row gap-10 items-start">
          {/* Image Placeholder */}
          <div className="w-full md:w-1/2 aspect-video bg-neutral-200" />

          {/* Content */}
          <div className="flex flex-col space-y-4 md:w-1/2">
            <h3 className="text-xl font-medium text-black">Craft-Connect</h3>
            <p className="text-neutral-600 leading-relaxed">
              AI-powered marketplace for local artisans, preserving heritage.
            </p>

            <div className="flex gap-4 mt-4 text-sm uppercase tracking-widest">
              <a
                href="#"
                className="project-btn border border-black px-4 py-1 rounded-full"
              >
                Live Demo
              </a>
              <a
                href="#"
                className="project-btn border border-neutral-400 px-4 py-1 rounded-full"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card flex flex-col md:flex-row gap-10 items-start">
          {/* Image Placeholder */}
          <div className="w-full md:w-1/2 aspect-video bg-neutral-200" />

          {/* Content */}
          <div className="flex flex-col space-y-4 md:w-1/2">
            <h3 className="text-xl font-medium text-black">OneFlow</h3>
            <p className="text-neutral-600 leading-relaxed">
              Full-stack project management tool built for team collaboration.
            </p>

            <div className="flex gap-4 mt-4 text-sm uppercase tracking-widest">
              <a
                href="#"
                className="project-btn border border-black px-4 py-1 rounded-full"
              >
                Live Demo
              </a>
              <a
                href="#"
                className="project-btn border border-neutral-400 px-4 py-1 rounded-full"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
