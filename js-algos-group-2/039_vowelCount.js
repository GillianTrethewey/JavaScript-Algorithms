/*
Given a sentence, list the words in the sentence along with the number of vowels.
The result should be case-insensitive.
*/
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
let count = 0;
const findVowels = (word) => {
    let count = 0;
    wordArr = word.split('');
    for (let letter of wordArr) {
        if (vowels.includes(letter)) {
            count++
        }
    }
    return count
}

const getWords = (sentence) => {
    arrWords = sentence.split(' ');
    for (let word of arrWords) {
        count = findVowels(word);
        console.log(word, count);
    }
}

let output = getWords('The brown letter box');
