'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ConnectButton } from './ConnectButton';
import { ChainSelector } from './ChainSelector';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/agents', label: 'Agents' },
    { href: '/simulator', label: 'Simulator' },
  ];

  return (
    <motion.nav
      animate={{
        y: [0, -8, 0],
        borderColor: ['rgba(0, 122, 255, 0.1)', 'rgba(0, 122, 255, 0.7)', 'rgba(0, 122, 255, 0.1)'],
        boxShadow: [
          '0 0 0px rgba(0, 122, 255, 0)',
          '0 0 30px rgba(0, 122, 255, 0.35)',
          '0 0 0px rgba(0, 122, 255, 0)'
        ]
      }}
      transition={{
        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        borderColor: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        default: { type: "spring", stiffness: 300, damping: 20 }
      }}
      className={`fixed top-4 left-0 right-0 mx-auto w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] max-w-[1200px] z-50 rounded-[20px] border-2 transition-all duration-300 ${scrolled
        ? 'bg-black/60 backdrop-blur-2xl shadow-lg'
        : 'bg-black/20 backdrop-blur-xl'
        }`}
    >
      <div className="w-full px-4 sm:px-6">
        <div className="flex items-center justify-between h-[64px]">
          {/* Logo - Always visible */}
          <Link href="/" className="flex items-center gap-2 -ml-2">
            <Logo />
            <span className="lg:hidden text-[17px] font-semibold text-[#1d1d1f] dark:text-white tracking-tight">ZkVanguard</span>
          </Link>

          {/* Desktop Navigation - Centered with proper spacing */}
          <div className="hidden lg:flex items-center justify-center flex-1 gap-1 mx-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
              >
                <motion.div
                  className="relative px-3 h-11 flex items-center justify-center font-normal text-[16px] text-label-secondary dark:text-gray-300 transition-colors"
                  whileHover={{ scale: 1.05, color: '#007AFF' }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                  {/* Subtle underline shine effect on hover */}
                  <motion.div
                    className="absolute bottom-1.5 left-0 right-0 h-[2px] bg-[#007AFF] rounded-full mx-auto"
                    initial={{ width: "0%", opacity: 0 }}
                    whileHover={{ width: "20px", opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  {/* Background glow on hover */}
                  <motion.div
                    className="absolute inset-0 bg-[#007AFF]/5 rounded-lg -z-10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Desktop - Chain Selector + Connect Button (Right side) */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <ChainSelector />
            <ConnectButton />
          </div>

          {/* Mobile Menu Button - Proper 44pt touch target */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-11 h-11 flex items-center justify-center -mr-2 text-[#1d1d1f] dark:text-white hover:text-[#007AFF] active:scale-[0.96] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" strokeWidth={2} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={2} />
            )}
          </button>
        </div>

        {/* Mobile Navigation - Clean iOS-style list */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-black/10 dark:border-white/10 animate-fade-in">
            <div className="py-2 space-y-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 h-11 flex items-center text-[17px] text-[#1d1d1f] dark:text-white hover:bg-[#f5f5f7] dark:hover:bg-[#1c1c1e] active:scale-[0.98] rounded-[10px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-3 pt-3 px-3 border-t border-black/10 dark:border-white/10 space-y-3">
              <div className="flex items-center justify-between py-2">
                <span className="text-[17px] text-[#1d1d1f] dark:text-white">Appearance</span>
                <ThemeToggle />
              </div>
              <ChainSelector />
              <ConnectButton />
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
