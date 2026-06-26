'use client'

import { motion } from 'framer-motion'

const ACHIEVEMENTS = [
    {
        rank: 3,
        title: 'BCC Mini Competition',
        event: 'Growth.erp',
        year: '2026',
        description: 'Secured 3rd Place by demonstrating strong analytical skills and a deep understanding of business process integration within Enterprise Resource Planning (ERP) systems.',
    },
    {
        rank: 7,
        title: 'Medallion for Excellence - Lomba Kompetensi Siswa (LKS) National Level in IT Software Solution for Business',
        event: ' PUSPRESNAS and KEMENDIKBUD',
        year: '2024',
        description: 'Awarded the Medallion for Excellence for architecting and developing robust enterprise business solutions using Kotlin and C# under strict time constraints.',
    },
    {
        rank: 1,
        title: 'Lomba Kompetensi Siswa (LKS) West Java Provincial Level in IT Software Solution for Business',
        event: ' DINAS PENDIDIKAN JAWA BARAT',
        year: '2024',
        description: 'Secured 1st Place across West Java Province by implementing comprehensive, high-performance business applications utilizing Java and C#.',
    },
    {
        rank: 1,
        title: 'Lomba Kompetensi Siswa (LKS) District Level in IT Software Solution for Business',
        event: 'MKKS SMK KABUPATEN TASIKMALAYA',
        year: '2024',
        description: 'Achieved 1st Place by successfully building multi-platform business solutions, leveraging Flutter for mobile and C# for desktop applications.',
    },
    {
        rank: 10,
        title: 'National Top 10',
        event: 'Liga SMK (Alkademi & We Are Programmers Unite)',
        year: '2023',
        description: 'Achieved a Top 10 National ranking in an intensive software development competition, demonstrating advanced problem-solving and coding capabilities.',
    },
]

function getRankEmoji(rank: number) {
    if (rank === 1) return '🥇'
    if (rank === 2) return '🥈'
    return '🥉'
}

function getRankLabel(rank: number) {
    if (rank === 1) return '1ST PLACE'
    if (rank === 2) return '2ND PLACE'
    if (rank === 3) return '3RD PLACE'
    return `${rank}TH PLACE`
}

function getRankColor(rank: number) {
    if (rank === 1) return 'var(--card-yellow)'
    if (rank === 2) return 'var(--card-blue)'
    return 'var(--card-pink)'
}

export default function Achievements() {
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
                <h2 className="section-header">🏆 Trophy Room</h2>
                <p className="text-[var(--text-dark)] mt-6 text-sm opacity-70 uppercase tracking-widest">
                    ▸ Achievements unlocked ▸ Victories collected
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
                                className={`dialog-box p-5 pt-10 group hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col ${isGold ? 'trophy-glow' : ''}`}
                                style={{
                                    boxShadow: isGold
                                        ? undefined
                                        : `6px 6px 0px 0px ${color}`,
                                }}
                            >
                                {/* Title bar */}
                                <span className="absolute top-0 left-3 text-white text-xs font-bold z-10 leading-[28px]">
                                    🏆 TROPHY_{String(i + 1).padStart(2, '0')}.dat
                                </span>

                                {/* Rank & Year */}
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl">{getRankEmoji(item.rank)}</span>
                                        <span
                                            className="text-xs px-2 py-0.5 border-2 border-[var(--shadow-dark)] shadow-[2px_2px_0px_0px_var(--shadow-dark)] font-bold uppercase"
                                            style={{ backgroundColor: color }}
                                        >
                                            {getRankLabel(item.rank)}
                                        </span>
                                    </div>
                                    <span className="text-xs text-gray-400 font-bold">{item.year}</span>
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-bold text-[var(--text-dark)] mb-1 group-hover:text-[var(--card-pink)] transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm font-semibold text-[var(--card-pink)] mb-3">
                                    @ {item.event}
                                </p>
                                <p className="text-sm text-[var(--text-dark)] leading-relaxed opacity-80 flex-1">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    )
                })}
            </div>

            {/* Decorative */}
            <div className="absolute top-10 left-8 w-3 h-3 bg-[var(--card-yellow)] opacity-30" />
            <div className="absolute bottom-20 right-12 w-4 h-4 bg-[var(--card-pink)] opacity-20" />
            <div className="absolute top-32 right-10 w-2 h-2 bg-[var(--card-blue)] opacity-25" />
        </section>
    )
}
