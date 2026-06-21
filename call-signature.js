"use strict";
function doSomething() {
    console.log("Do Something called!");
}
doSomething.description = "This function does something important";
let func = doSomething;
console.log("func.description : ", func.description);
