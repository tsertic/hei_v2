import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navigation } from "../components/Layout/Navigation/Navigation";
import styles from "./../styles/App.module.scss";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={styles["app"]}>
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
}
