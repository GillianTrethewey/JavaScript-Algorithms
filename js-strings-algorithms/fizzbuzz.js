console.log('loading js file');
let output = [];
let i = 1;
let n = 15;
const fizzbuzz = (n) => {
	while (i <= n) {
		if (i % 3 == 0 && i % 5 == 0) {
			output.push('fizzbuzz');
		}
		else if (i % 3 == 0) {
			output.push('fizz');
		}
		else if (i % 5 == 0) {
			output.push('buzz');
		}
		else {
			output.push(i);
		}
		i += 1;
	}
	return (console.log(output));
}

fizzbuzz(20);