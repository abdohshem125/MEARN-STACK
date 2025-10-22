export class Teacher {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }

  display() {
    console.log(`Name: ${this.name}, Subject: ${this.subject}`);
  }
}

export class TeacherDecorator {
  constructor(teacher, salary, nationality, street) {
    this.teacher = teacher;
    this.name = teacher.name;
    this.subject = teacher.subject;
    this.salary = salary;
    this.nationality = nationality;
    this.street = street;
  }

  showDetails() {
    console.log(
      `Name: ${this.name}, Subject: ${this.subject}, Salary: ${this.salary}, Nationality: ${this.nationality}, Street: ${this.street}`
    );
  }
}
