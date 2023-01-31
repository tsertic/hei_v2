import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";
import { urlFor } from "../../../lib/sanity.client";
import { YtPreview } from "../../sanity-schema/youtube";
import styles from "./PostBody.module.scss";
import { CustomPortableTextComponents } from "./CustomPortableTextComponents";
export const PostBody = ({ postBody }: any) => {
  return (
    <div className={styles["post-body"]}>
      <PortableText
        value={postBody}
        components={CustomPortableTextComponents}
      />
    </div>
  );
};
