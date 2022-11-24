import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navigation } from "../components/Layout/Navigation/Navigation";
import styles from "./../styles/App.module.scss";
import { Footer } from "../components/Layout/Footer/Footer";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={styles["app"]}>
      <Navigation />
      <div className={styles["content"]}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
