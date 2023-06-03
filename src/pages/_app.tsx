import "@/styles/globals.css";
import Navbar from "./Navbar";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>AniBlog</title>
        <link rel="shortcut icon" href="/assets/ai.png" />
      </Head>
      <div>
        <Navbar />
      </div>
      <Component {...pageProps} />
    </>
  );
}
