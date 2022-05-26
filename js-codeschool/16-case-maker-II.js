
const makeCase = function(input, style) {
    // Create a function named makeCase that will receive an input string
    // and one or more casing options. Return a new string that is
    // formatted based on casing options:
    // Precedence of each of the casing styles are as follows,
    // values higher in the list should be processed first:
    // 1. camel, pascal, snake, kebab, title
    // 2. vowel, consonant
    // 3. upper, lower
    let arr = input.split(' ');
    let givenstyles = [];
    let output = '';
    let numstyles = 1;
    if(Array.isArray(style)) {
        numstyles = style.length;
        for(let styles in style) {
            givenstyles.push(style[styles]);
        }
    } else {
        givenstyles.push(style);
    }
    console.log(givenstyles);
    for (let j = 0; j < numstyles; j++ ) {
        output = '';
        switch(givenstyles[j]) {
            case 'camel':
                arr.forEach(function (item, index) {
                    if (index === 0) {
                        output += (item.toLowerCase());
                    } else if (index !== 0) {
                        output += (item[0].toUpperCase() + item.slice(1));
                    }
                });
                break;
            case 'pascal':
                arr.forEach(function (item, index) {
                    output += (item[0].toUpperCase() + item.slice(1));
                })
                break;
            case 'snake':
                arr.forEach(function (item, index) {
                    output += item + '_';
                })
                output = output.slice(0, -1);
                break;
            case 'kebab':
                arr.forEach(function (item, index) {
                    output += item + '-';
                })
                output = output.slice(0, -1);
                break;
            case 'title':
                arr.forEach(function (item, index) {
                    output += item[0].toUpperCase() + item.slice(1) + ' ';
                })
                break;
            case 'vowel':
                for (let char of input) {
                    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
                        char = char.toUpperCase();
                    }
                    output += char;
                }
                break;
            case 'consonant':
                for (let char of input) {
                    if (char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 'u') {
                        char = char.toUpperCase();
                    }
                    output += char;
                }
                break;
            case 'upper':
                output = output.toUpperCase();
                break;
            case 'lower':
                output = output.toLowerCase();
                break;
            default:
                output = 'Not a case that is recognized';
        }
        input = output;
    }
    if (style.includes('upper')) {
        output = output.toUpperCase();
    } else if (style.includes('lower')) {
        output = output.toLowerCase();
    }
    return output;
};
            console.log(makeCase("this is a string", "camel"));
            console.log(makeCase("this is a string", "pascal"));
            console.log(makeCase("this is a string", "snake"));
            console.log(makeCase("this is a string", "kebab"));
            console.log(makeCase("this is a string", "title"));
            console.log(makeCase("this is a string", "vowel"));
            console.log(makeCase("this is a string", "consonant"));
            console.log(makeCase("this is a string", ["upper", "snake"]));


/*
thisIsAString
ThisIsAString
this_is_a_string
this-is-a-string
This Is A String
thIs Is A strIng
THiS iS a STRiNG
THIS_IS_A_STRING
 */