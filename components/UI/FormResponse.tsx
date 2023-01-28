import React from "react";
import Button from "./Button";
import styles from "./FormResponse.module.scss";
interface IFormResponse {
  status: string;
  description: string;
  buttonText: string;
  buttonOnClick: Function;
}
export const FormResponse: React.FC<IFormResponse> = ({
  status,
  description,
  buttonText,
  buttonOnClick,
}) => {
  return (
    <div className={styles["form-response"]}>
      <h2>{status}</h2>
      <p>{description}</p>
      <div className={styles["button-container"]}>
        <Button text={buttonText} onClick={buttonOnClick} />
      </div>
    </div>
  );
};
