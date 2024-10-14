
# Updated TypeScript Function Examples with Arrow Functions

This repository demonstrates basic TypeScript functions using **arrow functions** and `const`. Each function returns different data types like `string`, `number`, `array`, `object`, `boolean`, `void`, `tuple`, `Promise`, and `enum`.

## 1. Return Type: `string`

This function returns a greeting message with the given name.

```typescript
const greet = (name: string): string => `Hello, ${name}!`;

// Test
const greeting: string = greet("John");

console.log(greeting);
```

**Output:**
```
Hello, John!
```

---

## 2. Return Type: `number`

This function returns the square of a number.

```typescript
const square = (num: number): number => num * num;

// Test
const result: number = square(5);

console.log(`Square of 5 is:`, result);
```

**Output:**
```
Square of 5 is: 25
```

---

## 3. Return Type: `array`

This function returns an array of numbers.

```typescript
const getNumbers = (): number[] => [1, 2, 3, 4, 5];

// Test
const numbers: number[] = getNumbers();

console.log(`Array of numbers:`, numbers);
```

**Output:**
```
Array of numbers: [ 1, 2, 3, 4, 5 ]
```

---

## 4. Return Type: `object`

This function returns an object representing a person.

```typescript
interface Person {
    name: string;
    age: number;
}

const getPerson = (): Person => ({ name: "Alice", age: 25 });

// Test
const person: Person = getPerson();

console.log(`Person details:`, person);
```

**Output:**
```
Person details: { name: 'Alice', age: 25 }
```

---

## 5. Return Type: `boolean`

This function checks if a word is a palindrome.

```typescript
const isPalindrome = (word: string): boolean => {
    const reversed = word.split('').reverse().join('');
    return word === reversed;
};

// Test
const word: string = "madam";
const palindromeResult: boolean = isPalindrome(word);

console.log(`Is "\${word}" a palindrome?`, palindromeResult);
```

**Output:**
```
Is "madam" a palindrome? true
```

---

## 6. Return Type: `void`

This function doesn't return anything; it just prints a message.

```typescript
const printMessage = (): void => {
    console.log("This is a simple message.");
}

// Test
printMessage();
```

**Output:**
```
This is a simple message.
```

---

## 7. Return Type: `tuple`

This function returns a tuple containing a `string` and a `number`.

```typescript
const getUserData = (): [string, number] => ["John", 30];

// Test
const userData: [string, number] = getUserData();

console.log(`User data:`, userData);
```

**Output:**
```
User data: [ 'John', 30 ]
```

---

## 8. Return Type: `Promise<number>`

This function simulates fetching data asynchronously and returns a `Promise<number>`.

```typescript
const fetchData = (): Promise<number> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(42); // Simulated data
        }, 1000);
    });
};

// Test
fetchData().then((data: number) => {
    console.log(`Fetched data:`, data);
});
```

**Output (after 1 second):**
```
Fetched data: 42
```

---

## 9. Return Type: `enum`

This function returns a status code from an `enum`.

```typescript
enum Status {
    SUCCESS = 200,
    NOT_FOUND = 404,
    INTERNAL_ERROR = 500
}

const getStatus = (): Status => Status.SUCCESS;

// Test
const statusCode: Status = getStatus();

console.log(`Status code:`, statusCode);
```

**Output:**
```
Status code: 200
```

---

## How to Run the Code

1. **Install TypeScript**:
   Install TypeScript globally using npm if you haven't already:

   ```bash
   npm install -g typescript
   ```

2. **Compile the TypeScript file**:
   Save the TypeScript code in a file (e.g., `index.ts`). To compile it, run:

   ```bash
   tsc index.ts
   ```

3. **Run the compiled JavaScript file**:
   After compilation, a JavaScript file (e.g., `index.js`) will be generated. Run the compiled file using Node.js:

   ```bash
   node index.js
   ```

---

## Conclusion

These examples now use arrow functions and `const` instead of regular function declarations. They cover various return types in TypeScript and can be easily tested. Arrow functions provide a more concise syntax and are a modern best practice in JavaScript/TypeScript.

Feel free to modify and expand upon these examples!