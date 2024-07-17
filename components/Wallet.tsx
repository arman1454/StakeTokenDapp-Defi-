"use client"
import { connectWallet } from '@/utils/connectWallet';
import React, { useState } from 'react'
import { walletStore } from '@/store/states';
import { useRouter } from "next/navigation";

interface WalletState {
  provider: any | null;
  selectedAccount: string | null;
  stakingContract: any | null;
  stakeTokenContract: any | null;
  chainId: number | null;
}

const Wallet = () => {
  const router = useRouter();
  const [state, setState] = useState<WalletState>({
    provider: null,
    selectedAccount: null,
    stakingContract: null,
    stakeTokenContract: null,
    chainId: null
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const wallet = walletStore((state:any)=>state.wallet)
  const updateWallet = walletStore((state:any)=>state.updateWallet)
  const handleWallet = async () => {
    try {
      setIsLoading(true);
      const { provider, selectedAccount, stakingContract, stakeTokenContract, chainId } = await connectWallet();
      console.log(provider) 
        console.log(selectedAccount) 
        console.log(stakingContract) 
        console.log(stakeTokenContract) 
        console.log(chainId);
      
      setState({ provider, selectedAccount, stakingContract, stakeTokenContract, chainId })
      updateWallet({
        provider: provider,
        selectedAccount: selectedAccount,
        stakingContract: stakingContract,
        stakeTokenContract: stakeTokenContract,
        chainId: chainId,
      })

    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div>
      <button onClick={handleWallet}> connect wallet</button>
    </div>
  )
}

export default Wallet
