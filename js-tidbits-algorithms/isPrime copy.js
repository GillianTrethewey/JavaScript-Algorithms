function isPrimeNumber(num) {
    if (num < 2) {
        return (console.log(num, "false"));
    }
    i = 2;
    while(i < num) {
      if (num % i === 0)   {
          return (console.log(num, "false"));
      }
      i++;
    }
    return (console.log(num, "true"));
}

isPrimeNumber(7);
isPrimeNumber(9);