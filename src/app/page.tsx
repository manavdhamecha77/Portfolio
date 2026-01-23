import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import About from "@/components/About";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      <Portfolio/>
      <Contact />
      <Footer />
    </div>
  );
}
