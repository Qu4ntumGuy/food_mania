import React from 'react'
import classes from './Card.module.css'

function Card() {
  return (
    <div className={classes.card}>{props.children}</div>
  )
}

export default Card