import React from 'react'

import UpAndDown from './UpAndDown'

const CardDescriptionDesign = props => {

  let portions = {
    cardActions: "Actions",
    cardDraws: "Cards",
    cardBuys: "Buys"
  }

  let upAndDownArray = Object.entries(portions).map((miniArray) => {
    let label = miniArray[1]
    let name = miniArray[0]
    let value = props[name]

    return (
      <UpAndDown
        key={label}
        label={label}
        value={value}
        name={name}
        onChange={props.onChange}
      />
    )
  })

  return(
    <div className='upAndDownGroup'>
      {upAndDownArray}
    </div>
  )
}

export default CardDescriptionDesign
