import React from 'react'

const CardDescription = props => {


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
