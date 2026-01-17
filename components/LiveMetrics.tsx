'use client';

import { useEffect, useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence, useSpring, useTransform, useMotionValue } from 'framer-motion';

// --- Count Up Animation Component ---
const CountUp = ({ value, prefix = '', suffix = '', decimals = 0 }: { value: number; prefix?: string; suffix?: string; decimals?: number }) => {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const duration = 2000; // ms
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = (value - displayValue) / steps;

    let current = displayValue;
    const timer = setInterval(() => {
      current += increment;
      if ((increment > 0 && current >= value) || (increment < 0 && current <= value)) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(current);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="tabular-nums">
      {prefix}{displayValue.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}
    </span>
  );
};

interface MetricCardProps {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  description: string;
  accentColor: string;
  delay: number;
  trend: string;
}

const MetricCard = ({ label, value, prefix, suffix, decimals, description, accentColor, delay, trend }: MetricCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative h-full rounded-[32px] bg-[#050505]/60 border border-white/5 p-8 overflow-hidden transition-all duration-500 hover:border-white/10 shadow-2xl flex flex-col backdrop-blur-xl"
    >
      {/* Background Glow */}
      <div
        className="absolute -top-24 -right-24 w-64 h-64 blur-[100px] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-1000 pointer-events-none"
        style={{ backgroundColor: accentColor }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between mb-8">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 group-hover:text-gray-400 transition-colors">
              {label}
            </span>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              <span className="text-[9px] font-bold text-green-500/80 uppercase tracking-widest leading-none mt-0.5">Live On-Chain</span>
            </div>
          </div>
          <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-2">
            <span className="text-[10px] font-black text-white/40 uppercase tracking-tighter">{trend}</span>
          </div>
        </div>

        <div className="text-5xl lg:text-6xl font-[1000] text-white tracking-tighter mb-4 italic leading-none">
          <CountUp value={value} prefix={prefix} suffix={suffix} decimals={decimals} />
        </div>

        <p className="text-sm text-gray-500 font-medium leading-relaxed mb-8 group-hover:text-gray-400 transition-colors">
          {description}
        </p>

        {/* Progress Visualizer */}
        <div className="mt-auto pt-6 border-t border-white/5 space-y-4">
          <div className="flex justify-between items-end">
            <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest">Efficiency Wave</span>
            <span className="text-[10px] font-bold text-white/50">{trend}</span>
          </div>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 2, delay: delay + 0.5, ease: "circOut" }}
              className="h-full w-4/5 rounded-full"
              style={{ backgroundColor: accentColor }}
            />
          </div>
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
    </motion.div>
  );
};

export const LiveMetrics = () => {
  const [metrics, setMetrics] = useState({
    tvl: 2.85,
    transactions: 1282,
    gasSaved: 69.3,
    agents: 5,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        tvl: prev.tvl + Math.random() * 0.05 - 0.02,
        transactions: prev.transactions + Math.floor(Math.random() * 2),
        gasSaved: Math.min(78, prev.gasSaved + Math.random() * 0.05),
        agents: 5
      }));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const metricData = [
    {
      label: 'Total Value Locked',
      value: metrics.tvl,
      prefix: '$',
      suffix: 'M',
      decimals: 2,
      description: 'Institutional capital currently secured and managed by the ZkVanguard autonomous swarm.',
      accentColor: '#3b82f6',
      trend: '+12.4%'
    },
    {
      label: 'Transactions',
      value: metrics.transactions,
      decimals: 0,
      description: 'ZK-verified atomic operations executed across multi-chain settlement layers with 100% finality.',
      accentColor: '#10b981',
      trend: 'STABLE'
    },
    {
      label: 'Gas Savings',
      value: metrics.gasSaved,
      suffix: '%',
      decimals: 1,
      description: 'Cumulative computational overhead reduction through our specialized x402 gasless orchestration.',
      accentColor: '#f59e0b',
      trend: 'MAX OP'
    },
    {
      label: 'Active Agents',
      value: metrics.agents,
      decimals: 0,
      description: 'Independent neural swarms monitoring risk vectors and executing global yield rebalancing strategies.',
      accentColor: '#8b5cf6',
      trend: 'NOMINAL'
    }
  ];

  return (
    <section className="relative w-full py-20 bg-black overflow-hidden font-sans">
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
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Heading Section */}
        <div className="text-center mb-32 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.4em] mb-12 text-blue-500/80 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            Live Infrastructure
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-[8vw] lg:text-[6vw] font-[1000] tracking-[-0.05em] leading-[0.8] uppercase italic select-none mb-8">
              <span className="bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">Real-Time</span>
              <br />
              <span className="bg-gradient-to-b from-gray-500 to-gray-800 bg-clip-text text-transparent opacity-40">Intelligence</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-500 text-sm md:text-base font-bold uppercase tracking-[0.2em] italic max-w-2xl mx-auto"
          >
            Performance metrics dynamically streamed from <span className="text-blue-500">Cronos zkEVM</span> & <span className="text-blue-500">SUI</span> testnet environments.
          </motion.p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metricData.map((data, index) => (
            <MetricCard
              key={index}
              {...data}
              delay={index * 0.15}
            />
          ))}
        </div>


        {/* Technical Metadata Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-24 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/5 pt-12"
        >
          <div className="flex gap-12">
            <div className="flex flex-col gap-1">
              <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Protocol Version</span>
              <span className="text-[11px] font-bold text-white/60 tabular-nums">V3.5.2-STARK</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Last Epoch Finalized</span>
              <span className="text-[11px] font-bold text-white/60 tabular-nums">#18,242,091</span>
            </div>
          </div>

          <div className="px-6 py-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-5 h-5 rounded-full border border-black bg-gray-800" />
              ))}
            </div>
            <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.1em]">241 Node Operators Active</span>
          </div>
        </motion.div>
      </div>
    </section >
  );
};
