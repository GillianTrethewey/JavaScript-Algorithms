/*
A neon number is a number where the sum of digits of square of the number is equal to the number.
Input : 9
Output : Neon Number
Explanation: square is 9 * 9 = 81 and
the sum of the digits of the square (81) is (8 + 1) = 9
 */

const neon = (num) => {
    let sum = 0;
    let squaredNum = num**2;
    let squaredArr = squaredNum.toString().split('');
    for (let digit of squaredArr) {
        sum += Number(digit);
        }
    return (sum === num);
}

let output = neon(9);
console.log(output);


