
function renderStudents(students) {
    let studentsArray = students.map(function(student) {
        return `
        <div class="${student.isPresent ? "present" : "absent"}">
            <h2>${student.name}</h2>
            <span>
                ${student.isPresent ? 'Present' : 'Absent'}
            </span>
        </div>
        
        `
    })
    
    
    return `
        <div class="text-center mt-5">
            <h1>Roll Call</h1>
            ${studentsArray.join('')}
        </div>
    `
}

function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = renderStudents(studentsAbstraction);
}