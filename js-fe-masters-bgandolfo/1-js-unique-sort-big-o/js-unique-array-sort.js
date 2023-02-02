/* Task: Transform this simple sorting algorithm into 
a unique sort, meaning that it 
should not return any duplicate values in the sorted array
*/

const uniqSort = function (arr) {
  const charMap = {};
  const results = [];

  for (let num of arr) {
    if (!charMap[num]) {
      results.push(num);
      charMap[num] = true;
    }
  }
  return results.sort((a, b) => a - b);
};
console.log(uniqSort([4, 2, 2, 3, 2, 2, 2]));
