/*
Given the following series,
sum ((-1)**(n+1)) / n
e.g. 1/1 - 1/2 + 1/3 - 1/4
Determine the sum of n terms

e.g. array[1]: sum of first 2 terms
array[2]: array[1] + next term = 1/2
array[3]: array[2] +1/3 = 5/6
7/12
*/

const sumOfTermsFromGivenSeries = (num) => {
    let sumTerms = [];
    for (let i = 0; i <= num; i++) {
        if (i === 0) {
            sumTerms.push(1);
        } else {
            sumTerms.push(sumTerms[i-1] + ((-1)**(i))/(i+1));
        }
    }
    return(sumTerms[num]);

}

let output = sumOfTermsFromGivenSeries(3);
console.log(output);
