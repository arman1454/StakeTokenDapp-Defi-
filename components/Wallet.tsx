"use client"
import { connectWallet } from '@/utils/connectWallet';
import React, { useEffect, useState } from 'react'
import { walletStore } from '@/store/states';
import { useRouter } from "next/navigation";
import { handleAccountChange } from '@/utils/handleAccountChange';
import { handleChainChange } from '@/utils/handleChainChange';

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

  useEffect(() => {
    const onAccountsChanged = () => handleAccountChange(setState, updateWallet);
    const onChainChanged = () => handleChainChange(setState, updateWallet);

    window.ethereum.on('accountsChanged', onAccountsChanged);
    window.ethereum.on('chainChanged', onChainChanged);

    return () => {
      window.ethereum.removeListener('accountsChanged', onAccountsChanged);
      window.ethereum.removeListener('chainChanged', onChainChanged);
    };
  }, []);



  const handleWallet = async () => {
    try {
      setIsLoading(true);
      const { provider, selectedAccount, stakingContract, stakeTokenContract, chainId } = await connectWallet();
      
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
      <br />
      <p>{wallet.selectedAccount}</p>
      <br />
      <p>{wallet.chainId}</p>
    </div>
  )
}

export default Wallet
