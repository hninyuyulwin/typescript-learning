interface StringArray {
  [index: number]: string;
}

let arr: StringArray = ["apple", "orange"];
console.log(arr[0]);

interface Dictionary {
  [key: string]: string;
}

let dict: Dictionary = { name: "love", text: "hate" };
console.log(dict["name"]);
