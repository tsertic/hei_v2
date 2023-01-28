import React from "react";
import styles from "./FormElement.module.scss";
interface IFormElement {
  label: string;
  value: string;
  placeholderText: string;
  errorMsg: string;
  onValueChange: any;
  error: boolean;
  name: string;
  size?: string;
}
export const FormElementText = ({
  label,
  error,
  value,
  placeholderText,
  errorMsg,
  onValueChange,
  name,
}: IFormElement) => {
  return (
    <div className={`${styles["form-element"]} `}>
      <label className={styles["form-element__label"]}>{label}</label>
      <input
        type="text"
        name={name}
        placeholder={placeholderText}
        value={value}
        onChange={onValueChange}
        className={`${styles["form-element__input"]} ${
          error && styles["form-element__input--error"]
        }`}
      />
      {error && (
        <p className={styles["form-element--error-message"]}>{errorMsg}</p>
      )}
    </div>
  );
};
export const FormElementEmail = ({
  label,
  error,
  value,
  placeholderText,
  errorMsg,
  onValueChange,
  name,
}: IFormElement) => {
  return (
    <div className={`${styles["form-element"]} `}>
      <label className={styles["form-element__label"]}>{label}</label>
      <input
        type="email"
        name={name}
        placeholder={placeholderText}
        value={value}
        onChange={onValueChange}
        className={`${styles["form-element__input"]} ${
          error && styles["form-element__input--error"]
        }`}
      />
      {error && (
        <p className={styles["form-element--error-message"]}>{errorMsg}</p>
      )}
    </div>
  );
};
export const FormElementSelect = ({
  label,
  error,
  value,
  placeholderText,
  errorMsg,
  onValueChange,
  name,
}: IFormElement) => {
  return (
    <div className={`${styles["form-element"]} `}>
      <label className={styles["form-element__label"]}>{label}</label>
      <select
        name={name}
        className={`${styles["form-element__input"]} ${
          error && styles["form-element__input--error"]
        }
        ${value === "Odaberite odgovor" && styles["default-value"]}
        `}
        value={value}
        onChange={onValueChange}
      >
        <option hidden={true} selected={true} disabled={true}>
          Odaberite odgovor
        </option>
        <option value="internet">Internet</option>
        <option value="poznanik">Poznanik</option>
        <option value="ostalo">Ostalo</option>
      </select>
      {error && (
        <p className={styles["form-element--error-message"]}>{errorMsg}</p>
      )}
    </div>
  );
};
export const FormElementTextArea = ({
  label,
  error,
  value,
  placeholderText,
  errorMsg,
  onValueChange,
  name,
  size = "normal",
}: IFormElement) => {
  return (
    <div className={`${styles["form-element"]} `}>
      <label className={styles["form-element__label"]}>{label}</label>
      <textarea
        name={name}
        placeholder={placeholderText}
        value={value}
        onChange={onValueChange}
        className={`${styles["form-element__input"]} ${
          size === "small" && styles["textarea-small"]
        } ${error && styles["form-element__input--error"]}`}
      />
      {error && (
        <p className={styles["form-element--error-message"]}>{errorMsg}</p>
      )}
    </div>
  );
};
export const FormElementDate = ({
  label,
  error,
  value,
  placeholderText,
  errorMsg,
  onValueChange,
  name,
}: IFormElement) => {
  return (
    <div className={`${styles["form-element"]} `}>
      <label className={styles["form-element__label"]}>{label}</label>
      <input
        type="date"
        name={name}
        placeholder="dd-mm-yyyy"
        value={value}
        onChange={onValueChange}
        className={`${styles["form-element__input"]} ${
          error && styles["form-element__input--error"]
        } 
        ${value === "" && styles["default-value"]}
        `}
      />
      <i className={styles["datepicker-icon"]}></i>
      {error && (
        <p className={styles["form-element--error-message"]}>{errorMsg}</p>
      )}
    </div>
  );
};
