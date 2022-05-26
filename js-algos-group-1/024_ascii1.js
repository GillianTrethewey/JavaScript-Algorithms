function getFrequency(str) {
    let count = {};
    let key;
    for (let i in str) {
        key = str[i];
        if (count[key]) {
            count[key]++;
        } else {
            count[key] = 1;
        }
    }
    return (console.log("Count: ", count));
}

function digitFreq(str) {
    let asc = "";
    for (let i in str) {
       let temp = str.charCodeAt(i);
       asc += temp.toString();
    }
    getFrequency(asc);
}

str = "123Computer";
digitFreq(str);


