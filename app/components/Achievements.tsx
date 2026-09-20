'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'

interface CertificateLink {
    label: string
    url: string
    isPrimary?: boolean
}

interface Achievement {
    rank: number
    title: string
    event: string
    organizer: string
    year: string
    level: string
    description: string
    longDescription: string
    skills: string[]
    highlights: string[]
    certificates: CertificateLink[]
}

const ACHIEVEMENTS: Achievement[] = [
    {
        rank: 3,
        title: 'BCC Mini Competition — Enterprise Resource Planning (ERP)',
        event: 'Growth.erp Competition 2026',
        organizer: 'Growth.erp & Business Case Community',
        year: '2026',
        level: 'National / Open University Level',
        description: 'Secured 3rd Place by demonstrating strong analytical skills and a deep understanding of business process integration within Enterprise Resource Planning (ERP) systems.',
        longDescription: 'In the BCC Mini Competition centered on the Growth.erp platform, participants analyzed, modeled, and solved complex corporate operational workflows. The competition assessed systems thinking, supply chain optimization, financial flow integrity, and real-time inventory synchronization, recognizing the ability to convert abstract business requirements into structured software architectures.',
        skills: ['ERP Systems', 'Business Process Modeling', 'Systems Analysis', 'Workflow Optimization', 'Data Integration'],
        highlights: [
            'Diagnosed and restructured cross-functional enterprise workflows across finance and supply chain',
            'Formulated end-to-end data schemas that eliminate transactional redundancy',
            'Presented strategic software architecture recommendations to a jury panel of industry ERP consultants'
        ],
        certificates: [
            {
                label: 'Sertifikat Peserta (Growth.erp)',
                url: 'https://drive.google.com/file/d/112GoBUoTKt-Xac-fXoP1BbinZkF5BUmx/view?usp=drive_link',
                isPrimary: true
            }
        ]
    },
    {
        rank: 7,
        title: 'Medallion for Excellence — LKS National Level in IT Software Solution for Business',
        event: 'Lomba Kompetensi Siswa (LKS) SMK Tingkat Nasional XXXII',
        organizer: 'BPTI, PUSPRESNAS & KEMENDIKBUDRISTEK RI',
        year: '2024',
        level: 'National Championship (Indonesia)',
        description: 'Awarded the Medallion for Excellence for architecting and developing robust enterprise business solutions using Kotlin and C# under strict time constraints.',
        longDescription: 'The National Lomba Kompetensi Siswa (LKS) in IT Software Solutions for Business is Indonesia\'s highest-level vocational tech competition, aligned with WorldSkills international standards. Competitors underwent rigorous multi-day speed-coding sessions spanning native Android mobile development (Kotlin), desktop enterprise software (C# .NET), relational database engineering, and cross-platform synchronization, earning the Medallion for Excellence for meeting world-class performance benchmarks.',
        skills: ['Kotlin', 'Android Native', 'C#', '.NET', 'SQL Server', 'WorldSkills Standards', 'Enterprise Architecture'],
        highlights: [
            'Represented West Java Province on the national stage after winning 1st place in provincial qualifications',
            'Engineered full-stack business solutions across 4 intensive timed competition sessions with zero critical errors',
            'Demonstrated international WorldSkills-grade standards in code quality, architecture, and UI/UX design'
        ],
        certificates: [
            {
                label: 'Medallion for Excellence (MoE)',
                url: 'https://drive.google.com/file/d/1CiAQYVUsVGNxgLDKr17uffwSJiNzCkho/view?usp=drive_link',
                isPrimary: true
            },
            {
                label: 'Sertifikat Peserta LKS Nasional',
                url: 'https://drive.google.com/file/d/1DzVrKypjzmI2eDc8LCMSH-ogyhJEGZsf/view?usp=drive_link'
            }
        ]
    },
    {
        rank: 1,
        title: '1st Place (Gold Medal) — LKS West Java Provincial Level in IT Software Solution for Business',
        event: 'Lomba Kompetensi Siswa (LKS) SMK Tingkat Provinsi Jawa Barat',
        organizer: 'DINAS PENDIDIKAN PROVINSI JAWA BARAT',
        year: '2024',
        level: 'Provincial Championship (West Java)',
        description: 'Secured 1st Place across West Java Province by implementing comprehensive, high-performance business applications utilizing Java and C#.',
        longDescription: 'Crowned 1st Place Gold Medalist among top representatives from all 27 cities and regencies across West Java. The competition evaluated rapid full-lifecycle software delivery — including desktop enterprise client apps, mobile management utilities, complex database normalization, and automated executive reporting — earning the direct qualification to represent West Java at the National Championship.',
        skills: ['Java', 'C#', '.NET Framework', 'Relational Databases', 'Speed Programming', 'Desktop Architecture'],
        highlights: [
            'Ranked #1 out of all city and regency champions across West Java Province',
            'Delivered complete transactional management software under strict 8-hour continuous evaluation',
            'Awarded official delegation honors to represent the province of West Java at National LKS 2024'
        ],
        certificates: [
            {
                label: 'Sertifikat Juara 1 (Provinsi Jawa Barat)',
                url: 'https://drive.google.com/file/d/1R3vgkMVw95UgAG_bKN_eQbfMtfv00z2X/view?usp=drive_link',
                isPrimary: true
            }
        ]
    },
    {
        rank: 1,
        title: '1st Place — LKS District Level in IT Software Solution for Business',
        event: 'Lomba Kompetensi Siswa (LKS) SMK Kabupaten Tasikmalaya',
        organizer: 'MKKS SMK KABUPATEN TASIKMALAYA',
        year: '2024',
        level: 'District Level (Kabupaten Tasikmalaya)',
        description: 'Achieved 1st Place by successfully building multi-platform business solutions, leveraging Flutter for mobile and C# for desktop applications.',
        longDescription: 'Captured 1st Place in the Kabupaten Tasikmalaya vocational selection by developing a cross-platform corporate solution. Evaluated on UI fidelity, robust input validation, relational database integrity, and high-performance communication between Flutter mobile clients and C# desktop back-office administration systems.',
        skills: ['Flutter', 'C#', 'SQL', 'Multi-Platform Sync', 'UI/UX Implementation'],
        highlights: [
            'Achieved the highest cumulative score among all vocational software engineering participants in the district',
            'Built interconnected mobile and desktop systems with seamless real-time data sync',
            'Earned direct advancement to represent Kabupaten Tasikmalaya at the West Java Provincial level'
        ],
        certificates: [
            {
                label: 'Sertifikat Juara 1 (Kabupaten Tasikmalaya)',
                url: 'https://drive.google.com/file/d/1XVgLhSe4oxqRJ8Tw9FT9FzNoX8v4bCFd/view?usp=drive_link',
                isPrimary: true
            }
        ]
    },
    {
        rank: 10,
        title: 'National Top 10 Finalist — Liga SMK Software Engineering',
        event: 'Liga SMK Software Engineering Competition',
        organizer: 'Alkademi & Komunitas We Are Programmers Unite',
        year: '2023',
        level: 'National Level (Indonesia)',
        description: 'Achieved a Top 10 National ranking in an intensive software development competition, demonstrating advanced problem-solving and coding capabilities.',
        longDescription: 'Ranked in the National Top 10 in the nationwide Liga SMK software engineering tournament across three intense elimination stages: Slicing Brawl (UI translation), Coding Clash (algorithmic and backend), and Hacker Glory (final national prototype battle). Evaluated on algorithm design, full-stack application development, agile collaborative delivery, and clean code principles.',
        skills: ['Full-Stack Development', 'Algorithms & Data Structures', 'Agile Delivery', 'Problem Solving', 'Git'],
        highlights: [
            'Placed in the Top 10 nationally out of hundreds of vocational student teams across Indonesia',
            'Successfully completed all 3 stages: Slicing Brawl, Coding Clash, and Hacker Glory',
            'Demonstrated strong technical teamwork, version control discipline, and rapid sprint execution'
        ],
        certificates: [
            {
                label: 'Tahap 3: Hacker Glory (Top 10 Nasional)',
                url: 'https://drive.google.com/file/d/1DFxAP00wtI7JfXISsAY5ugCb_hM9fVeD/view?usp=drive_link',
                isPrimary: true
            },
            {
                label: 'Tahap 2: Coding Clash',
                url: 'https://drive.google.com/file/d/1diK4VremtkD_N0E3t5xK7fnaIR0nRUDX/view?usp=drive_link'
            },
            {
                label: 'Tahap 1: Slicing Brawl',
                url: 'https://drive.google.com/file/d/1xKw7BqN-CFVeVI1o-5tabmpEI1Xdnn4r/view?usp=drive_link'
            }
        ]
    },
]

function getRankEmoji(rank: number) {
    if (rank === 1) return '🥇'
    if (rank === 2) return '🥈'
    if (rank === 3) return '🥉'
    if (rank <= 10) return '🎖️'
    return '🏆'
}

function getRankLabel(rank: number) {
    if (rank === 1) return '1ST PLACE'
    if (rank === 2) return '2ND PLACE'
    if (rank === 3) return '3RD PLACE'
    return `TOP ${rank}`
}

function getRankColor(rank: number) {
    if (rank === 1) return 'var(--card-yellow)'
    if (rank === 2) return 'var(--card-blue)'
    return 'var(--card-pink)'
}

function AchievementModal({ item, onClose }: { item: Achievement; onClose: () => void }) {
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

    const color = getRankColor(item.rank)

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

            {/* Modal Box */}
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.95 }}
                transition={{ duration: 0.3, type: 'spring', damping: 25 }}
                className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[var(--foreground)] border-3 border-[var(--shadow-dark)] shadow-[8px_8px_0px_0px_var(--shadow-dark)] rounded-lg"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div
                    className="sticky top-0 z-10 flex items-center justify-between px-5 py-3 border-b-3 border-[var(--shadow-dark)]"
                    style={{ backgroundColor: color }}
                >
                    <div className="flex items-center gap-2">
                        <span className="text-xl">{getRankEmoji(item.rank)}</span>
                        <span className="text-xs font-bold uppercase tracking-wider text-[var(--shadow-dark)] bg-white/40 px-2 py-0.5 border border-[var(--shadow-dark)]">
                            {getRankLabel(item.rank)}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-[var(--shadow-dark)] opacity-70">
                            • {item.year}
                        </span>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-7 h-7 flex items-center justify-center bg-white/40 border-2 border-[var(--shadow-dark)] shadow-[2px_2px_0px_0px_var(--shadow-dark)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-[var(--shadow-dark)] font-bold text-sm cursor-pointer"
                        aria-label="Close achievement detail modal"
                    >
                        ✕
                    </button>
                </div>

                {/* Body */}
                <div className="p-5 md:p-6 space-y-5">
                    {/* Title & Organization */}
                    <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="text-[0.7rem] px-2 py-0.5 bg-[var(--card-blue)] border-2 border-[var(--shadow-dark)] shadow-[2px_2px_0px_0px_var(--shadow-dark)] font-bold uppercase">
                                {item.level}
                            </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-[var(--text-dark)] leading-tight">
                            {item.title}
                        </h3>
                        <p className="mt-2 text-sm font-semibold text-[var(--card-pink)]">
                            🏆 {item.event}
                        </p>
                        <p className="text-xs text-[var(--text-dark)] opacity-70 mt-0.5">
                            Organized by: <span className="font-semibold">{item.organizer}</span>
                        </p>
                        <div className="mt-3 h-1 w-20" style={{ backgroundColor: color }} />
                    </div>

                    {/* Official Certificate & Verification Links */}
                    {item.certificates && item.certificates.length > 0 && (
                        <div className="bg-[var(--card-yellow)]/20 border-2 border-[var(--shadow-dark)] shadow-[3px_3px_0px_0px_var(--shadow-dark)] p-4 rounded">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--text-dark)] opacity-80 mb-3 flex items-center gap-2">
                                <span>📜</span>
                                <span>Bukti Sertifikat Resmi & Verifikasi:</span>
                            </h4>
                            <div className="flex flex-wrap gap-2.5">
                                {item.certificates.map((cert) => (
                                    <a
                                        key={cert.url}
                                        href={cert.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`text-xs font-bold uppercase tracking-wider px-3.5 py-2 border-2 border-[var(--shadow-dark)] shadow-[3px_3px_0px_0px_var(--shadow-dark)] hover:shadow-[1px_1px_0px_0px_var(--shadow-dark)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-2 no-underline ${
                                            cert.isPrimary
                                                ? 'bg-[var(--card-pink)] text-white hover:bg-[var(--card-blue)] hover:text-[var(--text-dark)]'
                                                : 'bg-[var(--foreground)] text-[var(--text-dark)] hover:bg-[var(--card-yellow)]'
                                        }`}
                                    >
                                        <span>📜 {cert.label}</span>
                                        <span>↗</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* About Section */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--text-dark)] opacity-50 mb-2">
                            ▸ Competition & Achievement Overview
                        </h4>
                        <p className="text-sm text-[var(--text-dark)] leading-relaxed opacity-85">
                            {item.longDescription}
                        </p>
                    </div>

                    {/* Key Highlights */}
                    <div className="bg-[var(--background)] border-2 border-[var(--shadow-dark)] shadow-[3px_3px_0px_0px_var(--shadow-dark)] p-4 rounded">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--text-dark)] opacity-60 mb-3">
                            ▸ Key Highlights & Milestones
                        </h4>
                        <ul className="space-y-2">
                            {item.highlights.map((highlight, idx) => (
                                <li key={idx} className="flex items-start gap-2.5 text-sm text-[var(--text-dark)] opacity-85">
                                    <span
                                        className="mt-0.5 w-4 h-4 shrink-0 flex items-center justify-center text-[0.6rem] font-bold border-2 border-[var(--shadow-dark)]"
                                        style={{ backgroundColor: color }}
                                    >
                                        ✓
                                    </span>
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Skills & Competencies Tested */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--text-dark)] opacity-50 mb-3">
                            ▸ Technologies & Competencies Evaluated
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {item.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="text-xs px-3 py-1 bg-[var(--card-yellow)] border-2 border-[var(--shadow-dark)] shadow-[2px_2px_0px_0px_var(--shadow-dark)] font-bold uppercase text-[var(--shadow-dark)]"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Action Bar */}
                    <div className="flex justify-end pt-3 border-t-2 border-dashed border-[var(--shadow-dark)]/20">
                        <button
                            onClick={onClose}
                            className="retro-btn text-sm flex items-center gap-2 cursor-pointer"
                        >
                            <span>Close Details</span>
                            <span>✕</span>
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default function Achievements() {
    const [selectedItem, setSelectedItem] = useState<Achievement | null>(null)

    return (
        <section id="achievements" className="relative py-20 px-4 md:px-8 overflow-hidden">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="section-header">🏆 Honors & Achievements</h2>
                <p className="text-[var(--text-dark)] mt-6 text-sm opacity-70 uppercase tracking-widest">
                    ▸ Trophy Room ▸ Achievements unlocked ▸ Click to view details & certificates
                </p>
            </motion.div>

            {/* Trophy Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {ACHIEVEMENTS.map((item, i) => {
                    const color = getRankColor(item.rank)
                    const isGold = item.rank === 1

                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <div
                                onClick={() => setSelectedItem(item)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        setSelectedItem(item)
                                    }
                                }}
                                role="button"
                                tabIndex={0}
                                aria-label={`View achievement details for ${item.title}`}
                                className={`dialog-box p-5 pt-10 group hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col cursor-pointer select-none ${isGold ? 'trophy-glow' : ''}`}
                                style={{
                                    boxShadow: isGold
                                        ? undefined
                                        : `6px 6px 0px 0px ${color}`,
                                }}
                            >
                                {/* Title bar */}
                                <div className="absolute top-0 left-0 right-0 h-[28px] bg-[var(--card-pink)] border-b-3 border-[var(--shadow-dark)] px-3 flex items-center justify-between">
                                    <span className="text-white text-xs font-bold leading-none">
                                        🏆 TROPHY_{String(i + 1).padStart(2, '0')}.dat
                                    </span>
                                    <span className="text-white text-[0.65rem] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity bg-[var(--shadow-dark)] px-2 py-0.5">
                                        View Details →
                                    </span>
                                </div>

                                {/* Rank & Year */}
                                <div className="flex items-center justify-between mb-3 mt-1">
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl">{getRankEmoji(item.rank)}</span>
                                        <span
                                            className="text-xs px-2 py-0.5 border-2 border-[var(--shadow-dark)] shadow-[2px_2px_0px_0px_var(--shadow-dark)] font-bold uppercase"
                                            style={{ backgroundColor: color }}
                                        >
                                            {getRankLabel(item.rank)}
                                        </span>
                                    </div>
                                    <span className="text-xs text-gray-500 font-bold bg-[var(--background)] px-2 py-0.5 border border-[var(--shadow-dark)]">
                                        {item.year}
                                    </span>
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-bold text-[var(--text-dark)] mb-1 group-hover:text-[var(--card-pink)] transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm font-semibold text-[var(--card-pink)] mb-2">
                                    @ {item.event}
                                </p>
                                <p className="text-xs text-[var(--text-dark)] opacity-60 uppercase tracking-wider font-bold mb-3">
                                    🏛️ {item.organizer}
                                </p>
                                <p className="text-sm text-[var(--text-dark)] leading-relaxed opacity-80 flex-1">
                                    {item.description}
                                </p>

                                {/* Prompt bar at bottom */}
                                <div className="mt-4 pt-3 border-t border-dashed border-[var(--shadow-dark)]/20 flex items-center justify-between text-xs font-bold text-[var(--text-dark)] opacity-80 group-hover:text-[var(--card-pink)] group-hover:opacity-100 transition-all">
                                    <span className="text-[0.68rem] bg-[var(--card-green)] text-[var(--shadow-dark)] px-2 py-0.5 border border-[var(--shadow-dark)] font-bold shadow-[1px_1px_0px_0px_var(--shadow-dark)]">
                                        📜 {item.certificates.length} Bukti
                                    </span>
                                    <span className="text-[0.7rem] bg-[var(--background)] px-2 py-0.5 border border-[var(--shadow-dark)] shadow-[1px_1px_0px_0px_var(--shadow-dark)]">
                                        Open Details ↗
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>

            {/* Achievement Detail Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <AchievementModal
                        item={selectedItem}
                        onClose={() => setSelectedItem(null)}
                    />
                )}
            </AnimatePresence>

            {/* Decorative */}
            <div className="absolute top-10 left-8 w-3 h-3 bg-[var(--card-yellow)] opacity-30" />
            <div className="absolute bottom-20 right-12 w-4 h-4 bg-[var(--card-pink)] opacity-20" />
            <div className="absolute top-32 right-10 w-2 h-2 bg-[var(--card-blue)] opacity-25" />
        </section>
    )
}
