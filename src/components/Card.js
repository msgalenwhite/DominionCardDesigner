import React from 'react'

const Card = (props) => {

  let potions;
  if (props.potions) {
    potions = <p>Requires Potions</p>
  }

  return(
    <div className='card'>
      <div className='cardTitle'>{props.cardName}</div>
      <p>{props.cardText}</p>
      <p>Cost: {props.cardCost}</p>
      {potions}
      <img
        className='displayCardImage'
        src={props.cardImageUrl}
        alt='Image Chosen for Card'
      />
    </div>
  )
 }


export default Card
