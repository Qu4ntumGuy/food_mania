import React from "react";

function MealItem(props) {
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
