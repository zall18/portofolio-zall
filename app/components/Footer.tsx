import Image from 'next/image'
import { SOCIAL_LINKS } from '../constants/socials'

export default function Footer() {
    return (
        <footer className="relative py-8 px-4">
            {/* Pixel Divider */}
            <div className="pixel-divider mb-8" />
 
            <div className="max-w-4xl mx-auto text-center space-y-4">
                {/* Social Links Row */}
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
                            <Image
                                src={link.icon}
                                alt={link.alt}
                                width={20}
                                height={20}
                                className="w-full h-full object-contain"
                            />
                        </a>
                    ))}
                </div>

                {/* Copyright */}
                <p className="text-sm text-[var(--text-dark)] opacity-60">
                    © 2026 <span className="font-bold">Muhamad Rizal Fikri</span> — Game Not Over Yet! 🎮
                </p>

                {/* Retro badge */}
                <div className="inline-block">
                    <span className="text-xs px-3 py-1 bg-[var(--card-blue)] border-2 border-[var(--shadow-dark)] shadow-[2px_2px_0px_0px_var(--shadow-dark)] font-bold uppercase tracking-wider">
                        Built with ❤️ & ☕
                    </span>
                </div>
            </div>
        </footer>
    )
}
