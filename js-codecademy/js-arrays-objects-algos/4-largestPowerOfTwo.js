const numbers = [5, 3, 9, 30];
// returns the largest power of two that 
//divides into each numbers array item
const largestPowerOfTwo = arr => {
      let results = [];
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];
            j = 1;
            while (j < number) {
                  j *= 2;
            }
            results.push(j);
      }
      return results;
}

console.log(largestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ] 