import React from 'react'
import {Link, browserHistory} from 'react-router'

const DesignCardButton = (props) => {
  return (
    <div>
      <Link to='/cardapp/designer'>
        Design New Card
      </Link>
    </div>
  )
}


export default DesignCardButton
