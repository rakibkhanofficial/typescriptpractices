// Function that returns a promise resolving to a number
function fetchData(): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(42); // Simulating fetching data
        }, 1000);
    });
}

// Test the function
fetchData().then((data: number) => {
    console.log(`Fetched data:`, data); // Output: Fetched data: 42 (after 1 second)
});
