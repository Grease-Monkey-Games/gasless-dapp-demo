import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Account Abstraction: The Evolution</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            <p>
              <a>Account Abstraction</a>: The Evolution
            </p>
          </h1>
          <br />

          <div className={styles.grid}>
            <Link href="/metamask" className={styles.card}>
              <h2>Metamask &rarr;</h2>
              <p>Claim your rewards using the standard method.</p>
            </Link>

            <Link href="/defender" className={styles.card}>
              <h2>Open Zeppelin Defender &rarr;</h2>
              <p>Claim your rewards with sponsored transactions.</p>
            </Link>

            <Link href="/smart-wallet-providers" className={styles.card}>
              <h2>Smart Wallet &rarr;</h2>
              <p>
                Claim your rewards with Smart Wallet & gasless transactions.
              </p>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
