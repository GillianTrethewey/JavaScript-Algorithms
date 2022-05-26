/*
Given two primes, check if they are adjacent and have a difference of two.
Examples of twin primes:
 e.g. 3 and 5, 5 and 7, 7 and 9, 9 and 11
*/

const twinPrimesCheck = (num1,num2) => {
    if (isPrime(num1) && isPrime(num2)) {
        return (Math.abs(num1 - num2) === 2) ?
            `${num1} and ${num2} are twin primes` :
            `${num1} and ${num2} are not twin primes`;
    }
};

function isPrime(num){
    if (num < 2) return false;
    i = 2;
    while(i < num) {
        return (num % i !== 0)
        i++;
    }
    return true;
}

let output = twinPrimesCheck(5,7);
console.log(output);