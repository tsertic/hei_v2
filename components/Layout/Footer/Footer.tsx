import Link from "next/link";
import React from "react";
import { SocialIcon } from "../../UI/SocialIcon";
import styles from "./Footer.module.scss";
export const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__contact"]}>
        <h4>kontakt:</h4>
        <p>info@esportinicijativa.hr</p>
        <div className={styles["footer__contact__social-icons"]}>
          <SocialIcon
            imgPath="/assets/images/Instagram-icon.svg"
            linkPath="#"
            alt="Instagram icon"
          />
          <SocialIcon
            imgPath="/assets/images/facebook-icon.svg"
            linkPath="#"
            alt="facebook icon"
          />
        </div>
      </div>
      <div className={styles["footer__logo"]}>
        <img
          src="/assets/images/footer-logo.png"
          alt="Hrvatska e-sport inicijativa logo"
        />
      </div>
      <div className={styles["footer__other"]}>
        <ul className={styles["footer__other__links"]}>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          <span className={styles["dot-decoration"]}></span>
          <li>
            <Link href="/privacy-policy">Privacy policy</Link>
          </li>
          {/* <span className={styles["dot-decoration"]}></span>
          <li>
            <a href="#">Terms and conditions</a>
          </li> */}
        </ul>
        <p>© 2021 Hrvatska Esport Inicijativa</p>
      </div>
    </footer>
  );
};
