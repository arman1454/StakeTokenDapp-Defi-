import { walletStore } from '@/store/states'
import React from 'react'

const ConnectedNetwork = () => {
  const {chainId} = walletStore((state: any) => state.wallet)
   if(chainId===null){
      return <p>No Network</p>;
   }
   else if (chainId === 11155111) {
      return <p>Sepolia</p>;
    } else {
      return <p> Network Not Detected</p>;
    }
}

export default ConnectedNetwork
