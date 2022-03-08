//s = "cat", t = "tac", return true
//s = "listen", t = "silent", return true
//s = "program", t = "function", return false
let s = "";
let t = "";
let result = [];
function anagram(s,t) {
    for (let i in s) {
        for (let j in t) {
            if (s.charAt(i) === t.charAt(j)) {
                result.push(s.charAt(i));
            }
        }
    }
    if (result.length === s.length) {
        return(console.log("it's an anagram"));
    } else {
        return(console.log("it\'s not an anagram"));
    }
}
anagram("cat", "tac");
anagram("listen", "silent");
anagram("program", "function");