import React from 'react'

const CardDescription = props => {
/*
GOALS:
  1. If the number is 0, then don't put a label
  2. If the number is 1 || -1, then don't put a "s"
  3. If the number is anything else, put the whole word with an "s"
*/

// SAMPLE PROPS:
// {divTag: "cardTextDiv actioncardTextDiv", actions: 1, draws: 2, buys: 3, text: "This is a test"}

  const labels = [
    {
      value: props.actions,
      label: "Action"
    },
    {
      value: props.draws,
      label: "Card"
    },
    {
      value: props.buys,
      label: "Buy"
    }
  ]

  let descriptionComponents = labels.map((infoObject) => {
    let number = infoObject.value
    let text = infoObject.label
    let sign;

    if (number !== 0) {
      if (number > 1 || number < -1) {
        text += "s"
      }

      if (number >= 1) {
        sign = "+"
      }

      return(
        <p key={infoObject.label} className='descriptionPiece'>{sign}{number} {text}</p>
      )
    }
  })

  return(
    <div className={props.divTag}>
      {descriptionComponents}
      <p className='descriptionPiece'>{props.text}</p>
    </div>
  )
}

export default CardDescription
