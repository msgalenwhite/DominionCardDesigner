import React from 'react'

import TextInputField from '../components/TextInputField'

const UpAndDown = props => {
  let upOne = () => {
    props.increaseByOne(props.name)
  }

  let downOne = () => {
    props.decreaseByOne(props.name)
  }

  return(
    <div className="upAndDown">
      <label className="upDownLabel" htmlFor={props.name}>{props.label}</label>
      <br/>
      <div className='flexboxDiv'>
        <i
          className="fa fa-arrow-circle-left"
          onClick={downOne} >
        </i>
        <input
          type='text'
          id={props.name}
          className={props.name}
          value={props.value}
          onChange={props.onChange} />
        <i
          className="fa fa-arrow-circle-right"
          onClick={upOne} >
        </i>
      </div>
    </div>
  )
}

export default UpAndDown
