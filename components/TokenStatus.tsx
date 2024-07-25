import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import StakedAmount from './StakedAmount'
import RewardRate from './RewardRate'
import EarnedReward from './EarnedReward'

const TokenStatus = () => {
  return (
      <div className='pt-14 flex items-center justify-center'>
      <Card className="w-[550px] mb-5 md:mb-0">
              <CardHeader className='flex items-center justify-center'>
              <CardTitle>Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
                <StakedAmount/>
            </div>
            <div>
                <RewardRate/>
            </div>
            <div>
                <EarnedReward/>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
          </CardFooter>
      </Card>
      </div>
  )
}

export default TokenStatus
