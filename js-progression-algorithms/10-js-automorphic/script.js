
// FE / BE
// Python / Django // Python - means more mathematical
// React / Django
// React / MongoDB (MERN) // React - means more social media/ strings


// choices for input: parseInt, Number, String
// if no input specified, then JS will make a string




// automorphic number e.g. 5 and 25, 25 and 625, 6 and 36, 76 and 5776, 376 and 141376




function automorphic() {
    
    let num = parseInt(document.querySelector("#first").value);
    let start = num;
    let numDigits = num.toString().split('').length;

    let numSquared = Math.pow(num,2);
    document.querySelector('#num').innerHTML = "The square of your number is: " + numSquared;

    let lastDigits = numSquared%(Math.pow(10,numDigits));
    if (lastDigits === num) {
        document.querySelector('#num1').innerHTML = num + " is an automorphic number.";
    }
    else {
        document.querySelector('#num1').innerHTML = num + " is not an automorphic number.";
    }
}

function automorphic2(){
    let num = parseInt(document.querySelector("#second").value);
    document.querySelector('#num2').innerHTML ="The square of your number is: " + Math.pow(num,2);

    let stringNumSquared = Math.pow(num,2).toString()
    let arrayNumSquared = stringNumSquared.split("")

    sliceNumSquaredDigits = arrayNumSquared.slice(arrayNumSquared.length - num.toString().length).join("")

    // slice(1) gives index 1 to the end
    if (num != Number(sliceNumSquaredDigits)) {
        document.querySelector('#num3').innerHTML = num + " is not an automorphic number.";
    } 
    else {
        document.querySelector('#num3').innerHTML = num + " is an automorphic number.";
    }
    return;
}