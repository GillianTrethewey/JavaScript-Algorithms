//["colorado", "color", "cold"], return "col"
// ["a", "b", "c"], return ""
// ["spot", "spotty", "spotted"], return "spot"

let strArr = ["spot", "spotty", "spotted"];


function checkString(strArr) {
    let commonPrefix = [];
    let str5 = strArr[0];
    let str6 = strArr[1];
    let str7 = strArr[2];
    for (let i = 0; i <=str5.length; i++) {
        if ((str5[i] === str6[i]) && (str6[i] === str7[i])) {
            commonPrefix.push(str5[i]);
        }
    }
    commonPrefix = commonPrefix.toString().split(',').join('');
    console.log("The longest common prefix is: " + commonPrefix);

}

checkString(strArr);