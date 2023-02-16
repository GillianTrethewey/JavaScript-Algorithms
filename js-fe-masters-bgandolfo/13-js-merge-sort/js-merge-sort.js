const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

const merge = (left, right) => {
  let mergedArr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      mergedArr.push(left.shift());
    } else {
      mergedArr.push(right.shift());
    }
  }
  return [...mergedArr, ...left, ...right];
};

console.log(mergeSort([4, 7, 2, 3, 1, 9]));
console.log(merge([1, 2, 3], [8, 9]));
