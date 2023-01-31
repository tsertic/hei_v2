import Head from "next/head";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { HeroSection } from "../components/HeroSection/HeroSection";
import styles from "../styles/Home.module.scss";
import logoImg from "./../public/assets/images/footer-logo.png";
export default function Home() {
  const pageTitle = "HEI";
  const pageTitleMeta = "Hrvatska Esport Inicijativa";
  const pageDescMeta =
    " Hrvatska esport inicijativa (HEI) je udruga koja želi unaprijediti poziciju esporta u Republici Hrvatskoj";
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescMeta} key="desc" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitleMeta} />
        <meta property="og:description" content={pageDescMeta} />
        <meta
          property="og:image"
          content="https://www.esportinicijativa.hr/_next/image?url=%2Fassets%2Fimages%2Ffooter-logo.png&w=256&q=75"
        />
        <meta
          property="twitter:image"
          content="https://www.esportinicijativa.hr/_next/image?url=%2Fassets%2Fimages%2Ffooter-logo.png&w=256&q=75"
        />
        <meta property="twitter:title " content={pageTitleMeta} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://esportinicijativa.hr" />
      </Head>
      <div className={styles["home-page"]}>
        <HeroSection />
        <section className={styles["contact-container"]}>
          <h1 className={styles["contact-container--title"]}>Kontakt</h1>
          <ContactForm />
        </section>
      </div>
    </>
  );
}
