import React from 'react'

import UpAndDown from './UpAndDown'

const CardDescriptionDesign = props => {

  let portions = ["Actions", "Cards", "Buys"]

  let upAndDownArray = portions.map((label, index) => {
    return (
      <UpAndDown
        key={index}
        label={label}
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
