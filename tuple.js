"use strict";
function div(a, b) {
    if (b === 0) {
        return [0, new Error("Division by Zero Error!")];
    }
    return [a / b, null];
}
let [result, error] = div(10, 2);
if (error) {
    console.log("Error :", error);
}
else {
    console.log("Result : ", result);
}
let tuple = ["Age", 25];
console.log("Tuple : ", tuple);
