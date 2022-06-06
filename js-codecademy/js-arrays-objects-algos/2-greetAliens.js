// Log a greeting customized for each element in the array passed in
const greetAliens = (arr) => {
  for (let item of arr) {
    console.log(`Oh powerful ${item}, we humans offer our unconditional surrender!`);
  }
}

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);

