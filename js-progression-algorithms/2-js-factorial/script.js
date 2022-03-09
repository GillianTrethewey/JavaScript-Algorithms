let results = 1;
let i = 1;

function factorial(num){
    while (i <= num) {
        results *= i;
        i++;
    }
    return results;
};
/*
    let array = [];
    //base case
    array[0] = 1;

    for(let i = 1; i <= num; i++) {
        array[i] = i * array[i - 1];
    }
    return array[num];
}
*/

function getNum(){
//    let num = parseInt(prompt('Enter value'));
    let num = Number(document.querySelector("#user-input").value);
    let answer = factorial(num);
    displayFactorial(answer,num);
};

function displayFactorial(answer,num){
    document.querySelector(".entry").innerHTML=num;
    document.querySelector(".factorial").innerHTML=answer;
};


/*   let num = String/Boolean/ArrayFrom(document.querySelector("#user-input").value);
python str/
try ... catch(err) ... async ... await js - 
promise ... .then ... .catch promise-style
python --- try except 
python function doc test - system of formatting test examples
runs command to test function 
python function docstring ''' if base case ... f(1) = 
 */