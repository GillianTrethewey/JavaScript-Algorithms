function symOfTwo(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const combinedArray = [...set1, ...set2];
  const count = {};
  const output = [];
  for (let key of combinedArray) {
    count[key] = count[key] ? ++count[key] : 1;
  }

  for (let key in count) {
    if (count[key] === 1) {
      output.push(Number(key));
    }
  }

  return (console.log(output));
}


function sym() {
  const arrOfArgs = [...arguments]; // used when unknown number of arguments
  console.log(arrOfArgs);
  let output = arrOfArgs[0];
  for (let i=1; i < arrOfArgs.length; i++) {
    output = symOfTwo(output, arrOfArgs[i]);
  }
  return output;
}

sym([1, 2, 3], [5, 2, 1, 4]);