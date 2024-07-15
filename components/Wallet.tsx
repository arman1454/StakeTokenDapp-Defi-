import React, { useState } from 'react'

const Wallet = () => {
    const [state, setState] = useState({
        provider: null,
        account: null,
        stakingContract: null,
        stakeTokenContract: null,
        chianId: null
    })

    const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      
    </div>
  )
}

export default Wallet
