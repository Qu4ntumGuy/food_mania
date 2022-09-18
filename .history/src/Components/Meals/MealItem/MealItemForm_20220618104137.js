import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

function MealItemForm(props) {
  const [validAmount, SetValidAmount] = useState(true);
  const InputAmount = useRef();
  const Submit = (event) => {
    event.presentDefault();
    const enteredAmount = InputAmount.current.value;
    const NumEnteredAmount = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      NumEnteredAmount < 1 ||
      NumEnteredAmount > 5
    ) {
      SetValidAmount(false);
      return;
    }
  };

  return (
    <form className={classes.form} onSubmit={Submit}>
      <Input
        ref={InputAmount}
        label="Amount:"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!validAmount && <p>Please Enter A Valid Amount (1-5).</p>}
    </form>
  );
}

export default MealItemForm;
