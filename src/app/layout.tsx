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
  title: "Manav Dhamecha",
  description:
    "AI Undergrad NIT Surat specializing in Full-Stack Development, AI Applications, and Scalable Software Solutions. View my projects, skills, and achievements.",
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
  verification: {
    google: "7kPnURCuDWxc2Qma8XpamYPJe2REHW1i_Q1Z3ZYQeuc",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://manav-dhamecha.vercel.app",
    title: "Manav Dhamecha",
    description:
      "AI undergrad at SVNIT Surat who thrives at the intersection of research and engineering. I've published NLP research at international venues, won national hackathons, and shipped production software.",
    siteName: "Manav Dhamecha",
    images: [
      {
        url: "/og-image.png",
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
