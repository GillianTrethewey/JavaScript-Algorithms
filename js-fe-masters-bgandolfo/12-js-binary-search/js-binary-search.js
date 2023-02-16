const binarySearch = (arr, num) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === num) return mid;

    if (arr[mid] > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6], 4));
