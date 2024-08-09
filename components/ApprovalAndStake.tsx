"use client"
import { walletStore } from '@/store/states'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import React, { useState } from 'react'
import { Input } from './ui/input'

const ApprovalAndStake = () => {
    const { stakeTokenContract, stakingContract }= walletStore((state: any) => state.wallet)
    const [approval, setApproval] = useState("");
    const [stake, setStake] = useState("");
    const handleInputChange = (event:any) => {
        const { name, value } = event.target;
        if (name === "approval") {
            setApproval(value);
        } else if (name === "stake") {
            setStake(value); // Update buyAmount if user manually edits it
        }
    };

    const sendApproval = ()=>{
        console.log(approval);
        
    }

    const sendStake = ()=>{
        console.log(stake);
        
    }
    // const approveToken = async (e) => {
    //     e.preventDefault();
    //     const amount = approvedTokenRef.current.value.trim();
    //     if (isNaN(amount) || amount <= 0) {
    //         console.error("Please enter a valid positive number");
    //         return;
    //     }
    //     const amountToSend = ethers.parseUnits(amount, 18).toString();
    //     try {
    //         const transaction = await stakeTokenContract.approve(stakingContract.target, amountToSend)
    //         await toast.promise(transaction.wait(),
    //             {
    //                 loading: "Transaction is pending...",
    //                 success: 'Transaction successful 👌',
    //                 error: 'Transaction failed 🤯'
    //             });
    //         approvedTokenRef.current.value = "";
    //         // const receipt = await transaction.wait();
    //         // if (receipt.status === 1) {
    //         //     toast.success("Transaction is successful")
    //         //     approvedTokenRef.current.value = "";
    //         //   } else {
    //         //       toast.error("Transaction failed. Please try again.")
    //         //   }
    //     } catch (error) {
    //         toast.error("Token Approval Failed");
    //         console.error(error.message)
    //     }
    // };
  return (
      <Card className="w-[350px] mb-16">
          <CardHeader>
              
          </CardHeader>
          <CardContent>
              <form onSubmit={(e) => e.preventDefault()}>
                  <div className="grid w-full items-center gap-9">
                      <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Enter Approval Amount</Label>
                          <Input id="sellAmount"
                              type="number"
                              placeholder="Set Approval"
                              name="approval"
                              value={approval}
                              onChange={handleInputChange} />
                      </div>
                      <div className="flex items-center pl-7">
                          <Button variant="default" onClick={() => sendApproval()}>Token Approval</Button>
                      </div>
                      <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Enter Stake Amount</Label>
                          <Input id="buyAmount"
                              type="number"
                              placeholder="Stake Token"
                              name="stake"
                              value={stake} // Display fetched WBNB value
                              onChange={handleInputChange} // Allow manual edit
                              />
                      </div>
                      <div className="flex items-center pl-7">
                          <Button variant="default" onClick={() => sendStake()}>Stake Token</Button>
                      </div>


                  </div>

              </form>
          </CardContent>

          <CardFooter className="flex justify-between">
                This is footer
              {/* <Button variant="default">Get Price</Button> */}
          </CardFooter>
      </Card>
  )
}

export default ApprovalAndStake
