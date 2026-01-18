"use client";

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { TermsModal } from './TermsModal';
import { PrivacyModal } from './PrivacyModal';

const FooterHeading = ({ children }: { children: React.ReactNode }) => (
  <motion.h3
    className="text-[14px] font-bold text-[#007AFF] mb-4 tracking-widest uppercase select-none"
    animate={{
      textShadow: [
        "0 0 0px rgba(0, 122, 255, 0)",
        "0 0 10px rgba(0, 122, 255, 0.6)",
        "0 0 0px rgba(0, 122, 255, 0)"
      ]
    }}
    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
  >
    {children}
  </motion.h3>
);

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <footer className="bg-black transition-colors duration-300">
      <div className="max-w-[980px] mx-auto px-6 lg:px-8">
        {/* Top section - Navigation */}
        <div className="pt-12 lg:pt-16 pb-8 lg:pb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-20">
            <div>
              <FooterHeading>PRODUCT</FooterHeading>
              <ul className="space-y-3">
                <li><Link href="/dashboard" className="text-[14px] text-[#424245] dark:text-gray-400 hover:text-[#007AFF] transition-colors duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] leading-relaxed">Dashboard</Link></li>
                <li><Link href="/agents" className="text-[14px] text-[#424245] dark:text-gray-400 hover:text-[#007AFF] transition-colors duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] leading-relaxed">Agents</Link></li>
                <li><Link href="/simulator" className="text-[14px] text-[#424245] dark:text-gray-400 hover:text-[#007AFF] transition-colors duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] leading-relaxed">Simulator</Link></li>
                <li><Link href="/docs" className="text-[14px] text-[#424245] dark:text-gray-400 hover:text-[#007AFF] transition-colors duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] leading-relaxed">Documentation</Link></li>
              </ul>
            </div>

            <div>
              <FooterHeading>PLATFORM</FooterHeading>
              <ul className="space-y-3">
                <li><Link href="/zk-proof" className="text-[14px] text-[#424245] dark:text-gray-400 hover:text-[#007AFF] transition-colors leading-relaxed">ZK Verification</Link></li>
                <li><Link href="/zk-authenticity" className="text-[14px] text-[#424245] dark:text-gray-400 hover:text-[#007AFF] transition-colors leading-relaxed">Authenticity</Link></li>
                <li><a href="#" className="text-[14px] text-[#424245] dark:text-gray-400 hover:text-[#007AFF] transition-colors leading-relaxed">API</a></li>
              </ul>
            </div>

            <div>
              <FooterHeading>RESOURCES</FooterHeading>
              <ul className="space-y-3">
                <li><a href="#" className="text-[14px] text-[#424245] dark:text-gray-400 hover:text-[#007AFF] transition-colors leading-relaxed">Telegram</a></li>
                <li><a href="https://github.com" className="text-[14px] text-[#424245] dark:text-gray-400 hover:text-[#007AFF] transition-colors leading-relaxed">GitHub</a></li>
                <li><a href="https://twitter.com" className="text-[14px] text-[#424245] dark:text-gray-400 hover:text-[#007AFF] transition-colors leading-relaxed">Twitter</a></li>
              </ul>
            </div>

            <div>
              <FooterHeading>LEGAL</FooterHeading>
              <ul className="space-y-3">
                <li><a href="#" onClick={(e) => { e.preventDefault(); setIsPrivacyOpen(true); }} className="text-[14px] text-[#424245] dark:text-gray-400 hover:text-[#007AFF] transition-colors leading-relaxed">Privacy Policy</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setIsTermsOpen(true); }} className="text-[14px] text-[#424245] dark:text-gray-400 hover:text-[#007AFF] transition-colors leading-relaxed">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section - Copyright */}
        <div className="border-t border-[#d2d2d7] py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="text-[11px] font-mono text-[#86868b] dark:text-gray-500 leading-relaxed tracking-wider">
              © {currentYear} ZkVanguard Defense Systems.
              <span className="hidden md:inline ml-4 mr-4 text-gray-700">|</span>
              <span className="block md:inline font-bold text-white tracking-widest">
                <span className="text-[#00ff41] mr-2 animate-pulse">●</span>
                NETWORK: SOLANA MAINNET
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono tracking-wider">

              <span className="text-[#86868b] uppercase">Powered by Jito & Rust Architecture</span>
            </div>
          </div>
        </div>
      </div>
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </footer>
  );
}
