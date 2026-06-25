'use client'

import { motion } from 'framer-motion'

const SKILLS = [
    { name: 'React', color: '#61DAFB' },
    { name: 'Next.js', color: '#ffffff' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'Kotlin', color: '#7F52FF' },
    { name: 'Flutter', color: '#02569B' },
    { name: 'Node.js', color: '#339933' },
    { name: 'Python', color: '#3776AB' },
    { name: 'Firebase', color: '#FFCA28' },
    { name: 'Git', color: '#F05032' },
    { name: 'Figma', color: '#F24E1E' },
    { name: 'Tailwind', color: '#06B6D4' },
    { name: 'Docker', color: '#2496ED' },
    { name: 'PostgreSQL', color: '#4169E1' },
    { name: 'MongoDB', color: '#47A248' },
    { name: 'Dart', color: '#0175C2' },
]

// Simple retro-style SVG icons for each skill
function SkillIcon({ name, color }: { name: string; color: string }) {
    return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            {/* Pixel art style icon - simple geometric shapes */}
            <rect x="4" y="4" width="32" height="32" rx="2" fill="currentColor" opacity="0.15" />
            <rect x="8" y="8" width="24" height="24" rx="1" fill="currentColor" opacity="0.25" />
            <text
                x="20"
                y="24"
                textAnchor="middle"
                fill={color}
                fontSize="14"
                fontWeight="bold"
                fontFamily="monospace"
            >
                {name.charAt(0).toUpperCase()}
            </text>
        </svg>
    )
}

function SkillCard({ skill }: { skill: typeof SKILLS[0] }) {
    return (
        <div
            className="flex-shrink-0 mx-3 group cursor-pointer"
        >
            <div className="w-28 h-32 bg-[var(--foreground)] border-3 border-[var(--shadow-dark)] shadow-[4px_4px_0px_0px_var(--shadow-dark)] rounded-lg flex flex-col items-center justify-center gap-2 transition-all duration-300 grayscale hover:grayscale-0 hover:shadow-[6px_6px_0px_0px_var(--card-pink)] hover:border-[var(--card-pink)] hover:-translate-y-2 group-hover:scale-105">
                <div
                    className="transition-all duration-300 text-gray-400 group-hover:text-[var(--card-pink)]"
                    style={{ ['--skill-color' as string]: skill.color }}
                >
                    <SkillIcon name={skill.name} color={skill.color} />
                </div>
                <span className="text-xs font-bold text-gray-400 group-hover:text-[var(--text-dark)] transition-colors duration-300 text-center px-1">
                    {skill.name}
                </span>
                {/* Glow dot on hover */}
                <div
                    className="w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: skill.color, boxShadow: `0 0 8px ${skill.color}` }}
                />
            </div>
        </div>
    )
}

export default function Skills() {
    // Duplicate array for seamless loop
    const row1 = [...SKILLS, ...SKILLS]
    const row2 = [...SKILLS.slice().reverse(), ...SKILLS.slice().reverse()]

    return (
        <section id="skills" className="relative py-20 overflow-hidden">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12 px-4"
            >
                <h2 className="section-header">Game Select</h2>
                <p className="text-[var(--text-dark)] mt-6 text-sm opacity-70 uppercase tracking-widest">
                    ▸ Hover to reveal skill ▸ Technologies I work with
                </p>
            </motion.div>

            {/* Marquee Row 1 — Left */}
            <div className="relative mb-6">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />

                <div className="flex marquee-left" style={{ width: 'max-content' }}>
                    {row1.map((skill, i) => (
                        <SkillCard key={`row1-${i}`} skill={skill} />
                    ))}
                </div>
            </div>

            {/* Marquee Row 2 — Right */}
            <div className="relative">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />

                <div className="flex marquee-right" style={{ width: 'max-content' }}>
                    {row2.map((skill, i) => (
                        <SkillCard key={`row2-${i}`} skill={skill} />
                    ))}
                </div>
            </div>

            {/* Decorative pixel elements */}
            <div className="absolute top-10 left-8 w-3 h-3 bg-[var(--card-pink)] opacity-30" />
            <div className="absolute top-16 left-14 w-2 h-2 bg-[var(--card-blue)] opacity-30" />
            <div className="absolute bottom-10 right-8 w-3 h-3 bg-[var(--card-blue)] opacity-30" />
            <div className="absolute bottom-16 right-14 w-2 h-2 bg-[var(--card-pink)] opacity-30" />
        </section>
    )
}
