import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { NFT_ADDRESS } from "../const/addresses";
import Swal from "sweetalert2";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Meta-Transactions Method</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Meta-Transactions Method</h1>

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
            onError={(error) => {
              console.log(error);
              Swal.fire(
                "Rewards Not Claimed!",
                "Error claiming reward",
                "error"
              );
            }}
          >
            Claim Reward
          </Web3Button>
          <br />
          <button
            style={{ cursor: "pointer" }}
            onClick={() =>
              window.open(
                "https://defender.openzeppelin.com/#/relay/9ce1bc62-eeac-440f-b3f9-0bfb050ea415/settings"
              )
            }
          >
            View Relayer Balance (Only Admin)
          </button>
        </main>
      </div>
    </>
  );
};

export default Home;
