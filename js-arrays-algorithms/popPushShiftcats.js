let cats = ['Bob', 'Willy', 'Mini'];
function catsPop(cats) {
    return cats.pop();
}
console.log(catsPop(cats)); // returns the popped item
console.log(cats);

function catsPush(cats) {
    return cats.push("Puff", "George");
}
console.log(cats.push()); // return the length

function catsShift(cats) {
    return cats.shift();
}
console.log(cats.shift());

console.log(cats.unshift("Puff", "George"));