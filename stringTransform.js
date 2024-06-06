function transformString(input) {
    const length = input.length;

    // Check if the length is divisible by 15
    if (length % 15 === 0) {
        // Reverse the string first
        input = input.split('').reverse().join('');
        // Replace each character with its ASCII code
        return input.split('').map(char => char.charCodeAt(0)).join(' ');
    }
    
    // Check if the length is divisible by 3
    if (length % 3 === 0) {
        // Reverse the string
        return input.split('').reverse().join('');
    }
    
    // Check if the length is divisible by 5
    if (length % 5 === 0) {
        // Replace each character with its ASCII code
        return input.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    // If none of the above conditions are met, return the original string
    return input;
}

// Example usage:
console.log(transformString("Hamburger"));           // Output: "regrubmaH"
console.log(transformString("Pizza"));               // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie"));// Output: "eikooCpihCetalocohC"
