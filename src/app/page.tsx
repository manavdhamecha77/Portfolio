"use client";

import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Achievements />

      <Contact />
      <Footer />
    </div>
  );
}
