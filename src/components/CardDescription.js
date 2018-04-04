import React from 'react'

const CardDescription = props => {
/*
GOALS:
  1. If the number is 0, then don't put a label
  2. If the number is 1 || -1, then don't put a "s"
  3. If the number is anything else, put the whole word with an "s"
*/

debugger
  return(
    <div className={props.divTag}>
      <p className='descriptionPiece'>+{props.actions} Actions</p>
      <p className='descriptionPiece'>+{props.draws} Cards</p>
      <p className='descriptionPiece'>+{props.buys} Buys</p>
      <p className='descriptionPiece'>{props.text}</p>
    </div>
  )
}

export default CardDescription
