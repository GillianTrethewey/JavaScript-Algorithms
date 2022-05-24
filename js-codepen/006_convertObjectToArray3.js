/*
Write  a function called "convertObjectToList" which converts an
object literal into an array of arrays, like this:
Argument:
{
  name: 'Holly',
  age: 35,
  role: 'producer'
}
Return value:
[['name', 'Holly'], ['age', 35], ['role', 'producer']]

Note that your function should be able to handle ANY object like this,
not just the exact sample provided above.

E.g., it should also be able to handle this, or any other object containing simple key-value pairs.
{
  species: 'canine',
  name: 'Bowser',
  weight: 45
}
*/

function convertObjectToList(obj) {
    let list = [];
    let item = [];

    for (let key in obj) {
        item.push(key);
        item.push(obj[key]);
        list.push(item);
        item = [];
    }
    return list;
}

let output = convertObjectToList({ name: 'Holly', age: 35, role: 'producer'});
console.log(output); // [['name', 'Holly'], ['age', 35], ['role', 'producer']]