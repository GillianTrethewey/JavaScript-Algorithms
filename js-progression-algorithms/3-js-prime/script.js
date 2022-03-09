let results = false;
let i = 1;

function isPrime(num){
    if (num < 2) {
        //results = false;
        return results;
    };

    i = 2;
// eg. check 7 - must go from 2 to 6, ex. 7 % 2, 7 % 3, etc.
// mod returns the remainder, so if it's evenly divisible, the remainder
// would be zero. 
    while(i < num) {
        if (num % i === 0) {
          //results = false;
          return results; // or return results = false;
        }
        i++;
    }
    results = true;
    return results;
}

function getNum(){
    let num = Number(document.querySelector("#user-input").value);
    let answer = isPrime(num);
    displayIsPrime(answer,num);
}

function displayIsPrime(answer,num){
    document.querySelector(".entry").innerHTML=num;
    document.querySelector(".prime").innerHTML=answer;
}