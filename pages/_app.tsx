import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navigation } from "../components/Layout/Navigation/Navigation";
import styles from "./../styles/App.module.scss";
import { Footer } from "../components/Layout/Footer/Footer";
import Head from "next/head";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={styles["app"]}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      <div className={styles["content"]}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
