import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#18122B',
                    backgroundImage: 'radial-gradient(circle at 25px 25px, #393053 2%, transparent 0%), radial-gradient(circle at 75px 75px, #393053 2%, transparent 0%)',
                    backgroundSize: '100px 100px',
                    padding: '40px',
                    border: '16px solid #ff4b82',
                    fontFamily: 'sans-serif',
                }}
            >
                {/* Header Tag */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '16px',
                        backgroundColor: '#ffb800',
                        color: '#1a1a1a',
                        padding: '6px 20px',
                        fontWeight: 'bold',
                        fontSize: 22,
                        border: '3px solid #1a1a1a',
                        boxShadow: '4px 4px 0px #1a1a1a',
                    }}
                >
                    <span>PLAYER 1 READY</span>
                </div>

                {/* Name */}
                <div
                    style={{
                        fontSize: 64,
                        fontWeight: 'bold',
                        color: '#ffffff',
                        marginBottom: '12px',
                        textAlign: 'center',
                        letterSpacing: '-1px',
                    }}
                >
                    Muhamad Rizal Fikri
                </div>

                {/* Subtitle */}
                <div
                    style={{
                        fontSize: 28,
                        fontWeight: 600,
                        color: '#67e8f9',
                        marginBottom: '32px',
                        textAlign: 'center',
                    }}
                >
                    Backend & Mobile Developer | Information Systems
                </div>

                {/* Tech Badges */}
                <div
                    style={{
                        display: 'flex',
                        gap: '16px',
                        marginBottom: '28px',
                    }}
                >
                    {['Next.js', 'Flutter', 'Kotlin', 'Laravel', 'REST API'].map((tech) => (
                        <div
                            key={tech}
                            style={{
                                backgroundColor: '#ffffff',
                                color: '#1a1a1a',
                                padding: '8px 18px',
                                fontSize: 20,
                                fontWeight: 'bold',
                                border: '3px solid #1a1a1a',
                                boxShadow: '4px 4px 0px #ff4b82',
                            }}
                        >
                            {tech}
                        </div>
                    ))}
                </div>

                {/* Domain footer */}
                <div
                    style={{
                        fontSize: 22,
                        color: '#a5b4fc',
                        fontWeight: 500,
                    }}
                >
                    www.rizll.tech
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
