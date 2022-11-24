import { ContactForm } from "../components/ContactForm/ContactForm";
import { HeroSection } from "../components/HeroSection/HeroSection";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles["home-page"]}>
      <HeroSection />
      <section className={styles["contact-container"]}>
        <h1 className={styles["contact-container--title"]}>Kontakt</h1>
        <ContactForm />
      </section>
    </div>
  );
}
