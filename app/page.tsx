"use client";

import { useEffect } from "react";
import Lenis from "lenis";

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ThreeScene from "./components/ThreeScene";

export default function HomePage() {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.1,
    });

    function raf(time:number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative min-h-screen">
      {/* Background 3d rendering */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <ThreeScene />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      <div className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
