"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".exp-title", {
        scrollTrigger: {
          trigger: ".exp-title",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".job-card", {
        scrollTrigger: {
          trigger: ".job-container",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 px-10 max-w-6xl mx-auto"
    >
      <h2
        className="
          exp-title
          text-3xl font-semibold tracking-wider uppercase mb-16
          text-black
        "
      >
        Experience
      </h2>

      <div className="job-container space-y-16">
        {/* Job 1 */}
        <div className="job-card border-l border-neutral-300 pl-6">
          <h3 className="text-xl font-medium text-black">
            Software Engineer Intern
          </h3>
          <span className="text-xs uppercase tracking-wider text-neutral-500">
            Fastrac &nbsp;|&nbsp; May 2025 – July 2025
          </span>

          <p className="mt-4 text-neutral-600 max-w-2xl leading-relaxed">
            Brief description of your role, responsibilities, and achievements.
          </p>
        </div>

        {/* Job 2 */}
        <div className="job-card border-l border-neutral-300 pl-6">
          <h3 className="text-xl font-medium text-black">Junior Developer</h3>
          <span className="text-xs uppercase tracking-wider text-neutral-500">
            Company Name &nbsp;|&nbsp; Duration
          </span>

          <p className="mt-4 text-neutral-600 max-w-2xl leading-relaxed">
            Brief description of your role, responsibilities, and achievements.
          </p>
        </div>
      </div>
    </section>
  );
}
