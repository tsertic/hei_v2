import React, { useState } from "react";
import { FeedbackModal } from "../../Feedback/FeedbackModal";
import { DesktopNavigation } from "./DesktopNavigation/DesktopNavigation";
import MobileNavigation from "./MobileNavigation/MobileNavigation";
import styles from "./Navigation.module.scss";

export const Navigation = () => {
  const [showModal, setShowModal] = useState(false);
  const showModalHandler = () => {
    setShowModal(true);
  };
  return (
    <>
      <div className={styles["navigation"]}>
        <div className={styles["blur-background"]}></div>
        <DesktopNavigation showModal={showModalHandler} />
        <MobileNavigation showModal={showModalHandler} />
      </div>
      {showModal && (
        <FeedbackModal
          closeModal={() => {
            setShowModal(false);
          }}
        />
      )}
    </>
  );
};
