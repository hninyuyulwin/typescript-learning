"use strict";
let func = function () {
    console.log("This is a function assigned to 'fun'");
};
func();
func = (a, b) => a + b;
console.log(func(1, 2));
