import { Dispatch, SetStateAction } from 'react';

interface WalletState {
    provider: any | null;
    selectedAccount: string | null;
    stakingContract: any | null;
    stakeTokenContract: any | null;
    chainId: number | null;
}
export const handleAccountChange = async (setState: Dispatch<SetStateAction<WalletState>>, updateWallet: (newWallet: Partial<WalletState>) => void
): Promise<void> => {
    try {
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts"
        });
        const selectedAccount = accounts[0];
        console.log(selectedAccount);

        // Update local state
        setState(prevState => ({ ...prevState, selectedAccount }));

        // Update global state
        updateWallet({ selectedAccount });
    } catch (error) {
        console.error("Error changing account: ", error);
    }
};