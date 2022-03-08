//"abcabd", return 2
//"thedailybyte", return 1
//"developer", return 0

function firstUniqueChar(str) {
    let len = str.length;
    for(let i = 0; i < len; i++){
        found = true;
        for(let j = i+1; j < len; j++){
            if (str[i] === str[j]) {
                found = false;
                break;
            }
        }
        if(found === true){
            return i;
        }
    }
    return -1;
}

console.log(firstUniqueChar("abcabd"));