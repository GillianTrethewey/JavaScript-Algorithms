const vowels = ["a", "e", "i", "o", "u"];

function findVowel(word) {
    let s = [];
    for (let char of word) {
        if (vowels.includes(char)) {
            char = "x";
        }
        s.push(char); 
    }
    s = s.toString().replace(/,/g, '');
    return s;
}

function findVowel2(word) {
    let count = 0;
    for (let char of word) { // iterate over a string, convert to number, calc.
        if (vowels.includes(char)) {
            count++
        }
    }
    return count
}


function findVowels1(word) {
    let count = 0;
    wordLength = word.length;
    for (let i = 0; i <= wordLength; i++) {
        if (word[i] === "a" || word[i] === "e" || word[i] === "i" ||
            word[i] === "o" || word[i] === "u") {
            count += 1;
        }
    }
    return count;
}

function getWord(){
    let word = document.querySelector("#user-input").value.toLowerCase();
    let answer = findVowel(word);
    displayVowels(answer,word);
}

function displayVowels(answer,word){
    document.querySelector(".str-entries").innerHTML=word;
    document.querySelector(".vowel-number").innerHTML=answer;
}