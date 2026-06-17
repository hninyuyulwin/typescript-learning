"use strict";
let love = "Love";
love = 1500;
love = "Love";
console.log(love);
function print(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log("ID : " + id);
    }
}
print("affection");
print(618);
