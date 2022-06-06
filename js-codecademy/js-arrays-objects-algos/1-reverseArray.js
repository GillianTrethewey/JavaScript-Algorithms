// Reverse the array without using the built-in method, reverse()
// My notes: consider Big O and use several approaches

const reverseArray = (arr) => {
  let reversed = [];
  // Method 1 O(n)
  //for (let i = arr.length -1; i >= 0; i--) {
  //   reversed.push(arr[i]);
  // } 
  // return reversed; 

  // Method 2 O(n)
  // arr.forEach(item => {
  //   reversed.unshift(item);
  // })
  // return reversed;

  // Method 3 O(1) Best because in-place plus don't
  // initialize an empty array either
  for (let i = 0; i < Math.floor(arr.length/2); i++) {
    [arr[i], arr[arr.length-1-i]] = [arr[arr.length-1-i],arr[i]]
    console.log([arr[i], arr[arr.length-1-i]] = [arr[arr.length-1-i],arr[i]]);
  }
  
  return arr;
}







 
const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)) 
// Should print ['This', 'will', 'all', 'make', 'sense.'];



