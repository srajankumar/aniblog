import Head from "next/head";
import Script from "next/script";

import styles from "../styles/Home.module.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <main className={styles.container}>
      <Head>
        <title>Hunting Coder</title>
      </Head>

      <Script src="/hello.js"></Script>

      <div className="flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <div className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] ">
          <div className={styles.headermain}>
            <h1 className=" font-mono font-bold">&lt;HuntingCoder/&gt;</h1>
            <p>A blog for hunting coders by a hunting coder</p>
          </div>
        </div>
        <div className={styles.blogPage}>
          <h2 className="font-bold">Latest Blogs</h2>
          <div className="blogItem">
            <h3>How to learn javascript in 2022</h3>
            <p>
              JavaSript is the language used to design the logic for the web
            </p>
          </div>
          <div className="blogItem">
            <h3>How to learn javascript in 2022</h3>
            <p>
              JavaSript is the language used to design the logic for the web
            </p>
          </div>
          <div className="blogItem">
            <h3>How to learn javascript in 2022</h3>
            <p>
              JavaSript is the language used to design the logic for the web
            </p>
          </div>
          <div className="blogItem">
            <h3>How to learn javascript in 2022</h3>
            <p>
              JavaSript is the language used to design the logic for the web
            </p>
          </div>
          <div className="blogItem">
            <h3>How to learn javascript in 2022</h3>
            <p>
              JavaSript is the language used to design the logic for the web
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
