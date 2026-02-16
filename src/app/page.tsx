"use client";

import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Social from "@/components/Social";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Social />
      <Contact />
      <Footer />
    </div>
  );
}
