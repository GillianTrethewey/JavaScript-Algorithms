/*
Given two arraysrepresenting quantities of fruit and prices of fruit,
find the total cost of the fruit. e.g. 5 mangoes @ $1.00 and 4 bananas @ $1.25
total cost = quantity x prices = $11 total cost of all fruit
*/

const sumAndProductOfArr = (quantities, prices) => {
    let result = 0;
    for (let j = 0; j < prices.length; j++) {
        result += quantities[j] * prices[j];
    }
    return result;
}

let output = sumAndProductOfArr([5, 10, 25], [1, 0.5, 0.75]);
console.log(output);