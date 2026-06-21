"use strict";
class Huuman {
    name;
    constructor(name) {
        console.log("From Human Constructor!");
        this.name = name;
    }
}
class Dooctor extends Huuman {
    constructor(name) {
        super(name);
        console.log("Doctor Constructor!");
    }
}
let dooc1 = Huuman;
let hh1 = new dooc1("Wai Yan");
console.log(hh1.name);
dooc1 = Dooctor;
let hh2 = new dooc1("Hytisan");
console.log(hh2.name);
