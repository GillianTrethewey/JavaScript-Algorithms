const urlDecode = function(text) {
    /*
    Create a function named urlDecode that will receive a URL encoded string,
    and return a JavaScript object that represents that data.
     */

    let output = {};// initialize empty return object
    let i = 0;
    let firsttermkey = '';
    let firsttermvalue = '';
    let secondtermkey = '';
    let secondtermvalue = '';
    while(text[i] !== '=') {
        firsttermkey += text[i];
        i++;
    }
    text = text.substr(i);
    i = 0;// reset i to 0
    while(i < text.length) {
        if(text[i] === '&') {
            break;
        }
        firsttermvalue += text[i];
        i++;
    }
    firsttermvalue = firsttermvalue.substr(1);
    text = text.substr(i);

    for(let i = 0; i < firsttermvalue.length; i++) {
        if(firsttermvalue[i] === '%' && firsttermvalue[i + 1] === '2' && firsttermvalue[i + 2] === '0') {
            firsttermvalue = firsttermvalue.replace('%20', ' ');
        }
    }
    output[firsttermkey] = firsttermvalue;
    i = 0;
    if(text[0] === '&') {
        text = text.substr(1);
        while(text[i] !== '=') {
            secondtermkey += text[i];
            i++;
        }
        secondtermvalue = text.substr(i);
        secondtermvalue = secondtermvalue.substr(1);
        for(i = 0; i < secondtermvalue.length; i++) {
            if(secondtermvalue[i] === '%' && secondtermvalue[i + 1] === '2' && secondtermvalue[i + 2] === '0') {
                secondtermvalue = secondtermvalue.replace('%20', ' ');
            }
        }
        output[secondtermkey] = secondtermvalue;
    }
    return output;
};


console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

/*
{duck: "rubber"}
{bootcamp: "Lighthouse Labs"}
{city: "Vancouver", weather: "lots of rain"}
"lots of rain"
 */