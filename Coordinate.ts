type TwoD = {
  x: number;
  y: number;
};

type ThreeD = TwoD & {
  z: number;
};

let twoD: TwoD = { x: 10, y: 20 };
let threeD: ThreeD = { x: 10, y: 20, z: 30 };

console.log(twoD);
console.log(threeD);
