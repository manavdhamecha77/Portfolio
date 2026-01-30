import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import ClientLayout from "./ClientLayout";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manav Dhamecha | Full Stack Developer & AI Enthusiast",
  description:
    "B.Tech AI student at NIT Surat specializing in full-stack development, AI applications, and scalable software solutions. View my projects, skills, and certifications.",
  keywords: [
    "Manav Dhamecha",
    "Full Stack Developer",
    "AI Developer",
    "NIT Surat",
    "Web Development",
    "Machine Learning",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
  ],
  authors: [{ name: "Manav Dhamecha" }],
  creator: "Manav Dhamecha",
  publisher: "Manav Dhamecha",
  metadataBase: new URL("https://manav-dhamecha.vercel.app"), // Replace with your actual URL
  alternates: {
    canonical: "https://manav-dhamecha.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://manav-dhamecha.vercel.app",
    title: "Manav Dhamecha | Full Stack Developer & AI Enthusiast",
    description:
      "B.Tech AI student at NIT Surat specializing in full-stack development, AI applications, and scalable software solutions.",
    siteName: "Manav Dhamecha Portfolio",
    images: [
      {
        url: "/og-image.png", // Create this image (1200x630px)
        width: 1200,
        height: 630,
        alt: "Manav Dhamecha Portfolio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={` ${jetbrainsMono.variable} font-mono antialiased bg-black text-white overflow-x-hidden`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
