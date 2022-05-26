const repeatNumbers = function(data) {
    /* Create a function named repeatNumbers that will return a string
    with each of the given values repeated the appropriate number of times,
    if there are multiple sets of values each set should be separated by a comma.
    If there is only one set of values then you should omit the comma.
    */
    
    let result = '';

    for (let item of data) {
        let last = data.length - 1;
        let digits = item[0];
        let repeats = item[1];
        for (let i = 0; i < repeats; i++) {
            result += digits;
        }
        if ( item !== data[last]) {
            result += ',';
        }
    }

    return result;


};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
/*
1111111111
11, 222
10101010, 343434343434, 9292
*/