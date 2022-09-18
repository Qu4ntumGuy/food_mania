import React from "react";
import CartIcon from "../Cart/CartIcon"
import classes from "./HeaderCartButton.module.css";

function HeaderCartButton() {
  return (
    <button>
      <span>
         <CartIcon />
      </span>
      <span>Your Cart</span>
      <span>3</span>
    </button>
  );
}

export default HeaderCartButton;
