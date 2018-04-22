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

Navigate to `localhost:4567`.

## To-Do:
SingleCardPage should include: = FOUNDATION ISSUES
  x1. picture of the card
  x2. heading with the name of the card
  x3. div with the card's notes
  4. button to edit the card

CSS CONCERNS
1. The textarea in DescriptionDesign is weirdly aligned with its label.  Should labels be above sections instead of next to them?  That's something I could change in TextInputField as well.
2. Should I change the display of a card into percentage instead of pixels, so the card would be scaleable?
3. On Verify Page: make sure 'go back' and 'submit' are on the same line

Cool things for the future:
- incorporate databases in order to persist cards
- save miniature decks to use in conjunction with each other
- vote up and down on cards by yourself and other people
- have single card page show who has designed it

Issues with Foundation:
- color of cost on cards (single card)
- shape of buttons
- design a card/see deck buttons merged
