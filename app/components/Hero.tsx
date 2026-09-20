'use client'

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react"

const PINK_PARTICLES = [...Array(10)].map((_, i) => ({
    id: i,
    left: `${(i * 37 + 13) % 100}%`,
    top: `${(i * 53 + 29) % 100}%`,
    size: ((i * 7) % 3) + 2,
    duration: ((i * 17) % 30) / 10 + 3,
    delay: ((i * 19) % 20) / 10,
}));

const BLUE_PARTICLES = [...Array(5)].map((_, i) => ({
    id: i,
    left: `${(i * 47 + 23) % 100}%`,
    top: `${(i * 61 + 17) % 100}%`,
    size: ((i * 5) % 2) + 2,
    duration: ((i * 13) % 25) / 10 + 3,
    delay: ((i * 11) % 15) / 10,
}));

const ROLES = [
    "Software Developer",
    "Fullstack Developer",
    "Mobile Developer",
    "Web Developer",
];

function RetroTypewriter() {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = ROLES[index];

        if (subIndex === currentWord.length && !isDeleting) {
            const timeout = setTimeout(() => setIsDeleting(true), 1600);
            return () => clearTimeout(timeout);
        }

        if (subIndex === 0 && isDeleting) {
            const timeout = setTimeout(() => {
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % ROLES.length);
            }, 300);
            return () => clearTimeout(timeout);
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
        }, isDeleting ? 40 : 80);

        return () => clearTimeout(timeout);
    }, [subIndex, index, isDeleting]);

    return (
        <span className="text-white">
            {ROLES[index].substring(0, subIndex)}
            <span className="text-[var(--card-yellow)] animate-pulse ml-0.5">█</span>
        </span>
    );
}

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const scale = useTransform(smoothProgress, [0, 1], [1, isMobile ? 2.5 : 4]);
    const opacity = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.8, 0]);
    const borderRadius = useTransform(smoothProgress, [0, 1], [16, 50]);
    const rotate = useTransform(smoothProgress, [0, 0.5, 1], [0, -5, -15]);

    const cardVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: 50
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut" as const,
            }
        }
    };

    return (
        <div ref={containerRef} className="relative h-[200vh] mt-10">
            {/* Retro grid background */}
            <div className="absolute inset-0 retro-grid opacity-50" />

            {/* Animated pixel particles (square, not round) */}
            <div className="absolute inset-0 overflow-hidden">
                {PINK_PARTICLES.map((particle) => (
                    <motion.div
                        key={`pink-${particle.id}`}
                        className="absolute bg-[var(--card-pink)]"
                        style={{
                            left: particle.left,
                            top: particle.top,
                            width: particle.size,
                            height: particle.size,
                            opacity: 0.25,
                        }}
                        animate={{
                            y: [0, -40, 0],
                            opacity: [0.15, 0.4, 0.15],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            delay: particle.delay,
                        }}
                    />
                ))}
                {/* Blue particles layer */}
                {BLUE_PARTICLES.map((particle) => (
                    <motion.div
                        key={`blue-${particle.id}`}
                        className="absolute bg-[var(--card-blue)]"
                        style={{
                            left: particle.left,
                            top: particle.top,
                            width: particle.size,
                            height: particle.size,
                            opacity: 0.2,
                        }}
                        animate={{
                            y: [0, -25, 0],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: particle.duration + 1,
                            repeat: Infinity,
                            delay: particle.delay + 0.5,
                        }}
                    />
                ))}
            </div>

            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                {/* Scanline overlay */}
                <div className="absolute inset-0 scanline-overlay pointer-events-none" />

                <motion.div
                    style={{ scale, borderRadius, rotate, opacity }}
                    className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]"
                >
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        className="w-full h-full bg-[var(--card-pink)] border-3 border-[var(--shadow-dark)] shadow-[10px_10px_0px_0px_var(--card-blue)] rounded-2xl flex flex-col items-center justify-center p-8 text-white relative overflow-hidden group"
                    >
                        {/* Decorative shine */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />

                        {/* Inner retro grid */}
                        <div className="absolute inset-0 retro-grid opacity-10" />

                        <div className="relative z-10 text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="mb-4"
                            >
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 crt-glow">
                                    Hello, I&apos;m a
                                </h1>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-xl md:text-2xl lg:text-3xl font-semibold min-h-[2em] flex items-center justify-center"
                            >
                                <RetroTypewriter />
                            </motion.div>
                        </div>

                        {/* Corner decorations */}
                        <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-white/40" />
                        <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-white/40" />
                        <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-white/40" />
                        <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-white/40" />

                        {/* Animated border */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/20 transition-all duration-300" />
                    </motion.div>
                </motion.div>

                {/* Scroll indicator — "PRESS START" style */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <motion.div
                        animate={{
                            y: [0, 10, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="text-[var(--card-pink)]"
                        >
                            <path
                                d="M12 5v14m0 0l-6-6m6 6l6-6"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="square"
                                strokeLinejoin="miter"
                            />
                        </svg>
                    </motion.div>
                    <span className="text-[var(--text-dark)] text-sm font-bold tracking-[0.3em] uppercase flicker">
                        ▼ Scroll to Start ▼
                    </span>
                </motion.div>
            </div>

            {/* Gradient overlay for smooth transition — matches background */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[var(--background)]" />
        </div>
    );
}