function hello(msg: any) {
  console.log("Hello ", msg);
}

hello("World");
hello(123);

function add(x: number, y: number): number {
  return x + y;
}
console.log(add(1500, 528));

async function getData(data: number): Promise<number> {
  return 50;
}

getData(100).then(console.log);
