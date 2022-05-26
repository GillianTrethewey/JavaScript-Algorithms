/*
 Given two sentences, list the repeated words between the sentences.
 Then check if the words are palindromes.
*/
const vowels = ["a", "e", "i", "o", "u"];

let isPalindrome = (word) => {
    return (word === word.split('').reverse().join(''));
};

const repeats = (sentence1, sentence2) => {
    let repeatedWords = [];
    let arrWords1 = sentence1.split(' ');
    let arrWords2 = sentence2.split(' ');

   let palindromeArray = [];
    arrWords1.forEach(element1 => {
        arrWords2.forEach(element2 => {
            if (element1 === element2) {
                repeatedWords.push(element1);
                if (isPalindrome(element1)) {
                    palindromeArray.push(element1);
                }
                }   
            })
        })
        return `Repeated words: ${repeatedWords} \nPalindromes in repeated words: ${palindromeArray}`;
};


let output = repeats('The first toot', 'The second first toot');
console.log(output);
