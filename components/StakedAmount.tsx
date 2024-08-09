"use client"
import { walletStore } from '@/store/states';
import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react'

const StakedAmount = () => {
    const { stakingContract, selectedAccount }= walletStore((state: any) => state.wallet)
    const [stakedAmount, setStakedAmount] = useState("0");

    useEffect(() => {
        const fetchStakedBalance = async () => {
            try {
                const amountStakedWei = await stakingContract.stakedBalance(selectedAccount)
                const amountStakedEth = ethers.formatUnits(amountStakedWei.toString(), 18);
                setStakedAmount(amountStakedEth)
            } catch (error:any) {
                console.error(error.message)
            }
        }
        stakingContract && fetchStakedBalance()
    }, [stakingContract, selectedAccount])
  return (
    <div>
        <p>Staked Amount: </p> <span>{stakedAmount}</span>
    </div>
  )
}

export default StakedAmount
