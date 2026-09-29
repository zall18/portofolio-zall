export interface FAQItem {
    question: string
    answer: string
    category: string
}

export const FAQS: FAQItem[] = [
    {
        category: 'PROFILE',
        question: 'Who is Muhamad Rizal Fikri (Zall)?',
        answer: 'Muhamad Rizal Fikri (often known as Zall or Rizal Fikri) is an Indonesian software developer and Information Systems student at Telkom University. He specializes in building robust mobile applications with Flutter and Android Kotlin, alongside scalable backend API architectures using Node.js, Express.js, and Laravel.',
    },
    {
        category: 'SKILLS',
        question: 'What programming languages and frameworks does Rizal specialize in?',
        answer: 'Rizal specializes in Kotlin and Flutter (Dart) for native & cross-platform mobile apps; Node.js, Express.js, TypeScript, and Laravel (PHP) for backend RESTful APIs; Next.js and React for web development; and Prisma ORM with relational databases (MySQL, PostgreSQL). He also has practical experience integrating IoT microcontrollers like the ESP32.',
    },
    {
        category: 'QUALITY',
        question: 'How does Rizal approach software architecture and development quality?',
        answer: 'Rizal implements Clean Architecture and feature-first modular structures in Flutter and Next.js, cleanly decoupling domain entities, business use cases, and repositories from UI and data layers. This architectural discipline ensures codebases are scalable, thoroughly testable, and maintainable over time.',
    },
    {
        category: 'VALUE',
        question: 'Why choose Rizal for your software engineering projects?',
        answer: 'Rizal combines competitive programming rigor (Medallion for Excellence awardee in LKS National Software Solutions) with real-world enterprise engineering experience at Telkom Indonesia and PT Chlorine. He delivers high-performance, secure software with obsessive attention to UI craft and API reliability.',
    },
    {
        category: 'CAREER',
        question: 'Where has Rizal worked and gained professional experience?',
        answer: 'Rizal has completed software engineering internships as a Mobile Developer Intern at PT Chlorine Indonesia (enterprise attendance apps) and Backend Developer Intern at Telkom Indonesia - Antares (IoT API integration). He also served as a Student Ambassador for Telkom University Admission and currently serves as a Mobile Dev Mentor at GDG on Campus Telkom University.',
    },
    {
        category: 'AWARDS',
        question: 'What awards and competitive honors has Rizal achieved?',
        answer: 'His notable honors include the Medallion for Excellence at the 2024 National LKS Competition in IT Software Solution for Business (organized by Kemendikbudristek RI), 1st Place Gold Medal at the West Java Provincial LKS (2024), 1st Place at the District LKS (2024), and Top 10 National Finalist in Liga SMK Software Engineering (2023).',
    },
    {
        category: 'HIRING',
        question: 'How can clients hire or collaborate with Rizal on freelance projects?',
        answer: 'Clients and teams can inquire directly via the contact form on this website, send an email to muhamadrizalf1112@gmail.com, or connect on LinkedIn. Rizal is open to end-to-end mobile development (Flutter/Android), backend API design (Node.js/Laravel), and full-stack web applications (Next.js).',
    },
]
