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
      this.marks = [];
    }
    this.marks.push(mark);
  }

  Student.prototype.addMarks = function (...marks) {
    if(this.marks === undefined){ 
      this.marks = [];
    }
    this.marks.push(...marks);
  }

  Student.prototype.getAverage = function () {
    let sum = this.marks.reduce((acc, item) => acc + item);
    return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
    delete this.marks;
    delete this.subject;
    this.excluded = reason;
  }


