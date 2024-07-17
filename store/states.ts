import { create } from 'zustand';
import { ethers } from 'ethers';

interface Wallet {
    provider: ethers.BrowserProvider | null;
    selectedAccount: string | null;
    stakingContract: ethers.Contract | null;
    stakeTokenContract: ethers.Contract | null;
    chainId: number | null;
}

interface WalletState {
    wallet: Wallet;
    updateWallet: (newWallet: Partial<Wallet>) => void;
}


export const walletStore = create<WalletState>((set)=>({
    wallet:{
        provider: null,
        selectedAccount: null,
        stakingContract: null,
        stakeTokenContract: null,
        chainId: null,
    },

    updateWallet: (newWallet: Partial<Wallet>)=> set((state:any)=>({
        wallet: {...state.wallet, ...newWallet}
    }))
}))
