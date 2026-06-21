"use strict";
class Human {
    name;
    constructor(name) {
        console.log("Human Constructor.");
        this.name = name;
    }
}
class Doctor extends Human {
    constructor(name) {
        super(name);
        console.log("Doctor Constructor!");
    }
}
let ctor = Human;
let h1 = new ctor("Alice");
console.log(h1.name);
ctor = Doctor;
let h2 = new ctor("Hello Doctor");
console.log(h2.name);
