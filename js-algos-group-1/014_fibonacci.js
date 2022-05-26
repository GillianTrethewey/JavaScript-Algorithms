function fibonacci(num) {
    //calculate fibonacci sequence iteratively
    //check if num entered matches at each step
    //fibonacci: 1, 2, 3, 5, 8, 13, 21
    // data structure: could use an array and push each number to the end of the array
    // if want it a set length, could initialize as new Array(10).fill(0), otherwise, make it empty and
    // push the value into it
    let fibArray = [];
    //can't iterate through the array because it's empty, so no for ... in

    fibArray[0] = 1;
    fibArray[1] = 2;
    for (let i = 0; i < 10; i++) {
        fibArray[i + 2] = fibArray[i] + fibArray[i + 1];
        //fibArray.push(fibArray[i+2]);
        if (num === fibArray[i + 2]) {
            console.log(num, "is a fibonacci number!");
            return;
        }
    }
    console.log(num, "is not a fibonacci number!");

}

fibonacci(8);
fibonacci(9);