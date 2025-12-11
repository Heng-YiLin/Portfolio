import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ThreeScene from "./components/ThreeScene";

export default function HomePage() {
  return (
    <>
      <ThreeScene />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />

    </>
  );
}
