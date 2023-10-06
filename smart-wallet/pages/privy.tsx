import { useState } from "react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { NFT_ADDRESS } from "../const/addresses";
import { PrivyProvider, usePrivy, useWallets, useLogout, useConnectWallet } from '@privy-io/react-auth';
import Swal from "sweetalert2";
import Head from "next/head";

const Privy: NextPage = () => {
  
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")
  const {wallets} = useWallets();

  const handleLogin = (user: any) => {
    console.log(`User ${user.id} logged in!`)
    setUserLoggedIn(true)
    const embeddedWallet = wallets.find((wallet) => wallet.walletClientType === 'privy');
    setWalletAddress(embeddedWallet!.address);
  }

  const LoginButton = () => {
    const { login } = usePrivy();
    return <button onClick={login}>Login</button>;
  }

  const LogoutButton = () => {
    const {logout} = useLogout({
      onSuccess: () => {
          console.log('User logged out');
          // Any logic you'd like to execute after a user successfully logs out
          setUserLoggedIn(false)
      },
    })
    return <button onClick={logout}>Logout</button>;
  }

  return (
    <>
      <Head>
        <title>Smart Wallet Method</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Privy Wallet</h1>
          <br />
          <PrivyProvider
            appId="cln94mmow01ezl80f1x9ct0s5"
            onSuccess={handleLogin}
            config={{
              loginMethods: ['email', 'wallet', "google", "twitter"],
              appearance: {
                theme: 'light',
                accentColor: '#676FFF',
                logo: './gmg_logo.jpeg',
              },
              embeddedWallets: {
                createOnLogin: 'users-without-wallets',
                noPromptOnSignature: true // defaults to false
              }
            }}
          >
            <div>
              {userLoggedIn ? `Wallet Address: ${walletAddress}` : <LoginButton />}
              {userLoggedIn ? <LogoutButton /> : <></>}
            </div>
          </PrivyProvider>
        </main>
      </div>
    </>
  );
};

export default Privy;
