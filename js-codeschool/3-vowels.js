const numberOfVowels = function(data) {
    // Create a function named numberOfVowels that will receive a string
    // and return the number of vowels (a, e, i, o, u) in that string.
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let sum = 0;
    for (let item of data) {
        for (let vowel of vowels) {
            if (item === vowel) {
                sum++;
            }
        }
    }

   return sum;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

/* 3
5
5 */