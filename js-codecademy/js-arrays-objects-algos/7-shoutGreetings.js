/*
Write a function shoutGreetings() that takes in an 
array of strings and returns a new array. 
This new array should contain all the strings 
from the argument array but with capitalized 
letters and an exclamation point appended to the end: 
'heya' will become 'HEYA!'
*/



const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
// Declared Functions:
// function shoutGreetings(arr) {
//   return arr.map(convertCase);
// }

// function convertCase(word) {
//   return word.toUpperCase() + '!';
// }

// Arrow Notation:

const convertCase = word => {
  return word.toUpperCase() + '!';
}
const shoutGreetings = arr => {
  return arr.map(convertCase);
}

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]

