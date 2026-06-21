"use strict";
class Point {
    x;
    y;
    // z: number = 100;
    z;
    constructor(x, y) {
        this.x = x;
        this.y = y;
        console.log("Point constructor!");
    }
    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
    display() {
        console.log(`Point (${this.x}, ${this.y} , ${this.z})`);
    }
}
let point = new Point(54, 44);
point.move(5, -5);
point.display();
