const sumLargestNumbers = function(data) {
    // In this exercise, we will be given an array of 2 or more numbers. We will
    // then have to find the two largest numbers in that array, and sum them together.
    let max = 0;
    for (let num of data) {
        if (num > max) {
            max = num;
        }
    }
    let index = data.indexOf(max);
    let newArray = [...data];
    newArray.splice(index,1);

    let secondMax = 0;
    for (let item of newArray) {
        if (item > secondMax) {
            secondMax =  item;
        }
    }

    return (max + secondMax);
  };

  console.log(sumLargestNumbers([1, 10]));
  console.log(sumLargestNumbers([1, 2, 3]));
  console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
