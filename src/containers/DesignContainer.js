import React from 'react';

import TextInputField from '../components/TextInputField'
import SubmitButton from '../components/SubmitButton'

const DesignContainer = props => {

  //needed - a way to load the form with the old data in it.  If we pass props of cardData down, then populate the form with it - otherwise, it's blank.
  //set it in ComponentDidMount?


  let labelObject = {
    cardName: "Name:",
    cardText: "Text:",
    cardCost: "Cost:",
    cardImageUrl: "Image URL:"
  }

  let textInputs = Object.entries(labelObject).map((miniArray) => {
    let fieldName = miniArray[0]
    let fieldLabel = miniArray[1]
    let fieldValue = props.cardData.fieldName

    return (
      <TextInputField
        onChange={props.handleValueChange}
        value={fieldValue}
        name={fieldName}
        label={fieldLabel}
        key={fieldLabel}
      />
    )
  })

  return(
    <form onSubmit={props.handleFormSubmit} >
      <div className="genericError">
        {props.cardData.genericError}
      </div>
      {textInputs}
      <p>Require Potions?</p>
      <div>
        <input
          type='radio'
          id='potionChoice1'
          name='potion'
          value='yes'
          onChange={props.handlePotionSelect}
        />
        <label htmlFor='potionChoice1'>Yes</label>
        <input
          type='radio'
          id='potionChoice2'
          name='potion'
          value='no'
          onChange={props.handlePotionSelect}
        />
        <label htmlFor='potionChoice2'>No</label>
      </div>

      <SubmitButton />
    </form>
  )

}

export default DesignContainer
