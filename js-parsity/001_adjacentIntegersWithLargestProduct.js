/*
Write a function that takes an array of integers, 
and finds the pair of adjacent elements that has the 
largest product and return that product.


INPUT:
[1, 3, 5, 8]

OUTPUT:
40
// from 5 x 8

INPUT:
[5, 1, 2, 3, 1, 4]

OUTPUT:
6

INPUT:
[9, 5, 10, 2, 24, -1, -48]
50
*/

let array = [9, 5, 10, 2, 24, -1, -48];

function adjacentIntegersWithLargestProduct (arr) {
    let largestProduct = 0;
    for (let i = 0; i < arr.length-1; i++) {
        if ((arr[i] * arr[i+1]) > largestProduct) {
            largestProduct = arr[i] * arr[i+1];
        }
    }


    return largestProduct;
}

let output = adjacentIntegersWithLargestProduct(array);
console.log(output);