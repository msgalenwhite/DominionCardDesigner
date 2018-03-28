import React, {Component} from 'react'

import NameContainer from '../containers/NameContainer'
import WelcomeContainer from '../containers/WelcomeContainer'

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      title: "",
      genericError: '',
      formattedName: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleClick = this.handleTitleClick.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;
    let target = event.target.className;

    let fullPayload = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      title: this.state.title
    }

    this.setState({
      [target]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    let formPayload = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      title: this.state.title
    }

    if (this.formIsComplete(formPayload)) {
      let userName = this.formatName(formPayload);
      this.props.route.addNameToJSON(userName);
      this.setState({
        formattedName: userName
      });
    } else {
      this.setState({
        genericError: "Please enter your name."
      })
    }
  }

  formIsComplete(formPayload) {
    let formIsFull = true;
    Object.values(formPayload).forEach ((userInputField) => {
      if (userInputField === "") {
        formIsFull = false;
      }
    })
    return formIsFull
  }

  formatName(formPayload) {
    let capitalizedValues = Object.values(formPayload).map((value) => {
      return (
        this.capitalize(value)
      )
    })

    let userName = `${capitalizedValues[2]} ${capitalizedValues[0]} ${capitalizedValues[1]}`

    return userName
  }

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  handleTitleClick(chosenTitle) {
    this.setState({ title: chosenTitle })
  }

  render() {
    console.log(this.state)

    let renderedComponent;
    if (this.state.formattedName === ""){
      renderedComponent =
        <NameContainer
          error={this.state.genericError}
          handleTitleClick={this.handleTitleClick}
          handleChange={this.handleChange}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          onSubmit={this.handleSubmit} />
    } else {
      renderedComponent =
        <WelcomeContainer userName={this.state.formattedName}/>
    }

    return(
      <div className='page homepage'>
        {renderedComponent}
      </div>
    )
  }

}

export default HomePage
