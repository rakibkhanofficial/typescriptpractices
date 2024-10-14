// Function to check if a string is a palindrome
function isPalindrome(word: string): boolean {
    const reversed = word.split('').reverse().join('');
    return word === reversed;
}

// Test the function
const word: string = "madam";
const palindromeResult: boolean = isPalindrome(word);

console.log(`Is "${word}" a palindrome?`, palindromeResult); // Output: Is "madam" a palindrome? true
