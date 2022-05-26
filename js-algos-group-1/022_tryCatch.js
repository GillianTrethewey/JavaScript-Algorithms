function reverseString(str) {
    try {
        let splitString = str.split('').reverse().join("");
        console.log(splitString);
    }
    catch (error) {
        console.log(error.message);
        console.log(str);
    }
}

reverseString("1234");
reverseString(Number(1234));