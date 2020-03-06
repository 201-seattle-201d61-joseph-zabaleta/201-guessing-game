// /* eslint-disable no-unused-vars */
'use strict';

//Ask user name
var newUser = prompt('Hello new user, What is your name?');

//Welcome user
alert('Welcome '+ newUser + ' to the About Me page of Joseph Zabaleta.');

/** NEW VERSION: Here we have condense the first 5 questions, defining a few variables, a function, followed by
calling the function with the required data. */
/** ************************************************************************************************************************ */
var countCorrect = 0;
var y = 'Correct!';
var n = 'Wrong!';

function question(problem, answer) {
  var q = prompt(problem).toLowerCase();
  if (q === 'yes' || q === 'no') {
    if (q === answer) {
      alert(y);
      countCorrect++;
    } else {
      alert(n);
    }
  } else {
    prompt('Please enter a yes or no.');
  }
}

/** ************************************************************************************************************************ */
// QUESTIONS TO ASK


question('Is the Author older than 30 years of age', 'no'); // QUESTION 1
question('Is the Authors name Joseph?', 'yes'); // QUESTION 2
question('Is the author from Seattle?', 'no'); // QUESTION 3
question('Has Joseph worked at Home Depot?', 'yes'); // QUESTION 4
question('Does Joseph want to learn to fly a kite?', 'yes'); // QUESTION 5
questionGuess('Guess a number between 1 and 5', 4); // QUESTION 6
questionM('What is a primary color?'); //QUESTION 7


// console.log(countCorrect);
/** *************************************************************************************************************************** */
/** Here is the disaster of the old code that shall no longer be used.

//Question 1
function question1(){
  var age = prompt('Is the Author older than 30 years of age?').toLowerCase();
  if (age === 'no') {
    alert('Question 1: Correct!');
    countCorrect++;
  } else if (age === 'yes') {
    alert('Question 1: Wrong!');
  } else {
    alert('Please provide a yes or no answer.');
  }
  console.log(age.toLowerCase());
}

//Question 2
var name = prompt('Is the Authors name Joseph?').toLowerCase();

if (name === 'yes') {
  alert('Question 2: Correct!');
  countCorrect++;
} else if (name === 'no') {
  alert('Question 2: Wrong!')
} else {
  alert('Please provide a yes or no answer.')
}
console.log(name.toLowerCase());

//Question 3
var origin = prompt('Is the author from Seattle?').toLowerCase();

if (origin === 'no') {
  alert('Question 3: Correct!');
  countCorrect++;
} else if (origin === 'yes') {
  alert('Question 3: Wrong!')
} else {
  alert('Please provide a yes or no answer.')
}
console.log(origin.toLowerCase());

//Question 4
var work = prompt('Has Joseph worked at Home Depot?').toLowerCase();

if (work === 'yes') {
  alert('Question 4: Correct!');
  countCorrect++;
} else if (work === 'no') {
  alert('Question 4: Wrong!')
} else {
  alert('Please provide a yes or no answer.')
}
// console.log(work.toLowerCase());

//Question 5
var kite = prompt('Does Joseph want to learn to fly a kite?').toLowerCase();

if (kite === 'yes') {
  alert('Question 5: Correct!');
  countCorrect++;
} else if (kite === 'no') {
  alert('Question 5: Wrong!');
} else {
  alert('Please provide a yes or no answer.')
}
console.log(kite.toLowerCase());
*/
// QUESTION 6 in a new function
// *********************************************************************************************************************** */

function questionGuess (problemG, correctNumber) {
  var guess = prompt(problemG);
  for (var counter1 = 0; counter1 < 4; counter1++) {
    guess = Number(guess);
    var correct = correctNumber;
    if (isNaN(guess)) {
      var guess = prompt('Invalid input please enter a valid between 1 and 5.');
    } else if (guess === correct){
      var guess = prompt('You are correct!');
      countCorrect++;
      break;
    } else if (guess > 4) {
      var guess = prompt('Your number is too high. Please try again.');
    } else if (guess < 4) {
      var guess = prompt('Your number is too low. Please try again.');
    }
  }
}

// ************************************************************************************************************************/
// OLD QUESTION 6 MATERIAL

// for (var counter1 = 1; counter1 < 4; counter1++) {
//   if (guess > correct) {
//     var guess = prompt('Your number is too high');
//   } else if (guess < correct) {
//     var guess = prompt('You number is too low');
//   } else if (guess === correct) {
//     var guess = prompt('You are correct!');
//     countCorrect++;
//     break;
//   } else {
//     var guess = prompt('Invalid Input Try Again');
//   }
// }
// alert('The correct answer was 4.');

// console.log(countCorrect);

// //Question 7 - multiple answer
// var colors = ['red', 'yellow', 'blue'];
// var answer = prompt('What is a primary color?').toLowerCase();
// console.log(answer);

// for (var i = 1; i < 6; i++) {
//   if (answer === colors[0]) {
//     console.log('Correct!');
//     break;
//   } else if (answer === colors[1]) {
//     console.log('Correct!');
//     break;
//   } else if (answer === colors[2]) {
//     console.log('Correct!');
//     break;
//   } else {
//     var answer = prompt('Sorry try again. What is a primary color?');
//     console.log('Incorrect!');
//   }
// }

// if (i === 1) {
//   alert('You are correct! The correct answers were: red, yellow, blue');
//   countCorrect++;
// } else if (i === 6) {
//   alert('Sorry you guessed six times. The correct answers would have been: red, yellow, blue');
// }

/** New function for calling question 7 a multiple answer question */
/** ************************************************************************************************************************************* */

function questionM(problemM) {
  var colorAnswers = ['red', 'yellow', 'blue'];
  var attempts= 6;
  loop1: for (attempts = 0; attempts <= 5; attempts++) {
    var primary = prompt(problemM);

    for (var i = 0; i < colorAnswers.length; i++) {
      primary = primary.toLowerCase();
      if ( primary === colorAnswers[i]) {
        alert(y);
        countCorrect++;
        break loop1;
      }
    }
    if (attempts < 6) {
      alert(n);
    }
  }
}

/** ******************************************************************************************************************************************* */
//Final score alert
alert('Your final score '+ countCorrect + ' out of 7 questions.');

//Thank you alert
alert('Thank you '+ newUser + ' for answering all the questions');
