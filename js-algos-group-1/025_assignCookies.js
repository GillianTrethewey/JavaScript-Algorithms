// if s[j] >= g[i] where s is size of cookie j and g is greed of child i
// want to maximize the number of 'content' children and output that maximum number
// example input g=[1,2,3], s = [1,1], output is 1
// you have 3 children and 2 cookies. The greed factors of 3 children are 1,2,3.
// You can only make the child whose greed factor is 1 content. Output is 1.
// ex. 2 - g = [1,2] s = [1,2,3], output is 2
	let ans = 0;

function assigncookies(g, s) {
	g = g.sort();
	s = s.sort();
	let i = 0;
	let j = 0;
	while (i < s.length) {
		if (s[i] >= g[i]) {
			ans ++;
			i++;
			j++;
		}
		else{
			i++;
		}
	}
	return ans; 
};

g = [1,2] 
s = [1,2,3]
assigncookies(g,s);
console.log(ans);