type Callback = (x: number) => void;

function processFun(callback: Callback) {
  console.log("Start Processing");
  callback(100);
  console.log("End Processing");
}

// processFun((x: number) => console.log("Callback 1500"));

function callBackFun(x: number) {
  console.log("Second callback ", x);
}
// processFun(callBackFun);

type BinaryFun = (a: number, b: number) => number;

let fun: BinaryFun = (a: number, b: number) => a * b;

console.log("Result : ", fun(10, 20));

function add(a: number, b: number): number {
  return a + b;
}

let addfun: BinaryFun = add;
console.log(addfun(12, 24));
