'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'

interface Project {
    title: string
    description: string
    longDescription: string
    tech: string[]
    features: string[]
    role: string
    color: string
    link: string
    type: 'mobile' | 'web' | 'api' | 'backend'
}

const PROJECTS: Project[] = [
    {
        title: 'Semara Lombok AI - Mobile',
        description: 'An integrated hotel service management application (B2B) designed specifically for use on In-Room Tablets.',
        longDescription: 'Semara Lombok AI is a B2B hospitality technology solution built for a private resort in Lombok, Indonesia. The application runs on in-room tablets, allowing guests to access hotel services, make requests, and interact with AI-powered concierge features. The system integrates with the hotel\'s backend infrastructure to manage real-time service requests, room management, and guest communication.',
        tech: ['Flutter', 'Android Native', 'REST API'],
        features: ['AI-powered concierge chatbot', 'Real-time service request tracking', 'Multi-language guest interface', 'In-room tablet optimization', 'Hotel backend integration'],
        role: 'Mobile Developer — Built the Flutter-based guest interface and integrated Android Native modules for tablet-specific hardware features.',
        color: 'var(--card-pink)',
        link: '',
        type: 'mobile'
    },
    {
        title: 'TB Care Mobile',
        description: 'An integrated healthcare application designed to facilitate Tuberculosis (TB) treatment, monitoring, and education for patients and medical staff.',
        longDescription: 'TB Care Mobile is a cross-platform healthcare application built to streamline Tuberculosis treatment monitoring across Indonesia. The app provides patients with medication reminders, educational content about TB, and a direct communication channel with their assigned medical staff. For healthcare workers, it offers a dashboard to monitor patient adherence, track treatment progress, and flag at-risk patients for intervention.',
        tech: ['Flutter', 'Dart', 'Firebase'],
        features: ['Patient medication reminder system', 'Treatment progress tracking dashboard', 'TB educational content library', 'Patient-doctor communication channel', 'Firebase real-time data synchronization'],
        role: 'Mobile Developer — Developed the patient-facing Flutter app and implemented Firebase backend integration for real-time data sync.',
        color: 'var(--card-blue)',
        link: 'https://github.com/alamsyahfirdaus/tb-care-mobile',
        type: 'mobile'
    },
    {
        title: 'SIM UKK Mobile',
        description: 'A mobile application for vocational competency exam management that digitizes the practical exam grading process for vocational school students.',
        longDescription: 'SIM UKK Mobile is the mobile companion for the Vocational Competency Exam (UKK) management system. It allows assessors to grade students\' practical exams digitally in real-time, eliminating paper-based scoring. The app communicates with the SIM UKK REST API to synchronize grades, student data, and exam schedules seamlessly with the web dashboard used by administrators.',
        tech: ['Kotlin', 'XML', 'REST API'],
        features: ['Digital practical exam grading', 'Real-time score synchronization', 'Student performance analytics', 'Offline-capable exam scoring', 'QR-based student identification'],
        role: 'Full-Stack Developer — Designed and built the entire mobile app with Kotlin, including the REST API integration layer.',
        color: 'var(--card-green)',
        link: 'https://github.com/zall18/project_ujikom_sim_ukk_mobile',
        type: 'mobile'
    },
    {
        title: 'Smart Green House Mobile',
        description: 'A smart farming controller application that enables automated monitoring and control of greenhouse environmental conditions.',
        longDescription: 'Smart Green House Mobile is an IoT-integrated application that connects to sensor arrays inside a greenhouse to monitor temperature, humidity, soil moisture, and light intensity in real-time. Users can set automated thresholds for watering, ventilation, and lighting, or manually control actuators through the app. The system communicates via REST API with an IoT gateway to ensure responsive control over the greenhouse environment.',
        tech: ['Kotlin', 'IoT', 'REST API'],
        features: ['Real-time sensor data monitoring', 'Automated threshold-based controls', 'Manual actuator control interface', 'Historical data graphs and analytics', 'IoT gateway REST API integration'],
        role: 'Mobile Developer — Built the Kotlin-based controller app and implemented real-time data streaming from IoT sensors.',
        color: 'var(--card-yellow)',
        link: 'https://github.com/zall18/smart-green-house-mobile',
        type: 'mobile'
    },
    {
        title: 'Jurnal Prakerin Mobile',
        description: 'An educational productivity application to monitor, track, and record students\' daily activities during their Industrial Work Practice (Prakerin).',
        longDescription: 'Jurnal Prakerin Mobile digitizes the daily journal-keeping process for vocational students undergoing Industrial Work Practice (Prakerin). Students log their daily activities, upload photo documentation, and submit entries for supervisor review. Supervisors can approve, comment on, or request revisions to journal entries, creating an auditable trail of the student\'s work experience throughout their internship.',
        tech: ['Kotlin'],
        features: ['Daily activity journal with photo uploads', 'Supervisor review and approval workflow', 'Attendance tracking with timestamps', 'Progress report generation', 'Offline journaling with sync'],
        role: 'Full-Stack Developer — Sole developer responsible for the entire application lifecycle from design to deployment.',
        color: 'var(--card-pink)',
        link: 'https://github.com/zall18/jurnal_prakerin',
        type: 'mobile'
    },
    {
        title: 'SIM UKK Web Dashboard',
        description: 'A web-based admin and assessor panel system to manage the Vocational Competency Exam (UKK) ecosystem.',
        longDescription: 'SIM UKK Web Dashboard is the administrative hub for managing the entire Vocational Competency Exam ecosystem. Administrators can manage exam schedules, assign assessors to exam sessions, register students, and generate comprehensive reports. Assessors access a dedicated panel to review and finalize grades submitted through the mobile app. Built with Laravel and Blade templating for a responsive, server-rendered experience.',
        tech: ['PHP', 'Laravel', 'Blade', 'Bootstrap'],
        features: ['Exam schedule management', 'Assessor assignment and management', 'Student registration and data management', 'Comprehensive grading reports', 'Role-based access control (Admin/Assessor)'],
        role: 'Full-Stack Developer — Built the web dashboard end-to-end including authentication, role management, and reporting.',
        color: 'var(--card-blue)',
        link: 'https://github.com/zall18/project_ujikom_sim_ukk_web',
        type: 'web'
    },
    {
        title: 'SIM UKK REST API',
        description: 'A centralized backend API service that connects the SIM UKK Mobile application and Web Dashboard.',
        longDescription: 'SIM UKK REST API serves as the centralized backend that powers both the SIM UKK Mobile and Web Dashboard applications. Built with Laravel and secured with Laravel Sanctum for token-based authentication, the API handles all data operations including student management, exam scheduling, grade submission and retrieval, and user authentication. It ensures data consistency across all platforms in the SIM UKK ecosystem.',
        tech: ['PHP', 'Laravel', 'Laravel Sanctum'],
        features: ['Token-based authentication with Sanctum', 'RESTful CRUD operations for all entities', 'Cross-platform data synchronization', 'Rate limiting and request validation', 'API versioning for backward compatibility'],
        role: 'Backend Developer — Designed the API architecture, implemented authentication, and ensured data consistency across platforms.',
        color: 'var(--card-green)',
        link: 'https://github.com/zall18/project_ujikom_sim_ukk_api',
        type: 'api'
    },
    {
        title: 'Hadirin Backend',
        description: 'A comprehensive backend system designed to handle event management, staff administration, and digital guest attendance tracking.',
        longDescription: 'Hadirin Backend is a robust event management API that handles the full lifecycle of events — from creation and staff assignment to real-time digital guest attendance tracking. The system uses JWT-based authentication and Bcrypt password hashing for security, and Prisma ORM for type-safe database operations. It supports features like QR code-based check-in, event analytics, and automated attendance reports.',
        tech: ['Node.js', 'Express.js', 'Prisma ORM', 'JWT', 'Bcrypt'],
        features: ['QR code-based guest check-in', 'Event lifecycle management', 'Staff assignment and role management', 'Real-time attendance analytics', 'JWT authentication with refresh tokens'],
        role: 'Backend Developer — Architected the API and database schema, implemented authentication and the QR check-in system.',
        color: 'var(--card-yellow)',
        link: 'https://github.com/zall18/hadirin-backend',
        type: 'backend'
    },
    {
        title: 'Smart Presence Backend',
        description: 'A smart attendance and authentication API service that ensures user data security and attendance tracking.',
        longDescription: 'Smart Presence Backend provides a secure API for managing employee attendance through biometric and location-based verification. The system ensures that attendance records are tamper-proof by validating GPS coordinates and device fingerprints. Built with Express.js, it uses JWT for session management and Bcrypt for secure password storage, making it suitable for enterprise-grade attendance management.',
        tech: ['Node.js', 'Express.js', 'JWT', 'Bcrypt'],
        features: ['Location-based attendance verification', 'Device fingerprint validation', 'Secure JWT session management', 'Attendance history and reporting', 'Admin dashboard API endpoints'],
        role: 'Backend Developer — Implemented the authentication system and location-based verification logic.',
        color: 'var(--card-pink)',
        link: 'https://github.com/nasrielsidiq/smart_presence',
        type: 'backend'
    },
    {
        title: 'Project Presensi',
        description: 'A comprehensive web-based attendance management information system equipped with features for managing schedules, participant groups, work shifts, holidays, and hardware integration management.',
        longDescription: 'Project Presensi is a full-featured web-based attendance management system designed for organizations that need fine-grained control over employee scheduling and attendance tracking. The system supports multiple shift configurations, holiday calendars, and participant group management. It also includes hardware integration capabilities for connecting with physical attendance devices (fingerprint scanners, RFID readers), making it a bridge between software and hardware attendance solutions.',
        tech: ['PHP', 'Laravel', 'MySQL'],
        features: ['Multi-shift schedule management', 'Holiday and leave calendar', 'Hardware device integration (RFID/fingerprint)', 'Participant group management', 'Comprehensive attendance reporting'],
        role: 'Full-Stack Developer — Built the Laravel backend, integrated hardware communication protocols, and developed the reporting module.',
        color: 'var(--card-blue)',
        link: 'https://github.com/zall18/project_presensi',
        type: 'web'
    }
]

const TYPE_ICONS: Record<Project['type'], string> = {
    mobile: '📱',
    web: '🌐',
    api: '⚡',
    backend: '🖥️'
}

const TYPE_LABELS: Record<Project['type'], string> = {
    mobile: 'Mobile App',
    web: 'Web App',
    api: 'REST API',
    backend: 'Backend'
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
    // Close on ESC key
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose()
    }, [onClose])

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = ''
        }
    }, [handleKeyDown])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-[var(--shadow-dark)]/70 backdrop-blur-sm" />

            {/* Modal */}
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.95 }}
                transition={{ duration: 0.3, type: 'spring', damping: 25 }}
                className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[var(--foreground)] border-3 border-[var(--shadow-dark)] shadow-[8px_8px_0px_0px_var(--shadow-dark)] rounded-lg"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal Header */}
                <div
                    className="sticky top-0 z-10 flex items-center justify-between px-5 py-3 border-b-3 border-[var(--shadow-dark)]"
                    style={{ backgroundColor: project.color }}
                >
                    <div className="flex items-center gap-2">
                        <span className="text-lg">{TYPE_ICONS[project.type]}</span>
                        <span className="text-xs font-bold uppercase tracking-wider text-[var(--shadow-dark)] bg-white/30 px-2 py-0.5 border border-[var(--shadow-dark)]">
                            {TYPE_LABELS[project.type]}
                        </span>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-7 h-7 flex items-center justify-center bg-white/30 border-2 border-[var(--shadow-dark)] shadow-[2px_2px_0px_0px_var(--shadow-dark)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-[var(--shadow-dark)] font-bold text-sm cursor-pointer"
                        aria-label="Close project detail modal"
                    >
                        ✕
                    </button>
                </div>

                {/* Modal Body */}
                <div className="p-5 md:p-6 space-y-5">
                    {/* Title */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-[var(--text-dark)] leading-tight">
                            {project.title}
                        </h3>
                        <div className="mt-2 h-1 w-16" style={{ backgroundColor: project.color }} />
                    </div>

                    {/* Description */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--text-dark)] opacity-50 mb-2">
                            ▸ About This Project
                        </h4>
                        <p className="text-sm text-[var(--text-dark)] leading-relaxed opacity-80">
                            {project.longDescription}
                        </p>
                    </div>

                    {/* Role */}
                    <div className="bg-[var(--background)] border-2 border-[var(--shadow-dark)] shadow-[3px_3px_0px_0px_var(--shadow-dark)] p-3 rounded">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--text-dark)] opacity-50 mb-1">
                            ▸ My Role
                        </h4>
                        <p className="text-sm text-[var(--text-dark)] leading-relaxed">
                            {project.role}
                        </p>
                    </div>

                    {/* Features */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--text-dark)] opacity-50 mb-3">
                            ▸ Key Features
                        </h4>
                        <ul className="space-y-2">
                            {project.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-dark)] opacity-80">
                                    <span
                                        className="mt-0.5 w-4 h-4 shrink-0 flex items-center justify-center text-[0.6rem] font-bold border-2 border-[var(--shadow-dark)]"
                                        style={{ backgroundColor: project.color }}
                                    >
                                        {i + 1}
                                    </span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--text-dark)] opacity-50 mb-3">
                            ▸ Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t) => (
                                <span
                                    key={t}
                                    className="text-xs px-3 py-1 bg-[var(--card-blue)] border-2 border-[var(--shadow-dark)] shadow-[2px_2px_0px_0px_var(--shadow-dark)] font-bold uppercase"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 pt-2 border-t-2 border-dashed border-[var(--shadow-dark)]/20">
                        {project.link && project.link !== '#' ? (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="retro-btn text-sm flex items-center gap-2 no-underline"
                            >
                                <span>View Source Code</span>
                                <span>→</span>
                            </a>
                        ) : (
                            <div className="flex items-center gap-2 bg-[var(--card-yellow)] text-[var(--shadow-dark)] px-4 py-2 border-3 border-[var(--shadow-dark)] shadow-[4px_4px_0px_0px_var(--shadow-dark)] font-bold text-sm uppercase">
                                <span>🔒</span>
                                <span>Private B2B Project</span>
                            </div>
                        )}
                        <button
                            onClick={onClose}
                            className="text-sm px-4 py-2 bg-[var(--foreground)] border-3 border-[var(--shadow-dark)] shadow-[4px_4px_0px_0px_var(--shadow-dark)] font-bold uppercase hover:shadow-[2px_2px_0px_0px_var(--shadow-dark)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer text-[var(--text-dark)]"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
        >
            <div
                className="group relative bg-[var(--foreground)] border-3 border-[var(--shadow-dark)] shadow-[6px_6px_0px_0px_var(--shadow-dark)] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[10px_10px_0px_0px] hover:-translate-x-1 hover:-translate-y-1 cursor-pointer h-full flex flex-col"
                style={{ ['--tw-shadow-color' as string]: project.color } as React.CSSProperties}
                onClick={onClick}
                role="button"
                tabIndex={0}
                aria-label={`View details for ${project.title}`}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick() }}
            >
                {/* Project thumbnail placeholder */}
                <div
                    className="w-full h-40 relative overflow-hidden"
                    style={{ backgroundColor: project.color }}
                >
                    {/* Retro grid overlay */}
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `
                                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                            `,
                            backgroundSize: '20px 20px'
                        }}
                    />
                    {/* Center icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 border-2 border-white/30 rounded-lg flex items-center justify-center backdrop-blur-sm">
                            <span className="text-3xl">
                                {TYPE_ICONS[project.type]}
                            </span>
                        </div>
                    </div>
                    {/* Hover overlay - "View Detail" prompt */}
                    <div className="absolute inset-0 bg-[var(--shadow-dark)]/0 group-hover:bg-[var(--shadow-dark)]/50 transition-all duration-300 flex items-center justify-center">
                        <span className="text-white font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[var(--card-pink)] px-4 py-1.5 border-2 border-white shadow-[3px_3px_0px_0px_rgba(255,255,255,0.3)]">
                            View Detail →
                        </span>
                    </div>
                    {/* Type badge */}
                    <div className="absolute top-2 right-2">
                        <span className="text-[0.6rem] font-bold uppercase tracking-wider bg-white/80 text-[var(--shadow-dark)] px-2 py-0.5 border border-[var(--shadow-dark)]">
                            {TYPE_LABELS[project.type]}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-[var(--text-dark)] mb-2 group-hover:text-[var(--card-pink)] transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-sm text-[var(--text-dark)] opacity-70 leading-relaxed mb-4 flex-1">
                        {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                            <span
                                key={t}
                                className="text-xs px-2 py-0.5 bg-[var(--card-blue)] border-2 border-[var(--shadow-dark)] shadow-[2px_2px_0px_0px_var(--shadow-dark)] font-bold uppercase"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

    return (
        <section id="projects" className="relative py-20 px-4 md:px-8 overflow-hidden">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="section-header">Featured Projects</h2>
                <p className="text-[var(--text-dark)] mt-6 text-sm opacity-70 uppercase tracking-widest">
                    ▸ Select Project ▸ Things I&apos;ve built ▸ Click to explore
                </p>
            </motion.div>

            {/* Project Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {PROJECTS.map((project, i) => (
                    <ProjectCard
                        key={i}
                        project={project}
                        index={i}
                        onClick={() => setSelectedProject(project)}
                    />
                ))}
            </div>

            {/* Project Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>

            {/* Decorative */}
            <div className="absolute top-10 right-8 w-3 h-3 bg-[var(--card-yellow)] opacity-40" />
            <div className="absolute bottom-20 left-12 w-4 h-4 bg-[var(--card-pink)] opacity-30" />
        </section>
    )
}
