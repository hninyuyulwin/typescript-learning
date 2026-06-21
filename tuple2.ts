type Pair = [number, string];
let pair: Pair = [1, "One"];
console.log(pair);

let another: [number, string, boolean] = [2, "Two", true];
console.log("Another pair : ", another);

let [age, studentName, isStudent] = another;
console.log(
  "Student : ",
  age,
  " , Name : ",
  studentName,
  " ,is student : ",
  isStudent,
);

let someTuple: readonly [number, string] = [1500, "Love"];
console.log("Readonley tuple : ", someTuple);
