"use strict";
// TypeScript Examples
Object.defineProperty(exports, "__esModule", { value: true });
// 1. LOGS
console.log("=== TypeScript Examples ===");
console.log("Hello from TypeScript!");
// 2. STRINGS (with type annotation)
var greeting = "Hello";
var studentName = "Student";
var message = greeting + " " + studentName;
console.log("\n--- Strings ---");
console.log("String:", message);
console.log("Type: string");
// 3. NUMBERS (with type annotation)
var age = 25;
var price = 19.99;
var sum = age + price;
console.log("\n--- Numbers ---");
console.log("Number:", sum);
console.log("Type: number");
var person = {
    name: "John",
    age: 30,
    city: "New York",
    location: "USA"
};
console.log("\n--- Objects ---");
console.log("Object:", person);
console.log("Person name:", person.name);
console.log("Type: Person (interface)");
// TypeScript prevents type changes!
console.log("\n--- Type Safety ---");
// UNCOMMENT THIS TO SEE ERROR:
// age = "twenty-five"; // ERROR: Type 'string' is not assignable to type 'number'
console.log("TypeScript prevents: age = 'twenty-five'");
console.log("Types are checked at compile time!");
