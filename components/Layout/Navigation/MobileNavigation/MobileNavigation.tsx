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
const MobileNavigation = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const openNavHandler = () => {
    setIsOpenNav(true);
  };
  const closeNavHandler = () => setIsOpenNav(false);
  return (
    <>
      <div className={styles["mobile-navigation"]}>
        <div className={styles["hamburger-container"]} onClick={openNavHandler}>
          <img src="/assets/images/hamb-menu.svg" alt="menu button icon" />
        </div>
        <Button text="učlani se" link="/membership" />
        {isOpenNav && (
          <div className={styles["mobile-navigation--open"]}>
            <div
              className={styles["close-button-container"]}
              onClick={closeNavHandler}
            >
              <img src="/assets/images/close-icon.svg" alt="close icon" />
            </div>
            <ul className={styles["mobile-navigation-list"]}>
              {LINKDATA.map((linkItem) => (
                <NavigationItem
                  onClick={closeNavHandler}
                  linkPath={linkItem.path}
                  text={linkItem.text}
                />
              ))}
            </ul>
            <ul className={styles["mobile-navigation-list"]}>
              <button className={styles["feedback-button"]}>FEEDBACK</button>
              <NavigationItem
                text="učlani se"
                linkPath="/membership"
                onClick={closeNavHandler}
              />
              <NavigationItem text="faq" linkPath="/faq" />
            </ul>
            <div className={styles["mobile-navigation__language"]}>
              <div className={styles["language-container"]}>
                <img src="/assets/images/lang-icon.svg" alt="globe icon" />
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
