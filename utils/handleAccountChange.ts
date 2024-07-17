export const handleAccountChange = async (setState,updateWallet) => {
    const accounts = await window.ethereum.request({
        method: "eth_requestAccounts"
    })
    const selectedAccount = accounts[0];
    console.log(selectedAccount)
    setState(prevState => ({ ...prevState, selectedAccount }))
    updateWallet({selectedAccount})
}