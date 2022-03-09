// two sentences, count the repeated words

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
let sentence1 = new Array();
let sentence2 = new Array();
let arrWords1 = new Array();
let arrWords2 = new Array();

function repeats(){
    let repeatedWords = [];
    let word = '';
    let arrWords = '';
    let sentence1 = document.querySelector("#user-input1").value;
    let sentence2 = document.querySelector("#user-input2").value;
    arrWords1 = sentence1.split(' ');
    arrWords2 = sentence2.split(' ');
    console.log('arrWords1:', arrWords1, 'arrWords2:', arrWords2);
//    arrWords1.forEach(element => {
//        alert(element);
//   });
//    arrWords2.forEach(element => {
//        alert(element);
//    });
    let palindromeArray = [];
    arrWords1.forEach(element1 => {
        arrWords2.forEach(element2 => {
            if (element1 === element2) {
                repeatedWords.push(element1);
                console.log('repeated Words:',repeatedWords);
                if (isPalindrome(element1) === true) {
                    palindromeArray.push(element1);
                }   
            }
        });
    });

    repeatedWords = repeatedWords.toString().replace(/,/g, ', ');
    document.querySelector("#repeats").innerHTML=repeatedWords;
    document.querySelector("#palindromes").innerHTML=palindromeArray;    
}

// function isPalindrome(word){
//     if (word === word.split('').reverse().join('')) {
//         return true;
//     }
// }

let isPalindrome = (word) => {
        if (word === word.split('').reverse().join('')) {
        return true;
    }
}