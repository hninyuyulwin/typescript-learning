"use strict";
function hello(msg) {
    console.log("Hello ", msg);
}
hello("World");
hello(123);
function add(x, y) {
    return x + y;
}
console.log(add(1500, 528));
async function getData(data) {
    return 50;
}
getData(100).then(console.log);
