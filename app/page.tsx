"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Mail, LayoutTemplate, Smartphone, Database, X, Loader2, CheckCircle2, Code2 } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

/* ─── FORGELAB brand mark — molten ember bead + wordmark ─── */
function BrandMark({ size = "md" }: { size?: "sm" | "md" }) {
  const text = size === "sm" ? "text-lg" : "text-2xl";
  const bead = size === "sm" ? "w-2.5 h-2.5" : "w-3 h-3";
  return (
    <span className="group inline-flex items-center gap-2.5 select-none cursor-pointer">
      <span
        className={`${bead} rounded-full ember-bead bg-gradient-to-br from-amber-300 via-orange-500 to-rose-500 group-hover:scale-110 transition-transform`}
      />
      <span className={`${text} font-display font-bold tracking-tight text-white`}>
        FORGE<span className="text-ember-gradient">LAB</span>
        <sup className="text-ember-gradient text-[0.6em] font-bold">°</sup>
      </span>
    </span>
  );
}

type Project = {
  title: string;
  subtitle: string;
  year: string;
  description: string;
  tech: string[];
  demo: string;
  color: string;
  video?: string;
  youtube?: string;
  preview?: string;
  isMobile?: boolean;
  images?: string[];
  fullBleed?: boolean;
  render?: "kensho";
  fit?: "contain" | "responsive";
};

/* ─── KENSHO — responsive vector dashboard mockup (scales laptop → mobile) ─── */
function KenshoMockup() {
  return (
    <svg
      viewBox="0 0 1000 640"
      preserveAspectRatio="xMidYMid meet"
      className="absolute inset-0 w-full h-full"
      role="img"
      aria-label="KENSHO automotive platform dashboard"
    >
      <defs>
        <linearGradient id="k-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#06121c" />
          <stop offset="1" stopColor="#0a0a0b" />
        </linearGradient>
        <linearGradient id="k-accent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="k-car" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0ea5e9" />
          <stop offset="1" stopColor="#1e3a8a" />
        </linearGradient>
        <linearGradient id="k-hero" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0b1f2e" />
          <stop offset="1" stopColor="#0a1424" />
        </linearGradient>
        <radialGradient id="k-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#22d3ee" stopOpacity="0.55" />
          <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
        </radialGradient>
        <pattern id="k-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" />
        </pattern>
        <pattern id="k-map" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0V28" fill="none" stroke="#22d3ee" strokeOpacity="0.12" strokeWidth="1" />
        </pattern>
      </defs>

      {/* base */}
      <rect width="1000" height="640" fill="url(#k-bg)" />
      <rect width="1000" height="640" fill="url(#k-grid)" />
      <ellipse cx="250" cy="120" rx="380" ry="220" fill="url(#k-glow)" opacity="0.25" />

      {/* top bar */}
      <g fontFamily="var(--font-display), sans-serif">
        <circle cx="44" cy="44" r="7" fill="#22d3ee">
          <animate attributeName="opacity" values="1;0.4;1" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <text x="60" y="51" fill="#ffffff" fontSize="26" fontWeight="700" letterSpacing="1">KENSHO</text>
        <text x="500" y="50" fill="#94a3b8" fontSize="15" fontWeight="600" textAnchor="middle" letterSpacing="2">BUY · TEST DRIVE · TRACK</text>
        <rect x="836" y="26" width="138" height="36" rx="18" fill="#ffffff" fillOpacity="0.06" stroke="#ffffff" strokeOpacity="0.1" />
        <circle cx="858" cy="44" r="9" fill="url(#k-accent)" />
        <text x="876" y="50" fill="#e2e8f0" fontSize="15" fontWeight="600">₹ 2,40,000</text>
      </g>

      {/* HERO — featured car */}
      <g>
        <rect x="32" y="92" width="560" height="516" rx="24" fill="url(#k-hero)" stroke="#22d3ee" strokeOpacity="0.18" />
        <text x="64" y="150" fill="#67e8f9" fontSize="14" fontWeight="700" letterSpacing="3">FEATURED · 2025</text>
        <text x="64" y="196" fill="#ffffff" fontSize="42" fontWeight="700" fontFamily="var(--font-display), sans-serif">Aurora GT</text>
        <text x="64" y="226" fill="#94a3b8" fontSize="17" fontWeight="500">All-electric grand tourer</text>

        {/* car underglow */}
        <ellipse cx="312" cy="404" rx="210" ry="34" fill="url(#k-glow)">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite" />
        </ellipse>

        {/* modern EV coupe silhouette */}
        <g>
          <path
            d="M120 392 C140 360 176 344 214 340 L250 304 C262 292 280 286 300 286 L372 286 C398 286 420 298 438 318 L470 350 C492 354 506 366 512 390 C514 400 510 408 498 408 L470 408 C466 430 448 444 428 444 C408 444 390 430 386 408 L238 408 C234 430 216 444 196 444 C176 444 158 430 154 408 L130 408 C120 408 116 400 120 392 Z"
            fill="url(#k-car)"
            stroke="#67e8f9"
            strokeOpacity="0.5"
            strokeWidth="2"
          />
          <path d="M258 312 C268 300 282 296 298 296 L360 296 C378 296 392 304 404 318 L420 338 L250 338 Z" fill="#0b2335" stroke="#22d3ee" strokeOpacity="0.4" strokeWidth="2" />
          <circle cx="196" cy="430" r="26" fill="#0a0a0a" stroke="#38bdf8" strokeWidth="4" />
          <circle cx="428" cy="430" r="26" fill="#0a0a0a" stroke="#38bdf8" strokeWidth="4" />
          <rect x="486" y="372" width="26" height="10" rx="5" fill="#22d3ee">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.6s" repeatCount="indefinite" />
          </rect>
        </g>

        {/* spec chips */}
        <g fontFamily="var(--font-mono), monospace">
          <rect x="64" y="486" width="150" height="86" rx="14" fill="#ffffff" fillOpacity="0.05" />
          <text x="82" y="520" fill="#67e8f9" fontSize="26" fontWeight="700">620<tspan fontSize="13" fill="#94a3b8"> km</tspan></text>
          <text x="82" y="548" fill="#94a3b8" fontSize="13">RANGE</text>

          <rect x="226" y="486" width="150" height="86" rx="14" fill="#ffffff" fillOpacity="0.05" />
          <text x="244" y="520" fill="#67e8f9" fontSize="26" fontWeight="700">3.2<tspan fontSize="13" fill="#94a3b8"> s</tspan></text>
          <text x="244" y="548" fill="#94a3b8" fontSize="13">0–100</text>

          {/* CTA */}
          <rect x="388" y="486" width="172" height="86" rx="14" fill="url(#k-accent)" />
          <text x="474" y="524" fill="#06121c" fontSize="17" fontWeight="700" textAnchor="middle" fontFamily="var(--font-display), sans-serif">Book Test</text>
          <text x="474" y="548" fill="#06121c" fontSize="17" fontWeight="700" textAnchor="middle" fontFamily="var(--font-display), sans-serif">Drive →</text>
        </g>
      </g>

      {/* RIGHT — delivery tracking */}
      <g>
        <rect x="616" y="92" width="352" height="186" rx="20" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.08" />
        <text x="640" y="128" fill="#ffffff" fontSize="17" fontWeight="700" fontFamily="var(--font-display), sans-serif">Delivery Tracking</text>
        <text x="640" y="150" fill="#64748b" fontSize="13" fontFamily="var(--font-mono), monospace">ORDER #KN-2381</text>

        <line x1="652" y1="196" x2="932" y2="196" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
        <line x1="652" y1="196" x2="800" y2="196" stroke="url(#k-accent)" strokeWidth="4" strokeLinecap="round" />
        {[["652", "Booked", true], ["792", "Transit", true], ["932", "Delivered", false]].map(([cx, label, done], i) => (
          <g key={i}>
            <circle cx={cx as string} cy="196" r="11" fill={done ? "#22d3ee" : "#0a0a0a"} stroke={done ? "#22d3ee" : "#334155"} strokeWidth="3" />
            {i === 1 && <circle cx={cx as string} cy="196" r="11" fill="none" stroke="#22d3ee"><animate attributeName="r" values="11;20;11" dur="2s" repeatCount="indefinite" /><animate attributeName="opacity" values="0.8;0;0.8" dur="2s" repeatCount="indefinite" /></circle>}
            <text x={cx as string} y="232" fill={done ? "#cbd5e1" : "#64748b"} fontSize="13" textAnchor="middle" fontFamily="var(--font-mono), monospace">{label as string}</text>
          </g>
        ))}
      </g>

      {/* RIGHT — OLA map */}
      <g>
        <rect x="616" y="296" width="352" height="186" rx="20" fill="#08151f" stroke="#22d3ee" strokeOpacity="0.18" />
        <clipPath id="k-mapclip"><rect x="616" y="296" width="352" height="186" rx="20" /></clipPath>
        <g clipPath="url(#k-mapclip)">
          <rect x="616" y="296" width="352" height="186" fill="url(#k-map)" />
          <path id="k-route" d="M648 452 C700 452 720 360 792 360 S900 332 936 320" fill="none" stroke="url(#k-accent)" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 10">
            <animate attributeName="stroke-dashoffset" values="40;0" dur="1.2s" repeatCount="indefinite" />
          </path>
          <circle cx="648" cy="452" r="7" fill="#22d3ee" />
          <g>
            <circle cx="0" cy="0" r="9" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" />
            <animateMotion dur="5s" repeatCount="indefinite" rotate="auto">
              <mpath href="#k-route" />
            </animateMotion>
          </g>
          <path d="M928 312 l8 0 0 8" fill="none" />
          <circle cx="936" cy="320" r="9" fill="none" stroke="#f472b6" strokeWidth="3" />
        </g>
        <rect x="632" y="312" width="120" height="30" rx="15" fill="#0a0a0a" fillOpacity="0.7" />
        <text x="648" y="332" fill="#67e8f9" fontSize="13" fontWeight="600" fontFamily="var(--font-mono), monospace">OLA · ETA 12m</text>
      </g>

      {/* RIGHT — Razorpay payment */}
      <g>
        <rect x="616" y="500" width="352" height="108" rx="20" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.08" />
        <rect x="640" y="524" width="44" height="44" rx="12" fill="#0c1f3a" />
        <path d="M656 538 l10 0 -6 16 8 0 -12 18 4 -14 -8 0 z" fill="#3b82f6" />
        <text x="700" y="544" fill="#ffffff" fontSize="17" fontWeight="700" fontFamily="var(--font-display), sans-serif">Razorpay</text>
        <text x="700" y="566" fill="#64748b" fontSize="13" fontFamily="var(--font-mono), monospace">Booking secured</text>
        <rect x="846" y="528" width="100" height="36" rx="18" fill="#10b98122" stroke="#10b981" strokeOpacity="0.4" />
        <circle cx="868" cy="546" r="5" fill="#10b981" />
        <text x="882" y="551" fill="#34d399" fontSize="14" fontWeight="700" fontFamily="var(--font-mono), monospace">PAID</text>
      </g>
    </svg>
  );
}

function ProjectCard({ project, idx }: { project: Project; idx: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!project.images || project.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [project.images]);

  const handleMouseEnter = () => {
    setHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Project Visual */}
      <div className={`lg:col-span-7 h-[450px] md:h-[650px] w-full rounded-[2.5rem] overflow-hidden relative ${project.isMobile ? `bg-gradient-to-br ${project.color}` : `bg-gradient-to-br ${project.color} p-1`} shadow-2xl shadow-black/40 ring-1 ring-white/10 ${idx % 2 === 1 ? 'lg:order-last' : ''}`}
        style={project.isMobile ? {} : {}}>

        {project.isMobile ? (
          /* ─── MOBILE: Full bleed, award-site quality ─── */
          <div className="w-full h-full relative overflow-hidden flex items-center justify-center" style={{ perspective: '1200px' }}>

            {/* Deep ambient glow layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-600 via-pink-700 to-fuchsia-900" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(255,255,255,0.12),transparent)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_100%,rgba(251,113,133,0.3),transparent)]" />

            {/* Animated noise grain overlay */}
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")', backgroundSize: '128px' }} />

            {/* Giant watermark title */}
            <motion.h3
              animate={{ opacity: [0.06, 0.10, 0.06] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute text-[8rem] md:text-[11rem] font-display font-bold tracking-tighter text-white select-none pointer-events-none"
              style={{ transform: 'rotate(-12deg) scale(1.4)', letterSpacing: '-0.06em' }}
            >
              {project.title}
            </motion.h3>

            {/* Floating ambient particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/10 blur-sm"
                style={{ width: `${12 + i * 8}px`, height: `${12 + i * 8}px`, left: `${10 + i * 15}%`, top: `${15 + (i % 3) * 25}%` }}
                animate={{ y: [-12, 12, -12], opacity: [0.15, 0.4, 0.15], scale: [1, 1.2, 1] }}
                transition={{ duration: 3 + i * 0.7, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
              />
            ))}

            {/* Scale-fit wrapper — shrinks phone on small screens so it never crops; full size on desktop */}
            <div className="relative flex items-center justify-center scale-[0.72] sm:scale-[0.85] md:scale-100 transition-transform duration-500">

            {/* Phone glow halo */}
            <motion.div
              animate={{ scale: hovered ? 1.15 : 1, opacity: hovered ? 0.7 : 0.45 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute w-[280px] h-[560px] rounded-[3.5rem] bg-white/20 blur-[40px]"
              style={{ transform: 'rotateY(-12deg) rotateX(6deg)' }}
            />

            {/* The actual phone */}
            <motion.div
              animate={{
                rotateY: hovered ? -12 : -6,
                rotateX: hovered ? 6 : 3,
                y: hovered ? -20 : 0,
                scale: hovered ? 1.05 : 1,
              }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-20"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Phone shell */}
              <div
                className="relative w-[240px] h-[500px] rounded-[3rem] shadow-[0_60px_120px_-20px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.12),inset_0_0_0_2px_rgba(255,255,255,0.08)]"
                style={{
                  background: 'linear-gradient(145deg, #1c1c1e 0%, #2c2c2e 40%, #1a1a1c 100%)',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Side highlight */}
                <div className="absolute inset-0 rounded-[3rem] pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)' }} />

                {/* Screen bezel */}
                <div className="absolute inset-[10px] rounded-[2.5rem] overflow-hidden bg-black">
                  {/* Dynamic Island */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[80px] h-[26px] bg-black rounded-full z-50 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-[#1c1c1e]" />
                  </div>

                  {/* App screenshots */}
                  <div className="absolute inset-0">
                    {project.images && project.images.map((img, i) => (
                      <motion.div
                        key={img}
                        className="absolute inset-0"
                        animate={{ opacity: currentImageIndex === i ? 1 : 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                      >
                        <Image src={img} alt={`${project.title} screen ${i + 1}`} fill className="object-cover object-top" sizes="240px" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Screen shine */}
                  <div className="absolute inset-0 pointer-events-none rounded-[2.5rem]" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 60%)' }} />
                </div>

                {/* Side buttons (left) */}
                <div className="absolute left-[-3px] top-[100px] w-[3px] h-8 bg-[#3a3a3c] rounded-l-full" />
                <div className="absolute left-[-3px] top-[148px] w-[3px] h-12 bg-[#3a3a3c] rounded-l-full" />
                <div className="absolute left-[-3px] top-[208px] w-[3px] h-12 bg-[#3a3a3c] rounded-l-full" />
                {/* Power button (right) */}
                <div className="absolute right-[-3px] top-[160px] w-[3px] h-16 bg-[#3a3a3c] rounded-r-full" />
              </div>

              {/* Phone bottom reflection */}
              <div
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[180px] h-[60px] blur-[20px] opacity-30 rounded-full"
                style={{ background: 'radial-gradient(ellipse, rgba(244,63,94,0.6) 0%, transparent 70%)' }}
              />
            </motion.div>

            </div>

            {/* Dot indicators */}
            {project.images && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
                {project.images.map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ width: currentImageIndex === i ? 20 : 6, opacity: currentImageIndex === i ? 1 : 0.4 }}
                    transition={{ duration: 0.4 }}
                    className="h-1.5 rounded-full bg-white"
                  />
                ))}
              </div>
            )}
          </div>
        ) : project.fullBleed ? (
          /* ─── FLOATING WINDOW on gradient ─── */
          <div className="w-full h-full relative overflow-hidden rounded-[2.35rem] flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #1a1410 0%, #2a1c12 35%, #14100c 100%)' }}>

            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-[0.05] bg-grid-pattern-strong" />

            {/* Ambient ember glow blobs */}
            <div className="absolute top-[-20%] right-[-10%] w-72 h-72 rounded-full bg-orange-500/25 blur-[80px]" />
            <div className="absolute bottom-[-15%] left-[-5%] w-56 h-56 rounded-full bg-amber-400/15 blur-[60px]" />

            {/* Watermark */}
            <h3 className={`absolute text-7xl md:text-9xl font-display font-bold tracking-tighter bg-gradient-to-br ${project.color} bg-clip-text text-transparent opacity-20 transform -rotate-12 scale-150 select-none pointer-events-none`}>
              {project.title}
            </h3>

            {/* Floating image window */}
            <div
              className="relative z-20 w-[88%] h-[82%] rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] border border-white/15"
              style={{ transform: hovered ? 'scale(1.03) translateY(-14px)' : 'scale(1) translateY(0)', transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}
            >
              {project.images && project.images.map((img, i) => (
                <motion.div
                  key={img}
                  className="absolute inset-0"
                  animate={{ opacity: currentImageIndex === i ? 1 : 0 }}
                  transition={{ duration: 0.9, ease: 'easeInOut' }}
                >
                  <Image
                    src={img}
                    alt={`${project.title} screen ${i + 1}`}
                    fill
                    className={project.fit === 'contain' ? 'object-contain object-center' : 'object-cover object-center'}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
              ))}
            </div>

            {/* Slide indicators */}
            {project.images && project.images.length > 1 && (
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
                {project.images.map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ width: currentImageIndex === i ? 20 : 6, opacity: currentImageIndex === i ? 1 : 0.4 }}
                    transition={{ duration: 0.4 }}
                    className="h-1.5 rounded-full bg-orange-400/70"
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          /* ─── DESKTOP / WEB: window with browser chrome ─── */
          <div className="w-full h-full bg-[#0e0e10] backdrop-blur-xl rounded-[2.35rem] p-8 flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
            <div className="absolute inset-0 opacity-[0.05] bg-grid-pattern-strong" />
            <h3 className={`absolute text-7xl md:text-9xl font-display font-bold tracking-tighter bg-gradient-to-br ${project.color} bg-clip-text text-transparent opacity-20 transform -rotate-12 scale-150 select-none`}>
              {project.title}
            </h3>
            <div
              className="relative z-20 w-[85%] h-[80%] bg-[#0a0a0a] rounded-2xl shadow-2xl border border-white/10 flex flex-col overflow-hidden"
              style={{ transform: hovered ? 'scale(1.02) translateY(-16px)' : 'scale(1) translateY(0)', transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}
            >
              <div className="h-10 border-b border-white/10 flex items-center px-5 gap-2 bg-[#141416] shrink-0">
                <div className="w-3 h-3 rounded-full bg-rose-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <div className="flex-1 relative overflow-hidden bg-[#0a0a0a]">
                {project.video && (
                  <video ref={videoRef} src={project.video} loop muted playsInline preload="metadata"
                    style={{ opacity: hovered ? 1 : 0, transition: 'opacity 0.5s ease', position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: project.fit === 'contain' ? 'contain' : 'cover', zIndex: 20 }} />
                )}
                {project.youtube && hovered && (
                  <div style={{ position: 'absolute', inset: 0, zIndex: 20, overflow: 'hidden' }}>
                    <iframe
                      title={`${project.title} demo`}
                      src={`https://www.youtube-nocookie.com/embed/${project.youtube}?autoplay=1&mute=1&loop=1&playlist=${project.youtube}&controls=0&modestbranding=1&rel=0&playsinline=1&disablekb=1&fs=0&iv_load_policy=3&showinfo=0`}
                      allow="autoplay; encrypted-media; picture-in-picture"
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0, pointerEvents: 'none' }}
                    />
                    {/* Shield: absorbs all pointer events so YouTube never shows its hover controls/logo overlay */}
                    <div style={{ position: 'absolute', inset: 0, zIndex: 21 }} />
                  </div>
                )}
                <div style={{ opacity: hovered && (project.video || project.youtube) ? 0 : 1, transition: 'opacity 0.5s ease', position: 'absolute', inset: 0 }}>
                  {project.render === 'kensho' ? (
                    <KenshoMockup />
                  ) : project.preview ? (
                    <Image src={project.preview} alt={`${project.title} preview`} fill className={project.fit === 'contain' ? 'object-contain object-center' : project.fit === 'responsive' ? 'object-contain object-center lg:object-cover lg:object-top' : 'object-cover object-top'} sizes="(max-width: 768px) 100vw, 50vw" />
                  ) : (
                    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%' }}>
                      <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${project.color} rounded-full blur-[80px] opacity-30`} />
                      <div className="h-6 w-1/3 bg-white/10 rounded-full" />
                      <div className="h-32 w-full bg-white/[0.04] rounded-xl border border-white/10" />
                      <div style={{ display: 'flex', gap: '1rem' }}>
                        <div className="h-24 flex-1 bg-white/[0.04] rounded-xl border border-white/10" />
                        <div className="h-24 flex-1 bg-white/[0.04] rounded-xl border border-white/10" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="lg:col-span-5 flex flex-col gap-8 lg:px-6">
        <div className="flex items-center gap-4 text-sm font-bold text-slate-500 tracking-widest uppercase font-mono">
          <span>{project.year}</span>
          <span className="w-12 h-px bg-white/15" />
          <span className={`bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>{project.subtitle}</span>
        </div>

        <h3
          className="text-5xl md:text-6xl font-display font-bold tracking-tighter text-white transition-transform duration-500"
          style={{ transform: hovered ? 'translateX(8px)' : 'translateX(0)' }}
        >
          {project.title}
        </h3>
        <p className="text-xl text-slate-400 leading-relaxed font-medium">{project.description}</p>

        <div className="flex flex-wrap gap-3 mt-2">
          {project.tech.map(tech => (
            <span key={tech} className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-xs font-bold text-slate-300 transition-colors hover:border-[var(--ember)]/50 hover:text-white">
              {tech}
            </span>
          ))}
        </div>

        {project.demo.startsWith('/') ? (
          <Link
            href={project.demo}
            className="mt-8 inline-flex items-center gap-3 text-xl font-bold text-white hover:text-[var(--ember)] transition-colors w-fit group/link"
          >
            View Live Project
            <ArrowUpRight className="w-6 h-6 transform group-hover/link:translate-x-1.5 group-hover/link:-translate-y-1.5 transition-transform" />
          </Link>
        ) : (
          <a
            href={project.demo.includes('http') ? project.demo : `https://${project.demo}`}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 text-xl font-bold text-white hover:text-[var(--ember)] transition-colors w-fit group/link"
          >
            View Live Project
            <ArrowUpRight className="w-6 h-6 transform group-hover/link:translate-x-1.5 group-hover/link:-translate-y-1.5 transition-transform" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

const PROJECTS = [
  {
    title: "PitStop",
    subtitle: "AI Car Service App",
    year: "2025",
    description: "Mobile application automating car service analysis using LLM-based APIs for AI-driven self-inspection and smart recommendations with real-time status tracking.",
    tech: ["React Native", "TypeScript", "LLM APIs", "Node.js"],
    demo: "/projects/pitstop",
    color: "from-rose-500 to-pink-500",
    isMobile: true,
    images: ["/pitstop-images/image1.jpg", "/pitstop-images/image2.jpg", "/pitstop-images/image3.jpg", "/pitstop-images/image4.jpg", "/pitstop-images/image5.jpg"]
  },
  {
    title: "ONELOGICA",
    subtitle: "Corporate Website",
    year: "2025",
    description: "Official company website showcasing products and services. Engineered for SEO, blazing-fast performance, and includes direct application workflows.",
    tech: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
    demo: "onelogica.com",
    color: "from-emerald-500 to-teal-400",
    youtube: "uvWA9x1fD0Y",
    preview: "/onelogica-preview.png",
    fit: "responsive" as const
  },
  {
    title: "KENSHO",
    subtitle: "Automotive Platform",
    year: "2025",
    description: "End-to-end automotive platform enabling test drive booking, car purchase, document handling, and delivery tracking. Integrated AI workflows, Razorpay, and OLA Maps.",
    tech: ["React Native", "React.js", "Node.js", "LLM APIs", "Razorpay"],
    demo: "https://drive.google.com/file/d/1rlETR4xfYBD1OM4DhlOmu8I_sr5LP9ta/view",
    color: "from-blue-500 to-cyan-400",
    render: "kensho" as const
  },
  {
    title: "Productivity Tracker",
    subtitle: "Employee Management",
    year: "2026",
    description: "A comprehensive timesheet and productivity tracking dashboard to monitor employee tasks, meetings, learnings, and daily shift details with real-time analytics.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Azure"],
    demo: "productivitytrackerui-btdrd8efc4hkdvdh.centralindia-01.azurewebsites.net/dashboard",
    color: "from-amber-500 to-orange-400",
    fullBleed: true,
    images: ["/productivity-timesheet.png"],
    fit: "contain" as const
  },
  {
    title: "Eutair",
    subtitle: "Utility Engineering",
    year: "2024",
    description: "ISO 9001:2015 certified future-ready utility engineering. Designing, supplying, erecting, and commissioning complete compressed air systems, heat exchangers, and cooling towers.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    demo: "eutair.com",
    color: "from-cyan-500 to-blue-500",
    preview: "/eutair.png",
    fit: "contain" as const
  },
  {
    title: "IndiHiring",
    subtitle: "Recruitment Portal",
    year: "2024",
    description: "Client-based job portal (eutair.com) with dashboards for candidates, recruiters, and admin. Implemented role-based access, Firebase Auth, and Redux state management.",
    tech: ["React.js", "Redux Toolkit", "Firebase", "Tailwind CSS"],
    demo: "indiahirings.com",
    color: "from-indigo-500 to-violet-500",
    preview: "/indiahiring.png",
    fit: "contain" as const
  }
];

type SendStatus = "idle" | "sending" | "sent" | "error";

function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<SendStatus>("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-[#101012] text-white rounded-[2rem] border border-white/10 shadow-2xl p-8 md:p-10 overflow-hidden"
          >
            {/* ember glow accent */}
            <div className="absolute -top-24 -right-16 w-56 h-56 rounded-full bg-[var(--ember)]/20 blur-[80px] pointer-events-none" />

            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {status === "sent" ? (
              <div className="flex flex-col items-center text-center py-8 gap-5 relative z-10">
                <CheckCircle2 className="w-16 h-16 text-emerald-400" />
                <h3 className="text-3xl font-display font-bold tracking-tight">Message sent!</h3>
                <p className="text-slate-400 font-medium">
                  Thanks for reaching out — we&apos;ll get back to you soon.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 px-8 py-3 bg-white text-slate-950 rounded-full font-bold hover:bg-slate-200 transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="relative z-10">
                <div className="mb-5"><BrandMark size="sm" /></div>
                <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tighter mb-2">Start a project</h3>
                <p className="text-slate-400 font-medium mb-7">
                  Drop your email and a message — it lands straight in our inbox. get instent revert back. Or connect with our experts instantly — call us at +91 7842013134.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 font-medium focus:outline-none focus:border-[var(--ember)]/60 focus:bg-white/[0.07] transition-colors"
                  />
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 font-medium focus:outline-none focus:border-[var(--ember)]/60 focus:bg-white/[0.07] transition-colors"
                  />
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 font-medium resize-none focus:outline-none focus:border-[var(--ember)]/60 focus:bg-white/[0.07] transition-colors"
                  />

                  {status === "error" && (
                    <p className="text-rose-400 text-sm font-bold">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="mt-2 w-full px-8 py-4 bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 text-white rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:brightness-110 transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_8px_30px_-8px_rgba(255,106,61,0.6)]"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        <Mail className="w-5 h-5" /> Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const [contactOpen, setContactOpen] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    containerRef.current.style.setProperty("--mouse-x", `${x}px`);
    containerRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="cursor-glow-container relative min-h-screen w-full overflow-hidden bg-[#0a0a0b] text-slate-100 bg-grid-pattern selection:bg-[var(--ember)]/30"
    >
      {/* Background Ambience */}
      <div className="cursor-glow-element" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-xl bg-[#0a0a0b]/70 border-b border-white/[0.06]">
        <a href="#top" className="hover:scale-105 transition-transform"><BrandMark /></a>
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-400 font-mono tracking-wide">
          <a href="#work" className="hover:text-white transition-colors">WORK</a>
          <a href="#skills" className="hover:text-white transition-colors">CAPABILITIES</a>
          <button onClick={() => setContactOpen(true)} className="px-6 py-3 bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 text-white rounded-full hover:brightness-110 transition-all flex items-center gap-2 hover:shadow-[0_8px_30px_-8px_rgba(255,106,61,0.6)] hover:-translate-y-0.5 active:scale-95 font-sans">
            Start a Project <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </nav>

      <main id="top" className="relative pt-28 pb-24">

        {/* HERO SECTION */}
        <section className="min-h-[85vh] flex flex-col justify-center px-6 md:px-12 relative z-10 overflow-hidden">
          <div className="absolute -left-[10%] -top-[10%] w-[120%] h-[120%] bg-grid-pattern-strong pointer-events-none opacity-40 z-[-1]" style={{ maskImage: "radial-gradient(circle at 30% 30%, black 0%, transparent 50%)", WebkitMaskImage: "radial-gradient(circle at 30% 30%, black 0%, transparent 50%)" }} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-[1600px] mx-auto w-full">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 font-bold text-xs mb-8 uppercase tracking-widest font-mono"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                </span>
                Studio open for new work
              </motion.div>

              <h1 className="text-[13vw] sm:text-[10vw] md:text-[8rem] lg:text-[7rem] xl:text-[8.5rem] leading-[0.85] font-extrabold tracking-tighter text-white drop-shadow-sm">
                We forge <br />
                <span className="text-ember-gradient">
                  premium
                </span> <br />
                digital products.
              </h1>

              <p className="mt-10 text-xl md:text-2xl text-slate-400 max-w-2xl font-medium leading-relaxed">
Got an idea? <span className="text-white font-bold">We make it real — fast.</span> FORGELAB designs, builds, and ships your <span className="text-white font-bold">web</span> & <span className="text-white font-bold">mobile</span> app in <span className="text-white font-bold">React Native</span> and <span className="text-white font-bold">Next.js</span> — premium, AI-ready products that wow clients and scale effortlessly.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button onClick={() => setContactOpen(true)} className="px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-slate-200 transition-colors active:scale-95">
                  Start a Project <ArrowUpRight className="w-5 h-5" />
                </button>
                <a href="#work" className="px-8 py-4 rounded-full font-bold text-lg text-white border border-white/15 hover:border-[var(--ember)]/60 hover:text-[var(--ember)] transition-colors">
                  View Work
                </a>
              </div>
            </motion.div>

            {/* Right Content - Floating 3D Composition */}
            <div className="hidden lg:flex relative h-[700px] w-full items-center justify-center pointer-events-none select-none">

              {/* Decorative Blur Orbs */}
              <div className="absolute top-1/4 right-[10%] w-64 h-64 bg-orange-500/20 blur-[80px] rounded-full" />
              <div className="absolute bottom-1/4 left-[10%] w-72 h-72 bg-violet-500/20 blur-[80px] rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-rose-500/10 blur-[100px] rounded-full" />

              <div className="relative w-full h-full" style={{ perspective: "1200px" }}>

                {/* Floating Element 1 - Top Right Component */}
                <motion.div
                  animate={{ y: [-15, 15, -15], rotateZ: [2, -2, 2] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[10%] right-[5%] w-72 bg-white/[0.06] backdrop-blur-xl rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] border border-white/10 p-5 flex flex-col gap-4 z-10"
                  style={{ transform: "translateZ(80px) rotateY(-15deg)" }}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-500 to-rose-500 shadow-inner flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-white/30 backdrop-blur-sm" />
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                      <div className="h-3 w-3/4 bg-white/20 rounded-full" />
                      <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-2.5">
                    <div className="h-2 w-full bg-white/10 rounded-full" />
                    <div className="h-2 w-full bg-white/10 rounded-full" />
                    <div className="h-2 w-4/5 bg-white/10 rounded-full" />
                  </div>
                  <div className="mt-2 pt-4 border-t border-white/10 flex justify-between items-center">
                     <div className="px-3 py-1 bg-[var(--ember)]/15 text-[var(--ember)] text-[10px] font-bold rounded-full">Shipped</div>
                     <div className="flex -space-x-2">
                       <div className="w-7 h-7 rounded-full bg-white/15 border-2 border-[#101012] shadow-sm" />
                       <div className="w-7 h-7 rounded-full bg-white/25 border-2 border-[#101012] shadow-sm" />
                       <div className="w-7 h-7 rounded-full bg-white/35 border-2 border-[#101012] shadow-sm flex items-center justify-center text-[8px] font-bold text-white">+3</div>
                     </div>
                  </div>
                </motion.div>

                {/* Floating Element 2 - Main Center Image (Web App Mockup) */}
                <motion.div
                  animate={{ y: [20, -20, 20] }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] aspect-[4/3] rounded-[2rem] shadow-[0_30px_60px_-20px_rgba(255,106,61,0.3)] border-4 border-white/10 overflow-hidden bg-[#101012] z-20"
                  style={{ transform: "translateZ(120px) rotateY(-8deg) rotateX(5deg) translateX(-50%) translateY(-50%)", transformOrigin: "center center" }}
                >
                  <Image src="/web_app_ui.png" alt="Dashboard Mockup" fill className="object-cover scale-[1.13]" priority />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--ember)]/10 to-transparent pointer-events-none" />
                </motion.div>

                {/* Floating Element 3 - Bottom Left Stats Card */}
                <motion.div
                  animate={{ y: [-15, 15, -15], rotateZ: [-4, 4, -4] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute bottom-[10%] left-[5%] w-64 p-7 bg-[#101012] text-white rounded-[2rem] shadow-2xl border border-white/10 z-30"
                  style={{ transform: "translateZ(180px) rotateY(15deg)" }}
                >
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full ember-bead bg-gradient-to-br from-amber-300 via-orange-500 to-rose-500" />
                      <span className="text-xs font-bold text-slate-300 uppercase tracking-widest font-mono">Services</span>
                    </div>
                    <Code2 className="w-5 h-5 text-slate-500" />
                  </div>

                  <div className="font-mono text-sm space-y-3.5">
                    {[
                      { label: "Mobile App", c: "bg-cyan-400" },
                      { label: "Web App", c: "bg-white" },
                      { label: "Desktop App", c: "bg-emerald-400" },
                      { label: "AI Integration", c: "bg-blue-400" },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center gap-3">
                        <span className={`w-2 h-2 rounded-full ${row.c}`} />
                        <span className="text-slate-200 font-medium">{row.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2.5 text-xs font-mono text-slate-400">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    Studio · Online
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="work" className="px-6 md:px-12 py-32 relative z-10 max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20 flex items-end justify-between border-b border-white/10 pb-8"
          >
            <div>
              <span className="text-[var(--ember)] font-mono font-bold text-sm tracking-widest uppercase">/ Selected Builds</span>
              <h2 className="mt-3 text-5xl md:text-7xl font-display font-bold tracking-tighter text-white">Work from the forge</h2>
            </div>
            <p className="text-slate-500 font-mono font-bold hidden md:block tracking-widest text-lg">01 — 06</p>
          </motion.div>

          <div className="flex flex-col gap-32">
            {PROJECTS.map((project, idx) => (
              <ProjectCard key={project.title} project={project} idx={idx} />
            ))}
          </div>
        </section>

        {/* CAPABILITIES / BENTO SECTION */}
        <section id="skills" className="px-6 md:px-12 py-32 relative z-10 bg-[#0c0c0e] border-y border-white/[0.06]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <span className="text-[var(--ember)] font-mono font-bold text-sm tracking-widest uppercase">/ Capabilities</span>
              <h2 className="mt-3 text-5xl md:text-6xl font-display font-bold tracking-tighter text-white mb-6">What we forge</h2>
              <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">The core technologies and frameworks the studio uses to engineer premium digital products.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Frontend Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white/[0.03] p-10 rounded-[2rem] border border-white/10 hover:border-[var(--ember)]/40 flex flex-col gap-8 transition-all"
              >
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[var(--ember)] group-hover:scale-110 transition-transform">
                  <LayoutTemplate className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-display font-bold mb-4 tracking-tight text-white">Frontend</h3>
                  <p className="text-slate-400 font-medium text-lg leading-relaxed">Pixel-perfect, highly responsive interfaces with seamless interactions and motion.</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {['React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Redux Toolkit'].map(t => (
                    <span key={t} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-slate-300">{t}</span>
                  ))}
                </div>
              </motion.div>

              {/* Mobile Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white/[0.03] p-10 rounded-[2rem] border border-white/10 hover:border-pink-500/40 flex flex-col gap-8 transition-all"
              >
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-display font-bold mb-4 tracking-tight text-white">Mobile Apps</h3>
                  <p className="text-slate-400 font-medium text-lg leading-relaxed">Cross-platform mobile experiences with native-like performance and intuitive UX.</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {['React Native', 'Expo', 'Mobile UI/UX', 'App Store Deploy', 'Maps API'].map(t => (
                    <span key={t} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-slate-300">{t}</span>
                  ))}
                </div>
              </motion.div>

              {/* Backend & Integrations */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white/[0.03] p-10 rounded-[2rem] border border-white/10 hover:border-emerald-500/40 flex flex-col gap-8 transition-all"
              >
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Database className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-display font-bold mb-4 tracking-tight text-white">Backend & AI</h3>
                  <p className="text-slate-400 font-medium text-lg leading-relaxed">Robust APIs, AI/LLMs, and payment gateways for end-to-end functionality.</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {['Node.js', 'LLM APIs', 'Firebase', 'Razorpay', 'TypeScript'].map(t => (
                    <span key={t} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-slate-300">{t}</span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER / CONTACT */}
      <footer id="contact" className="relative z-20 bg-black text-white overflow-hidden rounded-t-[4rem] border-t border-white/10">
        {/* Glow behind footer */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-full max-w-5xl bg-gradient-to-b from-[var(--ember)]/20 to-violet-500/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-40 pb-16 relative z-10 flex flex-col items-center text-center">
          <span className="text-[var(--ember)] font-mono font-bold text-sm tracking-widest uppercase mb-6">/ Let&apos;s build</span>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-[15vw] md:text-[10rem] font-bold tracking-tighter leading-[0.85] mb-12"
          >
            Forge with <span className="text-ember-gradient">us.</span>
          </motion.h2>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-16 font-medium leading-relaxed">
            FORGELAB is open for freelance projects and new partnerships. Tell us what you&apos;re building — let&apos;s ship something extraordinary.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setContactOpen(true)}
            className="px-12 py-6 bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 text-white rounded-full font-bold text-2xl flex items-center gap-4 shadow-[0_0_80px_rgba(255,106,61,0.3)] hover:shadow-[0_0_100px_rgba(255,106,61,0.5)] transition-shadow"
          >
            <Mail className="w-8 h-8" /> Start a Project
          </motion.button>

          <div className="w-full h-px bg-white/10 mt-40 mb-10" />

          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-sm font-bold tracking-widest uppercase font-mono">
            <div className="flex items-center gap-4">
              <BrandMark size="sm" />
              <span className="hidden md:inline text-slate-600">© {new Date().getFullYear()} — All rights reserved.</span>
            </div>
            <div className="flex items-center gap-8">
              <a href="https://github.com/AbhinavSenGitHub" className="hover:text-white transition-colors flex items-center gap-2"><GithubIcon className="w-5 h-5"/> GitHub</a>
              <a href="https://www.linkedin.com/in/abhinav-sen-975a9b222/" className="hover:text-white transition-colors flex items-center gap-2"><LinkedinIcon className="w-5 h-5"/> LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
