/*
Write a function 'transformFirstAndLast' that takes in an array,
and returns an object with:
1) the first element of the array as the object's key, and
2) the last element of the array as that key's value.
Example input:
['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']
Function's return value (output):
{
  Queen : 'Beyonce'
}
Do not change the input array. Assume all elements in the input array
will be of type 'string'.
Note that the input array may have a varying number of elements.
Your code should flexibly accommodate that.
E.g. it should handle input like:
['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey']
Function's return value (output):
{
  Kevin : 'Spacey' // firstElement: 'lastElement'
}

*/

function transformFirstAndLast(array) {
    //your code here
    let obj = {};
    let key = array[0];
    let value = array[array.length-1];
    obj[key] = value;
    return obj;
}

let output = transformFirstAndLast(['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey']);
console.log(output); // { Kevin: 'Spacey' }