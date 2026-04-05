"use client";

import { useEffect, useRef, useMemo } from "react";

const SKILLS = [
    { label: "React", color: "#61DAFB", slug: "react" },
    { label: "Next.js", color: "#ffffff", slug: "nextdotjs" },
    { label: "TypeScript", color: "#3178C6", slug: "typescript" },
    { label: "Python", color: "#3776AB", slug: "python" },
    { label: "Node.js", color: "#339933", slug: "nodedotjs" },
    { label: "TailwindCSS", color: "#06B6D4", slug: "tailwindcss" },
    { label: "MongoDB", color: "#47A248", slug: "mongodb" },
    { label: "PostgreSQL", color: "#4169E1", slug: "postgresql" },
    { label: "Docker", color: "#2496ED", slug: "docker" },
    { label: "Git", color: "#F05032", slug: "git" },
    { label: "JavaScript", color: "#F7DF1E", slug: "javascript" },
    { label: "GraphQL", color: "#E10098", slug: "graphql" },
    { label: "Redis", color: "#DC382D", slug: "redis" },
    { label: "Figma", color: "#F24E1E", slug: "figma" },
    { label: "Linux", color: "#ffffffff", slug: "linux" },
    { label: "Prisma", color: "#ffffffff", slug: "prisma" },
];


// Fibonacci sphere — evenly distributes N points on a sphere surface
function fibonacciSphere(n: number, radius: number) {
    const pts: { x: number; y: number; z: number }[] = [];
    const phi = (1 + Math.sqrt(5)) / 2; // golden ratio
    for (let i = 0; i < n; i++) {
        const theta = Math.acos(1 - (2 * (i + 0.5)) / n);
        const psi = (2 * Math.PI * i) / phi;
        pts.push({
            x: radius * Math.sin(theta) * Math.cos(psi),
            y: radius * Math.sin(theta) * Math.sin(psi),
            z: radius * Math.cos(theta),
        });
    }
    return pts;
}

interface SkillSphereProps {
    size?: number;
    mobileSize?: number;
}

export default function SkillSphere({ size = 520, mobileSize = 520 }: SkillSphereProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const sphereRef = useRef<HTMLDivElement>(null);
    const photoRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number>(0);
    const angleRef = useRef({ x: 0.3, y: 0 });
    const isVisibleRef = useRef(true);
    const isDraggingRef = useRef(false);
    const lastPointerRef = useRef({ x: 0, y: 0 });

    const isMobile = useMemo(() => {
        if (typeof window === "undefined") return false;
        return window.innerWidth < 768;
    }, []);

    const containerSize = isMobile ? mobileSize : size;
    const radius = containerSize / 2 - 8;
    const skillCount = SKILLS.length;
    const skills = useMemo(() => SKILLS.slice(0, skillCount), [skillCount]);
    const points = useMemo(
        () => fibonacciSphere(skills.length, radius),
        [skills.length, radius]
    );

    // ── Animation loop ──────────────────────────────────────────────────────────
    useEffect(() => {
        const sphere = sphereRef.current;
        if (!sphere) return;

        // Pause when scrolled off-screen
        const observer = new IntersectionObserver(
            ([entry]) => { isVisibleRef.current = entry.isIntersecting; },
            { threshold: 0.05 }
        );
        if (containerRef.current) observer.observe(containerRef.current);

        const rotSpeed = isMobile ? 0.25 : 0.35; // deg/frame-equivalent
        let lastTs = 0;

        function tick(ts: number) {
            rafRef.current = requestAnimationFrame(tick);
            if (!isVisibleRef.current) return;

            const dt = Math.min(ts - lastTs, 50); // cap to avoid tab-switch jumps
            lastTs = ts;

            if (!isDraggingRef.current) {
                angleRef.current.y += (rotSpeed * dt) / 1000;
            }

            if (sphere) {
                sphere.style.transform =
                    `rotateX(${-angleRef.current.x}rad) rotateY(${angleRef.current.y}rad)`;
            }

            // Counter-rotate photo so it stays visually static
            const photo = photoRef.current;
            if (photo) {
                photo.style.transform =
                    `translate3d(0px, 0px, 0px) rotateY(${-angleRef.current.y}rad) rotateX(${angleRef.current.x}rad)`;
            }
        }

        rafRef.current = requestAnimationFrame((ts) => { lastTs = ts; tick(ts); });

        return () => {
            cancelAnimationFrame(rafRef.current);
            observer.disconnect();
        };
    }, [isMobile]);

    // ── Drag-to-rotate ──────────────────────────────────────────────────────────
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const onDown = (e: PointerEvent) => {
            isDraggingRef.current = true;
            lastPointerRef.current = { x: e.clientX, y: e.clientY };
            el.setPointerCapture(e.pointerId);
        };
        const onMove = (e: PointerEvent) => {
            if (!isDraggingRef.current) return;
            const dx = e.clientX - lastPointerRef.current.x;
            const dy = e.clientY - lastPointerRef.current.y;
            angleRef.current.y += dx * 0.006;
            // Negate dy so dragging up tilts the sphere upward (not inverted)
            angleRef.current.x = Math.max(-1.2, Math.min(1.2, angleRef.current.x - dy * 0.006));
            lastPointerRef.current = { x: e.clientX, y: e.clientY };
        };
        const onUp = () => { isDraggingRef.current = false; };

        el.addEventListener("pointerdown", onDown);
        el.addEventListener("pointermove", onMove);
        el.addEventListener("pointerup", onUp);
        el.addEventListener("pointercancel", onUp);

        return () => {
            el.removeEventListener("pointerdown", onDown);
            el.removeEventListener("pointermove", onMove);
            el.removeEventListener("pointerup", onUp);
            el.removeEventListener("pointercancel", onUp);
        };
    }, []);

    return (
        <div>
            {/* Sphere container */}
            <div
                ref={containerRef}
                className="relative select-none cursor-grab active:cursor-grabbing"
                style={{
                    width: containerSize,
                    height: containerSize,
                    perspective: containerSize * 2.8,
                    touchAction: "none", // prevent browser scroll from stealing touch events
                }}
                aria-label="Interactive 3D skill sphere — drag to rotate"
            >
                {/* Ambient glow */}
                <div
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(ellipse at center, rgba(124,255,103,0.07) 0%, rgba(82,39,255,0.05) 45%, transparent 70%)",
                    }}
                />

                {/* 3D sphere */}
                <div
                    ref={sphereRef}
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        transformStyle: "preserve-3d",
                        willChange: "transform",
                    }}
                >
                    {/* Center profile photo */}
                    <div
                        ref={photoRef}
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            width: isMobile ? 153 : 180,
                            height: isMobile ? 153 : 180,
                            marginTop: isMobile ? -76.5 : -90,
                            marginLeft: isMobile ? -76.5 : -90,
                            transform: "translate3d(0px, 0px, 0px)",
                            pointerEvents: "none",
                            borderRadius: 10,
                            overflow: "hidden",
                            border: "2px solid rgba(255,255,255,0.9)",
                            boxShadow: "0 0 18px rgba(255,255,255,0.2)",
                        }}
                    >
                        <img
                            src="/manav.jpeg"
                            alt="Manav"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                            }}
                        />
                    </div>
                    {skills.map((skill, i) => {
                        const { x, y, z } = points[i];
                        // Depth-based scaling: icons closer to viewer appear larger
                        const depth = (z + radius) / (2 * radius); // 0 → back, 1 → front
                        const iconSize = Math.round(26 + depth * 16); // 26–42 px
                        const opacity = 0.45 + depth * 0.55;         // 0.45–1.0

                        return (
                            <div
                                key={skill.label}
                                title={skill.label}
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    width: iconSize,
                                    height: iconSize,
                                    marginTop: -iconSize / 2,
                                    marginLeft: -iconSize / 2,
                                    transform: `translate3d(${x}px, ${y}px, ${z}px)`,
                                    color: skill.color,
                                    opacity,
                                    filter: `drop-shadow(0 0 ${Math.round(3 + depth * 7)}px ${skill.color}99)`,
                                    pointerEvents: "none",
                                }}
                            >
                                <img
                                    src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color.replace("#", "")}`}
                                    alt={skill.label}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        filter: "brightness(1.2)",
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
