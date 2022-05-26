const conditionalSum = function(values, condition) {
    // Create a function named conditionalSum that will be given an array of numbers and a condition, in this case odd or even.
    // Given this condition, add up only the values which match that condition.
    // If no values match the condition, return 0.
    let sum = 0;
        for (let item of values) {
            if ((item % 2 === 0) && (condition === 'even')) {
                sum += item;
            } else if ((item % 2 === 1) && (condition === 'odd')) {
                sum += item;
        }
    }
    return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

/* 6
9
144
0 */