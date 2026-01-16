'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import {
  ShieldCheckIcon,
  BoltIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

const Counter = ({ value, duration = 2, suffix = "", prefix = "" }: { value: string; duration?: number; suffix?: string; prefix?: string }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 }); // No 'once: true' so it restarts on scroll

  useEffect(() => {
    if (isInView) {
      const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
      const controls = animate(0, numericValue, {
        duration,
        onUpdate: (latest) => {
          if (numericValue % 1 === 0) {
            setDisplayValue(Math.floor(latest).toString());
          } else {
            setDisplayValue(latest.toFixed(1));
          }
        },
        ease: "easeOut"
      });
      return () => controls.stop();
    } else {
      setDisplayValue("0"); // Reset when out of view
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{prefix}{displayValue}{suffix}</span>;
};

const StatItem = ({ label, value, desc, icon: Icon, delay = 0 }: { label: string; value: string; desc: string; icon: any; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 40, scale: 0.95 }}
      transition={{ duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] }}
      viewport={{ once: false, amount: 0.2 }}
      className="flex flex-col items-center text-center group"
    >
      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-blue-500/30 group-hover:bg-blue-500/5 transition-all duration-500 group-hover:scale-110 shadow-lg shadow-black/50">
        <Icon className="w-7 h-7 text-gray-400 group-hover:text-blue-400 transition-colors" />
      </div>
      <div className="text-6xl md:text-8xl font-[1000] text-white tracking-tighter mb-4 flex items-baseline italic">
        <Counter value={value} suffix={value.includes('%') ? '%' : value.includes('+') ? '+' : value.includes('ms') ? 'ms' : ''} prefix={value.includes('<') ? '<' : ''} />
      </div>
      <div className="text-xl font-black text-blue-500 uppercase tracking-[0.3em] mb-3 opacity-90">{label}</div>
      <p className="text-sm text-gray-500 font-bold max-w-[260px] leading-relaxed group-hover:text-gray-400 transition-colors">
        {desc}
      </p>
    </motion.div>
  );
};

export function Stats() {
  return (
    <section className="relative w-full py-48 overflow-hidden bg-black">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Hero Stat */}
        <div className="flex flex-col items-center text-center mb-40 group">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: false, amount: 0.3 }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-blue-500/20 blur-[130px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

            <div className="relative text-[140px] md:text-[280px] font-[1000] text-white tracking-[-0.08em] leading-none mb-6 italic select-none">
              <Counter value="0" suffix="%" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <h3 className="text-5xl md:text-7xl font-[1000] text-white tracking-tighter mb-6 uppercase italic leading-none">
              Slippage Leakage
            </h3>
            <div className="flex items-center justify-center gap-4">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                className="h-[2px] bg-blue-500/50"
              />
              <p className="text-2xl text-blue-400 font-black uppercase tracking-[0.3em] opacity-80">
                via ZK-Aggregated Settlement
              </p>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                className="h-[2px] bg-blue-500/50"
              />
            </div>
            <p className="mt-12 text-gray-400 max-w-3xl mx-auto font-bold text-xl leading-snug italic opacity-70 group-hover:opacity-100 transition-opacity">
              Our proprietary Aggregation engine eliminates MEV and execution leakage
              by verifying every state transition before it hits the block.
            </p>
          </motion.div>
        </div>

        {/* Secondary Stats Grid */}
        <div className="relative">
          {/* Desktop Connecting Lines */}
          <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-px z-0">
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 0.3 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: false }}
              className="w-full h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent origin-center"
            />
            {/* Travelling Signal Pulse 1 */}
            <motion.div
              animate={{
                left: ["0%", "100%"],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-blue-400 rounded-full blur-[3px] shadow-[0_0_15px_#3b82f6]"
            />
            {/* Travelling Signal Pulse 2 (Offset) */}
            <motion.div
              animate={{
                left: ["0%", "100%"],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 1.25 }}
              className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-blue-400 rounded-full blur-[3px] shadow-[0_0_15px_#3b82f6]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-32 relative z-10">
            <StatItem
              label="Active Agents"
              value="5"
              desc="Specialized Neural Swarm nodes operating 24/7 across multiple chains."
              icon={CpuChipIcon}
              delay={0.1}
            />
            <StatItem
              label="Protected Txs"
              value="2000"
              desc="Cumulative volume secured via ZK-STARK proofs of computational integrity."
              icon={ShieldCheckIcon}
              delay={0.2}
            />
            <StatItem
              label="Execution Speed"
              value="400"
              desc="Ultra-low latency inference on our optimized sub-second validator network."
              icon={BoltIcon}
              delay={0.3}
            />
          </div>
        </div>
      </div>

      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
}
