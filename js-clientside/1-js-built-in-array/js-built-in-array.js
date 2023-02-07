/*
  Use the runner function below to run your code before submitting. Console logs will not work if you do not use the runner function.
*/
const runner = () => {
  const array = [1, 2, 3, 4, 5];
  console.log(isAllOdd(array)); // should be false.
  const array2 = [1, 3, 5, 7, 9];
  console.log(isAllOdd(array2)); // should be true.
};

/* 
    Write a function that returns whether or not an array is made up of only odd numbers.
    @param {number[]} arr
    @return {boolean}
  */
const isAllOdd = (arr) => {
  return arr.every((num) => num % 2 !== 0);
};

/* 
    Given an array of values, determine if the array values are a palindrome.
    @param {any[]} arr
    @return {boolean}
  */
const isPalindrome = (arr) => {
  return arr.join("") === arr.reverse().join("");
};

/* 
    Find and return all duplicates in a given array.
    @param {number[]} arr
    @return {number[]}
  */
const findDuplicates = (arr) => {
  const duplicates = arr.filter((num, index) => arr.indexOf(num) !== index);
  return [...new Set(duplicates)];
};

/*
    Given a list of objects, filter the list to only include objects whose property values match the given key-value pairs.
    @param {object[]} arr
    @param {object} obj
    @return {object[]}
  */
const filterByKeyValue = (arr, obj) => {
  return arr.filter((arrObj) => {
    return Object.keys(obj).every((key) => arrObj[key] === obj[key]);
  });
};

const arr = [
  { name: "John", age: 20 },
  { name: "Jane", age: 20 },
  { name: "John", age: 21 },
];
const obj = { name: "John" };

console.log(filterByKeyValue(arr, obj));
