"use client"
import { walletStore } from '@/store/states'
import React from 'react'
const Profile = () => {
  const wallet = walletStore((state: any) => state.wallet)
  return (
    <div>
        <p>Account: {wallet.selectedAccount} </p>
        <p>Chain ID: {wallet.chainId}</p>
    </div>
  )
}

export default Profile
