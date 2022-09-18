import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mainImage from "../../Assets/meals.jpg";

function Header() {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Zamato</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mainImage} alt="A table full of delicious Food!" />
      </div>
    </Fragment>
  );
}

export default Header;
