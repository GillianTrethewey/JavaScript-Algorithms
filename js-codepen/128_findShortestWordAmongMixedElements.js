/*
Write a function called "findShortestWordAmongMixedElements".

Given an array, "findShortestWordAmongMixedElements" returns the
shortest string within the given array.

Notes:
* If there are ties, it should return the first element to
appear in the given array.
* Expect the given array to have values other than strings.
* If the given array is empty, it should return an empty string.
* If the given array contains no strings, it should return an empty string.

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
*/

function findShortestWordAmongMixedElements(arr) {
    // your code here
    let strArr = [];
    let count = 0;
    let min = arr[0];
    for (let item of arr) {
        if (typeof item === 'string' && item.length < min) {
            min = item;
            count++;
        }
    }
    if (count === 0) {
        return "";
    } else {
        return min;
    }
}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'