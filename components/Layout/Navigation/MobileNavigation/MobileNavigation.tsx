import Image from "next/image";
import React, { useState } from "react";
import Button from "../../../UI/Button";
import NavigationItem from "../DesktopNavigation/NavigationItem";
import styles from "./../Navigation.module.scss";
const LINKDATA = [
  {
    path: "/",
    text: "home",
    active: true,
    id: 0,
  },
  {
    id: 1,
    path: "/blog",
    text: "blog",
    active: false,
  },
  {
    id: 2,
    path: "contact",
    text: "kontakt",
    active: false,
  },
  { id: 3, path: "/aboutus", text: "o nama", active: false },
];
const MobileNavigation: React.FC<{ showModal: Function }> = ({ showModal }) => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const openNavHandler = () => {
    setIsOpenNav(true);
  };
  const closeNavHandler = () => setIsOpenNav(false);
  return (
    <>
      <div className={styles["mobile-navigation"]}>
        <div className={styles["hamburger-container"]} onClick={openNavHandler}>
          <Image
            src="/assets/images/hamb-menu.svg"
            alt="menu button icon"
            width={48}
            height={48}
          />
        </div>
        <Button text="učlani se" link="/membership" />
        {isOpenNav && (
          <div className={styles["mobile-navigation--open"]}>
            <div
              className={styles["close-button-container"]}
              onClick={closeNavHandler}
            >
              <Image
                src="/assets/images/close-icon.svg"
                alt="close icon"
                width={48}
                height={48}
              />
            </div>
            <ul className={styles["mobile-navigation-list"]}>
              {LINKDATA.map((linkItem) => (
                <NavigationItem
                  key={linkItem.id}
                  onClick={closeNavHandler}
                  linkPath={linkItem.path}
                  text={linkItem.text}
                />
              ))}
            </ul>
            <ul className={styles["mobile-navigation-list"]}>
              <button
                className={styles["feedback-button"]}
                onClick={() => {
                  showModal();
                  setIsOpenNav(false);
                }}
              >
                FEEDBACK
              </button>
              <NavigationItem
                text="učlani se"
                linkPath="/membership"
                onClick={closeNavHandler}
              />
              <NavigationItem text="faq" linkPath="/faq" />
            </ul>
            <div className={styles["mobile-navigation__language"]}>
              <div className={styles["language-container"]}>
                <Image
                  src="/assets/images/lang-icon.svg"
                  alt="globe icon"
                  width={32}
                  height={32}
                />
                <span className={styles["selected-lang"]}>HR</span>
                <span>EN</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNavigation;
