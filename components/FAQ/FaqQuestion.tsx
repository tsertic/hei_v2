import React, { useState } from "react";
import { IQuestion } from "../../types";
import styles from "./FaqQuestion.module.scss";
interface IFaqQuestion {
  question: IQuestion;
  show?: boolean;
}
export const FaqQuestion: React.FC<IFaqQuestion> = ({
  question,
  show = false,
}) => {
  const [showAnswer, setShowAnswer] = useState(show);
  const toggleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };
  return (
    <li className={styles["faq-question"]}>
      <div className={styles["question"]} onClick={toggleShowAnswer}>
        <h3>{question.question}</h3> <span>{showAnswer ? "-" : "+"}</span>
      </div>
      <div className={`${styles["answer"]} ${showAnswer && styles.show}`}>
        {question.answer}
      </div>
    </li>
  );
};
