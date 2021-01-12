//readline-sync and chalk npm packages imported.
var readlineSync = require('readline-sync');
var chalk = require('chalk');

//Name of the Game 
console.log('-------------\n', chalk.black.bold.bgGreenBright('LEAPY YEAR (See whether you were born in a leap year or not!'), '\n-------------\n');


//Rules and information
console.log(chalk.white.bold('Info about leap year'), chalk.blue.bold('\n1. Leap year is a year which consists of 366 days.\n2. In Leap year february month has 29 days.\n'));
console.log(chalk.white.bold('How Leap Year is Calculated'), chalk.blue.bold('\n1. If a number is mutiple of 4.\n2. If a number is mutiple of 400.\n3. If a number is not a mutiple of 100'), chalk.green.bold('\n4. If all the above condition matches then it is a leap year.\n'));


//Getting Username from the user's input 
var userName = readlineSync.question(chalk.red.bold("May I know your name?\n"));
console.log("\nWelcome\n",chalk.bold.cyan(userName), "\n","Let's play a game");

//Getting Birth Year from user's input
var birthYear = readlineSync.question(chalk.red.bold("\nCan you tell me your birth year?\n"), MIN = 0);

//Validation Function if user enters wrong input
function dateValidation() {
  if (isNaN(birthYear) || birthYear < 0) {
    console.log(chalk.bold.bgBlackBright.white("\nOOPS!! Incorrect format, Please enter a valid birth year"));
  } else {
    leapYearCalculate();
  }
}

//Function for calculating leap year
function leapYearCalculate() {
  if ((birthYear % 400 == 0) || ((birthYear % 4 == 0) && (birthYear % 100 !== 0))) {
    console.log("-------------------------",chalk.black.bold.bgGreenBright("\nYou were born in a leap year"));
  } else {
    console.log("-------------------------",chalk.black.bold.bgBlueBright("\nYou were not born in a leap year"));
  }
}

//Function Call
dateValidation();