/*
Given a series of factorials increasing by 1 each time to n,
find the sum. For example, n = 3, so the sum is 1! + 2! + 3! (1 + 2 + 6 = 9)
*/
let factorial = 0;

const factorialSeries = (n) => {
    let sumTerms = 0;
    for (let i = 1; i <= n; i++) {
        sumTerms += factorialize(i);
    }
    return `The sum of the terms factorialized is ${sumTerms}`;
}

const factorialize = (num) => {
    if (num === 0 || num === 1)
        return 1;
    for (let i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}

let output = factorialSeries(3);
console.log(output);

