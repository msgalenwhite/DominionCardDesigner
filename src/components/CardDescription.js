import React from 'react'

const CardDescription = props => {

  // divTag={tags.description}
  // actions={props.cardActions}
  // draws={props.cardDraws}
  // buys={props.cardBuys}
  // text={props.cardText} />


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
