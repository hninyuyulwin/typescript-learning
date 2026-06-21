"use strict";
function processFun(callback) {
    console.log("Start Processing");
    callback(100);
    console.log("End Processing");
}
// processFun((x: number) => console.log("Callback 1500"));
function callBackFun(x) {
    console.log("Second callback ", x);
}
let fun = (a, b) => a * b;
console.log("Result : ", fun(10, 20));
function add(a, b) {
    return a + b;
}
let addfun = add;
console.log(addfun(12, 24));
