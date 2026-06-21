"use strict";
class Shape {
    constructor() {
        console.log("Super constructor!");
    }
    draw() {
        console.log("Draw a shape!");
    }
}
class Circle extends Shape {
    _radius;
    constructor(radius) {
        super();
        this._radius = radius;
        console.log("From Circle Constructor!");
    }
    set radius(value) {
        if (value > 0) {
            this._radius = value;
        }
    }
    get area() {
        return Math.PI * this._radius * this._radius;
    }
    draw() {
        super.draw();
        console.log(`Draw a circle with radius : ${this._radius}`);
    }
}
let circ = new Circle(90);
circ.draw();
circ.radius = -20;
console.log("Circle area : ", circ.area);
