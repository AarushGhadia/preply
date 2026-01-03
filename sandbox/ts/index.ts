// TypeScript Examples

// 1. LOGS
console.log("=== TypeScript Examples ===");
console.log("Hello from TypeScript!");

// 2. STRINGS (with type annotation)
let greeting: string = "Hello";
let studentName: string = "Student";
let message: string = greeting + " " + studentName;
console.log("\n--- Strings ---");
console.log("String:", message);
console.log("Type: string");

// 3. NUMBERS (with type annotation)
let age: number = 25;
let price: number = 19.99;
let sum: number = age + price;
console.log("\n--- Numbers ---");
console.log("Number:", sum);
console.log("Type: number");

// 4. OBJECTS (with interface)
interface Person {
    name: string;
    age: number;
    city: string;
    location: string;
}

let person: Person = {
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

// 5. FUNCTIONS - Calculator with TypeScript types
function calculator(a: number, b: number, operation: string): number | string {
    if (operation === "add") {
        return a + b;
    } else if (operation === "subtract") {
        return a - b;
    } else if (operation === "multiply") {
        return a * b;
    } else if (operation === "divide") {
        return a / b;
    }
    return "Invalid operation";
}

console.log("\n--- Calculator Function (TypeScript) ---");
console.log("10 + 5 =", calculator(10, 5, "add"));
console.log("10 - 5 =", calculator(10, 5, "subtract"));
console.log("10 * 5 =", calculator(10, 5, "multiply"));
console.log("10 / 5 =", calculator(10, 5, "divide"));

export {}; // Makes this a module to avoid global scope conflicts
