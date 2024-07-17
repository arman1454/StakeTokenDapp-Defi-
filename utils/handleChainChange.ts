import { Dispatch, SetStateAction } from 'react';

interface WalletState {
    provider: any | null;
    selectedAccount: string | null;
    stakingContract: any | null;
    stakeTokenContract: any | null;
    chainId: number | null;
}

export const handleChainChange = async (
    setState: Dispatch<SetStateAction<WalletState>>,
    updateWallet: (newWallet: Partial<WalletState>) => void
): Promise<void> => {
    try {
        const chainIdHex = await window.ethereum.request({ method: 'eth_chainId' });
        const chainId = parseInt(chainIdHex, 16);
        console.log(chainId);

        // Update local state
        setState(prevState => ({ ...prevState, chainId }));

        // Update global state
        updateWallet({ chainId });
    } catch (error) {
        console.error("Error changing chain: ", error);
    }
};
