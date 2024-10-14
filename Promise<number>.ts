// Function that returns a promise resolving to a number
const fetchData = (): Promise<number> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(42); // Simulated data
        }, 1000);
    });
};

// Test the function
fetchData().then((data: number) => {
    console.log(`Fetched data:`, data);
    // Output: Fetched data: 42 (after 1 second)
});

