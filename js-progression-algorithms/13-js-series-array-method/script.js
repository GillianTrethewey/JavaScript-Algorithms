//third assignment - series
// sum ((-1)**(n+1)) / n e.g. 1/1 - 1/2 + 1/3 - 1/4
// array (list in python)
// array[1]: sum of first 2 terms
// array[2]: array[1] + next term = 1/2
// array[3]: array[2] +1/3 = 5/6
// 7/12


let sumTerms = []
let sumTerms = new Array;
function seriesArrayMethod(){
    let num1 = parseInt(document.querySelector("#user-input").value);
    sumTerms.push(1);

    for (let i = 1, n = num1; i <= n; i++) {
        sumTerms.push(sumTerms[i-1] + ((-1)**(i))/(i+1));

    }
    document.querySelector("#results").innerHTML="The sum of "+ num1 + " terms is " + sumTerms[num1-1].toFixed(5);

}

