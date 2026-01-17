'use client';

import React, { useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform, useMotionTemplate } from 'framer-motion';
import {
    ArrowUpRightIcon
} from '@heroicons/react/24/outline';

// --- High-End Custom Web3 Icons ---

const InstitutionalAlphaIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="3" fill="currentColor" className="animate-pulse" />
    </svg>
);

const DevExcellenceIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 10L9 12L6 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 14H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="18" cy="8" r="2" fill="currentColor" fillOpacity="0.2" className="animate-pulse" />
    </svg>
);

const YieldStreamIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M12 2V22M12 2L15 5M12 2L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="animate-spin-slow" />
        <path d="M12 18V22" stroke="currentColor" strokeWidth="2" opacity="0.5" />
    </svg>
);

const LiquidityVaultIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 8V12M12 12L10 10M12 12L14 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="15" r="1.5" fill="currentColor" />
    </svg>
);

const GovernanceProxyIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M12 3L4 7V17L12 21L20 17V7L12 3Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1" className="animate-pulse" />
        <path d="M12 8V5M12 19V16" stroke="currentColor" strokeWidth="1" />
    </svg>
);

const BuybackIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 3" />
    </svg>
);

const PriorityAccessIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M12 2L15 8H21L16 12L18 19L12 15L6 19L8 12L3 8H9L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
        <circle cx="12" cy="12" r="2" fill="currentColor" className="animate-pulse" />
    </svg>
);

const ProverServiceIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 12H16M12 8V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
    </svg>
);

const GaslessBridgeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M4 12H20M20 12L16 8M20 12L16 16M4 12L8 8M4 12L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="animate-spin-slow" />
    </svg>
);

const SwarmSDKIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M21 16V8L12 3L3 8V16L12 21L21 16Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <path d="M12 9V15M9 12H15" stroke="currentColor" strokeWidth="1" />
    </svg>
);

const SettlementIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 3V21M3 12H21" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <path d="M8 8L16 16M16 8L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const SandboxIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M4 12L12 4L20 12L12 20L4 12Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1" className="animate-pulse" />
        <path d="M12 8V5M12 19V16M8 12H5M19 12H16" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    </svg>
);

interface CardProps {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    items: { label: string; desc: string; icon: any; color?: string }[];
    ctaText: string;
    gradient: string;
    glowColor: string;
    stats: { label: string; value: string; trend?: string }[];
}

const BorderBeam = () => (
    <div className="absolute inset-0 p-[1px] rounded-3xl overflow-hidden pointer-events-none">
        <motion.div
            animate={{
                rotate: [0, 360],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
            }}
            className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_45deg,#3b82f6_90deg,transparent_135deg,transparent_360deg)] opacity-40"
        />
        <div className="absolute inset-[1px] bg-[#050505] rounded-[23px]" />
    </div>
);

const PerspectiveCard = ({ title, subtitle, icon, items, ctaText, gradient, glowColor, stats }: CardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const xSpring = useSpring(mouseX, springConfig);
    const ySpring = useSpring(mouseY, springConfig);

    const rotateX = useTransform(ySpring, [-0.5, 0.5], ["12deg", "-12deg"]);
    const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

    // Parallax layers influence
    const glowX = useTransform(xSpring, [-0.5, 0.5], ["30%", "70%"]);
    const glowY = useTransform(ySpring, [-0.5, 0.5], ["30%", "70%"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full min-h-[780px] group cursor-pointer"
        >
            {/* Background Glow Layer */}
            <motion.div
                style={{
                    background: useMotionTemplate`radial-gradient(circle at ${glowX} ${glowY}, ${glowColor}30 0%, transparent 70%)`,
                }}
                className="absolute inset-[-60px] rounded-[60px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            />

            <div className="relative h-full w-full rounded-3xl bg-black/80 backdrop-blur-[50px] border border-white/5 overflow-hidden flex flex-col p-10 transition-all duration-500 group-hover:border-white/20 shadow-2xl">
                <BorderBeam />

                {/* Parallax Background Glow */}
                <motion.div
                    style={{ translateZ: "-60px" }}
                    className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 bg-gradient-to-br ${gradient} blur-[120px]`}
                />


                {/* Floating 3D Decoration */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 15, 0],
                        scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-12 right-12 w-40 h-40 bg-white/[0.03] rounded-3xl border border-white/10 flex items-center justify-center backdrop-blur-md shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                    style={{ translateZ: "40px" }}
                >
                    <div className="w-20 h-20 opacity-20 blur-sm transform group-hover:scale-110 transition-transform duration-700">
                        {icon}
                    </div>
                </motion.div>

                {/* Header Section */}
                <div className="relative z-10 flex flex-col gap-8" style={{ transform: "translateZ(90px)" }}>
                    <motion.div
                        whileHover={{ scale: 1.15, rotate: 5, boxShadow: `0 0 30px ${glowColor}40` }}
                        className="w-24 h-24 rounded-3xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 transition-all duration-500"
                    >
                        <div className="w-12 h-12 text-white group-hover:text-blue-400 transition-colors drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                            {icon}
                        </div>
                    </motion.div>
                    <div>
                        <h3 className="text-5xl font-black text-white mb-4 tracking-tighter uppercase leading-tight drop-shadow-2xl">
                            {title}
                        </h3>
                        <div className="flex items-center gap-4">
                            <motion.span
                                animate={{ width: [0, 48, 32] }}
                                className="h-[2px] bg-blue-500"
                            />
                            <p className="text-blue-400 font-black uppercase tracking-[0.4em] text-[11px] opacity-80">
                                {subtitle}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Live Performance Widgets */}
                <div className="relative z-10 grid grid-cols-2 gap-6 mt-14 bg-white/[0.03] rounded-2xl p-6 border border-white/10 backdrop-blur-sm" style={{ transform: "translateZ(70px)" }}>
                    {stats.map((stat, i) => (
                        <div key={i} className="flex flex-col gap-1">
                            <span className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">{stat.label}</span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-2xl font-black text-white tabular-nums tracking-tighter">{stat.value}</span>
                                {stat.trend && (
                                    <div className="flex items-center text-[10px] font-bold text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20">
                                        {stat.trend}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Detailed Feature Matrix */}
                <div className="relative z-10 flex-1 flex flex-col gap-8 mt-12" style={{ transform: "translateZ(40px)" }}>
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="flex gap-6 items-start group/item relative"
                        >
                            <div className="relative shrink-0">
                                <div className="absolute inset-0 bg-blue-500/20 blur-lg opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                <div className="relative p-3 rounded-2xl bg-white/5 border border-white/10 group-hover/item:bg-blue-500/20 group-hover/item:border-blue-500/40 transition-all duration-300">
                                    <div className="w-6 h-6 text-gray-400 group-hover/item:text-white">
                                        <item.icon />
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 pb-4 border-b border-white/[0.03]">
                                <h4 className="text-[18px] font-black text-white group-hover/item:text-blue-400 transition-colors tracking-tight">
                                    {item.label}
                                </h4>
                                <p className="text-[14px] text-gray-400 font-medium leading-relaxed mt-1 group-hover/item:text-gray-200 transition-colors max-w-[90%]">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Interactive Action Footer */}
                <div className="relative z-10 mt-14" style={{ transform: "translateZ(110px)" }}>
                    <motion.div
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(59, 130, 246, 0.15)", borderColor: "rgba(59, 130, 246, 0.5)" }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-between w-full h-16 bg-white/5 rounded-2xl px-8 border border-white/10 transition-all duration-300 cursor-pointer overflow-hidden group/cta shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                    >
                        <div className="flex flex-col">
                            <span className="text-white font-black text-[12px] uppercase tracking-[0.2em]">{ctaText}</span>
                            <span className="text-[9px] text-blue-500/70 font-bold uppercase tracking-widest mt-0.5">Initialize Secure Connection</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="h-8 w-[1px] bg-white/10 group-hover/cta:bg-blue-500/30 transition-colors" />
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <ArrowUpRightIcon className="w-6 h-6 text-blue-500" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export function ValueProposition() {
    return (
        <section className="relative w-full py-48 bg-black overflow-hidden font-sans">
            {/* Animated Neon Blue Dot Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black" />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`,
                        backgroundSize: '32px 32px',
                        maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
                        WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'
                    }}
                />
                {/* Horizontal Neon Lines Accent */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-8">
                <div className="text-center mb-40">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#0a0a0a] border border-white/5 text-[10px] font-black uppercase tracking-[0.3em] mb-20 shadow-2xl"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                        <span className="text-blue-500/70">Next-Gen Core V3.5</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-center justify-center mb-16"
                    >
                        <h2 className="text-[10vw] md:text-[8vw] font-[1000] tracking-[-0.06em] leading-[0.85] uppercase italic select-none bg-gradient-to-b from-[#444] to-[#222] bg-clip-text text-transparent">
                            Dual-Engine
                        </h2>
                        <h2 className="text-[10vw] md:text-[8vw] font-[1000] tracking-[-0.06em] leading-[0.85] uppercase italic -mt-[1vw] select-none bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] bg-clip-text text-transparent">
                            Supremacy
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col gap-2 items-center"
                    >
                        <p className="text-white/90 max-w-4xl mx-auto text-base md:text-lg font-bold tracking-[0.14em] leading-tight italic uppercase">
                            Architecting the <span className="text-blue-500">bridge</span> between zero-<span className="text-blue-500">knowledge</span>
                        </p>
                        <p className="text-white/90 max-w-4xl mx-auto text-base md:text-lg font-bold tracking-[0.14em] leading-tight italic uppercase">
                            verification
                        </p>
                        <p className="text-white/90 max-w-4xl mx-auto text-base md:text-lg font-bold tracking-[0.14em] leading-tight italic uppercase">
                            <span className="text-blue-500">and</span> autonomous <span className="text-blue-500">agentic</span> intelligence.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-stretch">
                    {/* Path 1: Institutional Alpha */}
                    <PerspectiveCard
                        title="Institutional Alpha"
                        subtitle="Capital Velocity & Yield"
                        icon={<InstitutionalAlphaIcon />}
                        glowColor="#3b82f6"
                        gradient="from-blue-600/20 via-blue-500/10 to-transparent"
                        ctaText="Enter Investor Portal"
                        stats={[
                            { label: "Genesis APY", value: "31.42%", trend: "STABLE" },
                            { label: "Rev Share", value: "35 / 65", trend: "RATIO" }
                        ]}
                        items={[
                            {
                                icon: YieldStreamIcon,
                                label: "Real-Time Yield Streaming",
                                desc: "35% of all global system fees are dynamically streamed to stakers in USDC/SOL via our custom x402 revenue engine."
                            },
                            {
                                icon: LiquidityVaultIcon,
                                label: "Cross-Chain Liquidity Vaults",
                                desc: "Institutional-grade vaults spanning Cronos, SUI, and Solana, providing deep liquidity for RWA settlements."
                            },
                            {
                                icon: GovernanceProxyIcon,
                                label: "ZK-Governance Proxy",
                                desc: "Securely influence risk-weighting algorithms and strategic treasury allocations without revealing your voting footprint."
                            },
                            {
                                icon: BuybackIcon,
                                label: "Buyback-on-Performance",
                                desc: "Automated Lead Agent logic triggers systemic token buyback-and-burn cycles based on quarterly performance surplus."
                            },
                            {
                                icon: PriorityAccessIcon,
                                label: "Priority Pool Access",
                                desc: "Stakers holding >0.5% of supply gain early-stage access to hyper-scarce institutional RWA offerings and seed rounds."
                            }
                        ]}
                    />

                    {/* Path 2: Developer Ecosystem */}
                    <PerspectiveCard
                        title="Dev Excellence"
                        subtitle="Modular Proving Layers"
                        icon={<DevExcellenceIcon />}
                        glowColor="#22d3ee"
                        gradient="from-cyan-500/20 via-cyan-400/10 to-transparent"
                        ctaText="Initialize Protocol"
                        stats={[
                            { label: "Proof Latency", value: "< 3.8s", trend: "ULTRA" },
                            { label: "SDK Version", value: "V2.1.0", trend: "STABLE" }
                        ]}
                        items={[
                            {
                                icon: ProverServiceIcon,
                                label: "STARK-as-a-Service",
                                desc: "Access our military-grade FRI/AIR prover via high-speed API to verify computational logic for custom strategies."
                            },
                            {
                                icon: GaslessBridgeIcon,
                                label: "Atomic Gasless Bridge",
                                desc: "Zero-fee transaction orchestration for multi-chain dApps using our x402 and Sponsored Transaction frameworks."
                            },
                            {
                                icon: SwarmSDKIcon,
                                label: "Swarm Orchestration SDK",
                                desc: "Modular framework to build, train, and deploy specialized agents using our TypeScript and Rust core libraries."
                            },
                            {
                                icon: SettlementIcon,
                                label: "Omni-Chain Settlement",
                                desc: "Unified settlement layer allowing for cross-chain intent fulfillment and atomic asset swaps via ZK-authentication."
                            },
                            {
                                icon: SandboxIcon,
                                label: "Simulation Sandboxes",
                                desc: "High-fidelity Monte Carlo environment to backtest agent-driven hedging models before on-chain execution."
                            }
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}
