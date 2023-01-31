import { PortableText } from "@portabletext/react";
import React from "react";
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
