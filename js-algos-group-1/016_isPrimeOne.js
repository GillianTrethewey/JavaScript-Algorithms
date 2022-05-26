function isPrime(num) {
	let i =1;
	if (i < 2) {
		return(console.log(num, "false"));
	}
	i = 2;
	while (i < num) {
		if (num % i === 0) {
			return(console.log(num, "false"));
		}
		i++;
	}
	return(console.log(num, "true"));
}
