import React from 'react'

import TextInputField from '../components/TextInputField'

const UpAndDown = props => {

  return(
    <div className="upAndDown">
      <div className='flexboxDiv'>
        <i className="fa fa-arrow-circle-left"></i>
        <input
          type='text'
          defaultValue='10'
          className='upAndDownText'
        />
        <i className="fa fa-arrow-circle-right"></i>
      </div>
    </div>
  )
}

export default UpAndDown
