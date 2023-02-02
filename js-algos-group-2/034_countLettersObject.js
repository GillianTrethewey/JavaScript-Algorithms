function countLetters(str) {
  // Create the object which will store the occurrences
  let count = {}; 
  // key: value pairs, or key: count[key], or key: count.key
/* letter: count[letter] key:value pair ... 
  l: undefined, y:undefined, l: undefined, e:undefined
  if l[0] is undefined, then make it 1, otherwise increase it by 1
  */ 
  // Loop over the letters of the word
  for (let i in str) {
    let key = str[i];
    // letter = lyle[0] = l
    //count[l]
    // if (count[letter]) {
    //   count[letter] = ++;
    // } else {
    //   count[letter] = 1;
    // }
    count[key] = count[key] ? ++count[key] : 1;
  }
// count[letter] is the value at the key of letter
  return (console.log(count));
}


const countLetters2 = word => {
  const count = {};
  let splitWord = word.split('');
  splitWord.forEach(key => {
    count[key] = count[key] ? ++count[key] : 1;
  });

  return (console.log(count));
};

countLetters('lyle');
countLetters2('Gillian');

/*
NORMAL IF:
if (condition) {
  do true stuff such as variable = 1
  } else {
  do false stuff such as variable = 0
  }

TERNARY OPERATOR:
variable = condition ? (true stuff variable is assigned to) 1 : (false stuff variable is assigned to) 0;

*/

function adding(num1, num2) {
  let sum;
  sum = num1 + num2;

  let output;
// if (sum = 10) {
//    output = 'great';
// } else {
//    output = 'not great';
// }
  output = sum === 10 ? 
    'great' : 
    'not great'
  console.log("Output: ", output);
}

adding(2,7);
