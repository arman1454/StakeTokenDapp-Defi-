"use client"
import { walletStore } from '@/store/states'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import React, { useState } from 'react'
import { Input } from './ui/input'
import { ethers } from "ethers"
import { useToast } from './ui/use-toast'

const ApprovalAndStake = () => {
    const { toast } = useToast()
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

    const sendApproval = async()=>{
        // const approvalAmount = parseInt(approval);
        if (approval === "" || parseInt(approval) <= 0) {
            console.error("Please enter a valid positive number");
            return;
        }

        const amountToApprove = ethers.parseUnits(approval, 18).toString();
        console.log(amountToApprove);
        toast({
            description: "Pending...",
        });
        
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            toast({
                description: "Successful!",
            });
        } catch (error) {
            toast({
                description: "Failed to execute the function.",
            });
        }
        
    }

    const sendStake = async()=>{
        if (stake === "" || parseInt(stake) <= 0) {
            console.error("Please enter a valid positive number");
            return;
        }

        const amountToStake = ethers.parseUnits(stake, 18).toString();
        console.log(amountToStake);
        toast({
            description: "Pending...",
        });
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            toast({
                description: "Successful!",
            }); 
        } catch (error) {
            toast({
                description: "Failed to execute the function.",
            });
        }
        
    }
    
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
                          <Button variant="default" onClick={sendApproval}>Token Approval</Button>
                      </div>
                      <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Enter Stake Amount</Label>
                          <Input id="buyAmount"
                              type="number"
                              placeholder="Stake Token"
                              name="stake"
                              value={stake} 
                              onChange={handleInputChange} 
                              />
                      </div>
                      <div className="flex items-center pl-7">
                          <Button variant="default" onClick={sendStake}>Stake Token</Button>
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
