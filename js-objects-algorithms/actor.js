class Actor {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}
let a1 = new Actor('Julia','Roberts', 48);
console.log(a1);
a1.eyeColor = 'brown';
console.log(a1);
console.log(a1['age']);