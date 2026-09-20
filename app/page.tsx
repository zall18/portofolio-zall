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
        '@type': 'ProfilePage',
        dateCreated: '2025-01-01',
        dateModified: new Date().toISOString().split('T')[0],
        mainEntity: {
          '@type': 'Person',
          name: 'Muhamad Rizal Fikri',
          alternateName: ['Zall', 'Rizal Fikri'],
          jobTitle: 'Backend & Mobile Developer',
          description: 'Mahasiswa Sistem Informasi Telkom University yang fokus pada pengembangan aplikasi mobile (Flutter, Kotlin) dan backend (Next.js, Laravel, Node.js).',
          url: 'https://www.rizll.tech',
          image: 'https://www.rizll.tech/profile.webp',
          sameAs: [
            'https://github.com/zall18',
            'https://www.linkedin.com/in/muhamad-rizal-fikri-a77b13250',
            'https://www.instagram.com/rizlll_/'
          ],
          knowsAbout: [
            'Mobile Application Development',
            'Backend Web Development',
            'Next.js',
            'React',
            'Flutter',
            'Kotlin',
            'Laravel',
            'Node.js',
            'Express.js',
            'TypeScript',
            'Prisma ORM',
            'REST API',
            'Internet of Things (IoT)',
            'Sistem Informasi'
          ],
          alumniOf: {
            '@type': 'EducationalOrganization',
            name: 'Telkom University'
          }
        }
      },
      {
        '@type': 'ItemList',
        name: 'Featured Projects by Muhamad Rizal Fikri',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@type': 'SoftwareApplication',
              name: 'TB Care Mobile',
              applicationCategory: 'HealthApplication',
              operatingSystem: 'Android, iOS',
              description: 'An integrated healthcare application designed to facilitate Tuberculosis (TB) treatment, monitoring, and education for patients and medical staff.',
              url: 'https://github.com/alamsyahfirdaus/tb-care-mobile'
            }
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@type': 'SoftwareApplication',
              name: 'SIM UKK Mobile',
              applicationCategory: 'EducationalApplication',
              operatingSystem: 'Android',
              description: 'A mobile application for vocational competency exam management that digitizes the practical exam grading process.',
              url: 'https://github.com/zall18/project_ujikom_sim_ukk_mobile'
            }
          },
          {
            '@type': 'ListItem',
            position: 3,
            item: {
              '@type': 'SoftwareApplication',
              name: 'Smart Green House Mobile',
              applicationCategory: 'UtilityApplication',
              operatingSystem: 'Android',
              description: 'A smart farming controller application that enables automated monitoring and control of greenhouse environmental conditions with IoT.',
              url: 'https://github.com/zall18/smart-green-house-mobile'
            }
          }
        ]
      },
      {
        '@type': 'WebSite',
        name: 'Muhamad Rizal Fikri | Web & Mobile Developer Portfolio',
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
