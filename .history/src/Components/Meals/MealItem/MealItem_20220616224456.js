import React from "react";

function MealItem(props) {
   const price = `${props.price}/-`;
  return (
    <li>
      <div>
        <h3>{props.name}</h3>
        <div>{props.description}</div>
      </div>
    </li>
  );
}

export default MealItem;
