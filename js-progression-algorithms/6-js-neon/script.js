let num = 0;
let checkNeon = false;
let sumDigits = 0;

function neon(num) {
    let squaredNum = num**2;
    squaredNum = squaredNum.toString();
    let sumDigits = 0;

    for (let char of squaredNum) {
        sumDigits = sumDigits + Number(char);
        }
    if (sumDigits === num) {
        checkNeon = true;
    }
    return checkNeon; 
}

function neon2(num) {
    let squaredNum = num**2;
    squaredNum = squaredNum.toString();
    let sumDigits = 0;
    for (let i = 0; i < squaredNum.length; i++){
        sumDigits = sumDigits + Number(squaredNum[i]);
    }
    if (sumDigits === num) {
        checkNeon = true;
    }
    return checkNeon; 
}

function getNum(){
    let num = Number(document.querySelector("#user-input").value);
    let answer = neon(num);
    displayNeon(answer,num);
}

function displayNeon(answer,num){
    document.querySelector(".num-entries").innerHTML=num;
    document.querySelector(".neon").innerHTML=answer;
}