"use strict";
let circle = {
    radius: 20,
    getArea: function () {
        return Math.PI * this.radius * this.radius;
    },
};
console.log("Circle area : ", circle.getArea());
