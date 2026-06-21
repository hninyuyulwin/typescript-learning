class Base {
  name = "base";
  constructor() {
    console.log("My name is : ", this.name);
  }
}

class DerivedClass extends Base {
  name = "derived";
  constructor() {
    super();
    console.log("Drived name :", this.name);
  }
}
let d = new DerivedClass();
