// twin primes - two adjacent primes that have a difference of 2
// e.g. 3 and 5, 5 and 7, 7 and 9, 9 and 11

function getNum() {
    let num1 = parseInt(document.querySelector("#num1").value);
    let num2 = parseInt(document.querySelector("#num2").value); 
    let answer = twinPrimes(num1,num2);
    displayTwinPrimes(answer); 
}

function twinPrimes(num1,num2) {
    twinPrimeResult = false;
    if (isPrime(num1) === true) {
        if (isPrime(num2) === true) {
            let difference = (Math.abs(num1 - num2));
            if (difference === 2) {
            twinPrimeResult = true;
            }
        }
    }
    return twinPrimeResult
}    

function displayTwinPrimes(answer){
    document.querySelector("#results").innerHTML=answer;
}

function isPrime(num){
    results = false;
    if (num < 2) {
        return results;
    }
    i = 2;
    while(i < num) {
        if (num % i === 0) {
          return results; 
        }
        i++;
    }
    results = true;
    return results;
}
