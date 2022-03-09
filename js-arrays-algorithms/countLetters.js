

//count the characters in a string

function countLetters(str) {
	let count = {};
	for (let i in str) {
		key = str[i];
		if (count[key]) {
			count[key]++;
		} else {
			count[key]=1;
		}
	}
	return (console.log(count));
}


// ASCII string creation


function digitFreq(str) {
	let asc = "";
	for (let i in str) {
		let temp = str.charCodeAt(i);
		asc += temp.toString();
	}
	countLetters(asc);
}

