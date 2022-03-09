const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function findVowel(word) {
    let count = 0;
    for (let char of word) { 
        if (vowels.includes(char)) {
            count++
        }
    }
    return count
}

function getWords(){
    let length = 0;
    let arrWords = new Array();
    let vowelCount = 0;
    let str = '';
    let words = document.querySelector("#user-input").value;
    arrWords = words.split(' ');
    console.log('arrWords:', arrWords);
    for (let word of arrWords) {
        console.log('word:', word);
        lengthWord = word.length;
        vowelCount = findVowel(word);
 //       str = str + "<p>" + word + "_____" + lengthWord + "_____" + vowelCount + "</p>";
        str = str + `<tr>
        <td>${word}</td>
        <td>${lengthWord}</td>
        <td>${vowelCount}</td>
        </tr>`;
// backtick strings or template literals - helpers - npm       
    }
    document.querySelector("#table-body").innerHTML=str;
}
