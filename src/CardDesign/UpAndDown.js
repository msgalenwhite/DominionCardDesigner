import React from 'react'

import TextInputField from '../components/TextInputField'

const UpAndDown = props => {
  let upOne = () => {
    props.changeAmount(props.name, 1)
  }

  let downOne = () => {
    props.changeAmount(props.name, -1)
  }

  let className = `${props.name} upDownNum`

  return(
    <div className="upAndDown">
      <label className="upDownLabel" htmlFor={props.name}>{props.label}</label>
      <br/>
      <div className='flexboxDiv'>
        <i
          className="fa fa-arrow-circle-left"
          onClick={downOne} >
        </i>
        <span
          id={props.name}
          className={className}
          onChange={props.onChange} >
          {props.value}
        </span>
        <i
          className="fa fa-arrow-circle-right"
          onClick={upOne} >
        </i>
      </div>
    </div>
  )
}

export default UpAndDown
