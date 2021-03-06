/*
Write a function called "removeFromBackOfNew".

Given an array, "removeFromBackOfNew" returns a new array
containing all but the last element of the given array.

Notes:
* You should be familiar with the 'slice' method.

var arr = [1, 2, 3];
var output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]
*/

function removeFromBackOfNew(arr) {
    // your code here
   let newArr = arr.slice(0,arr.length-1);
   return newArr;
}

const arr = [1, 2, 3];
let output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]