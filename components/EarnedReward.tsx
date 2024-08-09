"use client"
import { walletStore } from '@/store/states';
import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react'

const EarnedReward = () => {
    const { stakingContract, selectedAccount } = walletStore((state: any) => state.wallet)
    const [rewardVal, setRewardVal] = useState("0");

    useEffect(() => {
        const fetchStakeRewardInfo = async () => {
            try {
                //fetching earned amount of a user
                const rewardValueWei = await stakingContract.earned(selectedAccount);
                const rewardValueEth = ethers.formatUnits(rewardValueWei, 18).toString();
                const roundedReward = parseFloat(rewardValueEth).toFixed(2)
                setRewardVal(roundedReward)
            } catch (error:any) {
                console.error(error.message)
            }
        }
        const interval = setInterval(() => {
            stakingContract && fetchStakeRewardInfo();
        }, 20000)
        return () => clearInterval(interval)
    }, [stakingContract, selectedAccount])
  return (
    <div>
          <p>Earned Reward:</p>
          <span>{rewardVal}</span>
    </div>
  )
}

export default EarnedReward
