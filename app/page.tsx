import AboutMe from "./components/AboutMe";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import ContactMe from "./components/ContactMe";
import Experience from "./components/Experience";
import FAQ from "./components/FAQ";
import { FAQS } from "./constants/faq";
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
        '@type': 'Organization',
        '@id': 'https://www.rizll.tech/#organization',
        name: 'Muhamad Rizal Fikri',
        url: 'https://www.rizll.tech',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bandung',
          addressRegion: 'West Java',
          addressCountry: 'ID',
        },
        sameAs: [
          'https://github.com/zall18',
          'https://www.linkedin.com/in/muhamad-rizal-fikri-a77b13250',
          'https://www.instagram.com/rizlll_/',
        ],
        knowsAbout: [
          'Mobile Application Development',
          'Backend Web Development',
          'Next.js',
          'Flutter',
          'Kotlin',
          'Laravel',
          'Node.js',
          'REST API',
          'Internet of Things (IoT)',
          'ESP32',
        ],
        makesOffer: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@id': 'https://www.rizll.tech/#service-development',
            },
          },
        ],
        hasOfferCatalog: {
          '@id': 'https://www.rizll.tech/#offercatalog',
        },
      },
      {
        '@type': 'Person',
        '@id': 'https://www.rizll.tech/#person',
          name: 'Muhamad Rizal Fikri',
          alternateName: ['Zall', 'Rizal Fikri'],
          jobTitle: 'Backend & Mobile Developer',
          description: 'Mahasiswa Sistem Informasi Telkom University yang fokus pada pengembangan aplikasi mobile (Flutter, Kotlin) dan backend (Next.js, Laravel, Node.js). Medallion for Excellence LKS Nasional 2024.',
          url: 'https://www.rizll.tech',
          image: 'https://www.rizll.tech/profile.webp',
          sameAs: [
            'https://github.com/zall18',
            'https://www.linkedin.com/in/muhamad-rizal-fikri-a77b13250',
            'https://www.instagram.com/rizlll_/'
          ],
          worksFor: [
            {
              '@type': 'Organization',
              name: 'GDG on Campus Telkom University'
            },
            {
              '@type': 'Organization',
              name: 'Telkom Indonesia - Antares'
            },
            {
              '@type': 'Organization',
              name: 'PT Chlorine Indonesia'
            }
          ],
          memberOf: [
            {
              '@type': 'Organization',
              name: 'GDG on Campus Telkom University'
            }
          ],
          knowsAbout: [
            'Mobile Application Development',
            'Backend Web Development',
            'Next.js',
            'React',
            'Flutter',
            'Dart',
            'Kotlin',
            'Android Jetpack',
            'Laravel',
            'Node.js',
            'Express.js',
            'TypeScript',
            'Prisma ORM',
            'REST API',
            'Internet of Things (IoT)',
            'ESP32',
            'Sistem Informasi'
          ],
          alumniOf: {
            '@type': 'EducationalOrganization',
            name: 'Telkom University'
          },
          award: [
            'Medallion for Excellence - LKS National Level in IT Software Solution for Business (2024)',
            '1st Place Gold Medal - LKS West Java Provincial Level in IT Software Solution for Business (2024)',
            '1st Place - LKS District Level in IT Software Solution for Business (2024)',
            'National Top 10 Finalist - Liga SMK Software Engineering (2023)',
            '3rd Place - BCC Mini Competition ERP (2026)'
          ],
          hasCredential: [
            {
              '@type': 'EducationalOccupationalCredential',
              name: 'Desainer Multimedia Muda',
              recognizedBy: {
                '@type': 'Organization',
                name: 'Badan Nasional Sertifikasi Profesi (BNSP)'
              },
              url: 'https://drive.google.com/file/d/1_UaU20Pyz_i5gyatSe_xWLV1nGFStTkf/view?usp=drive_link'
            },
            {
              '@type': 'EducationalOccupationalCredential',
              name: 'Google AI',
              recognizedBy: {
                '@type': 'Organization',
                name: 'Google'
              },
              url: 'https://www.credly.com/badges/3f979cbb-2188-4592-8727-88fed922f8d1/linked_in_profile'
            },
            {
              '@type': 'EducationalOccupationalCredential',
              name: 'Data Analyst with Python',
              recognizedBy: {
                '@type': 'Organization',
                name: 'Coursera'
              },
              url: 'https://www.coursera.org/account/accomplishments/specialization/SIKKTO5LHR1R'
            }
          ],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            '@id': 'https://www.rizll.tech/#offercatalog',
            name: 'Development Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Mobile Application Development',
                  description: 'Cross-platform mobile app development with Flutter and native Android Kotlin.',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Backend & API Development',
                  description: 'RESTful API architecture with Node.js, Express, and Laravel.',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Full-Stack Web Development',
                  description: 'End-to-end web applications with Next.js and React.',
                },
              },
            ],
          },
          makesOffer: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Mobile Application Development',
                description: 'Cross-platform mobile app development with Flutter and native Android Kotlin.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Backend & API Development',
                description: 'RESTful API architecture with Node.js, Express, and Laravel.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Full-Stack Web Development',
                description: 'End-to-end web applications with Next.js and React.',
              },
            },
          ],
        },
        {
          '@type': 'ProfilePage',
          '@id': 'https://www.rizll.tech/#profilepage',
          dateCreated: '2025-01-01',
          dateModified: new Date().toISOString().split('T')[0],
          mainEntity: {
            '@id': 'https://www.rizll.tech/#person',
          },
        },
        {
          '@type': 'Service',
          '@id': 'https://www.rizll.tech/#service-development',
          name: 'Full-Stack Web & Mobile App Development Services',
          provider: {
            '@id': 'https://www.rizll.tech/#person',
          },
          serviceType: 'Software Engineering & Application Development',
          areaServed: 'Worldwide',
          description: 'Professional mobile application development (Flutter/Android) and robust backend API engineering (Next.js/Laravel/Node.js).',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '12',
            bestRating: '5',
            worstRating: '1',
          },
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
                name: 'Semara Lombok AI - Mobile',
                applicationCategory: 'BusinessApplication',
                operatingSystem: 'Android',
                description: 'An integrated B2B hotel service management application designed for in-room guest tablets featuring AI concierge and real-time hotel service request tracking.',
                url: 'https://www.rizll.tech/#projects',
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: '4.9',
                  reviewCount: '8',
                  bestRating: '5',
                  worstRating: '1',
                },
              },
            },
          {
            '@type': 'ListItem',
            position: 2,
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
            position: 3,
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
            position: 4,
            item: {
              '@type': 'SoftwareApplication',
              name: 'Smart Green House Mobile',
              applicationCategory: 'UtilityApplication',
              operatingSystem: 'Android',
              description: 'A smart farming controller application that enables automated monitoring and control of greenhouse environmental conditions with IoT.',
              url: 'https://github.com/zall18/smart-green-house-mobile'
            }
          },
          {
            '@type': 'ListItem',
            position: 5,
            item: {
              '@type': 'SoftwareApplication',
              name: 'Jurnal Prakerin Mobile',
              applicationCategory: 'EducationalApplication',
              operatingSystem: 'Android',
              description: 'An educational productivity application to monitor, track, and record vocational students daily activities and documentation during internship practice.',
              url: 'https://github.com/zall18/jurnal_prakerin'
            }
          },
          {
            '@type': 'ListItem',
            position: 6,
            item: {
              '@type': 'WebApplication',
              name: 'SIM UKK Web Dashboard',
              applicationCategory: 'EducationalApplication',
              description: 'A web-based admin and assessor panel system built with Laravel to manage exam schedules, assessors, student data, and generate competency reports.',
              url: 'https://github.com/zall18/project_ujikom_sim_ukk_web'
            }
          },
          {
            '@type': 'ListItem',
            position: 7,
            item: {
              '@type': 'WebApplication',
              name: 'SIM UKK REST API',
              applicationCategory: 'DeveloperApplication',
              description: 'A centralized backend RESTful API service built with Laravel Sanctum connecting the SIM UKK mobile app and administrative dashboard.',
              url: 'https://github.com/zall18/project_ujikom_sim_ukk_api'
            }
          },
          {
            '@type': 'ListItem',
            position: 8,
            item: {
              '@type': 'WebApplication',
              name: 'Hadirin Backend',
              applicationCategory: 'BusinessApplication',
              description: 'An event lifecycle management and digital guest attendance backend system using Node.js, Express.js, Prisma ORM, and JWT authentication.',
              url: 'https://github.com/zall18/hadirin-backend'
            }
          },
          {
            '@type': 'ListItem',
            position: 9,
            item: {
              '@type': 'WebApplication',
              name: 'Smart Presence Backend',
              applicationCategory: 'BusinessApplication',
              description: 'A secure employee attendance API service featuring GPS location verification, device fingerprinting, and JWT authentication built with Express.js.',
              url: 'https://github.com/nasrielsidiq/smart_presence'
            }
          },
          {
            '@type': 'ListItem',
            position: 10,
            item: {
              '@type': 'WebApplication',
              name: 'Project Presensi',
              applicationCategory: 'BusinessApplication',
              description: 'A full-featured web attendance management system with shift scheduling, leave tracking, and hardware integration (RFID/biometric readers) built with Laravel.',
              url: 'https://github.com/zall18/project_presensi'
            }
          }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.rizll.tech/#website',
        name: 'Muhamad Rizal Fikri | Web & Mobile Developer Portfolio',
        url: 'https://www.rizll.tech',
        inLanguage: 'id',
        publisher: { '@id': 'https://www.rizll.tech/#organization' },
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
      <FAQ />
      <ContactMe />
      <Footer />
    </main>
  );
}
