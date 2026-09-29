import { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'

const customFont = localFont({
  src: './fonts/DotGothic16-Regular.ttf',
  variable: '--font-dotgothic',
  weight: '400',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rizll.tech'),
  title: {
    default: "Muhamad Rizal Fikri | Web & Mobile Developer Portfolio",
    template: "%s | Muhamad Rizal Fikri"
  },
  description: "Portfolio of Muhamad Rizal Fikri - Backend & Mobile Developer. Mahasiswa Sistem Informasi yang fokus pada pengembangan aplikasi menggunakan Next.js, Laravel, dan Flutter.",
  keywords: ["Muhamad Rizal Fikri", "Rizal Fikri", "Portfolio", "Zall", "Web Developer", "Backend Developer", "Mobile Developer", "Next.js", "Laravel", "Flutter", "Sistem Informasi"],
  authors: [{ name: "Muhamad Rizal Fikri" }],
  creator: "Muhamad Rizal Fikri",
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large' as const,
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large' as const,
      'max-video-preview': -1,
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.rizll.tech",
    title: "Muhamad Rizal Fikri | Web & Mobile Developer Portfolio",
    description: "Portfolio of Muhamad Rizal Fikri - Backend & Mobile Developer. Mahasiswa Sistem Informasi yang berfokus pada Next.js, Laravel, dan Flutter.",
    siteName: "Muhamad Rizal Fikri Portfolio",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Muhamad Rizal Fikri Portfolio",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhamad Rizal Fikri | Web & Mobile Developer Portfolio",
    description: "Portfolio of Muhamad Rizal Fikri - Backend & Mobile Developer. Mahasiswa Sistem Informasi yang berfokus pada Next.js, Laravel, dan Flutter.",
    creator: "@zall",
    images: ["/api/og"],
  },
  alternates: {
    canonical: "/",
    languages: {
      'id': 'https://www.rizll.tech',
    },
  },

  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" />
        <meta name="theme-color" content="#ff4b82" />
      </head>
      <body className={`${customFont.className} min-h-full flex flex-col`}>
        <noscript>
          <p style={{ padding: '2rem', textAlign: 'center' }}>This site works best with JavaScript enabled. Please enable JavaScript to view the full portfolio.</p>
        </noscript>
        {children}
      </body>
    </html>
  );
}
