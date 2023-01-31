import React from "react";
import Image from "next/image";
import styles from "./CustomPortableTextComponents.module.scss";
import { YtPreview } from "../../sanity-schema/youtube";

import { urlFor } from "../../../lib/sanity.client";
import Link from "next/link";
export const CustomPortableTextComponents = {
  block: {
    h1: ({ children }: any) => {
      return <h1 className={styles.h1}>{children}</h1>;
    },
    h2: ({ children }: any) => {
      return <h2 className={styles.h2}>{children}</h2>;
    },
    h3: ({ children }: any) => {
      return <h3 className={styles.h3}>{children}</h3>;
    },
    normal: ({ children }: any) => {
      return <p className={styles.p}>{children}</p>;
    },
  },
  list: {
    bullet: ({ children }: any) => {
      return <ul className={styles.listBullet}>{children}</ul>;
    },
  },
  types: {
    image: ({ value }: any) => (
      <div className={styles.image}>
        <Image
          alt={"decorative image"}
          src={urlFor(value).url()}
          width={800}
          height={400}
        />
      </div>
    ),
    youtube: ({ value }: any) => {
      return <YtPreview url={value.url} />;
    },
  },

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a
          href={value.href}
          className={styles.link}
          rel="noreferrer"
          target="_blank"
        >
          {children}
        </a>
      );
    },
  },
};
