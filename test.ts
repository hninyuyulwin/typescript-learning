class Huuman {
  name: string;
  constructor(name: string) {
    console.log("From Human Constructor!");
    this.name = name;
  }
}

class Dooctor extends Huuman {
  constructor(name: string) {
    super(name);
    console.log("Doctor Constructor!");
  }
}

type SomeeConstructor = {
  new (s: string): Huuman;
};

let dooc1: SomeeConstructor = Huuman;
let hh1 = new dooc1("Wai Yan");
console.log(hh1.name);

dooc1 = Dooctor;
let hh2 = new dooc1("Hytisan");
console.log(hh2.name);
