import Link from 'next/link'
import { SOCIAL_LINKS } from '../constants/socials'
import SocialIcon from './SocialIcon'

export default function Footer() {
    return (
        <footer className="relative py-12 px-4 bg-[var(--foreground)] border-t-3 border-[var(--shadow-dark)]">
            {/* Pixel Divider */}
            <div className="pixel-divider mb-8" />

            <div className="max-w-5xl mx-auto space-y-8">
                {/* Top Section: Quick Nav & Featured Articles */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                    {/* Site Navigation */}
                    <div className="dialog-box p-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-[var(--card-pink)] block mb-3">
                            📂 Navigation
                        </span>
                        <ul className="space-y-2 text-sm font-bold text-[var(--text-dark)]">
                            <li>
                                <Link href="/" className="hover:text-[var(--card-pink)] hover:underline flex items-center gap-1.5">
                                    <span>▸</span> Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-[var(--card-pink)] hover:underline flex items-center gap-1.5">
                                    <span>▸</span> Tech Blog &amp; Insights
                                </Link>
                            </li>
                            <li>
                                <Link href="/#about" className="hover:text-[var(--card-pink)] hover:underline flex items-center gap-1.5">
                                    <span>▸</span> About Muhamad Rizal
                                </Link>
                            </li>
                            <li>
                                <Link href="/#projects" className="hover:text-[var(--card-pink)] hover:underline flex items-center gap-1.5">
                                    <span>▸</span> Featured Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/#contact" className="hover:text-[var(--card-pink)] hover:underline flex items-center gap-1.5">
                                    <span>▸</span> Contact &amp; Inquiry
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Featured Technical Articles */}
                    <div className="dialog-box p-4 md:col-span-1 lg:col-span-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[var(--card-blue)] block mb-3">
                            📰 Featured Articles &amp; Case Studies
                        </span>
                        <ul className="space-y-2.5 text-sm text-[var(--text-dark)]">
                            <li>
                                <Link
                                    href="/blog/clean-architecture-flutter-mobile-apps"
                                    className="font-bold hover:text-[var(--card-pink)] hover:underline flex items-center gap-1.5"
                                >
                                    <span>▸</span> Clean Architecture in Flutter Mobile Apps
                                </Link>
                                <p className="text-xs text-[var(--text-dark)]/70 pl-4">
                                    Architectural separation for scalable enterprise mobile applications.
                                </p>
                            </li>
                            <li>
                                <Link
                                    href="/blog/building-iot-rest-api-esp32-antares"
                                    className="font-bold hover:text-[var(--card-pink)] hover:underline flex items-center gap-1.5"
                                >
                                    <span>▸</span> Building IoT REST API with ESP32 &amp; Antares
                                </Link>
                                <p className="text-xs text-[var(--text-dark)]/70 pl-4">
                                    Practical IoT telemetry data pipeline from sensors to cloud storage.
                                </p>
                            </li>
                            <li>
                                <Link
                                    href="/blog/competitive-programming-lks-software-solutions"
                                    className="font-bold hover:text-[var(--card-pink)] hover:underline flex items-center gap-1.5"
                                >
                                    <span>▸</span> Competitive Programming in LKS IT Software Solutions
                                </Link>
                                <p className="text-xs text-[var(--text-dark)]/70 pl-4">
                                    Speed, database modeling, and clean architecture under competition pressure.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Social Links Row */}
                <div className="flex flex-col items-center justify-center gap-4 pt-4 border-t-2 border-dashed border-[var(--shadow-dark)]/20">
                    <div className="flex justify-center gap-4">
                        {SOCIAL_LINKS.map((link) => (
                            <a
                                key={link.alt}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.alt}
                                className="relative w-8 h-8 p-1.5 bg-[var(--card-pink)] border-2 border-[var(--shadow-dark)] shadow-[2px_2px_0px_0px_var(--shadow-dark)] hover:shadow-[0px_0px_0px_0px_var(--shadow-dark)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 block"
                            >
                                <SocialIcon
                                    name={link.alt}
                                    className="w-full h-full text-white"
                                />
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-sm text-[var(--text-dark)] opacity-70 text-center">
                        © 2026 <span className="font-bold">Muhamad Rizal Fikri</span> — Game Not Over Yet! 🎮
                    </p>

                    {/* Retro badge */}
                    <div className="inline-block">
                        <span className="text-xs px-3 py-1 bg-[var(--card-blue)] border-2 border-[var(--shadow-dark)] shadow-[2px_2px_0px_0px_var(--shadow-dark)] font-bold uppercase tracking-wider text-white">
                            Built with Next.js, Flutter &amp; Modern GEO
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
