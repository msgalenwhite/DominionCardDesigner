## Getting Started

This is a practice project app to design new cards for the game Dominion.

NOTE: I do not own Dominion!  I am using a game that I love to help me learn more about programming

ALSO NOTE: This is a practice project, and as such will contain comments/notes for my own knowledge. If I submit a finished/final version of this project, I will of course clean out my note-taking

"npm start" is used to notify webpack to update bundle.js after any changes (and refreshes after changes using "sockets")

## Setup

From your project directory, run the following:

```sh
$ bundle install
$ bundle exec ruby server.rb -o 0.0.0.0
```

Then, in another terminal tab, run:

```sh
$ npm install
$ npm start
```

Navigate to `localhost:4567`.

## To-Do:
1. Have Actions, Card, Buys, Text show up on card (Card.js)
2. Have "handle Submit" function only check that SOMETHING from the description section has been filled out, not necessarily everything, and then everything else
3. Edit json to properly store all of the data that I am passing in as a description
4. SingleCardPage should include:
  1. picture of the card
  2. heading with the name of the card
  3. div with the card's notes
  4. button to edit the card

CSS CONCERNS
1. The textarea in DescriptionDesign is weirdly aligned with its label.  Should labels be above sections instead of next to them?  That's something I could change in TextInputField as well.
2. Should I change the display of a card into percentage instead of pixels, so the card would be scaleable?
3. SingleCardPage has no styling.
4. On Verify Page: make sure 'go back' and 'submit' are on the same line


NEW THINGS TO LEAN:
  - HOW TO TEST REACT

Cool things for the future:
- save miniature decks to use in conjunction with each other
