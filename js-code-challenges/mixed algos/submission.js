const findSum = function(array) {
    // your code here - don't forget to return a number!
    let sum = 0;
    for (const item of array) {
        sum += item;
    }
    console.log(sum);
    return sum;
};

const findFrequency = function(array) {
    // your code here - don't forget to return an object!
    let obj = { most: '', least: ''};
    let count = {};
    for (let char of array) {
        count[char] = count[char] ? ++count[char]: 1;
    }
    let arr = Object.values(count);
    let min = Math.min(...arr);
    obj.least = Object.keys(count).find(key => count[key] === min);
    let max = Math.max(...arr);
    obj.most = Object.keys(count).find(key => count[key] === max);
    return obj;
};

const isPalindrome = function(str) {
    // your code here - don't forget to return a boolean!
    let revStr = str.split('').reverse().join('');
    return (revStr === str);
};

const largestPair = function(array) {
    // your code here - don't forget to return a number!
    let product = [];
    for (let i = 0; i < array.length -1; i++) {
        product.push(array[i] * array[i+1]);
    }
    let arr = Object.values(product);
    let max = Math.max(...arr);
    return max;
};

/* alternative solution */

function largestProduct(arr) {
    let product = 0;
    let temp = 0;
    for (let i = 0; i < arr.length-1; i++) {
            temp = arr[i] * arr[i+1];
            product = (temp > product) ? temp: product;

    }
    console.log(product);
    return product;
}

largestProduct([5, 1, 2, 3, 1, 4]);

const removeParenth = function(str) {
    // your code here - don't forget to return a string!
    let arr = str.split('');
    let openBracket = arr.indexOf('(');
    let closedBracket = arr.indexOf(')');
    let numItems = closedBracket - openBracket + 1;
    arr.splice(openBracket, numItems);
    let newStr = arr.join('');
    return newStr;
};

const scoreScrabble = function(str) {
    // your code here - don't forget to return a number!
    let scores = {
        'a': 1,
        'b': 3,
        'c': 3,
        'd': 2,
        'e': 1,
        'f': 4,
        'g': 2,
        'h': 4,
        'i': 1,
        'j': 8,
        'k': 5,
        'l': 1,
        'm': 3,
        'n': 1,
        'o': 1,
        'p': 3,
        'q': 10,
        'r': 1,
        's': 1,
        't': 1,
        'u': 1,
        'v': 4,
        'w': 4,
        'x': 8,
        'y': 4,
        'z': 10
    }
    let arr = str.split('');
    console.log(arr);
    let sum = 0;
    for (let char of arr) {
        sum += scores[char];
    }
    return sum;
};
