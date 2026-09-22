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
        category: 'SERVICES',
        question: 'Is Rizal available for freelance, contracting, or hire?',
        answer: 'Yes, Rizal is available for freelance projects, technical consulting, and developer roles in mobile development, backend engineering, and modern web applications. You can submit a project inquiry via the contact section below or reach out directly on LinkedIn or email.',
    },
]
