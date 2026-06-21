interface Address {
  street: string;
  city: string;
  country: string;
}

interface Human {
  readonly name: string;
  age: number;
  readonly address: Address;
}

let person: Human = {
  name: "Zaw Zaw",
  age: 29,
  address: {
    street: "123 Main str",
    city: "Yangon",
    country: "Myanmar",
  },
};
console.log("Person ", person);

// person.name = "Paing";
person.age = 25;
person.address.country = "Korea";

console.log("Person 1 ", person);
