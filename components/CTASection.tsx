'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRightIcon,
  CommandLineIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

const Terminal = () => {
  const [lines, setLines] = useState<string[]>([
    "> Initializing secure connection...",
    "> Verifying ZK-proof parameters...",
  ]);

  useEffect(() => {
    const sequence = [
      { text: "> Quantizing state vectors...", delay: 800 },
      { text: "> Swarm intelligence: ONLINE", delay: 1600 },
      { text: "> Optimization targets: ACQUIRED", delay: 2400 },
      { text: "> Ready for deployment.", delay: 3200, color: "text-green-400" },
    ];

    let timeouts: NodeJS.Timeout[] = [];

    sequence.forEach(({ text, delay, color }) => {
      const timeout = setTimeout(() => {
        setLines(prev => {
          const newLine = color ? <span className={color}>{text}</span> : text;
          return [...prev.slice(-4), newLine as string]; // Keep last 5 lines
        });
      }, delay);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto bg-black/80 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden font-mono text-xs md:text-sm shadow-2xl">
      <div className="flex items-center gap-1.5 px-4 py-3 bg-white/5 border-b border-white/5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        <span className="ml-2 text-white/30 text-[10px]">bash — 80x24</span>
      </div>
      <div className="p-4 h-32 flex flex-col justify-end text-gray-400 space-y-1">
        <AnimatePresence mode='popLayout'>
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="truncate"
            >
              {typeof line === 'string' ? line : line}
            </motion.div>
          ))}
        </AnimatePresence>
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="w-2 h-4 bg-blue-500/50 mt-1"
        />
      </div>
    </div>
  );
};

export function CTASection() {
  return (
    <section className="relative w-full pt-40 pb-64 overflow-hidden bg-black font-sans">

      {/* Dynamic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

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
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/80 to-transparent z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative rounded-[40px] border border-white/10 bg-black/80 backdrop-blur-3xl overflow-hidden p-8 md:p-16 lg:p-24 text-center">

          {/* Glossy Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />

          {/* Content Container */}
          <div className="relative z-10 flex flex-col items-center">



            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl md:text-4xl font-[1000] text-white tracking-tighter mb-5 leading-[0.9] uppercase italic"
            >
              Initialize <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 animate-gradient-x">
                Vanguard Protocol
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm md:text-base text-gray-300 max-w-lg mx-auto leading-relaxed font-light mb-8"
            >
              Join <span className="text-white font-bold">2,400+</span> institutions utilizing our ZK-STARK engine to <span className="text-blue-400">automate yield</span>, eliminate slippage, and cryptographically secure assets.
            </motion.p>

            {/* Visual Terminal Hook */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full max-w-xl mb-12"
            >
              <Terminal />
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <Link
                href="/dashboard"
                className="group relative px-10 py-5 bg-blue-600 rounded-full overflow-hidden text-white font-bold tracking-wider uppercase transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.5)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center gap-3">
                  <CommandLineIcon className="w-5 h-5" />
                  Launch Terminal
                </span>
              </Link>

              <Link
                href="/whitepaper"
                className="group flex items-center gap-3 px-10 py-5 bg-white/5 border border-white/10 rounded-full text-white font-bold tracking-wider uppercase hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105"
              >
                <DocumentTextIcon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                <span>Documentation</span>
              </Link>
            </motion.div>

            {/* Trust Signals */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16 text-gray-500"
            >
              <div className="flex items-center gap-3">
                <ShieldCheckIcon className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-bold uppercase tracking-widest">Audited by Halborn</span>
              </div>
              <div className="flex items-center gap-3">
                <CpuChipIcon className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-bold uppercase tracking-widest">Zk-Sync Era Mainnet</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-bold uppercase tracking-widest">99.99% Uptime</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
