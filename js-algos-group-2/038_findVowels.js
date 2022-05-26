/*
Given a word, find the number of vowels in it.
*/
const vowels = ["a", "e", "i", "o", "u"];

const findVowels = (word) => {
    let count = 0;
    let wordArr = word.split('');
    for (let letter of wordArr) { // iterate over a string, convert to number, calc.
        if (vowels.includes(letter)) {
            count++
        }
    }
    return count
}

let output = findVowels('aeioubobby');
console.log(output);