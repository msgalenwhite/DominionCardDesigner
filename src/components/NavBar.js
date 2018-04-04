import React from 'react'
import {browserHistory, Link} from 'react-router'

import NavButton from './NavButton'

const NavBar = props => {

  let cardIcon =
  <div className="rect card"></div>

  let deckIcon =
  <div className="deck">
    <div className="rect rect3"></div>
    <div className="rect rect2"></div>
    <div className="rect rect1"></div>
  </div>

  return(
    <div>
      <div className='navBarHeader'>
        <NavButton
          className='navButton'
          destination='/cardapp/yourdeck'
          labelClass='navButtonLabelLeft'
          labelText='View Your Deck'
          icon={deckIcon} />

        <input
          className='navButton button'
          type='button'
          onClick={browserHistory.goBack}
          value='Back' />

        <NavButton
          className='navButton'
          destination='/cardapp/designer'
          labelClass='navButtonLabelRight'
          labelText='Design New Card'
          icon={cardIcon} />
      </div>
      <div className='page'>
        {props.children}
      </div>
    </div>
  )
}

export default NavBar
