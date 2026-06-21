"use strict";
class Student {
    static headmaster = "Mr.Smith";
    name;
    age;
    static {
        console.log("Static block exected. Head master is : ", Student.headmaster);
    }
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        console.log(`Student Name : ${this.name} & Age : ${this.age} . Headmaster is ${Student.headmaster}`);
    }
}
let std = new Student("Aung Aung", 25);
let std1 = new Student("Hytisan Uzima", 20);
Student.headmaster = "Olivia Rodrigo";
std.displayInfo();
std1.displayInfo();
