import { useState } from "react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { NFT_ADDRESS } from "../const/addresses";
import { PrivyProvider, usePrivy, useWallets, useLogout, useConnectWallet } from '@privy-io/react-auth';
import Swal from "sweetalert2";
import Head from "next/head";

const Privy: NextPage = () => {

  return (
    <>
      <Head>
        <title>Smart Wallet Method</title>
      </Head>
      <PrivyProvider
        appId="cln94mmow01ezl80f1x9ct0s5"
        config={{
          loginMethods: ['email', 'wallet', 'google', 'twitter'],
          appearance: {
            theme: 'light',
            accentColor: '#676FFF',
            logo: './gmg_logo.jpeg',
          },
          embeddedWallets: {
            createOnLogin: 'users-without-wallets',
            noPromptOnSignature: true, // defaults to false
          },
        }}
      >
        <div className={styles.container}>
          <main className={styles.main}>
            <h1 className={styles.title}>Privy Wallet</h1>
            <br />
            <Privy />
          </main>
        </div>
      </PrivyProvider>
    </>
  );
};

export default Privy;
