function doSomething() {
  console.log("Do Something called!");
}

doSomething.description = "This function does something important";

type Fun = {
  (): void;
  description: string;
};

let func: Fun = doSomething;

console.log("func.description : ", func.description);
