import AboutMe from "./components/AboutMe";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import ContactMe from "./components/ContactMe";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Freelance from "./components/Freelance";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        name: 'Muhamad Rizal Fikri',
        jobTitle: 'Backend & Mobile Developer',
        description: 'Mahasiswa Sistem Informasi yang fokus pada pengembangan aplikasi menggunakan Next.js, Laravel, dan Flutter.',
        url: 'https://www.rizll.tech',
        sameAs: [
          'https://github.com/zall18',
          'https://www.linkedin.com/in/muhamad-rizal-fikri-a77b13250'
        ]
      },
      {
        '@type': 'WebSite',
        name: 'Muhamad Rizal Fikri | Web Developer Portfolio',
        url: 'https://www.rizll.tech'
      }
    ]
  };

  return (
    <main className="bg-[var(--background)] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Achievements />
      <Projects />
      <Freelance />
      <Certifications />
      <ContactMe />
      <Footer />
    </main>
  );
}
