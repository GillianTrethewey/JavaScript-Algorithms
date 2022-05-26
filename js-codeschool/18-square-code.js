const squareCode = function(message) {
    // In Square Code, the spaces are removed from the english text
    // and the characters are written into a square (or rectangle).
    // For example, the sentence "If man was meant to
    // stay on the ground god would have given us roots" is 54 characters long,
    // once the spaces are removed, so it is written into a rectangle with 7 rows and 8 columns.
    //The square root of 54 (Math.sqrt(54)) is 7.3484692283495345.
    // If we round this number up (Math.ceil(Math.sqrt(54))), we get 8.
    // If we use that for the number of characters on each line (the number of columns),
    // then our text will be close to a square shape.
    // The message is then coded by reading down the columns going left to right.
    // For example, the message above is coded as: imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
    // And that's the output of the algorithm.
    // We can then reverse the process to decrypt the text and read the original message.
    //Create a function named squareCode that will receive a message,
    // and return the secret square code version of the message.
    let secretMessage = [];
    let stripped = message.replace(/\s/g, '');
    let columns = Math.ceil(stripped.length ** 0.5);
    let i,j;
    for (i = 0; i < columns; i++ ) {
        for (j = i; j < stripped.length; j += columns ) {
            secretMessage += stripped[j];
        }
        secretMessage += '\n';

    }

    return secretMessage;

};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));

/*
clu hlt io
fto ehg ee dd
hae and via ecy
imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
 */
