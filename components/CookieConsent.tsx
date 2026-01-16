'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CONSENT_KEY = 'zkvanguard_cookie_consent';

interface ConsentSettings {
  necessary: boolean;    // Always true, required for operation
  analytics: boolean;    // Platform improvement analytics
  preferences: boolean;  // User preferences storage
  timestamp: string;
}

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [settings, setSettings] = useState<ConsentSettings>({
    necessary: true,
    analytics: false,
    preferences: false,
    timestamp: '',
  });

  useEffect(() => {
    // Check if consent already given
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      // Small delay to prevent flash on page load
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      try {
        const parsed = JSON.parse(stored);
        setSettings(parsed);
      } catch {
        setShowBanner(true);
      }
    }
  }, []);

  const saveConsent = (consent: ConsentSettings) => {
    const withTimestamp = { ...consent, timestamp: new Date().toISOString() };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(withTimestamp));
    setSettings(withTimestamp);
    setShowBanner(false);

    // Dispatch event for analytics service to pick up
    window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: withTimestamp }));
  };

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      preferences: true,
      timestamp: '',
    });
  };

  const acceptNecessary = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      preferences: false,
      timestamp: '',
    });
  };

  const saveCustom = () => {
    saveConsent(settings);
  };

  if (!showBanner) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        borderColor: ['rgba(30, 58, 138, 0.5)', 'rgba(56, 189, 248, 0.5)', 'rgba(30, 58, 138, 0.5)'],
        boxShadow: [
          '0 0 0px rgba(30, 58, 138, 0)',
          '0 0 20px rgba(56, 189, 248, 0.2)',
          '0 0 0px rgba(30, 58, 138, 0)'
        ]
      }}
      transition={{
        y: { duration: 0.5, ease: "easeOut" },
        default: { duration: 3, repeat: Infinity, ease: "easeInOut" }
      }}
      className="fixed bottom-6 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:max-w-5xl z-[100] p-6 bg-[#020617]/80 backdrop-blur-2xl border-2 rounded-[24px]"
    >
      <div className="w-full">
        {!showDetails ? (
          // Simple Banner
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="font-semibold text-white text-xl mb-2 flex items-center gap-2">
                <span className="text-2xl">🍪</span> Cookie Preferences
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                We use cookies to improve your experience and analyze platform usage.
                Your wallet address is public blockchain data - we don't collect personal information.{' '}
                <Link href="/privacy" className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors">Privacy Policy</Link>
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0 w-full md:w-auto">
              <button
                onClick={() => setShowDetails(true)}
                className="flex-1 md:flex-none px-6 py-3 text-sm font-medium text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all"
              >
                Customize
              </button>
              <button
                onClick={acceptNecessary}
                className="flex-1 md:flex-none px-6 py-3 text-sm font-medium text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all"
              >
                Necessary Only
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 md:flex-none px-6 py-3 text-sm font-medium text-white bg-[#007AFF] hover:bg-[#0062cc] shadow-[0_0_20px_-5px_rgba(0,122,255,0.4)] hover:shadow-[0_0_25px_-5px_rgba(0,122,255,0.6)] rounded-xl transition-all"
              >
                Accept All
              </button>
            </div>
          </div>
        ) : (
          // Detailed Settings
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="font-semibold text-white text-xl">Cookie Settings</h3>
              <button
                onClick={() => setShowDetails(false)}
                className="text-gray-400 hover:text-white transition-colors p-1"
              >
                ✕
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Necessary Cookies */}
              <div className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-white/20 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-white text-lg">Necessary</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 px-2 py-1 rounded-md">Always On</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Required for wallet connection, session management, and core platform functionality.
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-white/20 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-white text-lg">Analytics</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.analytics}
                      onChange={(e) => setSettings({ ...settings, analytics: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#007AFF]"></div>
                  </label>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Anonymous usage data to improve platform features. No PII collected.
                </p>
              </div>

              {/* Preferences Cookies */}
              <div className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-white/20 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-white text-lg">Preferences</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.preferences}
                      onChange={(e) => setSettings({ ...settings, preferences: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#007AFF]"></div>
                  </label>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Remember your settings like theme, dashboard layout, and notification preferences.
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={acceptNecessary}
                className="px-6 py-3 text-sm font-medium text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all"
              >
                Reject Optional
              </button>
              <button
                onClick={saveCustom}
                className="px-6 py-3 text-sm font-medium text-white bg-[#007AFF] hover:bg-[#0062cc] shadow-[0_0_20px_-5px_rgba(0,122,255,0.4)] hover:shadow-[0_0_25px_-5px_rgba(0,122,255,0.6)] rounded-xl transition-all"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// Hook to check consent status
export function useConsent() {
  const [consent, setConsent] = useState<ConsentSettings | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored) {
      try {
        setConsent(JSON.parse(stored));
      } catch {
        setConsent(null);
      }
    }

    const handleUpdate = (e: CustomEvent<ConsentSettings>) => {
      setConsent(e.detail);
    };

    window.addEventListener('cookie-consent-updated', handleUpdate as EventListener);
    return () => window.removeEventListener('cookie-consent-updated', handleUpdate as EventListener);
  }, []);

  return consent;
}

export default CookieConsent;
