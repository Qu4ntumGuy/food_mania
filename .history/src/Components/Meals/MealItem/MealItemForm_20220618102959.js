import React, { useRef } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

function MealItemForm(props) {
  const InputAmount = useRef();
  const Submit = (event) => {
    event.presentDefault();
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
    </form>
  );
}

export default MealItemForm;
