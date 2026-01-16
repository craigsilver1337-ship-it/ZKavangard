'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowUpRightIcon
} from '@heroicons/react/24/outline';

interface FeatureCardProps {
    title: string;
    description: string;
    icon: any;
    accentColor: string;
    delay: number;
    details: string[];
}

const FeatureCard = ({ title, description, icon: Icon, accentColor, delay, details }: FeatureCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.16, 1, 0.3, 1]
            }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative h-full rounded-[40px] bg-[#050505] border border-white/5 p-10 md:p-12 overflow-hidden transition-all duration-700 hover:border-white/20 shadow-2xl flex flex-col"
        >
            {/* Ambient Background Glow */}
            <div
                className="absolute -top-32 -right-32 w-80 h-80 blur-[130px] rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-1000 pointer-events-none"
                style={{ backgroundColor: accentColor }}
            />

            {/* Card Content */}
            <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-12">
                    <div
                        className="w-16 h-16 rounded-3xl flex items-center justify-center border border-white/10 bg-white/5 transition-all duration-500 group-hover:scale-125 group-hover:rotate-6 shadow-2xl shadow-black/80"
                        style={{ color: accentColor }}
                    >
                        <div className="w-10 h-10">
                            <Icon />
                        </div>
                    </div>
                    <motion.div
                        whileHover={{ rotate: 45, scale: 1.1 }}
                        className="p-3.5 rounded-full border border-white/5 text-gray-700 bg-white/5 group-hover:text-white group-hover:border-white/20 transition-all cursor-pointer shadow-xl"
                    >
                        <ArrowUpRightIcon className="w-6 h-6" />
                    </motion.div>
                </div>

                <h3 className="text-4xl md:text-5xl font-[1000] text-white tracking-tighter mb-6 uppercase italic leading-[0.85]">
                    {title}
                </h3>

                <p className="text-xl text-gray-400 font-bold leading-relaxed mb-12 opacity-70 group-hover:opacity-100 transition-opacity max-w-[95%] italic">
                    {description}
                </p>

                {/* Technical Details List */}
                <div className="mt-auto pt-10 border-t border-white/5 grid grid-cols-1 gap-5">
                    {details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-4 group/item">
                            <motion.div
                                initial={{ scale: 1 }}
                                whileInView={{ scale: [1, 1.5, 1] }}
                                transition={{ repeat: Infinity, duration: 2, delay: idx * 0.2 }}
                                className="w-2 h-2 rounded-full shadow-[0_0_10px_currentColor]"
                                style={{ backgroundColor: accentColor, color: accentColor }}
                            />
                            <span className="text-[11px] font-[1000] uppercase tracking-[0.3em] text-gray-500 group-hover:text-white transition-colors duration-300">
                                {detail}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Hover Shine Effect */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1500" />
        </motion.div>
    );
};

// --- Refined Tier-1 Web3 Icons ---

const ZKShieldIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 11V15M12 15L10 13M12 15L14 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.4" />
    </svg>
);

const AIBrainIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.3" />
        <path d="M12 8L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 12L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" className="animate-pulse" />
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
    </svg>
);

const AnalyticsRadarIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M3 20H21V18H3V20Z" fill="currentColor" fillOpacity="0.1" />
        <path d="M4 16L8 10L12 13L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="4" r="1.5" fill="currentColor" />
        <circle cx="4" cy="16" r="1" fill="currentColor" opacity="0.5" />
        <path d="M4 20V16M12 20V13M20 20V4" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.3" />
    </svg>
);

const QuantumLatticeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M12 2L15 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7V5M12 19V17M7 12H5M19 12H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const features = [
    {
        icon: ZKShieldIcon,
        title: 'ZK Proofs',
        description: 'Zero-knowledge verification for uncompromised privacy and computational integrity.',
        accentColor: '#3b82f6',
        details: [
            'Offchain verification',
            'State transition privacy',
            'Scalable trustlessness'
        ]
    },
    {
        icon: AIBrainIcon,
        title: 'AI Agents',
        description: 'Multi-agent autonomous systems executing real-time yield harvesting and risk mitigation.',
        accentColor: '#10b981',
        details: [
            'Autonomous monitoring',
            'Dynamic rebalancing',
            'Neural swarms core'
        ]
    },
    {
        icon: AnalyticsRadarIcon,
        title: 'Live Analytics',
        description: 'Sub-second latency updates on global risk vectors and institutional liquidity flows.',
        accentColor: '#f59e0b',
        details: [
            'Slippage heatmaps',
            'Volatility modeling',
            'Signal aggregation'
        ]
    },
    {
        icon: QuantumLatticeIcon,
        title: 'Quantum STARK',
        description: 'Post-quantum cryptographic primitives securing assets against next-gen compute threats.',
        accentColor: '#8b5cf6',
        details: [
            'Shor-resistant hashes',
            'Lattice foundations',
            'Future-proof security'
        ]
    }
];

export function Features() {
    return (
        <section className="relative w-full py-48 overflow-hidden bg-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            icon={feature.icon}
                            accentColor={feature.accentColor}
                            delay={index * 0.15}
                            details={feature.details}
                        />
                    ))}
                </div>
            </div>

            {/* Ambient Lighting */}
            <div className="absolute top-1/4 -left-20 w-[700px] h-[700px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-[700px] h-[700px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

            {/* Section Divider Line (Matching ValueProposition Style) */}
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

            {/* Decorative Grid Accent */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        </section>
    );
}
