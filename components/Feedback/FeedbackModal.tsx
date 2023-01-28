import React, { useEffect, useState } from "react";
import { ValidateEmail } from "../../utils/helperFunctions";
import Button from "../UI/Button";
import { FormElementEmail, FormElementTextArea } from "../UI/FormElement";
import { FormResponse } from "../UI/FormResponse";
import styles from "./FeedbackModal.module.scss";
const initialFormState = {
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
export const FeedbackModal: React.FC<{ closeModal: Function }> = ({
  closeModal,
}) => {
  const [formChange, setFormChange] = useState(false);
  const [formState, setFormState] = useState(initialFormState);
  const [formStep, setFormStep] = useState(0);

  useEffect(() => {}, [formChange]);
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

    if (name === "message") {
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
  };
  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!ValidateEmail(formState.email.value)) {
      formState.email.error = true;
    }

    if (
      formState.message.value === "" ||
      formState.message.value.trim() === ""
    ) {
      formState.message.error = true;
    }
    setFormChange(!formChange);

    const { email, message } = formState;
    if (
      !ValidateEmail(email.value) ||
      message.value === "" ||
      message.value.trim() === ""
    ) {
      return;
    }
    const feedbackObject = {
      email: email.value,

      message: message.value,
    };
    await fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(feedbackObject),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setFormState(initialFormState);
          setFormStep(1);
        } else {
          setFormStep(2);
        }
      });
  };
  const { email, message } = formState;
  return (
    <>
      <div
        className={styles.backdrop}
        onClick={() => {
          closeModal();
        }}
      ></div>
      <div className={styles["feedback-modal"]}>
        <span
          className={styles["close"]}
          onClick={() => {
            closeModal();
          }}
        >
          ✖
        </span>
        <h1 className={styles.title}>Pošaljite nam svoj feedback!</h1>
        <p className={styles.description}>
          Konstantno radimo na poboljšanjima i unaprjeđenju kruga djelovanja
          naše Udruge, pa nam slobodno pošaljite svoje prijedloge i ideje
          ukoliko ih imate.
        </p>
        {formStep === 0 && (
          <form>
            <div>
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
            <div>
              <FormElementTextArea
                size="small"
                label="Poruka"
                placeholderText="Napišite nam svoju poruku"
                value={message.value}
                name="message"
                error={message.error}
                errorMsg={message.errorMsg}
                onValueChange={textInputChangeHandler}
              />
            </div>
            <div className={styles["button-container"]}>
              <Button type="wide" text="Pošalji" onClick={handleSubmitForm} />
            </div>
          </form>
        )}
        {formStep === 1 && (
          <FormResponse
            status="Uspješna Poslano"
            description="Hvala na feedbacku."
            buttonText="pošalji novi feedback"
            buttonOnClick={() => {
              setFormStep(0);
            }}
          />
        )}
        {formStep === 2 && (
          <FormResponse
            status="Nešto je pošlo po krivom"
            description="Feedback nije poslan, pokušaj ponovno ili nam pošaljite direktno na mail info@esportinicijativa.hr"
            buttonText="pošalji novi feedback"
            buttonOnClick={() => {
              setFormStep(0);
            }}
          />
        )}
      </div>
    </>
  );
};
