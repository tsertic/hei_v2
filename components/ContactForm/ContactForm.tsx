import React, { useState } from "react";
import { ValidateEmail } from "../../utils/helperFunctions";
import Button from "../UI/Button";
import {
  FormElementText,
  FormElementEmail,
  FormElementTextArea,
} from "../UI/FormElement";
import styles from "./ContactForm.module.scss";
export const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: {
      value: "",
      error: false,
      errorMsg: "",
    },
    surname: {
      value: "",
      error: false,
      errorMsg: "",
    },
    email: {
      value: "",
      error: false,
      errorMsg: "",
    },
    message: {
      value: "",
      error: false,
      errorMsg: "",
    },
  });
  const { name, message, email, surname } = formState;

  const textInputChangeHandler = (e: any) => {
    const { name, value } = e.target;
    const newStateValue = { value: "", error: false, errorMsg: "" };
    if (name === "email") {
      if (ValidateEmail(value)) {
        newStateValue.error = false;
        newStateValue.errorMsg = "";
      } else {
        newStateValue.error = true;
        newStateValue.errorMsg = "Invalid email format";
      }
    }
    setFormState((prevValue: any) => {
      newStateValue.value = value;
      return { ...prevValue, [name]: newStateValue };
    });
    console.log(formState.name);
  };
  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    console.log(formState);
  };
  return (
    <form className={styles["contact-form"]}>
      <div className={styles["row-2"]}>
        <FormElementText
          label="Ime"
          placeholderText="Unesite svoje ime"
          value={name.value}
          name="name"
          error={name.error}
          errorMsg={name.errorMsg}
          onValueChange={textInputChangeHandler}
        />
        <FormElementText
          label="Prezime"
          placeholderText="Unesite svoje prezime"
          value={surname.value}
          name="surname"
          error={surname.error}
          errorMsg={surname.errorMsg}
          onValueChange={textInputChangeHandler}
        />
      </div>

      <FormElementEmail
        label="EMAIL"
        placeholderText="Unesite svoju email adresu"
        value={email.value}
        name="email"
        error={email.error}
        errorMsg={email.errorMsg}
        onValueChange={textInputChangeHandler}
      />

      <FormElementTextArea
        label="Poruka"
        placeholderText="Napišite nam svoju poruku"
        value={message.value}
        name="message"
        error={message.error}
        errorMsg={message.errorMsg}
        onValueChange={textInputChangeHandler}
      />
      <div className={styles["button-container"]}>
        <Button type="wide" text="Pošalji" onClick={handleSubmitForm} />
      </div>
    </form>
  );
};
