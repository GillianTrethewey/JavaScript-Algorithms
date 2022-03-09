// problem assignment: 
// create 2 matrices A and B using an array 2 by 2
// find the sum and product of two matrices
// A product name, B quantity => mango x 5, plus oranges x 4 = 9 total pieces of fruit
// A product quantity, B prices => $1.00 x 5 + $1.25 x 4 = $11 total cost of all fruit
//
//
//arr = [0 for i in range(5)] python


let arrayA = [5,10,25]; //quantities
let arrayB = [1.00,0.50,0.75];//prices
function operationsArrays(A,B){
    let result = new Array( A.length);
    let result2 = new Array( A.length);
    for (let i = 0; i < A.length; i++) {
        result[i] = 0;
        result2[i] = 0;
    }
    for (let j = 0; j < B.length; j++) {
        result[j] = A[j] * B[j];
        result2[j] = A[j] + B[j];
    }            
    document.querySelector("#results").innerHTML="Multiplication result: " + result;
    document.querySelector("#results2").innerHTML="Addition result: " + result2;
}

// Function to change the content of t2
function modifyText() {
    const t2 = document.querySelector("#t2");
    if (t2.firstChild.nodeValue == "three") {
        t2.firstChild.nodeValue = "two";
    } else {
        t2.firstChild.nodeValue = "three";
    }
}

// Add event listener to table
const el = document.getElementById("outside");
el.addEventListener("click", modifyText, false);