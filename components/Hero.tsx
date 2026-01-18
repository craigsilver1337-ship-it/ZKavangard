"use client";

import Link from 'next/link';
import { ArrowRightIcon, ShieldCheckIcon, BoltIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { TubesBackground } from './ui/neon-flow';
import { motion } from 'framer-motion';
import { HeroPricing } from './HeroPricing';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className="relative overflow-hidden min-h-[90vh]">
      <div className="absolute inset-x-0 top-[-50%] h-[140%] z-0">
        <TubesBackground className="bg-transparent" enableClickInteraction={true} />
      </div>

      <div className="relative z-10 w-full px-5 lg:px-8 pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32 pointer-events-none">
        <motion.div
          className="max-w-[1280px] mx-auto pointer-events-auto"
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.1 }}
          variants={containerVariants}
        >

          {/* Asymmetric layout - content left, visual right */}
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">

            {/* Left: Main content */}
            <div className="max-w-[640px]">
              {/* Eyebrow - clean badge with emphasis */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-3 mb-6 cursor-default"
              >
                <span className="text-subheadline text-label-secondary font-medium dark:text-gray-400">
                  Solana Mainnet
                </span>
                <div className="w-px h-3 bg-separator-opaque dark:bg-white/20" />
                <span className="text-subheadline font-semibold text-transparent bg-gradient-to-r from-ios-blue to-[#0066FF] bg-clip-text">
                  Quantum-Proof
                </span>
              </motion.div>

              {/* Hero headline - responsive sizing */}
              <motion.h1
                variants={itemVariants}
                className="text-[32px] leading-[1.15] sm:text-[48px] sm:leading-[1.08] lg:text-[64px] xl:text-[80px] lg:leading-[1.05] font-bold text-label-primary dark:text-white tracking-[-0.02em] mb-4 sm:mb-6"
              >
                The First ZK-AI
                <br />
                <span className="relative inline-block">
                  <motion.span
                    className="bg-clip-text text-transparent bg-gradient-to-r from-[#0033FF] via-[#007AFF] to-[#00D1FF] bg-[length:200%_auto]"
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  >
                    Agent Swarm on Solana.
                  </motion.span>
                  {/* Subtle glow under gradient text */}
                  <div className="absolute inset-0 bg-gradient-to-r from-ios-blue/20 to-transparent blur-3xl -z-10" />
                </span>
              </motion.h1>

              {/* Shorter subheadline - responsive */}
              <motion.p
                variants={itemVariants}
                className="text-[17px] leading-relaxed sm:text-title-3 lg:text-title-2 text-label-secondary dark:text-gray-300 font-normal mb-8 sm:mb-10"
              >
                Dominate the trenches with military-grade privacy. Our autonomous agents snipe, hedge, and compound your gains on Pump.fun completely invisible to copy-traders and MEV bots.
              </motion.p>

              {/* CTA - responsive button size */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-12"
              >
                <Link
                  href="/dashboard"
                  className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 h-[52px] sm:h-[56px] bg-ios-blue text-white text-callout sm:text-headline font-semibold rounded-[14px] hover:opacity-90 active:scale-[0.96] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_8px_30px_rgba(0,122,255,0.25)] w-full sm:w-auto"
                >
                  <span>Deploy Agents</span>
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]" strokeWidth={2.5} />
                </Link>
                <Link
                  href="/docs"
                  className="group flex items-center gap-2 text-callout sm:text-headline font-medium text-ios-blue hover:text-[#0066FF] transition-colors duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                >
                  <span>Read Docs</span>
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                </Link>
              </motion.div>
            </div>

            {/* Right: Visual representation - Desktop only */}
            <div className="hidden lg:block relative">
              {/* Modern stacked card composition */}
              <div className="relative w-full max-w-[520px] ml-auto space-y-4">

                {/* Primary card - Zero-Knowledge Security */}
                <motion.div
                  variants={itemVariants}
                  className="group relative overflow-hidden bg-white/30 dark:bg-slate-900/10 backdrop-blur-md rounded-[20px] p-7 border-2 border-black/5 dark:border-white/10"
                  animate={{
                    y: [0, -8, 0],
                    borderColor: ['rgba(0, 122, 255, 0.2)', 'rgba(0, 122, 255, 0.6)'],
                    boxShadow: [
                      '0 0 0px rgba(0, 122, 255, 0)',
                      '0 0 25px rgba(0, 122, 255, 0.25)'
                    ]
                  }}
                  whileHover={{ y: -5, scale: 1.02, boxShadow: "0 20px 40px -10px rgba(0,122,255,0.4)" }}
                  transition={{
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    borderColor: { duration: 4, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" },
                    boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" },
                    default: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  style={{ willChange: "transform, border-color, box-shadow", transform: "translateZ(0)" }}
                >
                  {/* Internal Rotating Neon Glow */}
                  <motion.div
                    className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(0,122,255,0.05)_0%,transparent_50%)] pointer-events-none z-0"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="relative z-10 flex items-start gap-4 mb-5">
                    <motion.div
                      className="w-14 h-14 rounded-[14px] bg-[#007AFF] flex items-center justify-center flex-shrink-0 relative overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                      <ShieldCheckIcon className="w-7 h-7 text-white relative z-10" strokeWidth={2} />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[19px] font-semibold text-[#1d1d1f] dark:text-white mb-1.5 tracking-[-0.01em]">
                        Anti-MEV Privacy
                      </h3>
                      <p className="text-[15px] text-[#86868b] dark:text-gray-400 leading-[1.4]">
                        ZK-STARK proofs hide your strategy. No more sandwich attacks.
                      </p>
                    </div>
                  </div>
                  {/* Clean minimal chart with continuous animation */}
                  <div className="flex items-end gap-1.5 h-16 px-2">
                    {[60, 82, 68, 95, 72, 88, 78].map((height, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 bg-[#007AFF]/80 rounded-t-[3px]"
                        initial={{ scaleY: height / 100 }}
                        animate={{
                          scaleY: [height / 100, Math.max(0.2, (height - 20) / 100), Math.min(1, (height + 20) / 100), height / 100],
                          opacity: [0.8, 1, 0.8]
                        }}
                        transition={{
                          duration: 2 + Math.random() * 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.1
                        }}
                        style={{ originY: 1, willChange: "transform" }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Secondary cards row */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Real-Time Data card */}
                  <motion.div
                    variants={itemVariants}
                    className="bg-white/30 dark:bg-slate-900/10 backdrop-blur-md rounded-[18px] p-6 border-2 border-black/5 dark:border-white/10"
                    animate={{
                      borderColor: ['rgba(0, 122, 255, 0.2)', 'rgba(0, 122, 255, 0.6)'],
                      boxShadow: [
                        '0 0 0px rgba(0, 122, 255, 0)',
                        '0 0 20px rgba(0, 122, 255, 0.2)'
                      ]
                    }}
                    transition={{
                      borderColor: { duration: 4, repeat: Infinity, ease: "easeInOut", repeatType: "reverse", delay: 0.2 },
                      boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut", repeatType: "reverse", delay: 0.2 },
                      default: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    whileHover={{ y: -5, scale: 1.02, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3)" }}
                    style={{ willChange: "transform, border-color", transform: "translateZ(0)" }}
                  >
                    <motion.div
                      className="w-11 h-11 rounded-[11px] bg-[#FF9500]/10 flex items-center justify-center mb-4"
                      whileHover={{ rotate: [0, -10, 10, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <ChartBarIcon className="w-5 h-5 text-[#FF9500]" strokeWidth={2} />
                    </motion.div>
                    <h4 className="text-[17px] font-semibold text-[#1d1d1f] dark:text-white mb-1.5 tracking-[-0.01em]">
                      Nanosecond Sniping
                    </h4>
                    <p className="text-[14px] text-[#86868b] dark:text-gray-400 leading-[1.35]">
                      Executes faster than humanly possible.
                    </p>
                  </motion.div>

                  {/* AI Automation card */}
                  <motion.div
                    variants={itemVariants}
                    className="bg-white/30 dark:bg-slate-900/10 backdrop-blur-md rounded-[18px] p-6 border-2 border-black/5 dark:border-white/10"
                    animate={{
                      borderColor: ['rgba(0, 122, 255, 0.2)', 'rgba(0, 122, 255, 0.6)'],
                      boxShadow: [
                        '0 0 0px rgba(0, 122, 255, 0)',
                        '0 0 20px rgba(0, 122, 255, 0.2)'
                      ]
                    }}
                    transition={{
                      borderColor: { duration: 4, repeat: Infinity, ease: "easeInOut", repeatType: "reverse", delay: 0.4 },
                      boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut", repeatType: "reverse", delay: 0.4 },
                      default: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    whileHover={{ y: -5, scale: 1.02, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3)" }}
                    style={{ willChange: "transform, border-color", transform: "translateZ(0)" }}
                  >
                    <motion.div
                      className="w-11 h-11 rounded-[11px] bg-[#34C759]/10 flex items-center justify-center mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 1, ease: "circOut" }}
                    >
                      <BoltIcon className="w-5 h-5 text-[#34C759]" strokeWidth={2} />
                    </motion.div>
                    <h4 className="text-[17px] font-semibold text-[#1d1d1f] dark:text-white mb-1.5 tracking-[-0.01em]">
                      Autonomous Alpha
                    </h4>
                    <p className="text-[14px] text-[#86868b] dark:text-gray-400 leading-[1.35]">
                      5 Agents working 24/7 to compound profit.
                    </p>
                  </motion.div>
                </div>

              </div>
            </div>
          </div>

          {/* Mobile: Better feature showcase */}
          <div className="lg:hidden mt-12 space-y-4">
            {/* Mobile Anti-MEV Privacy Card */}
            <motion.div
              variants={itemVariants}
              className="bg-white/30 dark:bg-slate-900/10 backdrop-blur-md rounded-[20px] p-5 border-2 border-black/5 dark:border-white/10 relative overflow-hidden"
              animate={{
                borderColor: ['rgba(0, 122, 255, 0.1)', 'rgba(0, 122, 255, 0.5)'],
                boxShadow: [
                  '0 0 0px rgba(0, 122, 255, 0)',
                  '0 0 25px rgba(0, 122, 255, 0.2)'
                ]
              }}
              transition={{
                borderColor: { duration: 4, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" },
                boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }
              }}
              style={{ willChange: "transform, border-color", transform: "translateZ(0)" }}
            >
              {/* Internal Rotating Neon Glow */}
              <motion.div
                className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(0,122,255,0.05)_0%,transparent_50%)] pointer-events-none z-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <div className="flex items-start gap-4 relative z-10">
                <motion.div
                  className="w-11 h-11 rounded-[11px] bg-[#007AFF] flex items-center justify-center flex-shrink-0 relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                  />
                  <ShieldCheckIcon className="w-5 h-5 text-white relative z-10" strokeWidth={2} />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[17px] font-semibold text-[#1d1d1f] dark:text-white mb-1">
                    Anti-MEV Privacy
                  </h3>
                  <p className="text-[15px] text-[#86868b] dark:text-gray-400 leading-snug">
                    ZK-STARK proofs hide your strategy. No more sandwich attacks.
                  </p>
                </div>
              </div>
              {/* Mobile Chart */}
              <div className="flex items-end gap-1 h-12 mt-4 px-1">
                {[60, 82, 68, 95, 72, 88, 78].map((height, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 bg-[#007AFF]/80 rounded-t-[2px]"
                    initial={{ scaleY: height / 100 }}
                    animate={{
                      scaleY: [height / 100, Math.max(0.2, (height - 20) / 100), Math.min(1, (height + 20) / 100), height / 100],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.1
                    }}
                    style={{ originY: 1, willChange: "transform" }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Mobile Autonomous Alpha Card */}
            <motion.div
              variants={itemVariants}
              className="bg-white/30 dark:bg-slate-900/10 backdrop-blur-md rounded-[16px] p-5 border-2 border-black/5 dark:border-white/10"
              animate={{
                borderColor: ['rgba(0, 122, 255, 0.1)', 'rgba(0, 122, 255, 0.5)'],
                boxShadow: [
                  '0 0 0px rgba(0, 122, 255, 0)',
                  '0 0 25px rgba(0, 122, 255, 0.2)'
                ]
              }}
              transition={{
                borderColor: { duration: 4, repeat: Infinity, ease: "easeInOut", repeatType: "reverse", delay: 0.2 },
                boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut", repeatType: "reverse", delay: 0.2 }
              }}
              style={{ willChange: "transform, border-color", transform: "translateZ(0)" }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="flex-shrink-0 w-11 h-11 rounded-[11px] bg-[#34C759]/10 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  animate={{ rotate: 0 }} // Reset or add auto-animation if desired, but interaction on mobile is tap
                  whileTap={{ rotate: 360 }}
                  transition={{ duration: 1, ease: "circOut" }}
                >
                  <BoltIcon className="w-5 h-5 text-[#34C759]" strokeWidth={2} />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[17px] font-semibold text-[#1d1d1f] dark:text-white mb-1">
                    Autonomous Alpha
                  </h3>
                  <p className="text-[15px] text-[#86868b] dark:text-gray-400 leading-snug">
                    5 Agents working 24/7 to compound profit.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mobile Nanosecond Sniping Card */}
            <motion.div
              variants={itemVariants}
              className="bg-white/30 dark:bg-slate-900/10 backdrop-blur-md rounded-[16px] p-5 border-2 border-black/5 dark:border-white/10"
              animate={{
                borderColor: ['rgba(0, 122, 255, 0.1)', 'rgba(0, 122, 255, 0.5)'],
                boxShadow: [
                  '0 0 0px rgba(0, 122, 255, 0)',
                  '0 0 25px rgba(0, 122, 255, 0.2)'
                ]
              }}
              transition={{
                borderColor: { duration: 4, repeat: Infinity, ease: "easeInOut", repeatType: "reverse", delay: 0.4 },
                boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut", repeatType: "reverse", delay: 0.4 }
              }}
              style={{ willChange: "transform, border-color", transform: "translateZ(0)" }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="flex-shrink-0 w-11 h-11 rounded-[11px] bg-[#FF9500]/10 flex items-center justify-center"
                  whileTap={{ rotate: [0, -10, 10, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <ChartBarIcon className="w-5 h-5 text-[#FF9500]" strokeWidth={2} />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[17px] font-semibold text-[#1d1d1f] dark:text-white mb-1">
                    Nanosecond Sniping
                  </h3>
                  <p className="text-[15px] text-[#86868b] dark:text-gray-400 leading-snug">
                    Executes faster than humanly possible.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <HeroPricing />
        </motion.div>
      </div>
    </section>
  );
}
