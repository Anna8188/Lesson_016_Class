"use strict";
class Person {
  constructor(firstName, lastName, age, gender) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
    this._gender = gender;
  }
  set firstName(name) {
    if (typeof name === "string") {
      this._firstName = name;
    } else throw `Please check your Input. It should be string`;
  }
  get firstName() {
    return this._firstName;
  }
  set lastName(name) {
    if (typeof name === "string") {
      this._lastName = name;
    } else throw `Please check your Input. It should be string`;
  }
  get lastName() {
    return this._lastName;
  }
  set age(num) {
    if (typeof num === "number") {
      this._age = num;
    } else throw `Please check your Input. It should be number`;
  }
  get age() {
    return this._age;
  }
  get gender() {
    return this._gender;
  }
  toString() {
    return `${this._firstName} ${this._lastName} | ${this._age} years old.`;
  }
}
let user1 = new Person("Name", "Surname", "female", 23);
console.log(user1.toString()); // Name Surname, 23 years old.
class Student extends Person {
  constructor(firstName, lastName, age, gender, fee, program) {
    super(firstName, lastName, age, gender);
    this._year = 1;
    this._fee = fee;
    this._program = program;
  }
  set year(num) {
    if (typeof num === "number") {
      this._year = num;
    } else throw `Please check your Input. It should be number`;
    if (this._year > 4) {
      this._year = 1;
      return "Congratulations... You are already graduated 🎉";
    }
  }
  get year() {
    return this._year;
  }
  set fee(num) {
    if (typeof num === "number") {
      this._fee = num;
    } else throw `Please check your Input. It should be number`;
  }
  get fee() {
    return this._fee;
  }
  passExam(Name, grade) {
    if (grade > 100) {
      return "Please check grade. It should be lass than 100;";
    }
    let program = this._program.find((el) => el.programName === Name);
    program.grade = grade;
    if (program.grade >= 50) {
      const index = this._program.indexOf(program);
      if (index > -1) {
        this._program.splice(index, 1);
      }
    }
  }
  isAllPassed() {
    if (this._program.length === 0) {
      this._year++;
      return "You don't have any exam! 👏👏👏";
    } else
      return `You don't pass your all exams 🤔. Please check your program list! 😊`;
  }
}
let program = [
  { programName: "math", grade: 10 },
  { programName: "english", grade: undefined },
];
let student1 = new Student("Anna", "Sargsyan", 20, "mail", 500000, program);
student1.passExam("english", 100);
student1.passExam("math", 80);
student1.isAllPassed();
console.log(student1);
