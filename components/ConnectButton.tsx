'use client';

import { ConnectButton as RainbowConnectButton } from '@rainbow-me/rainbowkit';
import { Wallet } from 'lucide-react';
import { motion } from 'framer-motion';

export function ConnectButton() {
  return (
    <RainbowConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <motion.button
                    onClick={openConnectModal}
                    type="button"
                    className="px-5 h-11 bg-[#007AFF] text-white rounded-[12px] font-semibold text-[16px] flex items-center gap-2 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,122,255,0.4)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Wallet className="w-4 h-4" />
                    <span>Connect</span>
                  </motion.button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    type="button"
                    className="px-4 h-11 bg-[#FF3B30]/10 border border-[#FF3B30]/30 rounded-[12px] text-[#FF3B30] font-medium hover:bg-[#FF3B30]/20 transition-all"
                  >
                    Wrong network
                  </button>
                );
              }

              return (
                <div className="flex items-center gap-2">
                  <motion.button
                    onClick={openChainModal}
                    type="button"
                    className="px-3 h-11 bg-[#f5f5f7] dark:bg-white/10 border border-black/10 dark:border-white/10 rounded-[12px] hidden sm:flex items-center gap-2"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 20,
                          height: 20,
                          borderRadius: 999,
                          overflow: 'hidden',
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 20, height: 20 }}
                          />
                        )}
                      </div>
                    )}
                    <span className="text-[16px] font-medium text-[#1d1d1f] dark:text-white">
                      {chain.name}
                    </span>
                  </motion.button>

                  <motion.button
                    onClick={openAccountModal}
                    type="button"
                    className="px-4 h-11 bg-[#f5f5f7] dark:bg-white/10 border border-black/10 dark:border-white/10 rounded-[12px] flex items-center gap-2 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Wallet className="w-4 h-4 text-[#007AFF] dark:text-[#0A84FF]" />
                    <span className="text-[#1d1d1f] dark:text-white font-medium text-[16px]">
                      {account.displayName}
                    </span>
                  </motion.button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </RainbowConnectButton.Custom>
  );
}
