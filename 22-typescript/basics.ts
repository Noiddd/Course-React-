// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;
age = 12;

let userName: string;
userName = "Dion";

let isInstructor: boolean;
isInstructor = true;

let hobbies: string[];
hobbies = ["boxing", "bjj", "muaythai"];

let person: {
  name: string;
  age: number;
};
person = {
  name: "Dion",
  age: 24,
};

let people: {
  name: string;
  age: number;
}[];

people = [
  { name: "Dion", age: 24 },
  { name: "Ryan", age: 25 },
];
