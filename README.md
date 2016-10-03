#String Censor 

Michael Harrison Tech Test for magneticNorth. Written in JavaScript/ES2015, tested in Mocha/Chai.

##Task

Write a function that will take a string as an input, identify whether it contains any items from a list of banned words that aren't listed in the exceptions. The function should return the original string with the vowels of all banned words replaced with dashes "-".  All checking should be case insensitive.

###Example

|Banned word|Exception 1|Exception 2|
|-----------|-----------|-----------|
|red        |covered    |coloured   |
|green      |evergreen  |greenbelt  |
|blue       |blues      |           |
|yellow     |           |           |

##Installation
- Clone this repo: `git clone git@github.com:harrim91/censor-js.git`
- Assuming you have Node and NPM installed, run `$ npm install` to install dependencies.

##Running Tests
- To run the tests, run `$ npm run test`

##Running the program
- An example script (example.js) is provided; To run this, run `babel-node example.js`
- Import the module and create a new instance of it.
- To add a banned word, use the `#addBannedWord` function.
- To add an exception, use the `#addException` function.
- To return a censored string, use the `#censor` function.

## Approach
 - This was written using TDD - I first wrote a feature test to cover the above example, and then wrote unit tests as I went along.
 - There are a couple of private helper methods which I think make the code more readable. 
 - I learned from my mistakes when writing the Ruby version of this challenge and did the TDD in a better way. With encapsulation in mind, I used nodes module system and JS's lexical scoping to hide the helper functions.

## Improvements
 - I would chance the _isBanned function to be an IIFE.
