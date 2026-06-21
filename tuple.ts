function div(a: number, b: number): [number, Error | null] {
  if (b === 0) {
    return [0, new Error("Division by Zero Error!")];
  }
  return [a / b, null];
}

let [result, error] = div(10, 2);
if (error) {
  console.log("Error :", error);
} else {
  console.log("Result : ", result);
}

type StringNumberTuple = [string, number];
let tuple: StringNumberTuple = ["Age", 25];
console.log("Tuple : ", tuple);
