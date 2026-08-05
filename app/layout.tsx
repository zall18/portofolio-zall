import { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'

const customFonst = localFont({
  src: './fonts/DotGothic16-Regular.ttf',
  variable: '--font-dotgothic',
  weight: '400',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rizll.tech'),
  title: {
    default: "My Portfolio | Rizll",
    template: "%s | Rizll"
  },
  description: "Portfolio of Zall - A showcase of my projects, skills, and experiences.",
  keywords: ["Portfolio", "Zall", "Web Developer", "Frontend Developer", "Next.js", "React"],
  authors: [{ name: "Zall" }],
  creator: "Zall",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.rizll.tech",
    title: "My Portfolio | Rizll",
    description: "Portfolio of Zall - A showcase of my projects, skills, and experiences.",
    siteName: "Rizll Portfolio",
    images: [
      {
        url: "/api/og", // This would be the OG image path, we can leave it as default or point to a specific image later
        width: 1200,
        height: 630,
        alt: "Rizll Portfolio",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Portfolio | Rizll",
    description: "Portfolio of Zall - A showcase of my projects, skills, and experiences.",
    creator: "@zall",
  },
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className={`${customFonst.className} min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
