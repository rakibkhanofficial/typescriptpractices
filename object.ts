// Define an interface for a Person object
interface Person {
    name: string;
    age: number;
}

// Function to return a person object
function getPerson(): Person {
    return { name: "Alice", age: 25 };
}

// Test the function
const person: Person = getPerson();

console.log(`Person details:`, person); // Output: Person details: { name: 'Alice', age: 25 }
