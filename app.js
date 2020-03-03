'use strict';

var newUser = prompt('Hello new user, What is your name?');
  alert('Welcome '+ newUser + ' to the About Me page of Joseph Zabaleta.')

var visited = prompt('Have you been to Code Fellows?').toLowerCase();

if (visited == 'yes') {
  alert("That's amazing! It is has one of the best learning enviroments in the city");
} else if (visited == 'no') {
  alert('No? You definitely have to check them out schedule a tour at Codefellows.org today!')
} else {
  alert('Please provide a yes or no answer.')
}
// console.log(visited);


// Switch version I tried to see the difference.

// switch (visited) {
//   case 'yes':
//     alert("That's amazing! It is has one of the best learning enviroments in the city");
//     break;
//   case 'no':
//     alert('No? You definitely have to check them out schedule a tour at Codefellows.org today!');
//     break;
//   default:
//     alert('Please provide a yes or no answer.');
//     break;
// }

var washington = prompt('Do you live in Washington?').toLowerCase();

if (washington == 'yes') {
  alert('It truly is great to live in the Evergreen State.');
} else if (washington == 'no') {
  alert('Well, the evergreen state is not for everyone.')
} else {
  alert('Please provide a yes or no answer.')
}
// console.log(washington.toLowerCase());

var balloon = prompt('Have you traveled by hot air balloon before?');

if (balloon == 'yes') {
  alert('Really? I have never met anyone who has rode one before.');
} else if (balloon == 'no') {
  alert('I have only ever seen the baloons from a far but one day maybe we will get a chance to ride them.')
} else {
  alert('Please provide a yes or no answer.')
}
// console.log(balloon.toLowerCase());

var aliens = prompt('Do you believe in extraterrestrial life?');

if (aliens == 'yes') {
  alert('Yes! Exactly what I thought Elon Musk is not from planet Earth!');
} else if (aliens == 'no') {
  alert('Then why do we have a rover on mars.....')
} else {
  alert('Please provide a yes or no answer.')
}
// console.log(aliens.toLowerCase());

var pets = prompt('Are dogs better than cats?');

if (pets == 'yes') {
  alert('Dogs are everyones best friend!');
} else if (pets == 'no') {
  alert('Oh you are a cat person, that explains a lot.')
} else {
  alert('Please provide a yes or no answer.')
}
// console.log(pets.toLowerCase());

alert('Thank you '+ newUser + ' for answering all the questions');