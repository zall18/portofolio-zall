'use client'

import { motion } from 'framer-motion'

const QUESTS = [
    {
        icon: '📱',
        title: 'Mobile Quest',
        subtitle: 'Mobile App Development',
        description: 'Building high-performance mobile applications with native and cross-platform technologies. From concept to Play Store / App Store.',
        tech: ['Kotlin', 'Java', 'Flutter', 'Dart', 'Firebase'],
        features: ['Android & iOS', 'UI/UX Design', 'API Integration', 'App Store Deploy'],
    },
    {
        icon: '🌐',
        title: 'Web Quest',
        subtitle: 'Web App Development',
        description: 'Crafting modern, responsive web applications with cutting-edge frameworks. Full-stack solutions from landing pages to complex platforms.',
        tech: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Laravel', 'PHP', 'MySQL'],
        features: ['Responsive Design', 'SEO Optimized', 'Full-Stack', 'Database Setup'],
    },
    {
        icon: '🖥️',
        title: 'Desktop Quest',
        subtitle: 'Desktop App Development',
        description: 'Developing powerful desktop applications for Windows, macOS, and Linux. Robust tools built for performance and productivity.',
        tech: ['Python', 'Electron', 'C#', 'Java'],
        features: ['Cross-Platform', 'Offline Ready', 'System Integration', 'Custom Tools'],
    },
]

function QuestCard({ quest, index }: { quest: typeof QUESTS[0]; index: number }) {
    const handleAcceptQuest = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const el = document.getElementById('contact')
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="flex"
        >
            <div className="dialog-box p-6 pt-10 group hover:shadow-[10px_10px_0px_0px_var(--card-pink)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 flex flex-col w-full">
                {/* Title bar */}
                <span className="absolute top-0 left-3 text-white text-xs font-bold z-10 leading-[28px]">
                    ⚔️ QUEST_{String(index + 1).padStart(2, '0')}.cfg
                </span>

                {/* Icon & Status */}
                <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-[var(--card-blue)] border-3 border-[var(--shadow-dark)] shadow-[4px_4px_0px_0px_var(--shadow-dark)] flex items-center justify-center text-3xl group-hover:shadow-[6px_6px_0px_0px_var(--card-pink)] group-hover:border-[var(--card-pink)] transition-all duration-300">
                        {quest.icon}
                    </div>
                    <span className="quest-pulse text-xs px-2 py-0.5 bg-[var(--card-green)] border-2 border-[var(--shadow-dark)] shadow-[2px_2px_0px_0px_var(--shadow-dark)] font-bold uppercase">
                        Accepting
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[var(--text-dark)] mb-1 group-hover:text-[var(--card-pink)] transition-colors">
                    {quest.title}
                </h3>
                <p className="text-sm font-semibold text-[var(--card-pink)] mb-3">
                    {quest.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-[var(--text-dark)] leading-relaxed opacity-80 mb-5">
                    {quest.description}
                </p>

                {/* Features list */}
                <div className="mb-5 space-y-1.5 flex-1">
                    {quest.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-xs text-[var(--text-dark)]">
                            <span className="text-[var(--card-pink)] font-bold">▸</span>
                            <span className="font-semibold">{feature}</span>
                        </div>
                    ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {quest.tech.map((t) => (
                        <span
                            key={t}
                            className="text-xs px-2 py-0.5 bg-[var(--card-blue)] border-2 border-[var(--shadow-dark)] shadow-[2px_2px_0px_0px_var(--shadow-dark)] font-bold uppercase"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* CTA */}
                <button
                    onClick={handleAcceptQuest}
                    className="retro-btn w-full text-center text-sm"
                >
                    ▸ Accept Quest
                </button>
            </div>
        </motion.div>
    )
}

export default function Freelance() {
    return (
        <section id="freelance" className="relative py-20 px-4 md:px-8 overflow-hidden retro-grid">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="section-header">⚔️ Quest Board</h2>
                <p className="text-[var(--text-dark)] mt-6 text-sm opacity-70 uppercase tracking-widest">
                    ▸ Freelance Services ▸ Available for Hire ▸ Choose Your Quest
                </p>
            </motion.div>

            {/* Quest Cards */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {QUESTS.map((quest, i) => (
                    <QuestCard key={i} quest={quest} index={i} />
                ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center mt-12"
            >
                <div className="inline-block bg-[var(--card-yellow)] border-3 border-[var(--shadow-dark)] shadow-[4px_4px_0px_0px_var(--shadow-dark)] px-6 py-3">
                    <p className="text-sm font-bold text-[var(--shadow-dark)] uppercase tracking-wider">
                        💡 Custom project? Let&apos;s discuss! Scroll down to contact me.
                    </p>
                </div>
            </motion.div>

            {/* Decorative */}
            <div className="absolute top-10 right-8 w-3 h-3 bg-[var(--card-yellow)] opacity-30" />
            <div className="absolute bottom-20 left-12 w-4 h-4 bg-[var(--card-pink)] opacity-20" />
            <div className="absolute top-40 left-6 w-2 h-2 bg-[var(--card-blue)] opacity-25" />
        </section>
    )
}
