import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  const cartContx = useContext(CartContext);

  const numberOfItems = cartContx.item.reduce((curNumber, item) => {
    return curNumber + item.amount;
  },0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
}

export default HeaderCartButton;
