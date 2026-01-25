"use client";

import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import About from "@/components/About";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar/>
      <Hero/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}
