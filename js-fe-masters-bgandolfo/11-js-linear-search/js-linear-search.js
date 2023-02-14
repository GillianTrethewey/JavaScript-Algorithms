const linearSearch = (arr, num) => {
  let index = -1;
  for (let [key, item] of arr.entries()) {
    if (item === num) {
      index = key;
    }
  }
  return index;
};

console.log(linearSearch([1, 2, 3, 4], 4));
