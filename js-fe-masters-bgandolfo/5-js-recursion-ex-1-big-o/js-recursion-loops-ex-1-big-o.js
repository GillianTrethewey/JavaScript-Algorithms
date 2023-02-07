const loopNTimes = (n) => {
  console.log("n ===", n);

  if (n <= 1) {
    return "complete";
  }
  return loopNTimes(n - 1);
};

console.log(loopNTimes(3));


/*----------------------------------------------*/
let tracker = 0;
const callMe = (arg) => {
  tracker++;
  if (tracker === 3) {
    tracker = 0; // not best practice to have globals better to use closure
    return `loops! ${arg}`;
  }
  return callMe("anytime");
};

console.log(callMe());

/*
1. Identify base case(s)
2. Identify recursive case(s).
3. Return where appropriate.
4. Write procedures for each each that bring you closer to the base case(s)


*/
