// /* input a series of jumbled numbers and output the numbers in ascending order
// input the numbers as a string
// split the string up into 'characters'
// apply sort method to the string
// output the numbers in ascending order
//  */
// let splitString = new Array;
// function sortNumbers(str) {
//     splitString = str.split('').sort();
//     return (splitString);
// }
//
// function reverseNumbers(str) {
//     let reverseString = str.split('').reverse();
//     return console.log(reverseString);
// }
//
// function reverseString(str) {
//     let reverseString2 = str.split('').reverse().join("");
//     console.log(reverseString2);
// }
//
function changeCase(str) {
    let strArray = str.split('');
    let changedArray=[];
    let finalString = '';
    for (let i in strArray) {
       let char = strArray[i];
       let asc = char.charCodeAt(0); // ascii code for value
       console.log(char, asc);
        if ((asc >= 65) &&  (asc <= 90)) { //uppercase
            char = char.toLowerCase();
        } else if ((asc >= 97) &&  (asc <= 122)){
            char = char.toUpperCase();
        } else {
            console.log('out of bounds');
        }
        changedArray.push(char);
        }
    finalString = changedArray.toString();
    finalString = finalString.split(',').join('');
    console.log(changedArray);
    console.log(finalString);


}

changeCase('ABCabc');
// sortNumbers('321');
// console.log(splitString);
// reverseNumbers('hello');
// sortNumbers('zyw');
// sortNumbers('321zyw');
// reverseString('Lyle lackers');


