import React, { useContext, useState } from "react";
import CartContext from "../../Store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

function Cart(props) {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const totalAmount = `Rs. ${cartCtx.totalAmount.toFixed(2)}/-`;
  const hasItems = cartCtx.items.length > 0;

  const removeItems = (id) => {
    cartCtx.removeItem(id);
  };

  const addItems = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderMeals = () => {
    setIsCheckout(true);
  };

  const submitOrder = async (userData) => {
    setIsSubmiting(true);
    await fetch(
      "https://react-d2148-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderItems: cartCtx.items,
        }),
      }
    );
    setIsSubmiting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const modalAction = (
    <div className={classes.actions}>
      <button onClick={props.onClose} className={classes["button--alt"]}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderMeals}>
          Order
        </button>
      )}
    </div>
  );

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={removeItems.bind(null, item.id)}
          onAdd={addItems.bind(null, item)}
        ></CartItem>
      ))}
    </ul>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrder} onCancel={props.onClose} />
      )}
      {!isCheckout && modalAction}
    </React.Fragment>
  );

  const isSubmitingModalContent = <p>Sending Order...</p>;
  const didSubmitModalContent = <p>Successfully Sent Order!</p>
  return <Modal onClose={props.onClose}>
    {!isSubmiting && !didSubmit && cartModalContent}
    {isSubmiting && isSubmitingModalContent}
    {!isSubmiting && didSubmit && didSubmitModalContent}
  </Modal>;
}

export default Cart;
