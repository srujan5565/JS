const students=[
    {Name:"A",Marks:95},
    {Name:"B",Marks:75},
    {Name:"C",Marks:69},
    {Name:"D",Marks:85},
    {Name:"E",Marks:35}
];

function calculateGrade(marks){
    if(marks>90) return "A";
    else if (marks>80) return "B";
    else if (marks>70) return "C";
    else if (marks>50) return "D";
    else return "FAIL";
}

function printGrades(students){
    students.forEach(element => {
        console.log(`${element.Name} got ${element.Marks} marks which grades to ${calculateGrade(element.Marks)}`)
    });
}

printGrades(students)