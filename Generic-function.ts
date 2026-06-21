/*
function firstElement(data: any[]) {
  return data[0];
}

console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
*/
function firstEle<T>(data: T[]) {
  return data[0];
}

console.log(firstEle([1, 2, 3]));
console.log(firstEle(["a", "b", "c"]));
