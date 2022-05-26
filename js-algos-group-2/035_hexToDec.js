/*
Notes: Numbers of any base have the highest place value in the left-most digit.
To address this in the for loop, the string was reversed first.
Alternatively, the loop could have started at the length of the string -1 and counted down, without reversing the string.
*/
 const convertValues = {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, 'a': 10,
    'b': 11, 'c': 12, 'd': 13, 'e': 14, 'f': 15}
function hexToDec(str) {
    let baseTen = 0;
    let strRev = str.split('').reverse().join('');
    for (let i in strRev) {
        let key = strRev[i];
        baseTen += convertValues[key] * 16 ** i;
    }
    console.log(`The base ten conversion of ${strRev} is ${baseTen}.`);
}

hexToDec('f6a4b8');
// #f6a4b8 returns 16164024

hexToDec('e3e3e3');
// #e3e3e3 returns 14935011

