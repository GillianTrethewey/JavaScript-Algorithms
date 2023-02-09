// function joinElements(array, joinString) {
//   function recurse(index, resultSoFar) {
//     resultSoFar += array[index];

//     if (index === array.length - 1) {
//       return resultSoFar;
//     } else {
//       return recurse(index + 1, resultSoFar + joinString);
//     }
//   }

//   return recurse(0, "");
// }

//Write recursive code as a loop
const loop = (array, joinString) => {
  let result = "";
  for (let i = 0; i < array.length - 1; i++) {
    result += array[i] + joinString;
  }
  return result + array[array.length - 1];
};

console.log(loop(["s", "cr", "t cod", " :) :)"], "e"));

//
