## Getting Started

This is a practice project app to design new cards for the game Dominion.

NOTE: I do not own Dominion!  I am using a game that I love to help me learn more about programming

ALSO NOTE: This is a practice project, and as such will contain comments/notes for my own knowledge. If I submit a finished/final version of this project, I will of course clean out my note-taking.  This also means that my history of using branches and pull requests isn't as clean as it should be - this is an issue I will address going forward.

To see the current production version, visit: https://dominion-card-designer.herokuapp.com/

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

Navigate to `localhost:4567`

## Cool things for the future

- SingleCardPage should have a button to edit the card
- incorporate databases in order to persist cards
- save miniature decks to use in conjunction with each other
- vote up and down on cards by yourself and other people
- have single card page show who has designed it
- change display of card to percentages rather than pixels so the final card is scaleable
