import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yacine Zitouni — Junior Developer & Portfolio 2026",
  description:
    "Portfolio of Yacine Zitouni. I build AI features, mobile apps, and websites.",
  keywords: [
    "Yacine Zitouni",
    "Portfolio",
    "Junior Developer",
    "AI",
    "Mobile",
    "Web",
    "React Native",
    "Next.js",
  ],
  authors: [{ name: "Yacine Zitouni" }],
  creator: "Yacine Zitouni",
  openGraph: {
    title: "Yacine Zitouni — Portfolio 2026",
    description: "Junior developer building AI features, mobile apps, and websites.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0c0e" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{const t=localStorage.getItem("theme");if(t==="dark"||t==="light"){document.documentElement.setAttribute("data-theme",t);}}catch(_){}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
