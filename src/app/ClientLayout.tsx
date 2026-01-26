"use client";

import { useEffect, useState } from "react";

import TextType from "@/components/ui/TextType"; 

function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white">
      <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-4">
        Welcome
      </p>

      <TextType
        text={["नमस्ते", "Hello", "こんにちは"]}
        as="h1"
        typingSpeed={80}
        deletingSpeed={40}
        pauseDuration={400}
        loop={true}
        showCursor={true}
        cursorCharacter="|"
        className="text-5xl sm:text-7xl font-semibold tracking-tight text-white"
      />

      <p className="mt-4 text-sm text-white/50">
        Preparing your experience...
      </p>

      <div className="mt-10 h-[2px] w-32 bg-white/10 overflow-hidden relative">
        <div className="absolute h-full w-1/3 bg-white animate-loader-bar" />
      </div>
    </div>
  );
}


export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setReady(true);
    }, 1200);

    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {!ready && <Loader />}

      <div
        className={`transition-opacity duration-500 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
}
