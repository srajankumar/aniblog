import Head from "next/head";
import Script from "next/script";
import styles from "../styles/Main.module.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <main className={styles.container}>
      <Head>
        <title>AniBlog</title>
      </Head>

      <Script src="/hello.js"></Script>

      <div className="flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <div className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] ">
          <div className={styles.headermain}>
            <h1 className=" font-mono font-bold">AniBlog</h1>
            <p>A blog for Anime lovers ~ (•̀⁠ᴗ⁠-)⁠</p>
          </div>
        </div>
        <div className={styles.blogPage}>
          <h2 className="font-bold">Popular Blogs</h2>
          <div className="blogItem">
            <h3>One Piece</h3>
            <p>Marineford arc</p>
          </div>
          <div className="blogItem">
            <h3>Naruto</h3>
            <p>4th Great Ninja War</p>
          </div>
          <div className="blogItem">
            <h3>Attack on Titan</h3>
            <p>Founding Titan, Rubling</p>
          </div>
          <div className="blogItem">
            <h3>Demon Slayer</h3>
            <p>Swordsmith Village, Mitsuri</p>
          </div>
          <div className="blogItem">
            <h3>JOJO&apos;s Bizzare Adventure</h3>
            <p>Stardust Crusaders</p>
          </div>
        </div>
      </div>
    </main>
  );
}
