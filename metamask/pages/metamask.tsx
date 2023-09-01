import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
import { NFT_ADDRESS } from "../const/addresses";
import Swal from "sweetalert2";
import Head from "next/head";

const Metamask: NextPage = () => {
  return (
    <>
      <Head>
        <title>Metamask Method</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Metamask Method</h1>
          <br />
          <ConnectWallet />
          <br />
          <Web3Button
            contractAddress={NFT_ADDRESS}
            action={(contract) => contract.erc721.claim(1)}
            onSuccess={(result) => {
              const transaction =
                "https://mumbai.polygonscan.com/tx/" +
                result[0].receipt.transactionHash;
              Swal.fire(
                "Rewards Claimed!",
                `Transaction Hash: <a style="text-decoration: underline" target="_blank" rel="noopener noreferrer" href=${transaction}><b>${result[0].receipt.transactionHash}</b></a>`,
                "success"
              );
            }}
            onError={() => {
              Swal.fire(
                "Rewards Not Claimed!",
                "Error claiming reward",
                "error"
              );
            }}
          >
            Claim Reward
          </Web3Button>
        </main>
      </div>
    </>
  );
};

export default Metamask;
