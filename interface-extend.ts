interface Circle {
  radius: number;
}

interface ColoredCircle extends Circle {
  color: string;
}

let c1: ColoredCircle = {
  radius: 10,
  color: "blue",
};

console.log(c1);
