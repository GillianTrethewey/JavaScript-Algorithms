let str = "";

/* ascii code numbers 65 - 90 for uppercase, 97 - 122 for lowercase
initialize to the opposite and compare, replace
 */


function checkMax(str) {
   let max = 'A';
   for (let i in str) {
      if (str.charCodeAt(i) > max.charCodeAt()) {
         max = str[i];
      }
   }
   return(console.log("The max ascii code in the string is: ", max))
}

function checkMin(str) {
   let min = 'z';
   for (let i in str) {
      if (str.charCodeAt(i) < min.charCodeAt()) {
         min = str[i];
      }
   }
   return(console.log("The min ascii code in the string is: ", min))
}
checkMax("geEks");
checkMin("geEks");

