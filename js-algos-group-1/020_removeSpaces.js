/*
Remove String Spaces

Simple, remove the spaces from the string, then return the resultant string.

*/

function noSpace(x){
	x = x.replace(/\s+/g, '');
	return(console.log(x));
}

noSpace('8 j 8   mBliB8g  imjB8B8  jl  B');
//returns '8j8mBliB8gimjB8B8jlB'