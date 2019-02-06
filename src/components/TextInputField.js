import React from 'react'

const TextInputField = props => {
  let inputType = props.inputType ? props.inputType : 'text'

  return(
    <div className='textInput'>
      <h6 className="error">{props.errorMessage}</h6>
      <label className={props.name}>
        {props.label}
        <input
          type={inputType}
          className={props.name}
          value={props.value}
          onChange={props.onChange} />
      </label>
    </div>
  )

}

export default TextInputField
