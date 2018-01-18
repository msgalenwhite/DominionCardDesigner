import React from 'react'

import TitleDropDown from '../components/TitleDropDown'
import TextInputField from '../components/TextInputField'
import SubmitButton from '../components/SubmitButton'

const NameContainer = props => {
  let titleOptions = ["Poor Ol'", "Peasant", "Lady", "Sir"]

  return(
    <div>
      <h1>Welcome to the Card Designer!</h1>
      <form onSubmit={props.onSubmit}>
        {props.error}
        <TitleDropDown
          handleTitleClick={props.handleTitleClick}
          titleOptions={titleOptions}
        />
        <TextInputField
          label="First Name:"
          value={props.firstName}
          onChange={props.handleChange}
          name="firstName"
        />
        <TextInputField
          label="Last Name:"
          value={props.lastName}
          onChange={props.handleChange}
          name="lastName"
        />
        <SubmitButton />
      </form>
    </div>
  )
}

export default NameContainer
