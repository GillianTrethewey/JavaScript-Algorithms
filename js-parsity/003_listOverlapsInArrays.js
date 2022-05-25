/*
Given two arrays, each with single letter strings in the arrays, create a new results array based on the overlapping items and the number of times the overlap occurs. For example, if `a` occurs 3 times in the first array and 2 times in the second, there are 2 overlaps and the letter `a` should appear twice in the results array.

INPUT:

['a', 'b', 'c', 'a', 'a', 'b', 'd']
['a', 'b', 'b', 'a', 'e', 'c', 'c', 'g']

OUTPUT:

['a', 'a', 'c', 'b', 'b']
```

*/

const arr1 = ['a', 'b', 'c', 'a', 'a', 'b', 'd'];  
const arr2 = ['a', 'b', 'b', 'a', 'e', 'c', 'c', 'g']  
let count1 = {};  
let count2 = {};  
let results = [];  
function overlapResults(arr1, arr2) {  
	arr1.forEach(function(item) {  
    	count1[item] = count1.hasOwnProperty(item) ? count1[item] += 1 : count1[item] = 1;  
	})  
	arr2.forEach(function(item) {  
    	count2[item] = count2.hasOwnProperty(item) ? 	count2[item] += 1 : count2[item] = 1;  
	})
  
    for (let i in count1) {  
        for (let j in count2) {  
           if (i === j) {  
			   	let overlap = Math.min(count1[i], count2[j]);  
 				for (let k = 0; k < overlap; k++) {  
                   results.push(i);  
 				}    
           }  
        }  
    }  
    console.log(results);  
}  
  
overlapResults(arr1, arr2);
```