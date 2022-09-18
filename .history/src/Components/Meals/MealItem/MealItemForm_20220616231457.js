import React from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

function MealItemForm(props) {
  return (
      <form className={classes.form}>
         <Input label='Amount' input={{
            id: "amount",
            type: "number",
         }} />
         <button>Add</button>
      </form>
   )
}

export default MealItemForm;