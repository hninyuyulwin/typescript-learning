type GenBox<T> = {
  value: T;
};

let numBox: GenBox<number> = {
  value: 12345,
};

console.log("num box ", numBox.value);

let stringBox: GenBox<string> = {
  value: "Hello World!",
};
console.log("string box ", stringBox.value);

let arr: Array<number> = [23, 12, 65, 32, 89];
