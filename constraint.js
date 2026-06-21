"use strict";
function longest(a, b) {
    return a.length >= b.length ? a : b;
}
console.log(longest("apple", "banana"));
console.log(longest([1, 2, 3], [4, 5, 6, 7, 8]));
