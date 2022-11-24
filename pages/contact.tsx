import React, { useState } from "react";
import { ContactForm } from "../components/ContactForm/ContactForm";

import styles from "./../styles/Contact.module.scss";
const Contact = () => {
  return (
    <div className={styles["contact"]}>
      <h1 className={styles["contact--title"]}>Kontakt</h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
