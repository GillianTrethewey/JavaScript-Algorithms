const organizeInstructors = function(instructors) {
    // Create a function named organizeInstructors that will receive an array of
    // instructor objects, and will return a new object that has the following format:
    //{
    //   CourseName: [instructors]
    // }
    let output = {};
    let coursenames = [];
    for(let key = 0; key < instructors.length; key++) {
        if(coursenames.indexOf(instructors[key].course) === -1) {
            coursenames.push(instructors[key].course);
        }
    }
    coursenames.forEach(function(course){
        output[course] = [];
        for(let i = 0; i < instructors.length; i++) {
            if(instructors[i].course === course) {
                output[course].push(instructors[i].name);
            }
        }
    });
    return output;
};

console.log(organizeInstructors([
    {name: "Samuel", course: "iOS"},
    {name: "Victoria", course: "Web"},
    {name: "Karim", course: "Web"},
    {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
    {name: "Brendan", course: "Blockchain"},
    {name: "David", course: "Web"},
    {name: "Martha", course: "iOS"},
    {name: "Carlos", course: "Web"}
]));

/*{
  iOS: ["Samuel"],
  Web: ["Victoria", "Karim", "Donald"]
}
{
  Blockchain: ["Brendan"],
  Web: ["David", "Carlos"],
  iOS: ["Martha"]
}

 */