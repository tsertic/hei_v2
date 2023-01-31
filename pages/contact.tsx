import Head from "next/head";
import React, { useState } from "react";
import { ContactForm } from "../components/ContactForm/ContactForm";

import styles from "./../styles/Contact.module.scss";
const Contact = () => {
  return (
    <>
      <Head>
        <title>HEI - Kontakt</title>
      </Head>
      <div className={styles["contact"]}>
        <h1 className={styles["contact--title"]}>Kontakt</h1>
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
