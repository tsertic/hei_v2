import React, { useEffect, useState } from "react";
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
import { FormResponse } from "../components/UI/FormResponse";
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
};
const Membership = () => {
  const [formChange, setFormChange] = useState(false);
  const [formStep, setFormStep] = useState(0);
  useEffect(() => {}, [formChange]);
  const [formState, setFormState] = useState(initialFormState);
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
    console.log(formState.name);
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
    if (formState.birthDate.value === "") {
      formState.birthDate.error = true;
    }
    if (formState.message.value === "") {
      formState.message.error = true;
    }
    setFormChange(!formChange);

    const { name, surname, email, birthDate, message, heardAbout } = formState;
    if (
      name.value === "" ||
      surname.value === "" ||
      !ValidateEmail(email.value) ||
      birthDate.value === "" ||
      message.value === ""
    ) {
      return;
    }
    const membershipObject = {
      name: name.value,
      surname: surname.value,
      email: email.value,
      birthDate: birthDate.value,
      message: message.value,
      heardAbout: heardAbout.value,
    };
    await fetch("/api/registration", {
      method: "POST",
      body: JSON.stringify(membershipObject),
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
    <div className={styles["membership"]}>
      <h1 className={styles["membership--title"]}>postani dio naše udruge</h1>
      {formStep === 0 && (
        <>
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
                label="Datum rođenja"
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
        </>
      )}
      {formStep === 1 && (
        <FormResponse
          status="Uspješna prijava"
          description="Tvoj zahtjev je zaprimljen, potvrdu zajedno sa ostalim detaljima poslat ćemo ti na mail."
          buttonText="posalji novi zahtjev"
          buttonOnClick={() => {
            setFormStep(0);
          }}
        />
      )}
      {formStep === 2 && (
        <FormResponse
          status="Nešto je pošlo po krivom"
          description="Zahtjev nije proveden, pokušaj se prijaviti ponovno ili nas kontaktiraj direktno na mail info@esportinicijativa.hr"
          buttonText="posalji novi zahtjev"
          buttonOnClick={() => {
            setFormStep(0);
          }}
        />
      )}
    </div>
  );
};

export default Membership;
