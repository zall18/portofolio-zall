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
    default: "Muhamad Rizal Fikri | Web Developer Portfolio",
    template: "%s | Muhamad Rizal Fikri"
  },
  description: "Portfolio of Muhamad Rizal Fikri - Backend & Mobile Developer. Mahasiswa Sistem Informasi yang fokus pada pengembangan aplikasi menggunakan Next.js, Laravel, dan Flutter.",
  keywords: ["Muhamad Rizal Fikri", "Rizal Fikri", "Portfolio", "Zall", "Web Developer", "Backend Developer", "Mobile Developer", "Next.js", "Laravel", "Flutter", "Sistem Informasi"],
  authors: [{ name: "Muhamad Rizal Fikri" }],
  creator: "Muhamad Rizal Fikri",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.rizll.tech",
    title: "Muhamad Rizal Fikri | Web Developer Portfolio",
    description: "Portfolio of Muhamad Rizal Fikri - Backend & Mobile Developer. Mahasiswa Sistem Informasi yang fokus pada pengembangan aplikasi menggunakan Next.js, Laravel, dan Flutter.",
    siteName: "Muhamad Rizal Fikri Portfolio",
    images: [
      {
        url: "/api/og", // This would be the OG image path, we can leave it as default or point to a specific image later
        width: 1200,
        height: 630,
        alt: "Muhamad Rizal Fikri Portfolio",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhamad Rizal Fikri | Web Developer Portfolio",
    description: "Portfolio of Muhamad Rizal Fikri - Backend & Mobile Developer. Mahasiswa Sistem Informasi yang fokus pada pengembangan aplikasi.",
    creator: "@zall",
  },
  alternates: {
    canonical: "/",
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
    <html
      lang="en"
    >
      <body className={`${customFonst.className} min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
