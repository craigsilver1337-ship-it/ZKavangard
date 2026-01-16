'use client';

import { motion } from 'framer-motion';
import { CheckIcon, SparklesIcon } from '@heroicons/react/24/outline';

const plans = [
    {
        id: 'pro',
        name: 'VANGUARD SNIPER',
        badge: 'RECOMMENDED',
        price: '0.1%',
        period: '/ profit fee',
        description: 'Elite autonomous execution engine',
        features: [
            'Anti-MEV Stealth Mode (Jito)',
            'Zero-Latency ZK-Sniping',
            'Automated Profit Taking',
            'Copy-Trade Protection'
        ],
        buttonText: 'Deploy Sniper',
        highlight: true,
        color: 'from-blue-600 to-cyan-500'
    },
    {
        id: 'starter',
        name: 'SCOUT',
        badge: null,
        price: 'FREE',
        period: 'ACCESS',
        description: 'Basic intelligence unit',
        features: [
            'Standard RPC Node',
            'Manual Target Selection',
            'Public Transaction Pool',
            'Basic Portfolio Tracking'
        ],
        buttonText: 'Initialize Scout',
        highlight: false,
        color: 'from-gray-400 to-gray-600'
    },
    {
        id: 'teams',
        name: 'SWARM COMMANDER',
        badge: null,
        price: '0.05%',
        period: '/ tx fee',
        description: 'Orchestration for DAOs & Squads',
        features: [
            'Multi-Sig DAO Control',
            'Shared Strategy Vaults',
            'Treasury Management AI',
            'Role-Based Access'
        ],
        buttonText: 'Create Swarm',
        highlight: false,
        color: 'from-indigo-600 to-blue-500'
    },
    {
        id: 'enterprise',
        name: 'SHADOW OPERATOR',
        badge: null,
        price: 'CUSTOM',
        period: 'ACCESS',
        description: 'Institutional-grade shadow operations',
        features: [
            'Private RPC Uplink',
            'Dedicated ZK-Prover Nodes',
            'High-Frequency Execution',
            '24/7 Direct Support Line'
        ],
        buttonText: 'Contact High Command',
        highlight: false,
        color: 'from-purple-600 to-blue-600'
    }
];

export function HeroPricing() {
    return (
        <div className="w-full max-w-[1280px] mx-auto mt-24 mb-0 pointer-events-auto px-4 lg:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {plans.map((plan, index) => {
                    const colSpan = index === 0 ? 'lg:col-span-7' : index === 1 ? 'lg:col-span-5' : 'lg:col-span-6';
                    const blueNeon = { border: 'rgba(0, 122, 255, 0.7)', glow: 'rgba(0, 122, 255, 0.4)' };

                    return (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -10,
                                scale: 1.01,
                                transition: { duration: 0.2 }
                            }}
                            animate={{
                                borderColor: [
                                    'rgba(0, 122, 255, 0.1)',
                                    blueNeon.border,
                                    'rgba(0, 122, 255, 0.1)'
                                ],
                                boxShadow: [
                                    '0 0 0px rgba(0, 122, 255, 0)',
                                    `0 0 40px ${blueNeon.glow}`,
                                    '0 0 0px rgba(0, 122, 255, 0)'
                                ]
                            }}
                            transition={{
                                borderColor: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 },
                                boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }
                            }}
                            className={`
                                relative p-8 rounded-[32px] border-2 backdrop-blur-3xl transition-all duration-300 group flex flex-col overflow-hidden
                                ${colSpan}
                                ${plan.highlight ? 'bg-[#0f172a]/80 shadow-[inset_0_0_100px_rgba(30,58,138,0.2)]' : 'bg-black/60'}
                            `}
                        >
                            {/* Animated Background Mesh */}
                            <motion.div
                                className="absolute inset-0 opacity-20 pointer-events-none"
                                animate={{
                                    background: [
                                        `radial-gradient(circle at 20% 30%, rgba(0,122,255,0.15) 0%, transparent 50%)`,
                                        `radial-gradient(circle at 80% 70%, rgba(0,122,255,0.15) 0%, transparent 50%)`,
                                        `radial-gradient(circle at 20% 30%, rgba(0,122,255,0.15) 0%, transparent 50%)`,
                                    ]
                                }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            />

                            {/* Header: Badge & Button */}
                            <div className="flex justify-between items-start mb-10 relative z-10">
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-3">
                                        <motion.span
                                            className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase border ${plan.highlight ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 'bg-white/5 text-gray-400 border-white/5'}`}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            {plan.name}
                                        </motion.span>
                                        {plan.badge && (
                                            <motion.span
                                                className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                                                animate={{ scale: [1, 1.05, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            >
                                                <SparklesIcon className="w-3 h-3 animate-pulse" />
                                                {plan.badge}
                                            </motion.span>
                                        )}
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,122,255,0.5)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`
                                        hidden sm:block px-7 py-3 rounded-2xl font-bold text-sm transition-all duration-300
                                        ${plan.highlight
                                            ? 'bg-white text-black hover:bg-white/90'
                                            : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'}
                                    `}
                                >
                                    {plan.buttonText}
                                </motion.button>
                            </div>

                            {/* Main Content Area */}
                            <div className={`flex flex-col relative z-10 ${index === 0 ? 'lg:flex-row lg:items-end lg:gap-16' : ''}`}>

                                {/* Price Section with Character Animation */}
                                <div className="mb-10 flex-shrink-0">
                                    <div className="flex items-baseline gap-2">
                                        <motion.span
                                            className="text-6xl md:text-7xl font-black text-white tracking-tighter"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            {plan.price}
                                        </motion.span>
                                        <motion.span
                                            className="text-blue-500/80 font-bold text-xl uppercase tracking-tighter"
                                            animate={{ opacity: [0.5, 1, 0.5] }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                        >
                                            {plan.period}
                                        </motion.span>
                                    </div>
                                    <p className="text-gray-500 mt-2 font-medium text-sm max-w-[200px]">{plan.description}</p>
                                </div>

                                {/* Features List */}
                                <div className={`flex-1 ${index === 0 ? 'lg:mb-6' : ''}`}>
                                    <div className={`space-y-4 ${index === 0 ? 'lg:grid lg:grid-cols-2 lg:gap-x-10 lg:gap-y-4 lg:space-y-0' : ''}`}>
                                        {plan.features.map((feature, i) => (
                                            <motion.div
                                                key={i}
                                                className="flex items-center gap-4 group/item"
                                                initial={{ opacity: 0, x: 10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 + (i * 0.1) }}
                                                whileHover={{ x: 5 }}
                                            >
                                                <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover/item:border-blue-400 group-hover/item:bg-blue-500/20 transition-colors">
                                                    <CheckIcon className="w-3.5 h-3.5 text-blue-400" strokeWidth={4} />
                                                </div>
                                                <span className="text-gray-300 text-[15px] font-medium group-hover/item:text-white transition-colors">{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Scanline Effect */}
                            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,100,0.02))] z-20 bg-[length:100%_2px,3px_100%]" />

                            {/* Hover Edge Glow */}
                            <motion.div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                style={{
                                    background: 'radial-gradient(rect at center, transparent 0%, rgba(0,122,255,0.05) 100%)'
                                }}
                            />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
