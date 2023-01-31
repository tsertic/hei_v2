import Image from "next/image";
import React from "react";
import styles from "./SocialIcon.module.scss";
interface ISocialIcon {
  imgPath: string;
  linkPath?: string;
  alt: string;
}
export const SocialIcon = ({ imgPath, linkPath, alt }: ISocialIcon) => {
  return (
    <a href={linkPath} className={styles["social-icon"]}>
      <Image src={imgPath} alt={alt} width={32} height={32} />
    </a>
  );
};
