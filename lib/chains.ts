import { defineChain } from 'viem';

// ============================================
// SOLANA (Represented as a chain config for UI)
// ============================================

export const SolanaMainnet = defineChain({
  id: 1399811149, // Dummy ID for Solana representation in EVM-like UI
  name: 'Solana Mainnet',
  nativeCurrency: {
    decimals: 9,
    name: 'Solana',
    symbol: 'SOL',
  },
  rpcUrls: {
    default: {
      http: ['https://api.mainnet-beta.solana.com'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Solscan',
      url: 'https://solscan.io',
    },
  },
  testnet: false,
});

export const SolanaTestnet = defineChain({
  id: 1399811150,
  name: 'Solana Testnet',
  nativeCurrency: {
    decimals: 9,
    name: 'Solana',
    symbol: 'SOL',
  },
  rpcUrls: {
    default: {
      http: ['https://api.testnet.solana.com'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Solana Explorer',
      url: 'https://explorer.solana.com/?cluster=testnet',
    },
  },
  testnet: true,
});

// ============================================
// SUI CHAINS (Move-based)
// ============================================

export const SuiMainnet = {
  id: 'sui:mainnet',
  name: 'SUI',
  nativeCurrency: {
    decimals: 9,
    name: 'SUI',
    symbol: 'SUI',
  },
  rpcUrls: {
    default: {
      http: ['https://fullnode.mainnet.sui.io:443'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Sui Explorer',
      url: 'https://suiexplorer.com',
    },
  },
  testnet: false,
};

export const SuiTestnet = {
  id: 'sui:testnet',
  name: 'SUI Testnet',
  nativeCurrency: {
    decimals: 9,
    name: 'SUI',
    symbol: 'SUI',
  },
  rpcUrls: {
    default: {
      http: ['https://fullnode.testnet.sui.io:443'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Sui Testnet Explorer',
      url: 'https://suiexplorer.com/?network=testnet',
    },
  },
  testnet: true,
};

// ============================================
// MULTI-CHAIN UTILITIES
// ============================================

export type ChainType = 'evm' | 'sui';

export interface MultiChainConfig {
  type: ChainType;
  name: string;
  logo: string;
  chains: {
    mainnet: any;
    testnet: any;
  };
}

export const SUPPORTED_CHAINS: MultiChainConfig[] = [
  {
    type: 'evm',
    name: 'Solana Mainnet',
    logo: '/chains/solana.svg',
    chains: {
      mainnet: SolanaMainnet,
      testnet: SolanaTestnet,
    },
  },
  {
    type: 'sui',
    name: 'SUI',
    logo: '/chains/sui.svg',
    chains: {
      mainnet: SuiMainnet,
      testnet: SuiTestnet,
    },
  },
];

export function isEVMChain(chainId: number | string): boolean {
  return typeof chainId === 'number';
}

export function isSUIChain(chainId: number | string): boolean {
  if (typeof chainId === 'string') {
    return chainId.startsWith('sui:');
  }
  return false;
}

export function getChainType(chainId: number | string): ChainType {
  return isSUIChain(chainId) ? 'sui' : 'evm';
}
