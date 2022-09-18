import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import classes from "./Card.module.css";

function Card(props) {
  return (
    <Fragment>
      <div className={classes.card}>
        {props.children}
      </div>
    </Fragment>
  );
}

export default Card;
