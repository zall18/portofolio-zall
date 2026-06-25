import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="bg-[var(--background)] min-h-screen">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}
