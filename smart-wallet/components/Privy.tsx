import { useState } from "react";
import { useWallets, useLogin } from '@privy-io/react-auth';

export const Privy = () => {
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [walletAddress, setWalletAddress] = useState('');
    const {wallets} = useWallets();
  
    // This functions the same as PrivyProvider's onSuccess, but 
    // allows you to tap into Privy hooks, e.g. useWallets
    const {login} = useLogin({
      onComplete: (user) => {
        console.log(`User ${user.id} logged in!`);
        setUserLoggedIn(true);
        const embeddedWallet = wallets.find((wallet) => wallet.walletClientType === 'privy');
        setWalletAddress(embeddedWallet!.address);
      },
    });
  
    return (
      <div>
        {userLoggedIn ? `Wallet Address: ${walletAddress}` : <button onClick={login}>Login</button>}
      </div>
    );
  };