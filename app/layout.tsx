import { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'

const customFonst = localFont({
  src: './fonts/DotGothic16-Regular.ttf',
  variable: '--font-dotgothic',
  weight: '400',
});

export const metadata: Metadata = {
  title: "My Portofolio",
  description: "Portofolio of Zall"
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
