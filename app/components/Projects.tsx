'use client'

import { motion } from 'framer-motion'

const PROJECTS = [
    {
        title: 'Project Alpha',
        description: 'A full-stack web application for managing tasks and projects with real-time collaboration features.',
        tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
        color: 'var(--card-pink)',
        link: '#',
    },
    {
        title: 'Project Beta',
        description: 'Mobile application built with Flutter for tracking fitness goals and workout routines.',
        tech: ['Flutter', 'Dart', 'Firebase'],
        color: 'var(--card-blue)',
        link: '#',
    },
    {
        title: 'Project Gamma',
        description: 'AI-powered chatbot application that helps students with their homework and study sessions.',
        tech: ['Python', 'React', 'OpenAI'],
        color: 'var(--card-pink)',
        link: '#',
    },
    {
        title: 'Project Delta',
        description: 'E-commerce platform with integrated payment systems and inventory management.',
        tech: ['Kotlin', 'Node.js', 'MongoDB'],
        color: 'var(--card-blue)',
        link: '#',
    },
    {
        title: 'Project Epsilon',
        description: 'Dashboard analytics tool for visualizing social media engagement and growth metrics.',
        tech: ['React', 'D3.js', 'Express'],
        color: 'var(--card-pink)',
        link: '#',
    },
    {
        title: 'Project Zeta',
        description: 'IoT home automation app controlling smart devices with voice commands and scheduling.',
        tech: ['Flutter', 'Firebase', 'MQTT'],
        color: 'var(--card-blue)',
        link: '#',
    },
    {
        title: 'Project Eta',
        description: 'Recipe sharing platform with personalized recommendations based on dietary preferences.',
        tech: ['Next.js', 'Tailwind', 'Prisma'],
        color: 'var(--card-pink)',
        link: '#',
    },
    {
        title: 'Project Theta',
        description: 'A collaborative whiteboard app for remote teams with real-time drawing and annotation tools.',
        tech: ['React', 'Socket.io', 'Canvas'],
        color: 'var(--card-blue)',
        link: '#',
    },
]

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
        >
            <div className="group relative bg-[var(--foreground)] border-3 border-[var(--shadow-dark)] shadow-[6px_6px_0px_0px_var(--shadow-dark)] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[10px_10px_0px_0px] hover:-translate-x-1 hover:-translate-y-1 cursor-pointer h-full flex flex-col"
                style={{ ['--tw-shadow-color' as string]: project.color } as React.CSSProperties}
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
                            <span className="text-white text-2xl font-bold">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                        </div>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[var(--shadow-dark)]/0 group-hover:bg-[var(--shadow-dark)]/40 transition-all duration-300 flex items-center justify-center">
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileHover={{ opacity: 1, scale: 1 }}
                            className="text-white font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[var(--card-pink)] px-3 py-1 border-2 border-white shadow-[3px_3px_0px_0px_rgba(255,255,255,0.3)]"
                        >
                            View Project →
                        </motion.span>
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
                <h2 className="section-header">Select Project</h2>
                <p className="text-[var(--text-dark)] mt-6 text-sm opacity-70 uppercase tracking-widest">
                    ▸ Things I&apos;ve built ▸ Click to explore
                </p>
            </motion.div>

            {/* Project Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {PROJECTS.map((project, i) => (
                    <ProjectCard key={i} project={project} index={i} />
                ))}
            </div>

            {/* Decorative */}
            <div className="absolute top-10 right-8 w-3 h-3 bg-[var(--card-yellow)] opacity-40" />
            <div className="absolute bottom-20 left-12 w-4 h-4 bg-[var(--card-pink)] opacity-30" />
        </section>
    )
}
