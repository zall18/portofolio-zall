'use client'

import { motion } from 'framer-motion'

const EXPERIENCES = [
    {
        level: 1,
        title: 'Junior Developer',
        company: 'Tech Startup Inc.',
        period: 'Jan 2023 — Jun 2023',
        description: 'Built and maintained web applications using React and Node.js. Collaborated with the team to deliver features on time.',
        skills: ['React', 'Node.js', 'MongoDB'],
    },
    {
        level: 2,
        title: 'Mobile Dev Mentor',
        company: 'GDG on Campus',
        period: 'Jul 2023 — Dec 2023',
        description: 'Mentored students on mobile development with Kotlin and Flutter. Organized workshops and coding sessions.',
        skills: ['Kotlin', 'Flutter', 'Mentoring'],
    },
    {
        level: 3,
        title: 'Fullstack Developer',
        company: 'Digital Agency Co.',
        period: 'Jan 2024 — Aug 2024',
        description: 'Developed full-stack web applications using Next.js and various backend technologies. Led the frontend architecture.',
        skills: ['Next.js', 'TypeScript', 'PostgreSQL'],
    },
    {
        level: 4,
        title: 'Software Engineer Intern',
        company: 'Big Tech Corp.',
        period: 'Sep 2024 — Present',
        description: 'Working on large-scale systems and learning best practices in software engineering. Contributing to production features.',
        skills: ['Python', 'Docker', 'Cloud'],
    },
]

export default function Experience() {
    return (
        <section id="experience" className="relative py-20 px-4 md:px-8 overflow-hidden">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="section-header">Level Progress</h2>
                <p className="text-[var(--text-dark)] mt-6 text-sm opacity-70 uppercase tracking-widest">
                    ▸ My journey so far ▸ Experience unlocked
                </p>
            </motion.div>

            {/* Timeline */}
            <div className="max-w-4xl mx-auto relative">
                {/* Center timeline line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden md:block"
                    style={{
                        background: `repeating-linear-gradient(
                            180deg,
                            var(--card-pink) 0px,
                            var(--card-pink) 8px,
                            transparent 8px,
                            transparent 16px
                        )`
                    }}
                />

                {/* Mobile timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-1 md:hidden"
                    style={{
                        background: `repeating-linear-gradient(
                            180deg,
                            var(--card-pink) 0px,
                            var(--card-pink) 8px,
                            transparent 8px,
                            transparent 16px
                        )`
                    }}
                />

                {EXPERIENCES.map((exp, i) => {
                    const isLeft = i % 2 === 0

                    return (
                        <div key={i} className="relative mb-12 last:mb-0">
                            {/* Timeline dot */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                                className="absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 bg-[var(--card-yellow)] border-3 border-[var(--shadow-dark)] z-10 top-8"
                                style={{ boxShadow: '2px 2px 0px 0px var(--shadow-dark)' }}
                            />

                            {/* Card */}
                            <motion.div
                                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.15 }}
                                className={`
                                    ml-14 md:ml-0
                                    ${isLeft
                                        ? 'md:mr-[52%] md:pr-8'
                                        : 'md:ml-[52%] md:pl-8'
                                    }
                                `}
                            >
                                <div className="dialog-box p-5 pt-10 group hover:shadow-[8px_8px_0px_0px_var(--card-pink)] transition-all duration-300">
                                    {/* Title bar */}
                                    <span className="absolute top-0 left-3 text-white text-xs font-bold z-10 leading-[28px]">
                                        📁 EXP_{String(exp.level).padStart(2, '0')}.log
                                    </span>

                                    {/* Level Badge */}
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="level-badge">LVL {exp.level}</span>
                                        <span className="text-xs text-gray-400">{exp.period}</span>
                                    </div>

                                    <h3 className="text-lg font-bold text-[var(--text-dark)] mb-1">
                                        {exp.title}
                                    </h3>
                                    <p className="text-sm font-semibold text-[var(--card-pink)] mb-3">
                                        @ {exp.company}
                                    </p>
                                    <p className="text-sm text-[var(--text-dark)] leading-relaxed mb-4 opacity-80">
                                        {exp.description}
                                    </p>

                                    {/* Skill tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="text-xs px-2 py-0.5 bg-[var(--card-blue)] border-2 border-[var(--shadow-dark)] shadow-[2px_2px_0px_0px_var(--shadow-dark)] font-bold"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )
                })}

                {/* End marker */}
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center mt-8"
                >
                    <div className="bg-[var(--card-pink)] text-white border-3 border-[var(--shadow-dark)] shadow-[4px_4px_0px_0px_var(--shadow-dark)] px-4 py-2 font-bold text-sm uppercase tracking-wider z-10">
                        ▸ To Be Continued...
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
