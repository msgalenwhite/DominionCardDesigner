import React from 'react'
import cardImages from '../constants/CardImages'
import CardDescription from './CardDescription'

const Card = (props) => {
  let tags = {
    title: 'cardTitleDiv',
    pic: 'displayCardImage',
    cost: 'displayCost',
    description: 'cardTextDiv',
    potions: 'potionsPic'
  }

  Object.keys(tags).forEach ((key) => {
    tags[key] = tags[key] + ` ${props.type}${tags[key]}`
  })

  let potions;
  if (props.potions) {
    potions = <img className={tags.potions}
    src='http://wiki.dominionstrategy.com/images/7/7a/Potion.png' />
  }

  let typePic = cardImages[props.type].url

  return (
    <div className='cardDiv'>
      <div className={tags.title} >
        {props.cardName}
      </div>
      <div >
        <img
          className={tags.pic}
          src = {props.cardImageUrl} />
      </div>
      <CardDescription
        divTag={tags.description}
        actions={props.cardActions}
        draws={props.cardDraws}
        buys={props.cardBuys}
        text={props.cardText} />
      <div className={tags.cost} >
        {props.cardCost}
      </div>
      {potions}
      <img
        className = {props.type}
        src={typePic} />
    </div>
  )
}

export default Card
