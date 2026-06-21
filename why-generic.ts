type Container = {
  value: string;
};

type IntContainer = {
  value: number;
};

type BooleanContainer = {
  value: boolean;
};

type AnyBox = {
  value: any;
};

let box: AnyBox = {
  value: "Hello",
};
console.log("Box : ", box);

let box1: AnyBox = {
  value: 1500,
};
console.log("Box1 : ", box1);
