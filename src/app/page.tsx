import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";

// Lazy load below-fold sections
const Skills = dynamic(() => import("@/components/Skills"));
const Experience = dynamic(() => import("@/components/Experience"));
const Projects = dynamic(() => import("@/components/Projects"));
const CaseStudies = dynamic(() => import("@/components/CaseStudies"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
