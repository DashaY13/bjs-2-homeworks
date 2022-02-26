function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

let student1 = new Student("Tony", "male", 37);
let student2 = new Student("Buzz", "female", 35);

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
    if(this.marks === undefined){ 
        let mark = []
        mark.unshift("mark 1");
        // добавить первую оценку 
        } else {
            mark.push("mark 2", "mark 3", "mark 4", "mark 5");
          // добавить вторую и последующие оценки в массив
        }
}

Student.prototype.addMarks = function (...marks) {
    let total = 0;
    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }
    return total;  
}

Student.prototype.getAverage = function () {
    const average = mark.reduce((acc, item, idx, arr) => {
        if (idx === arr.length - 1) {
            return (acc + item) / arr.length;
        } else {
            return acc + item;
        }
    })
    console.log(average);
}

Student.prototype.exclude = function (reason) {
 
}


