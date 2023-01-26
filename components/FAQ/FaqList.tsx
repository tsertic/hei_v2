import React from "react";
import { IQuestion } from "../../types";
import styles from "./FaqList.module.scss";
import { FaqQuestion } from "./FaqQuestion";
interface IFaqList {
  questions: IQuestion[];
}
export const FaqList: React.FC<IFaqList> = ({ questions }) => {
  return (
    <ul className={styles["faq-list"]}>
      {questions.map((question) => {
        return <FaqQuestion question={question} key={question.id} />;
      })}
    </ul>
  );
};
