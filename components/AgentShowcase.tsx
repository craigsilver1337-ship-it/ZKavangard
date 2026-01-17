'use client';

import { motion } from 'framer-motion';
import {
  CpuChipIcon,
  ShieldCheckIcon,
  BanknotesIcon,
  ArrowsRightLeftIcon
} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

// --- Micro-Components ---

const PulseDot = ({ color = "bg-blue-500" }) => (
  <span className="relative flex h-2 w-2">
    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${color} opacity-75`}></span>
    <span className={`relative inline-flex rounded-full h-2 w-2 ${color}`}></span>
  </span>
);

const TechBadge = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`px-3 py-1 rounded-md text-[10px] font-mono border uppercase tracking-wider bg-blue-500/5 text-blue-400 border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.1)]`}>
      {children}
    </div>
  );
};

// --- Agent Cards ---

const LeadAgentCard = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.01, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)" }}
      className="col-span-1 lg:col-span-2 relative group overflow-hidden rounded-[32px] border border-white/5 bg-black/40 backdrop-blur-2xl h-full min-h-[380px] p-8 lg:p-12 flex flex-col justify-between transition-all duration-500 hover:border-blue-500/30"
    >
      {/* Ambient Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none mix-blend-screen">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <CpuChipIcon className="w-48 h-48 text-blue-400" />
        </motion.div>
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <TechBadge>CORE SYSTEM</TechBadge>
          <div className="flex items-center gap-2 text-xs font-mono text-blue-300/60 tracking-wider">
            <PulseDot color="bg-blue-400" />
            <span>MAINNET: ONLINE</span>
          </div>
        </div>
        <h3 className="text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight drop-shadow-lg">Lead Orchestrator</h3>
        <p className="text-lg text-gray-400 max-w-lg leading-relaxed font-light">
          The central nervous system of the Vanguard swarm. Orchestrates inter-agent communication and makes final execution decisions based on aggregated risk models.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        {[
          { label: "Active Threads", value: "1,024" },
          { label: "Uptime", value: "99.99%" },
          { label: "Decisions/Sec", value: "842" },
          { label: "Global Sync", value: "32ms" }
        ].map((stat, i) => (
          <div key={i} className="flex flex-col p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] group-hover:bg-white/[0.05] group-hover:border-blue-500/20 transition-all duration-300">
            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1.5">{stat.label}</span>
            <span className="text-xl font-mono text-white tracking-tight">{stat.value}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const RiskAgentCard = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)" }}
      className="col-span-1 relative group overflow-hidden rounded-[32px] border border-white/5 bg-black/40 backdrop-blur-2xl p-8 min-h-[280px] flex flex-col justify-between transition-all duration-500 hover:border-blue-500/30"
    >

      <div>
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 rounded-2xl bg-blue-500/5 border border-blue-500/10 text-blue-400 shadow-[inset_0_0_20px_rgba(59,130,246,0.1)]">
            <ShieldCheckIcon className="w-6 h-6" />
          </div>
          <TechBadge>SENTINEL</TechBadge>
        </div>
        <h4 className="text-2xl font-bold text-white mb-2 tracking-tight">Risk Guardian</h4>
        <p className="text-sm text-gray-400 leading-relaxed font-light">Continuous 24/7 vector analysis monitoring on-chain volatility and smart contract exposure.</p>
      </div>

      <div className="mt-8 space-y-3">
        <div className="flex justify-between items-center text-xs font-mono text-gray-400 tracking-wider">
          <span>THREAT LEVEL</span>
          <span className="text-blue-400 font-bold">LOW (12/100)</span>
        </div>
        {/* Fake scanning bar */}
        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="h-full w-1/3 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70"
          />
        </div>
      </div>
    </motion.div>
  );
};

const HedgingAgentCard = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)" }}
      className="col-span-1 relative group overflow-hidden rounded-[32px] border border-white/5 bg-black/40 backdrop-blur-2xl p-8 min-h-[280px] flex flex-col justify-between transition-all duration-500 hover:border-blue-500/30"
    >

      <div>
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 rounded-2xl bg-blue-500/5 border border-blue-500/10 text-blue-400 shadow-[inset_0_0_20px_rgba(59,130,246,0.1)]">
            <BanknotesIcon className="w-6 h-6" />
          </div>
          <TechBadge>STRATEGY</TechBadge>
        </div>
        <h4 className="text-2xl font-bold text-white mb-2 tracking-tight">Alpha Hedger</h4>
        <p className="text-sm text-gray-400 leading-relaxed font-light">Delta-neutral strategy execution engine. Dynamically rebalances open positions to preserve principal.</p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/10 text-center hover:bg-blue-500/10 transition-colors">
          <div className="text-[9px] text-blue-400/60 uppercase tracking-widest mb-1">ROI (24H)</div>
          <div className="text-lg font-mono font-bold text-blue-400">+2.45%</div>
        </div>
        <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center hover:bg-white/10 transition-colors">
          <div className="text-[9px] text-gray-500 uppercase tracking-widest mb-1">POSITIONS</div>
          <div className="text-lg font-mono font-bold text-white">4 LONG</div>
        </div>
      </div>
    </motion.div>
  );
};

const SettlementAgentCard = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)" }}
      className="col-span-1 lg:row-span-2 relative group overflow-hidden rounded-[32px] border border-white/5 bg-black/40 backdrop-blur-2xl p-8 min-h-[240px] flex flex-col justify-between transition-all duration-500 hover:border-blue-500/30"
    >

      <div>
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 rounded-2xl bg-blue-500/5 border border-blue-500/10 text-blue-400 shadow-[inset_0_0_20px_rgba(59,130,246,0.1)]">
            <ArrowsRightLeftIcon className="w-6 h-6" />
          </div>
          <TechBadge>EXECUTOR</TechBadge>
        </div>
        <h4 className="text-2xl font-bold text-white mb-2 tracking-tight">Zero-Knowledge Settlement</h4>
        <p className="text-sm text-gray-400 leading-relaxed font-light">Batches transactions into single proofs for atomic settlement.</p>

        <div className="my-6 space-y-4 bg-blue-500/5 rounded-xl p-4 border border-blue-500/10">
          <div className="flex justify-between items-center">
            <span className="text-[10px] uppercase tracking-widest text-blue-300/60">Batch Compression</span>
            <span className="text-xs font-mono font-bold text-blue-400">98.2%</span>
          </div>
          <div className="h-1.5 w-full bg-black/40 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "98.2%" }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
              className="h-full bg-blue-500"
            />
          </div>
          <div className="flex justify-between items-center pt-1">
            <span className="text-[10px] uppercase tracking-widest text-blue-300/60">Proof Latency</span>
            <span className="text-xs font-mono font-bold text-white">~4.2ms</span>
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-3">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="flex items-center gap-3 text-[10px] bg-white/[0.02] p-2.5 rounded-lg border border-white/5 hover:border-blue-500/20 transition-colors">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.6)]" />
            <span className="font-mono text-gray-400 tracking-wide">0x8a...4b2f</span>
            <span className="ml-auto text-blue-400 font-bold tracking-wider">VERIFIED</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const ReportingAgentCard = () => {
  const [lines, setLines] = useState(["> Initializing stream...", "> Connected to node_01", "> Syncing..."]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLogs = [
        "> Analyzing yield curve...",
        "> Gas optimization: 98%",
        "> Rebalance trigger: FALSE",
        "> Updating oracle feed...",
        "> Snapshot block #19402"
      ];
      const randomLog = newLogs[Math.floor(Math.random() * newLogs.length)];
      setLines(prev => [...prev.slice(-3), randomLog]);
    }, 1200); // Faster logs for more activity
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)" }}
      className="col-span-1 relative group overflow-hidden rounded-[32px] border border-white/5 bg-black/40 backdrop-blur-2xl p-8 min-h-[220px] flex flex-col justify-between transition-all duration-500 hover:border-blue-500/30"
    >

      <div className="flex justify-between items-start mb-2">
        <div>
          <h4 className="text-xl font-bold text-white tracking-tight">Live Audit</h4>
          <p className="text-xs text-gray-400 mt-1 font-light">Real-time immutable logs</p>
        </div>
        <TechBadge>LOGS</TechBadge>
      </div>

      <div className="font-mono text-[10px] space-y-2 text-gray-400 border-t border-white/5 pt-4 h-24 overflow-hidden relative">
        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        {lines.map((line, i) => (
          <motion.div
            key={`${i}-${line}`}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            className="truncate flex items-center gap-2"
          >
            <span className="text-blue-500/50 w-12 shrink-0">{new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
            <span className="text-gray-300">{line}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};


export function AgentShowcase() {
  return (
    <section className="relative w-full py-0 bg-black overflow-hidden font-sans">
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
        {/* <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" /> */}
        {/* <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" /> */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          {/* Removed Active Swarm Badge as per request */}

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6"
          >
            Autonomous <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">Swarm Intelligence</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
          >
            A decentralized federation of specialized AI agents working in concert to optimize, secure, and grow your digital assets 24/7.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(100px,auto)]">
          {/* Row 1 */}
          <LeadAgentCard />
          <SettlementAgentCard />

          {/* Row 2 */}
          <RiskAgentCard />
          <HedgingAgentCard />
          <ReportingAgentCard />
        </div>
      </div>
    </section>
  );
}
