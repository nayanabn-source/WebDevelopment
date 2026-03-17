// Ask number of students
let n = Number(prompt("Enter number of students:"));

let students = [];

for (let i = 0; i < n; i++) {
    let name = prompt("Enter student name:");

    let marks = [];
    let subjects = Number(prompt("Enter number of subjects:"));

    for (let j = 0; j < subjects; j++) {
        let mark = Number(prompt("Enter mark for subject " + (j + 1) + ":"));
        marks.push(mark);
    }

    students.push({ name: name, marks: marks });
}

// Calculate and display result
for (let i = 0; i < students.length; i++) {
    let total = 0;

    for (let j = 0; j < students[i].marks.length; j++) {
        total += students[i].marks[j];
    }

    let average = total / students[i].marks.length;

    console.log("Student Name: " + students[i].name);
    console.log("Average Marks: " + average);
    console.log("----------------------");
}