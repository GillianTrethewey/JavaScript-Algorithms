//second assignment - series
// sum of factorials e.g. sum of first 3 terms is 3! + 2! + 1!
// looping


function getNum() {
    let num1 = parseInt(document.querySelector("#num1").value);
    console.log(num1);
    let answer = sumFactorials(num1);
    displaySumFactorials(answer); 
}


function sumFactorials(num) {
    let sumTerms = 0;
    for (let i = 1, n = num; i <= n; i++) {
        sumTerms = sumTerms + factorial(i);
        console.log(sumTerms);
    }
    return sumTerms;
}    

function displaySumFactorials(answer){
    document.querySelector("#results").innerHTML=answer;
}

function factorial(num) {
    let results = 1;
    for (let i = 1, n = num; i <= n; i++) {
        results *= i;
    }
    return results;
};


