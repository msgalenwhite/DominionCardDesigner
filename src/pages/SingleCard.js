import React, {Component} from 'react'

class SingleCardPage extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    let cardId = this.props.routeParams.id
    let fetchUrl = `/api/v1/cards/${cardId}`

    fetch(fetchUrl)
      .then ( response => {
        if ( response.ok ) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`;
          let error = new Error(errorMessage);
          throw(error);
        }
      })
      .then ( response => response.json() )
      .then ( response => {
        console.log(response)
      })
      .catch ( error => console.error(`Error in fetch: ${error.message}`) );
  }

  render() {
    return(
      <h1>CARD</h1>
    )
  }
}

export default SingleCardPage
