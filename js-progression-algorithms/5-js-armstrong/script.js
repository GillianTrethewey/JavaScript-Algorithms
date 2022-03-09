let num = 0;
let numSplit = num.toString();
let checkArmstrong = false;
let armstrongOfNum = 0;
let count = 0;
// const digits = (num,count = 0) => {
//     if(num) {
//         return digits(Math.floor(num/10, ++count));
//     };
//     return count;
// };

// count is the number of digits in num

const digits = (num) => {
    if(num) {
        let count = num.toString().length();
    }
}

function armstrong(num,count) {
    numArray = num.toString(count).split('');
    for (let i = 0, n = numArray.length; i < n; i++) {
        armstrongOfNum = armstrongOfNum + Number(numArray[i])**3;
    }
    if (armstrongOfNum === num) {
        checkArmstrong = true;
    }
    return checkArmstrong; 
}

function getNum(){
    let num = Number(document.querySelector("#user-input").value);
    let answer = armstrong(num);
    displayArmstrong(answer,num);
}

function displayArmstrong(answer,num){
    document.querySelector(".num-entries").innerHTML=num;
    document.querySelector(".armstrong").innerHTML=answer;
}
