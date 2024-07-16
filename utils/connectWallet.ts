import { ethers, Contract, InterfaceAbi } from "ethers";
import stakingAbi from "../ABI/stakingAbi.json"
import stakeTokenAbi from "../ABI/stakeTokenAbi.json";

interface WalletConnection {
    provider: ethers.BrowserProvider;
    selectedAccount: string;
    stakingContract: ethers.Contract;
    stakeTokenContract: ethers.Contract;
    chainId: number;
}

export const connectWallet = async (): Promise<WalletConnection> => {
    try {
        let provider: ethers.BrowserProvider | null = null;
        let stakingContract: ethers.Contract | null = null;
        let stakeTokenContract: ethers.Contract | null = null;
        let chainId: number | null = null;
        let signer : any | null = null;
        if (window.ethereum === null) {
            throw new Error("Metamsk is not installed");
        }
        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts'
        })

        let chainIdHex = await window.ethereum.request({
            method: 'eth_chainId'
        })
        chainId = parseInt(chainIdHex, 16)

        let selectedAccount = accounts[0];
        if (!selectedAccount) {
            throw new Error("No ethereum accounts available")
        }

        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();

        const stakingContractAddress = ""
        const stakeTokenContractAddress = ""

        stakingContract = new Contract(stakingContractAddress, stakingAbi as InterfaceAbi, signer);
        stakeTokenContract = new Contract(stakeTokenContractAddress, stakeTokenAbi as InterfaceAbi, signer);

        return { provider, selectedAccount, stakeTokenContract, stakingContract, chainId }

    } catch (error) {
        console.error(error);
        throw error
    }

}