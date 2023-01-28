import Image from "next/image";
import React from "react";
import Button from "../UI/Button";
import styles from "./HeroSection.module.scss";
export const HeroSection = () => {
  return (
    <div className={styles["hero-section"]}>
      <h1 className={styles.title}>Hrvatska E-sport Inicijativa</h1>
      <div className={styles["hero-section__logo"]}>
        <Image
          alt="Hrvatska esport inicijativa logo"
          src="/assets/images/hero-logo.png"
          width={400}
          height={300}
        />
      </div>
      <div className={styles["subtext"]}>
        <p>Udruga sa ciljem poboljšanja e-sport scene u Hrvatskoj</p>
        <Button text="Ciljevi" link="/aboutus#goals" />
      </div>
    </div>
  );
};
