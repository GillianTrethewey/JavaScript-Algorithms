/*
Duplicate Encoder

Description:
The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
Examples:
"din" => "((("
"recede" => "()()()"
"Success" => ")())())"
"(( @" => "))(("

 */

function duplicateEncode(word){

    var unique='';
    word = word.toLowerCase();
    for (var i=0; i<word.length; i++){
        if (word.lastIndexOf(word[i]) == word.indexOf(word[i])){
            unique += '(';
        }
        else{
            unique += ')';
        }
    }
    return(console.log(unique));

}
duplicateEncode("Success");
// returns *)())())*/