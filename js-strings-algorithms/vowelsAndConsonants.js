function vowelsAndConsonants(str) {
    let vowels = ['a','e','i','o','u'];
    for (let i in str) {
        if (vowels.indexOf(str[i]) > -1) { // like a set - it's there or it's not
            console.log(str[i]);
        }
    }
    for (let i in str) {
        if (vowels.indexOf(str[i]) < 0) {
            console.log(str[i]);
        }
    }
}

vowelsAndConsonants('javascriptloops');