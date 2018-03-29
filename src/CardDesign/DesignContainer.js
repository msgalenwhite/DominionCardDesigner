import React from 'react';

import DropDown from '../components/DropDown'
import TextInputField from '../components/TextInputField'
import SubmitButton from '../components/SubmitButton'
import DescriptionDesign from './DescriptionDesign'
import CardImages from '../constants/CardImages'
import UpAndDown from './UpAndDown'

const DesignContainer = props => {

  let typeOptions = Object.values(CardImages).map((valueObject) => {
    return valueObject.label
  })

  return(
    <form
      className={props.className}
      onSubmit={props.handleFormSubmit} >
      <div className="genericError">
        {props.cardData.genericError}
      </div>
      <DropDown
        className="typeDropDown"
        label="What type of card would you like?"
        options={typeOptions}
        handleClick={props.handleDropDownClick} />
      <DescriptionDesign
        cardActions={props.cardData['cardActions']}
        cardDraws={props.cardData['cardDraws']}
        cardBuys={props.cardData['cardBuys']}
        cardText={props.cardData['cardText']}
        onChange={props.handleValueChange}
        changeAmount={props.changeAmount} />
      <UpAndDown
        key='cardCost'
        label='Cost:'
        value={props.cardData['cardCost']}
        name='cardCost'
        onChange={props.handleValueChange}
        changeAmount={props.changeAmount} />
      <TextInputField
        onChange={props.handleValueChange}
        value={props.cardData['cardImageUrl']}
        name='cardImageUrl'
        label='Image Url: '
        key='cardImageUrl'
        inputType='text' />
      <div className="potionsSelection">
        <p>Require Potions?</p>
        <div>
          <input
            type='radio'
            id='potionChoice1'
            name='potion'
            value='yes'
            onChange={props.handlePotionSelect} />
          <label htmlFor='potionChoice1'>Yes</label>
          <input
            type='radio'
            id='potionChoice2'
            name='potion'
            value='no'
            onChange={props.handlePotionSelect} />
          <label htmlFor='potionChoice2'>No</label>
        </div>
      </div>
      <SubmitButton />
    </form>
  )

}

export default DesignContainer
