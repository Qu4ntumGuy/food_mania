import React from 'react';
import classes from './Modal.module.css';

const Backdrop = props => {
  return <div className={classes.backdrop}></div>
};

const ModalOverlay = props => {
  return <div className={classes.modal}>
        <div className={classes.content}></div>
  </div>
};

function Modal(props) {
  return (
    <div>Modal</div>
  )
}

export default Modal;