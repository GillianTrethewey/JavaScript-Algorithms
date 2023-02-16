const makeChange = (coins, amount) => {
  coins.sort((a, b) => b - a);
  let coinTotal = 0;
  let i = 0;

  while (amount > 0) {
    if (coins[i] <= amount) {
      amount -= coins[i];
      coinTotal++;
    } else {
      i++;
    }
  }
  return coinTotal;
};

console.log(makeChange([5, 10, 25], 50));
// doesn't return the optimal solution with
// [1,6,10], 12
// Greedy Algorithms are not always the optimal
// with small inputs could use Brute Force
