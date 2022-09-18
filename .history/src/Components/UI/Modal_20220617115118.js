import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

function Modal(props) {
  return <Fragment>
    <Backdrop />
    <ModalOverlay />
  </Fragment>
}

export default Modal;
