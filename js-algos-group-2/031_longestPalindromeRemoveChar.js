/* Given a string and the ability to delete at most one character, return whether or not it can form a palindrome.
"abcba", return true
"foobof", return true (remove the first o, second o, or b)
"abccab", return false
*/
let str = "";
function isPalindrome(str) {
	if (str === str.split('').reverse().join('')) {
		return true;
	}
}

//console.log(isPalindrome("aba"));

function removeChar(str) {
	for (let i = 0; i < str.length; i++) {
		tempStr = str.replace(str.charAt(i),"");
		if (isPalindrome(tempStr)) {
			console.log(str + " has the longest Palindrome with " + str.charAt(i) + " removed as:  " + tempStr);
			return;
		}
	}
	console.log(str + " cannot be made into a Palindrome.");
}
removeChar("abcba");
removeChar("foobof");
removeChar("abccab");