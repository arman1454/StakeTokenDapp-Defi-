"use client"
import { walletStore } from '@/store/states'
import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react'

const RewardRate = () => {
    const { stakingContract, selectedAccount } = walletStore((state: any) => state.wallet)
    const [rewardRate, setRewardRate] = useState("0");

    useEffect(() => {
        const fetchRewardRate = async () => {
            try {
                const rewardRateWei = await stakingContract.REWARD_RATE();
                const rewardRateEth = ethers.formatUnits(rewardRateWei.toString(), 18);
                setRewardRate(rewardRateEth)
            } catch (error:any) {
                console.error(error.message)
            }
        }
        stakingContract && fetchRewardRate()
    }, [stakingContract, selectedAccount])
  return (
    <div>
          <p>Reward Rate:</p>
          <span>{rewardRate} token/sec </span>
    </div>
  )
}

export default RewardRate
