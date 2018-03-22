import React from 'react'
import {Link} from 'react-router'

import Card from '../components/Card'

const Deck = props => {

  let displayDeck = props.cardData.map((indivCard) => {
    return (
      <span className='cardInDeck' key={indivCard.id}>
        <Link
          to={`/cardapp/singlecard/${indivCard.id}`}
        >
          <Card
            cardName={indivCard.cardName}
            cardText={indivCard.cardText}
            cardCost={indivCard.cardCost}
            cardImageUrl={indivCard.cardImageUrl}
            potions={indivCard.potions}
            type={indivCard.type}
            id={indivCard.id}
          />
        </Link>
      </span>
    )
  })
  return(
    <div className='deckContainer'>
      {displayDeck}
    </div>
  )
}

export default Deck
