const instructorWithLongestName = function(instructors) {
    // Create a function named instructorWithLongestName that will
    // receive an array of instructor objects, and
    // return the object that has the longest name.
    // If there are two instructors with the longest name, return the first one.
    let maxCount = 0;
    let i = 0;
    for (let item of instructors) {
            if (instructors[i].name.length > maxCount) {
                maxCount = instructors[i].name.length;
                index = i;
            }
            i++;
    }

  return instructors[index];
};

console.log(instructorWithLongestName([
    {name: "Samuel", course: "iOS"},
    {name: "Jeremiah", course: "Web"},
    {name: "Ophilia", course: "Web"},
    {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
    {name: "Matthew", course: "Web"},
    {name: "David", course: "iOS"},
    {name: "Domascus", course: "Web"}
]));

/*
{name: "Jeremiah", course: "Web"}
{name: "Domascus", course: "Web"}
 */