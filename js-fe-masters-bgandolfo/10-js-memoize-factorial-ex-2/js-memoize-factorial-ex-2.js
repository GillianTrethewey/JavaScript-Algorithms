const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let n = args[0];
    if (n in cache) {
      console.log("Fetching from cache", n);
      return cache[n];
    } else {
      console.log("Calculating result", n);
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  };
};

const factorial = memoize((x) => {
  return x === 0 ? 1 : x * factorial(x - 1);
});

console.log(factorial(5));
console.log(factorial(6));
