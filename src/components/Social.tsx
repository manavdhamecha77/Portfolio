"use client";

export default function Social() {
    const links = [
        {
            name: "Download CV",
            url: "https://drive.google.com/file/d/1CFi3cdWdG58cBj-LTaPFFAAfw3edHVPQ/view?usp=drive_link",
            download: true,
        },
        {
            name: "Github",
            url: "https://github.com/manavdhamecha77",
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/manavdhamecha",
        },
    ];

    return (
        <section className="relative z-10 w-full py-32 px-6 overflow-hidden">
            {/* Matching grid background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(124,255,103,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(124,255,103,0.15)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6 sm:gap-4">
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        download={link.download}
                        className="group relative block w-full text-center"
                    >
                        {/* Ghost background text — desktop only */}
                        <span className="hidden sm:flex absolute inset-0 items-center justify-center text-8xl font-black font-mono uppercase tracking-tighter text-white/[0.03] select-none transition-transform duration-700 group-hover:scale-110">
                            {link.name}
                        </span>

                        <div className="relative z-10 flex items-center justify-center gap-4 sm:gap-8">
                            {/* Left indicator — desktop hover only */}
                            <span className="hidden sm:block opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0 text-[#7cff67] text-5xl font-mono">
                                {">"}
                            </span>

                            {/* Main text — always bright on mobile, dim+hover on desktop */}
                            <span className="text-4xl sm:text-7xl font-bold font-mono uppercase tracking-tight text-white sm:text-white/50 sm:group-hover:text-white transition-all duration-300">
                                {link.name}
                            </span>

                            {/* Right indicator — desktop hover only */}
                            <span className="hidden sm:block opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 text-[#7cff67] text-5xl font-mono">
                                {"<"}
                            </span>
                        </div>

                        {/* Mobile-only: neon underline always visible */}
                        <span className="block sm:hidden mx-auto mt-2 h-[1px] w-16 bg-[#7cff67]/40 rounded-full" />
                    </a>
                ))}
            </div>
        </section>
    );
}
