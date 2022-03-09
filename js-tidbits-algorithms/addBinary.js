// add two Binary numbers using built-in methods
let str1 = "110";
let str2 = "11";
function addBinary(str1, str2) {
    num1 = parseInt(str1,2);
    num2 = parseInt(str2,2);
    let addNums = num1 + num2;
    return addNums.toString(2);
}
console.log(addBinary(str1, str2));


// add two Binary numbers using manual methods
function addBinary(str1, str2) {
    let carry = 0;
    const result = [];
    let length1 = str1.length, length2 = str2.length;
    for (let i = length1 - 1, j = length2 - 1; 0 <= i || 0 <= j; --i, --j) {
        let a = i >= 0 ? Number(str1[i]) : 0;
        let b = j >= 0 ? Number(str2[j]) : 0;
        result.unshift((a + b + carry) % 2);
        if (carry + a + b > 1) {
            carry = 1;
        } else {
            carry = 0;
        }
    }
    if (carry){
        result.unshift(1);
    }
    return result.join('');
}

console.log(addBinary(str1, str2));


