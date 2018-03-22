import React, {Component} from 'react'

import Card from '../components/Card'

class SingleCardPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      fetchComplete: false
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
      .then ( response => response.text())
      .then ( response => JSON.parse(response))
      .then ( response => {
        this.setState({
          cardName: response.cardName,
          cardText: response.cardText,
          cardCost: response.cardCost,
          cardImageUrl: response.cardImageUrl,
          potions: response.potions,
          type: response.type,
          id: response.id,
          extraInfo: response.extraInfo,
          fetchComplete: true
        })
      })
      .catch ( error => console.error(`Error in fetch: ${error.message}`))
  }

  render() {
    let singleCard;
    let cardNotes;

    if (this.state.fetchComplete){
      singleCard =
        <span className='cardInDeck'>
          <Card
            cardName={this.state.cardName}
            cardText={this.state.cardText}
            cardCost={this.state.cardCost}
            cardImageUrl={this.state.cardImageUrl}
            potions={this.state.potions}
            type={this.state.type}
            id={this.state.id}
          />
        </span>

      cardNotes =
        <div>
          <p>
            {this.state.extraInfo}
          </p>
        </div>
    }

    return(
      <div>
        {singleCard}
        {cardNotes}
      </div>
    )
  }
}

export default SingleCardPage
