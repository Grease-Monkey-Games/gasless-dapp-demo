import { useState } from "react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { connectToSmartWallet } from "../lib/wallet";
import { Blocks } from "react-loader-spinner";
import { Connected } from "../components/Connected";
import Swal from "sweetalert2";
import Head from "next/head";

const TMAccount: NextPage = () => {
  const [username, setUsername] = useState("");
  const [signer, setSigner] = useState<any>(null);
  const [walletAddress, setWalletAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState("");
  const [error, setError] = useState("");

  const connectWallet = async () => {
    console.log(username);
    try {
      setIsLoading(true);
      const wallet = await connectToSmartWallet(
        username,
        "74e038ac-7207-4193-bd6c-977f40e42222",
        (status: any) => setLoadingStatus(status)
      );
      const s = await wallet.getSigner();
      const address = await s.getAddress();
      console.log("signer: ", s);
      setSigner(s);
      setIsLoading(false);
      setWalletAddress(address);
      Swal.fire(
        "You are Connected!",
        `Smart Wallet address: ${address}`,
        "success"
      );
    } catch (e) {
      setIsLoading(false);
      console.error(e);
      setError((e as any).message);
      Swal.fire("Connection Failed!", "Please, try again", "error");
    }
  };

  const updateUserName = (e: any) => {
    setUsername(e.target.value);
  };

  return signer ? (
    <>
      <Head>
        <title>TM Account Method</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>TM Account Method</h1>
          <br />
          <Connected
            signer={signer}
            username={username}
            walletAddress={walletAddress}
          />
        </main>
      </div>
    </>
  ) : isLoading ? (
    <>
      <Head>
        <title>TM Account Method</title>
      </Head>
      <div className={styles.filler}>
        <Blocks
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
        />
        <p className={styles.label} style={{ textAlign: "center" }}>
          {loadingStatus}
        </p>
      </div>
    </>
  ) : (
    <>
      <Head>
        <title>TM Account Method</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>TM Account Method</h1>
          <br />
          <form>
            <label>
              Username:
              <input
                style={{ marginLeft: "5px" }}
                type="text"
                name="username"
                id="username"
                onChange={updateUserName}
              />
            </label>
          </form>
          <br />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        </main>
      </div>
    </>
  );
};

export default TMAccount;
