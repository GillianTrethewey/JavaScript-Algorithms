let s = "coding";
let t = "ingcod";
// must return 't' for 'foobar' and 'barfoot' once compared, or '' if no extra char for 'coding' 'ingcod'
s = s.split('').sort().join('');
t = t.split('').sort().join('');
console.log(s,t);
function spotDifference(s,t) {
    if (s.length !== t.length) {
        for (let i in s) {
            for (let j in t) {
                if (s.charAt(i) !== t.charAt(j)) {
                    return console.log(s.charAt(i));
                }
            }
        }
        } else {
        if (s === t) {
            return console.log("Mixed up", s, t, '');
        }
    }
}

spotDifference(s,t);