"use client";

import { useEffect, useState } from "react";

import TextType from "@/components/ui/TextType";

function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(124,255,103,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(124,255,103,0.2)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7cff67]/5 via-transparent to-transparent" />

      <div className="relative z-10 flex flex-col items-center">
        <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-4 font-mono font-bold">
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
          cursorCharacter="_"
          className="text-5xl sm:text-7xl font-black font-mono tracking-tight text-[#7cff67] drop-shadow-[0_0_20px_rgba(124,255,103,0.5)]"
        />

        <p className="mt-4 text-sm text-white/50 font-mono tracking-wide">
          Preparing your experience...
        </p>

        {/* Loading Bar */}
        <div className="mt-10 h-[3px] w-40 bg-[#7cff67]/10 overflow-hidden relative rounded-full border border-[#7cff67]/20">
          <div className="absolute h-full w-1/3 bg-[#7cff67] shadow-[0_0_10px_rgba(124,255,103,0.5)] animate-loader-bar" />
        </div>
      </div>

      {/* Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.05)_50%)] bg-[length:100%_4px] opacity-20" />
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
        className={`transition-opacity duration-500 ${ready ? "opacity-100" : "opacity-0"
          }`}
      >
        {children}
      </div>
    </>
  );
}
