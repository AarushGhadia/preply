const students = [
  {
    id: 1,
    name: "Amit",
    class: "10th",
    marks: { math: 88, science: 92, english: 85, hindi: 80, computer: 95 },
  },
  {
    id: 2,
    name: "Neha",
    class: "10th",
    marks: { math: 76, science: 81, english: 90, hindi: 84, computer: 78 },
  },
  {
    id: 3,
    name: "Rahul",
    class: "10th",
    marks: { math: 93, science: 89, english: 75, hindi: 82, computer: 91 },
  },
  {
    id: 4,
    name: "Sneha",
    class: "10th",
    marks: { math: 85, science: 88, english: 92, hindi: 90, computer: 86 },
  },
  {
    id: 5,
    name: "Vikas",
    class: "10th",
    marks: { math: 70, science: 74, english: 80, hindi: 78, computer: 72 },
  },
];


function getStudentNames(studentArray) {
    const names = [];
    for (let i=0; i < studentArray.length; i++) {
        names.push(studentArray[i].name);
    }
    return names;
}

console.log(getStudentNames(students));

// First take studentArray
// Then take subject as input

function getTopScorer(studentArray, subject) {
    let topScorer = null;
    let highestMarks = -1;

    for (let i = 0; i < studentArray.length; i++) {
        const student = studentArray[i];
        const marks = student.marks[subject];

        if(marks !== undefined && marks > highestMarks) {
            highestMarks = marks;
            topScorer = student.name;
        }
    }
    return topScorer;
}

console.log(getTopScorer(students, 'math'));

function getTopStudent(students) {
  let topStudent = null;
  let highestTotal = -1;

  for (let i = 0; i < students.length; i++) {
    const student = students[i]; // current stduent "Data of Amit" {}
    const marks = student.marks; // data of amit's marks {math:88, science:92, english:85, hindi:80, computer:95}

    let total = 0; // 
    let subjectCount = 0;

    for (let subject in marks) {
      total += marks[subject]; // 88 + 92
      subjectCount++; // 1 + 1
    }

    const percentage = (total / (subjectCount * 100)) * 100;

    student.total = total; // adding total property to student object data of amit
    student.percentage = percentage.toFixed(2); // adding percentage property to student object data of amit

    if (total > highestTotal) {
      highestTotal = total;
      topStudent = student;
    }
  }

  return topStudent;
}

console.log(getTopStudent(students));

// 