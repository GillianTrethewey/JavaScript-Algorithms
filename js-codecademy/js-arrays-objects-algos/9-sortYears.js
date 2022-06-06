/*
Write a function sortYears() that takes in an array of years, 
and, using the built-in .sort() method, returns that 
array with the years sorted in descending order.
*/

// years.sort() - default is ascending order
// years.sort((a,b) => (a < b)); - arrow function 
// with descending order

const sortYears = years => {
  return years.sort((a,b) => (a < b)); // descending
}
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]

