let func: Function = function () {
  console.log("This is a function assigned to 'fun'");
};

func();

func = (a: number, b: number) => a + b;

console.log(func(1, 2));
