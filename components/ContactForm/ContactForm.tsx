import React, { useEffect, useState } from "react";
import { ValidateEmail } from "../../utils/helperFunctions";
import Button from "../UI/Button";
import {
  FormElementText,
  FormElementEmail,
  FormElementTextArea,
} from "../UI/FormElement";
import { FormResponse } from "../UI/FormResponse";
import styles from "./ContactForm.module.scss";
const initialFormState = {
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
};
export const ContactForm = () => {
  const [formChange, setFormChange] = useState(false);
  const [formStep, setFormStep] = useState(0);
  useEffect(() => {}, [formChange]);
  const [formState, setFormState] = useState(initialFormState);
  const { name, message, email, surname } = formState;

  const textInputChangeHandler = (e: any) => {
    const { name, value } = e.target;
    console.log(value.trim() !== "" && value !== "", "value trimano");
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

    if (name === "name" || name === "surname" || name === "message") {
      if (value.trim().length === 0) {
        newStateValue.error = true;
      } else {
        newStateValue.error = false;
      }
    }
    setFormState((prevValue: any) => {
      newStateValue.value = value;
      return { ...prevValue, [name]: newStateValue };
    });
    console.log(formState);
  };
  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formState);
    if (formState.name.value == "") {
      console.log("u form state name value");
      formState.name.error = true;
    }
    if (formState.surname.value === "") {
      formState.surname.error = true;
    }
    if (!ValidateEmail(formState.email.value)) {
      formState.email.error = true;
    }

    if (formState.message.value === "") {
      formState.message.error = true;
    }
    setFormChange(!formChange);

    const { name, surname, email, message } = formState;
    if (
      name.value === "" ||
      surname.value === "" ||
      !ValidateEmail(email.value) ||
      message.value === "" ||
      name.value.trim() === "" ||
      surname.value.trim() === "" ||
      message.value.trim() === ""
    ) {
      return;
    }
    const contactObject = {
      name: name.value,
      surname: surname.value,
      email: email.value,

      message: message.value,
    };
    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(contactObject),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          setFormState(initialFormState);
          setFormStep(1);
        } else {
          setFormStep(2);
        }
      });
  };
  return (
    <div>
      {formStep === 0 && (
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
      )}
      {formStep === 1 && (
        <FormResponse
          status="Uspješna Poslano"
          description="Hvala na kontaktu, odgovorimo prvom prilikom."
          buttonText="pošalji novu poruku"
          buttonOnClick={() => {
            setFormStep(0);
          }}
        />
      )}
      {formStep === 2 && (
        <FormResponse
          status="Nešto je pošlo po krivom"
          description="Poruka nije poslana, pokušaj ponovno ili nas kontaktiraj direktno na mail info@esportinicijativa.hr"
          buttonText="pošalji novu poruku"
          buttonOnClick={() => {
            setFormStep(0);
          }}
        />
      )}
    </div>
  );
};
