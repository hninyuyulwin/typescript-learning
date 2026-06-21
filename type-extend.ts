type Animal = {
  name: string;
};

type Bear = Animal & {
  honey: boolean;
};

let bear: Bear = {
  name: "Teddy",
  honey: true,
};

console.log(bear);
