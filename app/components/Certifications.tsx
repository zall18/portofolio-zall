'use client'

import { motion } from 'framer-motion'

const CERTIFICATIONS = [
    {
        title: 'Google Associate Android Developer',
        issuer: 'Google',
        year: '2024',
        level: 'INTERMEDIATE',
        credentialUrl: '#',
    },
    {
        title: 'Google AI',
        issuer: 'Coursera',
        year: '2026',
        level: 'BEGINNER',
        credentialUrl: '#',
    },
    {
        title: 'Data Analyst with Python',
        issuer: 'Coursera',
        year: '2026',
        level: 'INTERMEDIATE',
        credentialUrl: '#',
    },
    {
        title: 'SAP100 (Business Processes in SAP S/4HANA)',
        issuer: 'SAP',
        year: '2025',
        level: 'INTERMEDIATE',
        credentialUrl: '#',
    },
    {
        title: 'SCM500 (Processes in Procurement)',
        issuer: 'SAP',
        year: '2025',
        level: 'INTERMEDIATE',
        credentialUrl: '#',
    }
]

function getLevelColor(level: string) {
    if (level === 'EXPERT') return 'var(--card-pink)'
    if (level === 'INTERMEDIATE') return 'var(--card-blue)'
    return 'var(--card-yellow)'
}

export default function Certifications() {
    return (
        <section id="certifications" className="relative py-20 px-4 md:px-8 overflow-hidden">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="section-header">📜 Skill Scrolls</h2>
                <p className="text-[var(--text-dark)] mt-6 text-sm opacity-70 uppercase tracking-widest">
                    ▸ Certifications unlocked ▸ Knowledge proven
                </p>
            </motion.div>

            {/* Certifications Grid */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {CERTIFICATIONS.map((cert, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                        <div className="dialog-box p-5 pt-10 group hover:shadow-[8px_8px_0px_0px_var(--card-blue)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                            {/* Title bar */}
                            <span className="absolute top-0 left-3 text-white text-xs font-bold z-10 leading-[28px]">
                                📜 SCROLL_{String(i + 1).padStart(2, '0')}.log
                            </span>

                            {/* Level Badge & Year */}
                            <div className="flex items-center justify-between mb-3">
                                <span
                                    className="level-badge"
                                    style={{ backgroundColor: getLevelColor(cert.level) }}
                                >
                                    {cert.level}
                                </span>
                                <span className="text-xs text-gray-400 font-bold">{cert.year}</span>
                            </div>

                            {/* Scroll Icon */}
                            <div className="mb-3 flex justify-center">
                                <div className="w-12 h-12 bg-[var(--card-blue)]/20 border-2 border-[var(--shadow-dark)] shadow-[3px_3px_0px_0px_var(--shadow-dark)] flex items-center justify-center text-2xl group-hover:shadow-[4px_4px_0px_0px_var(--card-pink)] group-hover:border-[var(--card-pink)] transition-all duration-300">
                                    📜
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-base font-bold text-[var(--text-dark)] mb-1 text-center group-hover:text-[var(--card-pink)] transition-colors">
                                {cert.title}
                            </h3>
                            <p className="text-sm font-semibold text-[var(--card-pink)] mb-4 text-center flex-1">
                                {cert.issuer}
                            </p>

                            {/* View Credential Link */}
                            {cert.credentialUrl && (
                                <a
                                    href={cert.credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-center text-xs font-bold uppercase tracking-wider px-3 py-2 bg-[var(--card-blue)] border-2 border-[var(--shadow-dark)] shadow-[3px_3px_0px_0px_var(--shadow-dark)] hover:shadow-[1px_1px_0px_0px_var(--shadow-dark)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-100 text-[var(--text-dark)] hover:bg-[var(--card-pink)] hover:text-white"
                                >
                                    View Credential →
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Decorative */}
            <div className="absolute top-10 right-10 w-3 h-3 bg-[var(--card-blue)] opacity-30" />
            <div className="absolute bottom-20 left-8 w-4 h-4 bg-[var(--card-yellow)] opacity-20" />
            <div className="absolute top-40 left-16 w-2 h-2 bg-[var(--card-pink)] opacity-25" />
        </section>
    )
}
