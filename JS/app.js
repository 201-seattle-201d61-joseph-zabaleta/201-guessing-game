/* eslint-disable no-unused-vars */
'use strict';

//Ask user name
var newUser = prompt('Hello new user, What is your name?');

//Welcome user
alert('Welcome '+ newUser + ' to the About Me page of Joseph Zabaleta.');

//Score counter variable
var countCorrect = 0;

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

if (name == 'yes') {
  alert('Question 2: Correct!');
  countCorrect++;
} else if (name == 'no') {
  alert('Question 2: Wrong!')
} else {
  alert('Please provide a yes or no answer.')
}
console.log(name.toLowerCase());

//Question 3
var origin = prompt('Is the author from Seattle?').toLowerCase();

if (origin == 'no') {
  alert('Question 3: Correct!');
  countCorrect++;
} else if (origin == 'yes') {
  alert('Question 3: Wrong!')
} else {
  alert('Please provide a yes or no answer.')
}
console.log(origin.toLowerCase());

//Question 4
var work = prompt('Has Joseph worked at Home Depot?').toLowerCase();

if (work == 'yes') {
  alert('Question 4: Correct!');
  countCorrect++;
} else if (work == 'no') {
  alert('Question 4: Wrong!')
} else {
  alert('Please provide a yes or no answer.')
}
console.log(work.toLowerCase());

//Question 5
var kite = prompt('Does Joseph want to learn to fly a kite?').toLowerCase();

if (kite == 'yes') {
  alert('Question 5: Correct!');
  countCorrect++;
} else if (kite == 'no') {
  alert('Question 5: Wrong!')
} else {
  alert('Please provide a yes or no answer.')
}
console.log(kite.toLowerCase());

//
//Question 6 - Guessing game
//

var guess = prompt('Guess a number between 1 and 5');
var correct = '4';

for (var i = 1; i < 4; i++) {
  if (guess > correct) {
    var guess = prompt('Your number is too high');
  } else if (guess < correct) {
    var guess = prompt('You number is too low');
  } else if (guess === correct) {
    var guess = prompt('You are correct!');
    countCorrect++;
    break;
  } else {
    var guess = prompt('Invalid Input Try Again');
  }
}
alert('The correct answer was 4.');

//Question 7 - multiple answer
var colors = ['red', 'yellow', 'blue']
var answer = prompt('What is a primary color?').toLowerCase();
  console.log(answer);

for (var i = 1; i < 6; i++) {
  if (answer == colors[0]) {
    console.log('Correct!')
    break;
  } else if (answer == colors[1]) {
    console.log('Correct!')
    break;
  } else if (answer == colors[2]) {
    console.log('Correct!')
    break;
  } else {
    var answer = prompt('Sorry try again. What is a primary color?')
    console.log('Incorrect!')
  }
}

if (i === 1) {
  alert('You are correct! The correct answers were: red, yellow, blue');
  countCorrect++;
} else if (i === 6) {
  alert('Sorry you guessed six times. The correct answers would have been: red, yellow, blue');
}


// Question 7 FIX Issue

// var colors = ['red', 'yellow', 'blue']
// var attempts= 6;

// loop1: for (attempts = 0; attempts <= 5; attempts++) {
 
//            var primary = prompt('What is a primary color?');
 
//  loop2: for (var i = 0; i < colors.length; i++) {
//           primary = primary.toLowerCase();
//           if ( primary === colors[i]) {
//             alert('Correct!');
//             break loop1;
//           }
//   }  
  
//   if (attempts < 6) {
//     alert('Wrong!');
//   }
// }

//Final score alert
alert('Your final score '+ countCorrect + ' out of 7 questions.');
  console.log(countCorrect);

//Thank you alert
alert('Thank you '+ newUser + ' for answering all the questions');