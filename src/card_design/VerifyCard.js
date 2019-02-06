import React from 'react'
import {Link} from 'react-router'

import Card from '../components/Card'
import SubmitButton from '../components/SubmitButton'
import TextInputField from '../components/TextInputField'

const VerifyCard = (props) => {
  let handleEditClick = () => {
    props.editCard(props.cardData)
  }

  return(
    <div className="verifyForm">
      <p className='noteDescription'>Notes are optional, but can help you remember what makes this card special.</p>
      <textarea
        className='extraInfo'
        onChange={props.handleChange}
        value={props.cardData.extraInfo} >
          {props.cardData.extraInfo}
      </textarea>
      <div className="verifyButtons">
        <div onClick={props.editCard}>
          <input
            className='button'
            type="button"
            value="Make a Change" />
        </div>
        <div onClick={props.addToJSON}>
          <Link to='/cardapp/yourdeck'>
            <SubmitButton/>
          </Link>
        </div>
      </div>
    </div>
  )
}


export default VerifyCard
