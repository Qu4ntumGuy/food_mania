import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mainImage from "../../Assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

function Header() {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Get Your Meal</h1>
        <HeaderCartButton  />
      </header>
      <div className={classes["main-image"]}>
        <img src={mainImage} alt="A table full of delicious Food!" />
      </div>
    </Fragment>
  );
}

export default Header;
