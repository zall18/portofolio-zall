'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

export default function AboutMe() {
    const sectionRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    })

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 30,
        restDelta: 0.001
    })

    // Phase 1 (0.1–0.25): Photo fades in at CENTER of section
    const photoOpacity = useTransform(smoothProgress, [0.08, 0.18], [0, 1])
    const photoScale = useTransform(smoothProgress, [0.08, 0.18], [0.7, 1])

    // Phase 2 (0.25–0.4): Photo moves from center (translateX: 0%) to its left position
    // We use percentage so it works responsively
    const photoTranslateX = useTransform(smoothProgress, [0.25, 0.42], ["50%", "0%"])
    // On mobile, photo stays centered
    const photoTranslateXMobile = useTransform(smoothProgress, [0.25, 0.42], ["0%", "0%"])

    // Phase 3 (0.35–0.5): Text appears from the right
    const textOpacity = useTransform(smoothProgress, [0.35, 0.5], [0, 1])
    const textX = useTransform(smoothProgress, [0.35, 0.5], [60, 0])
    const textScale = useTransform(smoothProgress, [0.35, 0.5], [0.95, 1])

    const paragraphs = [
        "Hey there! I'm Rizal, an Information Systems student and software developer who loves building cool, functional things.",
        "My playground ranges from mobile development with Kotlin and Flutter to crafting solid web apps using Next.js and various backend tech. I'm all about that modern coding vibe—teaming up with AI as my daily pair-programming buddy to write cleaner code, explore new stacks, and build things a lot faster.",
        "Lately, I've been spending my time diving into new tech trends and sharing my knowledge as a Mobile Dev mentor at GDG on Campus. When I'm away from the terminal, you can probably find me catching an F1 race (Forza Ferrari!) or hunting for a good cup of local coffee.",
        "Always up for a chat about code, AI, or exciting new projects—let's build something awesome together!"
    ]

    return (
        <section id="about" ref={sectionRef} className="relative min-h-[140vh] py-20 px-4 md:px-8 overflow-hidden">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="section-header">About Me</h2>
            </motion.div>

            {/* Content Container — uses a wrapper for the 2-phase layout */}
            <div className="max-w-6xl mx-auto min-h-[70vh] flex items-start">
                <div className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-12">

                    {/* Photo container — takes up left half on desktop */}
                    <motion.div
                        style={{
                            opacity: photoOpacity,
                            scale: photoScale,
                        }}
                        className="flex-shrink-0 w-full md:w-[45%] flex justify-center"
                    >
                        {/* This inner wrapper handles the translateX animation */}
                        <motion.div
                            style={{
                                translateX: photoTranslateX,
                            }}
                            className="hidden md:block"
                        >
                            <PhotoCard />
                        </motion.div>
                        {/* Mobile version — no translateX animation, always centered */}
                        <motion.div
                            style={{
                                translateX: photoTranslateXMobile,
                            }}
                            className="block md:hidden"
                        >
                            <PhotoCard />
                        </motion.div>
                    </motion.div>

                    {/* Text — dialog box style, appears from right */}
                    <motion.div
                        style={{
                            opacity: textOpacity,
                            x: textX,
                            scale: textScale,
                        }}
                        className="flex-1 w-full md:w-[55%]"
                    >
                        <div className="dialog-box p-6 pt-10 md:p-8 md:pt-12">
                            {/* Dialog box title bar text */}
                            <span className="absolute top-0 left-3 text-white text-xs font-bold z-10 leading-[28px]">
                                💬 WHO_AM_I.txt
                            </span>

                            <div className="space-y-4 text-[var(--text-dark)]">
                                <p className="text-lg md:text-xl font-bold text-[var(--card-pink)]">
                                    ▸ HI THERE!
                                </p>
                                {paragraphs.map((text, i) => (
                                    <motion.p
                                        key={i}
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 * i, duration: 0.5 }}
                                        className="text-sm md:text-base leading-relaxed"
                                    >
                                        {text}
                                    </motion.p>
                                ))}
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                    className="text-[var(--card-pink)] font-bold text-sm blink-cursor"
                                >
                                    PRESS ANY KEY TO CONTINUE
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative pixel squares */}
            <div className="absolute top-20 right-10 w-3 h-3 bg-[var(--card-pink)] opacity-20" />
            <div className="absolute top-32 right-16 w-2 h-2 bg-[var(--card-blue)] opacity-20" />
            <div className="absolute bottom-20 left-10 w-4 h-4 bg-[var(--card-blue)] opacity-15" />
            <div className="absolute bottom-32 left-20 w-2 h-2 bg-[var(--card-pink)] opacity-15" />
        </section>
    )
}

/** Reusable photo card component to avoid duplication */
function PhotoCard() {
    return (
        <div className="relative group">
            <div className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[var(--card-blue)] border-3 border-[var(--shadow-dark)] shadow-[8px_8px_0px_0px_var(--card-pink)] flex justify-center items-center overflow-hidden transition-all duration-300 group-hover:shadow-[12px_12px_0px_0px_var(--card-pink)] group-hover:-translate-x-1 group-hover:-translate-y-1">
                <img
                    src="github-icon.png"
                    alt="Rizal's Profile"
                    className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 object-contain"
                />
            </div>
            {/* Decorative pixel corners */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-[var(--card-pink)]" />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-[var(--card-blue)]" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[var(--card-blue)]" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-[var(--card-pink)]" />
            {/* Player tag */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="text-xs font-bold bg-[var(--card-yellow)] border-2 border-[var(--shadow-dark)] shadow-[2px_2px_0px_0px_var(--shadow-dark)] px-3 py-0.5 uppercase tracking-wider">
                    🎮 Player 1
                </span>
            </div>
        </div>
    )
}