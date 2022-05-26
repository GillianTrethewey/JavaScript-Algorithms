/*
 Given a number, determine if it is automorphic.
 Automorphic numbers when squared contain the original number at the end of the squared number.
1. 5 and 25
2. 25 and 625
3. 6 and 36
4. 76 and 5776
5. 376 and 141376 (contains 376 at the end of 141376).
 */
const automorphicCheck = (num) => {
    let squaredNum = num**2;
    let squaredNumArr = squaredNum.toString().split('');
    let numArr = num.toString().split('');
    // converts num to an array of digits
    let returnSliceArr = squaredNumArr.slice(numArr.length);
    // slice off the same number of digits as are in num
    if (numArr.join('') === returnSliceArr.join('')) {
       return `${num} is an automorphic number.`;
    } 
    else {
        return`${num} is not an automorphic number.`;
    }
}

let output = automorphicCheck(376);
console.log(output);