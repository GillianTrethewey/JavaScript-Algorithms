/* Disemvowel Trolls
Description:
Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels
from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and
return a new string with all vowels removed.
For example, the string "This website is for losers LOL!"
would become "Ths wbst s fr lsrs LL!".
*/
function disemvowel(str) {
  let newArr = str.split('');
  let vowelArr = ['a','e','i','o','u','A','E','I','O','U']
  function vowels(val) {
   if (vowelArr.indexOf(val) === -1) {
     return val;
   }
  }
	return(console.log(newArr.filter(vowels).join('')));
}

disemvowel('aeiouabcd');        
// returns “bcd”

// built-in RegEx - simpler
// return(console.log(str.replace(/[aeiou]/gi, '')));