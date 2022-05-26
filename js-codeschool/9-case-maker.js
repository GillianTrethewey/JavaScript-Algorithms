const camelCase = function(input) {
    // Create a function named camelCase that will convert a
    // string to camel case, and return the result.

    let camelArr = input.split(' ');
    let camel = '';
    camelArr.forEach(function (item, index) {
        if (index === 0) {
            camel += (item.toLowerCase());
        } else if (index !== 0) {
            camel += (item[0].toUpperCase() + item.slice(1));
        }
    })

    return camel;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

/*
thisIsAString
loopyLighthouse
supercalifragalisticexpialidocious
 */