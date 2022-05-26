const urlEncode = function(text) {
    // Create a function named urlEncode that will receive a string of words, and
    // return that string with all of the whitespace characters converted to %20.
    // If there is whitespace on the outside of the string,
    // like in our second example above, you should only replace the
    // whitespace within the string.
    let encodedText = '';
    text = text.trim();
    for ( let char of text) {
        if (char === ' ') {
            encodedText += '%20';
        } else {
            encodedText += char;
        }
    }
    return encodedText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

/*
Lighthouse%20Labs
Lighthouse%20Labs
blue%20is%20greener%20than%20purple%20for%20sure
 */

/* Alternative:
const urlEncode = text => {
    encodedString = text.trim().split(' ').join('%20');
}
 */