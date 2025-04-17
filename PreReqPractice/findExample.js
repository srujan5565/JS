const students = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 72 },
    { name: "Charlie", marks: 90 },
    { name: "David", marks: 60 }
];

console.log(students.find(student=>student.marks==90).name);
