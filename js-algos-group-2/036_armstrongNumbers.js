/*
In the case of an Armstrong number of 3 digits,
the sum of cubes of each digit is equal to the number itself.
For example, 153 is an Armstrong number because: 153 = 1*1*1 + 5*5*5 + 3*3*3
Similarly, 1634 is an Armstrong number because: 1634 = 1*1*1*1 + 6*6*6*6* + 3*3*3*3 + 4*4*4*4
Input:
153
Output:
true
*/
const armstrong = (num) => {
    let numArray = num.toString().split('');
    console.log(numArray);
    let sum = 0;
    for (let num of numArray) {
        sum += Number(num)**3;
    }
    return (sum === num);

}

output = armstrong(153);
console.log(output);
