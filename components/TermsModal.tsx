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

interface TermsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
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
                                    <h2 className="text-xl font-bold text-white tracking-wide uppercase">Terms of Service</h2>
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
                                        <h3 className="text-white font-bold text-lg mb-3">1. Acceptance of Terms</h3>
                                        <p>By accessing and using ZkVanguard, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.</p>
                                    </section>

                                    <section>
                                        <h3 className="text-white font-bold text-lg mb-3">2. Description of Service</h3>
                                        <p>ZkVanguard is a decentralized portfolio management platform that uses AI agents and zero-knowledge proofs to provide privacy-preserving financial services on the Cronos blockchain.</p>
                                    </section>

                                    <section>
                                        <h3 className="text-white font-bold text-lg mb-3">3. Risk Disclosure</h3>
                                        <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-xl">
                                            <h4 className="flex items-center gap-2 text-yellow-500 font-bold mb-2">⚠️ Important Risks</h4>
                                            <ul className="list-disc pl-5 space-y-1 text-sm text-yellow-200/80">
                                                <li>Cryptocurrency investments carry high risk and volatility</li>
                                                <li>You may lose part or all of your invested capital</li>
                                                <li>AI recommendations are not financial advice</li>
                                                <li>Smart contracts may contain bugs or vulnerabilities</li>
                                                <li>Past performance does not guarantee future results</li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section>
                                        <h3 className="text-white font-bold text-lg mb-3">4. User Responsibilities</h3>
                                        <p className="mb-2">You are responsible for:</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Securing your private keys and wallet credentials</li>
                                            <li>Conducting your own research before making investment decisions</li>
                                            <li>Complying with local laws and regulations</li>
                                            <li>Paying all applicable gas fees and transaction costs</li>
                                            <li>Understanding the risks of decentralized finance (DeFi)</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h3 className="text-white font-bold text-lg mb-3">5. AI Agent Disclaimers</h3>
                                        <p className="mb-2">Our AI agents provide automated analysis and suggestions, but:</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>They do not constitute financial, investment, or legal advice</li>
                                            <li>You should consult qualified professionals for personalized advice</li>
                                            <li>AI predictions may be inaccurate or incomplete</li>
                                            <li>We do not guarantee any specific investment outcomes</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h3 className="text-white font-bold text-lg mb-3">6. Smart Contract Risks</h3>
                                        <p className="mb-2">ZkVanguard operates through smart contracts on the Cronos blockchain. While our contracts have been tested, users acknowledge that:</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Smart contracts are experimental technology</li>
                                            <li>Bugs or vulnerabilities may exist despite our best efforts</li>
                                            <li>Blockchain transactions are irreversible</li>
                                            <li>We are not liable for losses due to smart contract failures</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h3 className="text-white font-bold text-lg mb-3">7. Intellectual Property</h3>
                                        <p>ZkVanguard is open-source software licensed under Apache 2.0. You may use, modify, and distribute the code subject to the license terms.</p>
                                    </section>

                                    <section>
                                        <h3 className="text-white font-bold text-lg mb-3">8. Limitation of Liability</h3>
                                        <p>To the maximum extent permitted by law, ZkVanguard and its contributors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or other intangible losses resulting from your use of the platform.</p>
                                    </section>

                                    <section>
                                        <h3 className="text-white font-bold text-lg mb-3">9. No Warranties</h3>
                                        <p>The platform is provided "AS IS" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
                                    </section>

                                    <section>
                                        <h3 className="text-white font-bold text-lg mb-3">10. Governing Law</h3>
                                        <p>These Terms shall be governed by and construed in accordance with applicable laws. Any disputes shall be resolved through binding arbitration.</p>
                                    </section>

                                    <section>
                                        <h3 className="text-white font-bold text-lg mb-3">11. Changes to Terms</h3>
                                        <p>We reserve the right to modify these terms at any time. Continued use of the platform after changes constitutes acceptance of the updated terms.</p>
                                    </section>

                                    <section>
                                        <h3 className="text-white font-bold text-lg mb-3">12. Contact Information</h3>
                                        <p>For questions about these Terms, contact: <a href="mailto:legal@zkvanguard.io" className="text-blue-400 hover:text-blue-300 transition-colors">legal@zkvanguard.io</a></p>
                                    </section>

                                    <div className="pt-8 border-t border-white/10 text-sm text-gray-500">
                                        <p className="mb-2">By connecting your wallet and using ZkVanguard, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>
                                        <p>Last Updated: January 2, 2026</p>
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
