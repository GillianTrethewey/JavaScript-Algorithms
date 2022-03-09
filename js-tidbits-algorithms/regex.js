function regexVar(str) {
    let re = RegExp(/^([aeiou]).*\1$/);
    re.test(str);
    console.log(re.text(str));
    return re;
}

regexVar('bcd');
regexVar('abcda')

// RegExp obj must match any string that beings and ends with the same vowel
// eg abcda is true, bcd is false
// RegExp is a sequence of characters that forms a search pattern
// /w3schools/l (search for w3schools as a pattern that is case insensitive
// often used with search() and replace()
// g - global, m - multiline matching, [abc] - find any of char between brackets, [0-9] - any numbers
//(x|y) - find any of the alternates sep by |, \d - find a digit, \s - find a space, \b - find a match at beg. \bWORD or
// end with WORD\b, \uxxxx - find unicode with xxxx hexadecimal number
// n+ - matches any string with at least one n
// n* - matches any string with zero or more occurrences of n
// n? - matches any string that contains zero or ONE occurrences of n
// [^abc] - any char NOT between brackets