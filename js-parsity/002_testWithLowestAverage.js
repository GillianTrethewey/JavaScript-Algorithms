/*
Given an object as an argument that has a 
list of students with their respective list of grades, 
determine which test was the hardest 
(had the lowest class average).

INPUT:
grades: {
	Ron: [90, 89, 99, 87, 100, 74],
	Leslie: [78, 74, 92, 87, 77, 81],
	Tom: [77, 61, 89, 47, 57, 82],
	Andy: [35, 54, 44, 58, 39, 41]
}

OUTPUT:
// 'The hardest test was number 5'

INPUT:
grades: {
	April: [88, 56, 55, 97, 100, 88, 100, 98],
	Tammy1: [78, 46, 92, 84, 55, 74, 89, 80],
	Ben: [77, 59, 89, 47, 57, 83, 90, 89],
	Garry: [54, 90, 84, 88, 39, 73, 67, 79],
	Tammy2: [86, 49, 90, 77, 89, 92, 88, 75]
}
OUTPUT:
// 'The hardest test was number 2'
*/

grades = {  
    April: [88, 56, 55, 97, 100, 88, 100, 98],  
 Tammy1: [78, 46, 92, 84, 55, 74, 89, 80],  
 Ben: [77, 59, 89, 47, 57, 83, 90, 89],  
 Garry: [54, 90, 84, 88, 39, 73, 67, 79],  
 Tammy2: [86, 49, 90, 77, 89, 92, 88, 75]  
}  
let sum = 0;  
let avg = 0;  
let avgArray =[];  
let min = 0;  
function hardestTest(grades) {  
    let numPeople = grades[Object.keys(grades)[0]].length;  
 	let numGrades = Object.keys(grades).length;  
 	let gradeArray = Object.values(grades);  
 	for (let j = 0; j < numPeople; j++) {  
        for (let i = 0; i < numGrades; i ++) {  
                sum += gradeArray[i][j];  
 		}  
        avg = sum / numGrades;  
 		avgArray.push(avg);  
 		sum = 0;  
 	}  
    min = Math.min(...avgArray);  
 	console.log(`The hardest test was number ${avgArray.indexOf(min) + 1}`);  
}  
  
  
hardestTest(grades);
