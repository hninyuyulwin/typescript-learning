let a: any = "Hello World";
console.log(a);

a = 42;
console.log(a);

a = () => console.log("This is any function!");
a();
a = { key: "value" };

console.log(a.key);

let b: unknown = "Unknown b";
console.log(b);

b = 84;
console.log(b);

b = { key: "value" };

console.log(b);
