"use client"
import { connectWallet } from '@/utils/connectWallet';
import React, { useState } from 'react'

interface WalletState {
  provider: any | null;
  account: string | null;
  stakingContract: any | null;
  stakeTokenContract: any | null;
  chainId: number | null;
}

const Wallet = () => {
  const [state, setState] = useState<WalletState>({
    provider: null,
    account: null,
    stakingContract: null,
    stakeTokenContract: null,
    chainId: null
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleWallet = async () => {
    try {
      setIsLoading(true);
      const { provider, selectedAccount, stakingContract, stakeTokenContract, chainId } = await connectWallet();
      console.log(provider, selectedAccount, stakingContract, stakeTokenContract, chainId);
      
      setState({ provider, account: selectedAccount, stakingContract, stakeTokenContract, chainId })

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
