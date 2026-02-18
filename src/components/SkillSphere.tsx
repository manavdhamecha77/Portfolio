"use client";

import { useEffect, useRef, useMemo } from "react";

// ── Skill definitions with clean inline SVGs ──────────────────────────────────
const SKILLS = [
    {
        label: "React",
        color: "#61DAFB",
        svg: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
                <ellipse cx="12" cy="12" rx="10" ry="3.8" />
                <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(120 12 12)" />
            </svg>
        ),
    },
    {
        label: "Next.js",
        color: "#ffffff",
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0z" />
            </svg>
        ),
    },
    {
        label: "TypeScript",
        color: "#3178C6",
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <rect x="0" y="0" width="24" height="24" rx="2" fill="currentColor" opacity="0.15" />
                <path d="M3 13.5h5v1.5H5.5V21H4V15H3v-1.5zM9 13.5h4.5c.83 0 1.5.67 1.5 1.5v1c0 .55-.3 1.03-.74 1.29L15.5 21H14l-1.13-3.5H10.5V21H9v-7.5zm1.5 1.5v2h2.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-2.5z" />
            </svg>
        ),
    },
    {
        label: "Python",
        color: "#3776AB",
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C9.27 2 7.5 3.09 7.5 4.5V6H12v.5H5.25C3.87 6.5 2.5 7.74 2.5 10.5c0 2.76 1.37 4 2.75 4H6.5v-2c0-1.38 1.12-2.5 2.5-2.5h6c1.1 0 2-.9 2-2V4.5C17 3.09 14.73 2 12 2zm-1.5 1.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" />
                <path d="M17.5 6.5v2c0 1.38-1.12 2.5-2.5 2.5H9c-1.1 0-2 .9-2 2v3.5C7 17.91 9.27 19 12 19s4.5-1.09 4.5-2.5V15H12v-.5h6.75c1.38 0 2.75-1.24 2.75-4s-1.37-4-2.75-4H17.5zm-4 9c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" />
            </svg>
        ),
    },
    {
        label: "Node.js",
        color: "#339933",
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1.85c-.27 0-.55.07-.78.2L3.78 6.35C3.3 6.6 3 7.1 3 7.65v8.69c0 .56.3 1.06.78 1.33l7.44 4.3c.46.26 1.05.26 1.51 0l7.44-4.3c.48-.27.78-.77.78-1.33V7.65c0-.55-.3-1.05-.78-1.3L12.78 2.05c-.23-.13-.51-.2-.78-.2zm0 2.1l6.5 3.75v7.5L12 18.95l-6.5-3.75V7.7L12 3.95z" />
            </svg>
        ),
    },
    {
        label: "TailwindCSS",
        color: "#06B6D4",
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C13.27 10.8 14.33 12 16.5 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.23 7.2 14.17 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C8.27 16.8 9.33 18 11.5 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.23 13.2 9.17 12 7 12z" />
            </svg>
        ),
    },
    {
        label: "MongoDB",
        color: "#47A248",
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C9.5 2 7 4 7 8c0 3 1.5 5 3 6.5V20l2 .5 2-.5v-5.5C15.5 13 17 11 17 8c0-4-2.5-6-5-6zm0 2c1.93 0 3 1.5 3 4 0 2.5-1.5 4-3 5.5C10.5 12 9 10.5 9 8c0-2.5 1.07-4 3-4z" />
            </svg>
        ),
    },
    {
        label: "PostgreSQL",
        color: "#4169E1",
        svg: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <ellipse cx="12" cy="7" rx="7" ry="4" />
                <path d="M5 7v5c0 2.21 3.13 4 7 4s7-1.79 7-4V7" />
                <path d="M5 12v5c0 2.21 3.13 4 7 4s7-1.79 7-4v-5" />
            </svg>
        ),
    },
    {
        label: "Docker",
        color: "#2496ED",
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 7h2v2h-2V7zm-3 0h2v2h-2V7zm-3 0h2v2H7V7zm3-3h2v2h-2V4zm3 3h2v2h-2V7zM4 10h2v2H4v-2zm3 0h2v2H7v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zM2 13c0 2.5 2.5 4 6 4h8c3 0 5-1.5 5-4H2zm18-1h2v1h-2v-1z" />
            </svg>
        ),
    },
    {
        label: "Git",
        color: "#F05032",
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.15 10.59L13.41.85a1.46 1.46 0 0 0-2.06 0L9.07 3.13l2.6 2.6a1.73 1.73 0 0 1 2.19 2.2l2.51 2.51a1.73 1.73 0 1 1-1.04.96L12.9 8.97v5.45a1.73 1.73 0 1 1-1.42.04V8.83a1.73 1.73 0 0 1-.94-2.27L8 4.05.85 11.2a1.46 1.46 0 0 0 0 2.06l9.74 9.74a1.46 1.46 0 0 0 2.06 0l10.5-10.5a1.46 1.46 0 0 0 0-1.91z" />
            </svg>
        ),
    },
    {
        label: "AWS",
        color: "#FF9900",
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 13.5c-2.5.5-4 1.5-4 2.5 0 1.38 2.69 2.5 6 2.5.9 0 1.75-.1 2.5-.26M17 13.5c2.5.5 4 1.5 4 2.5 0 1.38-2.69 2.5-6 2.5-.9 0-1.75-.1-2.5-.26" />
                <path d="M6 9l2 6 2-4 2 4 2-6" />
                <path d="M12 5C9 5 7 7 7 9.5c0 1 .3 1.9.8 2.6M12 5c3 0 5 2 5 4.5 0 1-.3 1.9-.8 2.6" />
            </svg>
        ),
    },
    {
        label: "GraphQL",
        color: "#E10098",
        svg: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" />
                <circle cx="12" cy="2" r="1.5" fill="currentColor" stroke="none" />
                <circle cx="21" cy="7" r="1.5" fill="currentColor" stroke="none" />
                <circle cx="21" cy="17" r="1.5" fill="currentColor" stroke="none" />
                <circle cx="12" cy="22" r="1.5" fill="currentColor" stroke="none" />
                <circle cx="3" cy="17" r="1.5" fill="currentColor" stroke="none" />
                <circle cx="3" cy="7" r="1.5" fill="currentColor" stroke="none" />
                <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        label: "Redis",
        color: "#DC382D",
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 15l10 4 10-4-10-4-10 4zm0-4l10 4 10-4-10-4-10 4zm10-8l10 4-10 4L2 7l10-4z" />
            </svg>
        ),
    },
    {
        label: "Figma",
        color: "#F24E1E",
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 2h4a4 4 0 0 1 0 8H8V2zm0 8h4a4 4 0 0 1 0 8H8v-8zm0 8h4a4 4 0 0 1-4 4v-4zm8-8a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
            </svg>
        ),
    },
    {
        label: "Linux",
        color: "#FCC624",
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a5 5 0 0 1 5 5c0 2-1 3.5-2 4.5V14l1 1v2l-2 1-1-1h-2l-1 1-2-1v-2l1-1v-2.5C8 10.5 7 9 7 7a5 5 0 0 1 5-5zm-1 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm3 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0zM8 17l-2 1v2h12v-2l-2-1H8z" />
            </svg>
        ),
    },
    {
        label: "Prisma",
        color: "#2D3748",
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 19.5L12 2l9 17.5H3zm9-14L5.5 18.5h13L12 5.5z" />
            </svg>
        ),
    },
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

export default function SkillSphere({ size = 360, mobileSize = 280 }: SkillSphereProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const sphereRef = useRef<HTMLDivElement>(null);
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
    const radius = containerSize / 2 - 24;
    const skillCount = isMobile ? 10 : SKILLS.length;
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
                    `rotateX(${angleRef.current.x}rad) rotateY(${angleRef.current.y}rad)`;
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
            angleRef.current.x = Math.max(-1.2, Math.min(1.2, angleRef.current.x + dy * 0.006));
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
                                {skill.svg}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
