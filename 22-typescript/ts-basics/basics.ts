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

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Dion",
  age: 24,
};

let people: Person[];

people = [
  { name: "Dion", age: 24 },
  { name: "Ryan", age: 25 },
];

// Type inference
let course: string | number = "React = The Complete Guide";
course = 12341;

// Functions & types
function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generices

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

console.log(updatedArray);
