import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Smart Wallet Method</h1>
        <br />

        <div className={styles.grid}>
          <Link href="/sequence" className={styles.card}>
            <h2>Sequence &rarr;</h2>
            <p>
              Claim your rewards with Smart Wallet & sponsored transactions by
              Sequence.
            </p>
          </Link>
          <Link href="/smart-wallet" className={styles.card}>
            <h2>Thirdweb &rarr;</h2>
            <p>
              Claim your rewards with Smart Wallet & sponsored transactions by
              Thirdweb.
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
