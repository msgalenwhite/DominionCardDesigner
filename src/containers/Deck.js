import React from 'react'

import Card from '../components/Card'

const Deck = props => {

  let displayDeck = props.cardData.map((indivCard) => {
    return (
      <span className='cardInDeck' key={indivCard.id}>
        <a href="/api/v1/cards/:specific_card">
          <Card
            cardName={indivCard.cardName}
            cardText={indivCard.cardText}
            cardCost={indivCard.cardCost}
            cardImageUrl={indivCard.cardImageUrl}
            potions={indivCard.potions}
            type={indivCard.type}
            id={indivCard.id}
          />
        </a>
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
