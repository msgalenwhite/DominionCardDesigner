import React from 'react'

import UpAndDown from './UpAndDown'

const DescriptionDesign = props => {
  const portions = {
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
          changeAmount={props.changeAmount} />
    )
  })

  return(
    <div>
      <div className='upAndDownGroup'>
        {upAndDownArray}
      </div>
      <div className='textInput'>
        <h6 className="error">{props.errorMessage}</h6>
        <label className='cardText'>
          Additional CardText:
        </label>
        <input
          type='text'
          className='cardText'
          value={props.cardText}
          onChange={props.onChange} />
      </div>
    </div>
  )
}

export default DescriptionDesign
