let recursionCounter = 0;
const coins = [10, 6, 1];

const makeChange = (value, i) => {
  //base case
  if (value === 0) return 0;
  let minCoins;
  coins.forEach((coin) => {
    if (value - coin >= 0) {
      //recursion
      let currMinCoins = makeChange(value - coin, i);
      if (minCoins === undefined || currMinCoins < minCoins) {
        minCoins = currMinCoins;
      }
    }
  });
  return minCoins + 1;
};

console.log(makeChange(12));

//Brute force because Greedy algorithm does not work for all cases
//still a problem with large datasets
