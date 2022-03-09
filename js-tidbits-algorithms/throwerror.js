function isPositive(a) {
    if (a > 0)
    {
        console.log("YES");
    }
    else if (a === 0)
    {
        throw new Error("Zero Error");
    }
    else if (a < 0)
    {
        throw new Error("Negative Error");
    }
}

//isPositive(-1);

const filterNaN = (arr) => {
    console.log(arr.filter(isNaN));
    return arr.filter(isNaN);
} //one arrow function

const filterNumber = (arr) => {
    console.log(arr.filter(Number));
    return arr.filter(Number);
} //one arrow function


filterNaN([1,2,'a',3,'b',2.33]);
filterNumber([1,2,'a',3,'b',2.33]);

function findElement(elem, arr) {
    for (let i in arr) {
        if (elem === arr[i]) {
            return(console.log("Element is: ", elem, "index is: ", i));
        }
    }
}

findElement('b','abcd');