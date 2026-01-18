'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

const AnimatedBorder = () => (
    <div
        className="absolute inset-0 rounded-2xl md:rounded-3xl pointer-events-none"
        style={{
            maskImage: 'linear-gradient(#fff, #fff), linear-gradient(#fff, #fff)',
            maskClip: 'content-box, border-box',
            maskComposite: 'exclude',
            WebkitMaskComposite: 'xor',
            padding: '1.5px',
        }}
    >
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_80deg,#3b82f6_180deg,transparent_280deg)] opacity-100"
        />
    </div>
);

interface PrivacyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-[101] flex items-center justify-center pointer-events-none p-4 sm:p-6"
                    >
                        <div className="relative w-full max-w-4xl max-h-[85vh] pointer-events-auto flex flex-col">

                            {/* Main Content Card */}
                            <div className="relative flex flex-col w-full h-full bg-black/80 backdrop-blur-3xl rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                                <AnimatedBorder />

                                {/* Header */}
                                <div className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-white/5 bg-white/5">
                                    <h2 className="text-xl font-bold text-white tracking-wide uppercase">Privacy Policy</h2>
                                    <button
                                        onClick={onClose}
                                        className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                                    >
                                        <XMarkIcon className="w-6 h-6" />
                                    </button>
                                </div>

                                {/* Scrollable Content */}
                                <div className="relative z-10 flex-1 overflow-y-auto p-6 md:p-10 text-gray-300 space-y-8 font-light leading-relaxed custom-scrollbar">
                                    <section>
                                        <h3 className="text-white font-bold text-lg mb-3">1. Introduction</h3>
                                        <p>ZkVanguard is committed to protecting your privacy. This policy explains how we handle your data when you use our decentralized portfolio management platform. We comply with GDPR, CCPA, and other applicable privacy regulations.</p>
                                    </section>

                                    <section>
                                        <h3 className="text-white font-bold text-lg mb-3">2. Data We Collect</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="font-semibold text-white/80 mb-2">With Your Consent (Optional Analytics):</h4>
                                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                                    <li><strong className="text-white/60">Page Views:</strong> Which pages you visit (no IP addresses stored)</li>
                                                    <li><strong className="text-white/60">Feature Usage:</strong> Aggregated data on which features are used</li>
                                                    <li><strong className="text-white/60">Session Data:</strong> Anonymous session identifiers (not linked to identity)</li>
                                                    <li><strong className="text-white/60">Error Logs:</strong> Technical errors to help us improve the platform</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-white/80 mb-2">Necessary for Platform Operation:</h4>
                                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                                    <li><strong className="text-white/60">Wallet Address:</strong> Your public blockchain address when you connect your wallet</li>
                                                    <li><strong className="text-white/60">Transaction Data:</strong> On-chain transaction history for portfolio analysis</li>
                                                </ul>
                                            </div>
                                            <p className="text-sm bg-white/5 p-3 rounded-lg border border-white/5 mt-4">
                                                We do <strong>NOT</strong> collect: Names, emails, phone numbers, IP addresses, precise location, or any personally identifiable information (PII).
                                            </p>
                                        </div>
                                    </section>

                                    <section>
                                        <h3 className="text-white font-bold text-lg mb-3">3. Zero-Knowledge Privacy</h3>
                                        <p className="mb-2">ZkVanguard uses ZK-STARK technology to ensure:</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Your portfolio positions remain private</li>
                                            <li>Transaction amounts are never revealed publicly</li>
                                            <li>AI agent recommendations are computed without exposing your holdings</li>
                                            <li>All proofs are verified on-chain without revealing sensitive data</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h3 className="text-white font-bold text-lg mb-3">4. Data Storage & Retention</h3>
                                        <ul className="space-y-4">
                                            <li>
                                                <strong className="text-white">On-Chain Data:</strong> Stored permanently on the blockchain (publicly accessible by design).
                                            </li>
                                            <li>
                                                <strong className="text-white">Analytics Data:</strong> Stored in our database for 90 days, then automatically deleted. This data is anonymized and cannot be linked to your identity.
                                            </li>
                                            <li>
                                                <strong className="text-white">Preferences:</strong> Stored locally in your browser. We do not have access to this data.
                                            </li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h3 className="text-white font-bold text-lg mb-3">5. Cookies & Tracking</h3>
                                        <p className="mb-2">We use the following types of cookies:</p>
                                        <ul className="list-disc pl-5 space-y-1 mb-4">
                                            <li><strong className="text-white/80">Necessary:</strong> Required for wallet connection and session management</li>
                                            <li><strong className="text-white/80">Analytics (Optional):</strong> Help us understand how the platform is used</li>
                                            <li><strong className="text-white/80">Preferences (Optional):</strong> Remember your settings like theme and layout</li>
                                        </ul>
                                        <p className="text-sm text-gray-400">You can manage your cookie preferences at any time using the cookie banner or by clearing your browser data.</p>
                                    </section>

                                    <section>
                                        <h3 className="text-white font-bold text-lg mb-3">6. Third-Party Services</h3>
                                        <p className="mb-2">We integrate with:</p>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                                            <li className="bg-white/5 p-2 rounded border border-white/5">WalletConnect/Reown (Wallet connections)</li>
                                            <li className="bg-white/5 p-2 rounded border border-white/5">Cronos Network (Blockchain interactions)</li>
                                            <li className="bg-white/5 p-2 rounded border border-white/5">SUI Network (Multi-chain functionality)</li>
                                            <li className="bg-white/5 p-2 rounded border border-white/5">Crypto.com AI SDK (Portfolio analysis)</li>
                                            <li className="bg-white/5 p-2 rounded border border-white/5">Neon Database (Analytics storage)</li>
                                        </ul>
                                        <p className="mt-3 text-sm">Each third-party service has its own privacy policy. We only share the minimum data necessary for functionality.</p>
                                    </section>

                                    <section>
                                        <h3 className="text-white font-bold text-lg mb-3">7. Your Rights (GDPR/CCPA)</h3>
                                        <p className="mb-2">You have the right to:</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li><strong className="text-white/80">Access:</strong> Request a copy of data we have about you</li>
                                            <li><strong className="text-white/80">Rectification:</strong> Correct inaccurate data</li>
                                            <li><strong className="text-white/80">Erasure:</strong> Request deletion of your data (except on-chain data)</li>
                                            <li><strong className="text-white/80">Portability:</strong> Export your data in a standard format</li>
                                            <li><strong className="text-white/80">Objection:</strong> Opt out of analytics at any time via cookie settings</li>
                                            <li><strong className="text-white/80">Withdraw Consent:</strong> Change your cookie preferences anytime</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h3 className="text-white font-bold text-lg mb-3">8. Data Security</h3>
                                        <p className="mb-2">We implement industry-standard security measures including:</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>HTTPS encryption for all data in transit</li>
                                            <li>Database encryption at rest</li>
                                            <li>Regular security audits</li>
                                            <li>Access controls and monitoring</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h3 className="text-white font-bold text-lg mb-3">9. International Transfers</h3>
                                        <p>Our services are hosted in the United States and European Union. If you are located outside these regions, your data may be transferred internationally. We ensure appropriate safeguards are in place for such transfers.</p>
                                    </section>

                                    <section>
                                        <h3 className="text-white font-bold text-lg mb-3">10. Contact & Data Protection Officer</h3>
                                        <p>For privacy concerns or data requests, contact us at: <a href="mailto:privacy@zkvanguard.io" className="text-blue-400 hover:text-blue-300 transition-colors">privacy@zkvanguard.io</a></p>
                                        <p className="text-sm mt-2 text-gray-500">Response time: Within 30 days for GDPR/CCPA requests.</p>
                                    </section>

                                    <section>
                                        <h3 className="text-white font-bold text-lg mb-3">11. Changes to This Policy</h3>
                                        <p>We may update this policy periodically. Significant changes will be notified via the platform. Continued use after changes constitutes acceptance.</p>
                                    </section>

                                    <div className="pt-8 border-t border-white/10 text-sm text-gray-500">
                                        <p>Last Updated: January 13, 2026</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
