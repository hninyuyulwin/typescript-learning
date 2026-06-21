type NullableOrString = string | null | undefined;

let strr: NullableOrString = "Hello";
strr = null;
strr = undefined;

let str2: string;
str2 = null;
