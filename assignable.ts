type voidFunc = () => void;

const f1: voidFunc = () => {
  return 12;
};

console.log(f1());

const f2: voidFunc = () => true;

const f3: voidFunc = function () {
  return true;
};
