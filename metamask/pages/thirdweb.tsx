import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

const Thirdweb: NextPage = () => {
  return (
    <>
      <Head>
        <title>Smart Wallet Method</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Smart Wallet</h1>
          <br />

          <div className={styles.grid}>
            <Link href="/smart-wallet" className={styles.card}>
              <h2>Local Authentication &rarr;</h2>
              <p>Claim your rewards using an extra password.</p>
            </Link>
            <Link href="/smart-wallet/paper-wallet" className={styles.card}>
              <h2>Email Wallet &rarr;</h2>
              <p>Claim your rewards using your Email.</p>
            </Link>
            <Link href="/smart-wallet/tm-account" className={styles.card}>
              <h2>TM Account &rarr;</h2>
              <p>Claim your rewards using your TM Account Username.</p>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default Thirdweb;
