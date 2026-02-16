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
        <section className="relative z-10 w-full bg-black py-32 px-6 overflow-hidden">
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 sm:gap-6">
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        download={link.download}
                        className="group relative block w-full text-center"
                    >
                       
                        <span className="absolute inset-0 flex items-center justify-center text-4xl sm:text-8xl font-black font-mono uppercase tracking-tighter text-white/[0.03] select-none transition-transform duration-700 group-hover:scale-110">
                            {link.name}
                        </span>

                        <div className="relative z-10 flex items-center justify-center gap-4 sm:gap-8">
                            <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0 text-[#7cff67] text-2xl sm:text-5xl font-mono">
                                {">"}
                            </span>

                            <span className="text-4xl sm:text-7xl font-bold font-mono uppercase tracking-tight text-white/50 group-hover:text-white transition-all duration-300">
                                {link.name}
                            </span>

                            <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 text-[#7cff67] text-2xl sm:text-5xl font-mono">
                                {"<"}
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
