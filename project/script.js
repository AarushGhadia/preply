// ================= STUDENT DATA =================

const students = [
    {
        name: "Rahul",
        age: 14,
        class: "8th",
        marks: {
            math: 85,
            science: 90,
            english: 78
        }
    },
    {
        name: "Ananya",
        age: 13,
        class: "7th",
        marks: {
            math: 92,
            science: 88,
            english: 95
        }
    },
    {
        name: "Amit",
        age: 15,
        class: "9th",
        marks: {
            math: 70,
            science: 75,
            english: 80
        }
    }
];

const container = document.getElementById("student-container");

for (let i = 0; i < students.length; i++) {
    const student = students[i];

    const card = document.createElement("div");
    card.className = "student-card";

    card.innerHTML = `
        <h3>${student.name}</h3>
        <p><strong>Age:</strong> ${student.age}</p>
        <p><strong>Class:</strong> ${student.class}</p>
        <p><strong>Math:</strong> ${student.marks.math}</p>
        <p><strong>Science:</strong> ${student.marks.science}</p>
        <p><strong>English:</strong> ${student.marks.english}</p>
    `;

    container.appendChild(card);
}

// ================= COUNTER =================

let counter = 0;
const countEl = document.getElementById("count");

function increase() {
    counter++;
    countEl.innerText = counter;
}

function decrease() {
    counter--;
    countEl.innerText = counter;
}

function reset() {
    counter = 0;
    countEl.innerText = counter;
}
