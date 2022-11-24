import React, { useState } from "react";
import Button from "../components/UI/Button";
import {
  FormElementText,
  FormElementSelect,
  FormElementEmail,
  FormElementTextArea,
  FormElementDate,
} from "../components/UI/FormElement";
import styles from "./../styles/Membership.module.scss";
import { ValidateEmail } from "../utils/helperFunctions";
const Membership = () => {
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
    birthDate: {
      value: "",
      error: false,
      errorMsg: "",
    },
    email: {
      value: "",
      error: false,
      errorMsg: "",
    },
    heardAbout: { value: "Odaberite odgovor", error: false, errorMsg: "" },
    message: {
      value: "",
      error: false,
      errorMsg: "",
    },
  });
  const { name, message, email, surname, birthDate, heardAbout } = formState;

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
    <div className={styles["membership"]}>
      <h1 className={styles["membership--title"]}>postani dio naše udruge</h1>
      <form className={styles["membership__form"]}>
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
        <div className={styles["row-2"]}>
          <FormElementDate
            label="Datun rođenja"
            placeholderText="Unesite svoju godinu rođenja"
            value={birthDate.value}
            name="birthDate"
            error={birthDate.error}
            errorMsg={birthDate.errorMsg}
            onValueChange={textInputChangeHandler}
          />
          <FormElementEmail
            label="EMAIL"
            placeholderText="Unesite svoju email adresu"
            value={email.value}
            name="email"
            error={email.error}
            errorMsg={email.errorMsg}
            onValueChange={textInputChangeHandler}
          />
        </div>
        <div className={styles["row-1"]}>
          <FormElementSelect
            label="Kako ste čuli za HEI?"
            placeholderText="Unesite svoje ime"
            value={heardAbout.value}
            name="heardAbout"
            error={heardAbout.error}
            errorMsg={heardAbout.errorMsg}
            onValueChange={textInputChangeHandler}
          />
        </div>

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
          <Button
            type="wide"
            text="Pošalji Zahtjev"
            onClick={handleSubmitForm}
          />
        </div>
      </form>
    </div>
  );
};

export default Membership;
