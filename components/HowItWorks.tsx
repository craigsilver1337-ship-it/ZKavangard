'use client';

import { motion } from 'framer-motion';
import {
  WalletIcon,
  ChartBarIcon,
  BoltIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const steps = [
  {
    number: '01',
    title: 'Protocol Initialization',
    description: 'Establish secure ZK-handshake with your non-custodial wallet.',
    detail: 'Authorization Phase',
    icon: WalletIcon,
    color: '#3b82f6' // Blue
  },
  {
    number: '02',
    title: 'Neural Surveillance',
    description: 'Swarm agents continuously scan mempools for yield and risk vectors.',
    detail: 'Analysis Phase',
    icon: ChartBarIcon,
    color: '#a855f7' // Purple
  },
  {
    number: '03',
    title: 'Atomic Settlement',
    description: 'Transactions are bundled and settled via gas-optimized proofs.',
    detail: 'Execution Phase',
    icon: BoltIcon,
    color: '#10b981' // Green
  },
];

const StepCard = ({ step, index }: { step: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="relative flex-1 group"
    >
      {/* Connector Line (Desktop) */}
      {index !== steps.length - 1 && (
        <div className="hidden lg:block absolute top-12 left-1/2 w-full h-[2px] bg-white/10 -z-10">
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.5 + (index * 0.3) }}
            className="h-full bg-blue-500/50"
          />
        </div>
      )}

      <div className="relative flex flex-col items-center text-center p-8 rounded-[32px] bg-black/60 border border-white/5 hover:border-white/10 transition-all duration-300 backdrop-blur-xl h-full">
        {/* Glowing Number Background */}
        <div className="absolute top-4 right-6 text-[80px] font-black text-white/[0.03] select-none pointer-events-none tracking-tighter loading-none">
          {step.number}
        </div>

        {/* Icon Circle */}
        <div className="relative w-24 h-24 mb-8 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-2xl">
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{ backgroundColor: step.color }} />
          <step.icon className="w-10 h-10 text-white/80 group-hover:text-white transition-colors" />

          {/* Orbiting Dot */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-4px] rounded-3xl border border-dashed border-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
          />
        </div>

        <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors">
          {step.title}
        </h3>

        <p className="text-gray-400 font-medium leading-relaxed mb-6 max-w-xs">
          {step.description}
        </p>

        <div className="mt-auto px-4 py-1.5 rounded-full bg-white/5 border border-white/5 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: step.color }} />
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">
            {step.detail}
          </span>
        </div>
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 bg-blue-500/5 blur-2xl rounded-[32px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}

export function HowItWorks() {
  return (
    <section className="relative w-full py-40 bg-black overflow-hidden font-sans">
      {/* Top Transition Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-900/50 to-transparent z-20" />
      {/* Animated Neon Blue Dot Background */}
      {/* Background Removed */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black" />

        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center pointer-events-none -translate-x-[5%]">
          <span className="text-[5vw] font-[1000] text-white/[0.02] tracking-widest uppercase select-none leading-none blur-[5px]">
            Deployment Pipeline
          </span>
        </div>

        {/* Animated Mesh Grid */}
        <div className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
          }}
        />
      </div>

      {/* Boundary Fades */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black via-black/80 to-transparent z-0 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-[10px] font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-1 h-1 rounded-full bg-blue-500" />
            Integration Sequence
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 relative">
            Deployment <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Pipeline</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            Initialize the Vanguard swarm in three autonomous stages.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
