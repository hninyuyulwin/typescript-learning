"use strict";
function fail(msg) {
    throw new Error(msg);
}
try {
    fail("Something went wrong!");
}
catch (error) {
    console.error(error);
}
