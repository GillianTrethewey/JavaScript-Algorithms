const calculateChange = function(total, cash) {
    // Create a function named calculateChange that takes in a
    // total amount of a bill and the total cash given to pay that bill.
    // Return a new object that describes the total amount of change for
    // the cashier to give back.
    // Omit any types of change that you shouldn't give back,
    // i.e. if you don't give back a twenty dollar bill, don't include it in the results.
    let validChange = {
        twentyDollar: 0, tenDollar: 0, fiveDollar: 0, twoDollar: 0, oneDollar: 0,
        quarter: 0, dime: 0, nickel: 0, penny: 0
    }
    const result = {};

    let change = (cash - total) / 100;
    let twenties = Math.floor(change / 20);
    validChange.twentyDollar = twenties;
    let remaining = change - twenties * 20;


    let tens = Math.floor(remaining / 10);
    validChange.tenDollar = tens;
    remaining -= tens * 10;

    let fives = Math.floor(remaining / 5);
    validChange.fiveDollar = fives;
    remaining -= fives * 5;

    let twos = Math.floor(remaining / 2);
    validChange.twoDollar = twos;
    remaining -= twos * 2;

    let ones = Math.floor(remaining / 1);
    validChange.oneDollar = ones;
    remaining -= ones * 1;

    let quarters = Math.floor(remaining / 0.25);
    validChange.quarter = quarters;
    remaining -= quarters * 0.25;

    let dimes = Math.floor(remaining / 0.10);
    validChange.dime = dimes;
    remaining -= dimes * 0.10;

    let nickels = Math.floor(remaining / 0.05);
    validChange.nickel = nickels;
    remaining -= nickels * 0.05;

    let pennies = Math.round(remaining / 0.01);
    validChange.penny = pennies;


    for (let key in validChange) {
        if (validChange[key] !== 0) {
            result[key] = validChange[key];
        }
    }
    return  result;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

/* { twoDollar: 1, dime: 1, penny: 3 }
{ tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
 */

/*We will be given two numbers, the total of a transaction,
and the amount of cash given to the cashier.
Both of these numbers will be represented as whole numbers in cents.
Therefore $10 will be represented as 1000.

Our function calculateChange should return an object
which describes the total amount of change for the cashier to give back.
Although pennies are not used in circulation, we will still
calculate the amount of pennies to give back.

Valid denominations are as follows:

Twenty dollars
Ten dollars
Five dollars
Two dollars
One dollar
Quarter (25¢)
Dime (10¢)
Nickel (5¢)
Penny (1¢)

 */