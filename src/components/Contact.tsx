"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  // Types: sectionRef → HTMLElement
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
      className="min-h-screen px-6 md:px-10 py-32 flex items-center justify-center"
    >
      <div className="w-full max-w-xl">
        {/* Heading */}
        <div className="contact-heading text-center mb-12">
          <h2 className="text-4xl font-semibold">Contact Me</h2>
          <p className="mt-4 text-sm opacity-70">
            Got a question? Send me a message and I’ll get back to you soon.
          </p>
        </div>

        {/* Card */}
        <div className="contact-card rounded-2xl border border-neutral-800 p-6 md:p-8 space-y-8">
          {/* Form */}
          <div>
            <h3 className="text-lg font-medium mb-1">Get in Touch</h3>
            <p className="text-sm opacity-70 mb-6">
              Have something to discuss? Let’s talk.
            </p>

            <form className="space-y-5">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border border-neutral-800 rounded-lg px-4 py-2 text-sm outline-none"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent border border-neutral-800 rounded-lg px-4 py-2 text-sm outline-none"
                />
              </div>

              <div className="form-group">
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full bg-transparent border border-neutral-800 rounded-lg px-4 py-2 text-sm outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full border border-neutral-700 rounded-lg py-2 text-sm transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Socials */}
          <div className="pt-6 border-t border-neutral-800">
            <p className="text-xs uppercase tracking-widest opacity-60 mb-4">
              Connect With Me
            </p>

            <div className="space-y-3 text-sm">
              <a className="block border border-neutral-800 rounded-lg px-4 py-2">
                LinkedIn
              </a>
              <a className="block border border-neutral-800 rounded-lg px-4 py-2">
                Instagram
              </a>
              <a className="block border border-neutral-800 rounded-lg px-4 py-2">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
