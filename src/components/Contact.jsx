"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-title", {
        scrollTrigger: {
          trigger: ".contact-title",
          start: "top 90%",
        },
        y: -20,
        opacity: 0,
        duration: 0.8,
      });

      gsap.from(".form-group", {
        scrollTrigger: {
          trigger: "form",
          start: "top 85%",
        },
        x: -30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".submit-btn", {
        scrollTrigger: {
          trigger: ".submit-btn",
          start: "top 95%",
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        delay: 0.4,
        ease: "back.out(2)",
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={contactRef}
      className="py-24 px-10 max-w-3xl mx-auto"
    >
      <h2
        className="
          contact-title
          text-3xl font-semibold tracking-wider uppercase
          mb-16 text-black
          text-center
        "
      >
        Contact
      </h2>

      <form className="space-y-8">
        {/* NAME */}
        <div className="form-group flex flex-col space-y-2">
          <label className="text-xs uppercase tracking-widest text-neutral-600">
            Name
          </label>
          <input
            type="text"
            placeholder="Your name"
            className="
              border-b border-neutral-400
              py-2
              focus:outline-none
              focus:border-black
              placeholder-neutral-400
              text-neutral-700
            "
          />
        </div>

        {/* EMAIL */}
        <div className="form-group flex flex-col space-y-2">
          <label className="text-xs uppercase tracking-widest text-neutral-600">
            Email
          </label>
          <input
            type="email"
            placeholder="Your email"
            className="
              border-b border-neutral-400
              py-2
              focus:outline-none
              focus:border-black
              placeholder-neutral-400
              text-neutral-700
            "
          />
        </div>

        {/* MESSAGE */}
        <div className="form-group flex flex-col space-y-2">
          <label className="text-xs uppercase tracking-widest text-neutral-600">
            Message
          </label>
          <textarea
            placeholder="Your message"
            rows={4}
            className="
              border-b border-neutral-400
              py-2
              resize-none
              focus:outline-none
              focus:border-black
              placeholder-neutral-400
              text-neutral-700
            "
          />
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="
            submit-btn
            border border-neutral-400
            px-6 py-2
            rounded-full
            uppercase tracking-widest text-sm
            text-neutral-700
            hover:opacity-70
            transition-all
            mx-auto block
          "
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
