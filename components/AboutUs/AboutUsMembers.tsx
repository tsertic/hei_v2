import React from "react";
import Image from "next/image";
import styles from "./AboutUsMembers.module.scss";
export const AboutUsMembers = () => {
  return (
    <div className={styles["aboutus-members"]}>
      <div className={styles["member-container"]}>
        <Image
          className={styles["djerek-photo"]}
          src="/assets/images/josipdjerek.png"
          alt="Josip Đerek"
          width={470}
          height={360}
        />
        <div className={styles["member-info"]}>
          <p className={styles["name"]}>Josip Đerek</p>
          <p className={styles["role"]}>Co-founder</p>
        </div>
      </div>
      <div className={styles["member-container"]}>
        <Image
          className={styles["sertic-photo"]}
          src="/assets/images/tomislavsertic.png"
          alt="Tomislav Sertic"
          width={470}
          height={360}
        />
        <div className={styles["member-info"]}>
          <p className={styles["name"]}>Tomislav Sertic</p>
          <p className={styles["role"]}>Co-founder</p>
        </div>
      </div>
      <div className={styles["member-container"]}>
        <Image
          className={styles["rubido-photo"]}
          src="/assets/images/ivanrubido.png"
          alt="Ivan Rubido"
          width={470}
          height={360}
        />
        <div className={styles["member-info"]}>
          <p className={styles["name"]}>Ivan Rubido</p>
          <p className={styles["role"]}>Co-founder</p>
        </div>
      </div>
    </div>
  );
};
