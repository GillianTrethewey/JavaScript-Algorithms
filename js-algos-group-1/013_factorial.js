function factorial(num) {
    let i = 1;
    let results = 1;
    if (num === 0) {
        results = 1;
        return(console.log("0! is", results));
    }
    while(i <= num) {
        results *= i;
        i++;
    }

    // for (let i = 1; i <=num; i++) {
    //     results *= i;
    //}
    console.log(`${num}! is ${results}`);
    return(console.log(num + "! is " + results));
}

factorial(4);

let a = ['first', 'second', 'third', 'fourth', 'fifth'];
console.log('Original Array:', a);

let position = 1;
let elementsToRemove = 2;
// Remove 'elementsToRemove' element(s) starting at 'position'
a.splice(position, elementsToRemove);

console.log('Modified Array:', a);

let c = ['first', 'second', 'third', 'fourth'];
console.log('c:', c);

// Shallow copy array 'a' into a new object
let b = c.slice();

console.log('b:', b);

let d = [ ...c];
console.log('d:',d);

let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.splice(2, 0, "Lemon", "Kiwi"));
console.log(d.length);