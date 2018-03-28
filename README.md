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

CHANGES TO SCSS:
  - For Card display:
    - Change px to %
  - Fix spacing in Design Container

CHANGES TO DECK CONTAINER:
X- Clicking on a single card will take you to its page
    - Card's page will have a link to edit it

CHANGES TO VERIFY PAGE
  - Make sure "submit" and "go back" buttons are on the same line

NEW THINGS TO LEAN:
  - HOW TO TEST REACT

Cool things for the future:
- save miniature decks to use in conjunction with each other
