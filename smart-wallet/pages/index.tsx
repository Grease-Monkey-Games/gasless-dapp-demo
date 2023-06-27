import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { NFT_ADDRESS } from "../const/addresses";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Smart Wallet Method
        </h1>
        <br />
        <ConnectWallet />
        <br />
        <Web3Button
          contractAddress={NFT_ADDRESS}
          action={(contract) => contract.erc721.claim(1)}
          onSuccess={() => alert("Rewards Claimed!")}
        >Claim Reward</Web3Button>
      </main>
    </div>
  );
};

export default Home;
