import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

const Providers: NextPage = () => {
  return (
    <>
      <Head>
        <title>Smart Wallet Providers</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Smart Wallet Providers</h1>
          <br />

          <div className={styles.grid}>
            <Link href="/sequence" className={styles.card}>
              <h2>Sequence &rarr;</h2>
              <p>
                Claim your rewards with Smart Wallet & gasless transactions by
                Sequence.
              </p>
            </Link>
            <Link href="/thirdweb" className={styles.card}>
              <h2>Thirdweb &rarr;</h2>
              <p>
                Claim your rewards with Smart Wallet & gasless transactions by
                Thirdweb.
              </p>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default Providers;
