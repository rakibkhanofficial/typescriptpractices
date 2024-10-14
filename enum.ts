// Define an enum for status codes
enum Status {
    SUCCESS = 200,
    NOT_FOUND = 404,
    INTERNAL_ERROR = 500
}

// Function to return a status code
function getStatus(): Status {
    return Status.SUCCESS;
}

// Test the function
const statusCode: Status = getStatus();

console.log(`Status code:`, statusCode); // Output: Status code: 200
