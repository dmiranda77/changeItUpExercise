"use strict";
function changeString(inputString) {
    let result = "";
    const vowels = "AEIOU";
    for (let i = 0; i < inputString.length; i++) {
        let char = inputString.charAt(i);
        if (/[a-zA-Z]/.test(char)) {
            char = char.toLowerCase();
            // Handle wrapping around the alphabet
            if (char === 'z') {
                result += 'a';
            }
            else {
                let newCharCode = char.charCodeAt(0) + 1;
                let newChar = String.fromCharCode(newCharCode);
                result += newChar;
            }
            // Capitalize vowels
            if (vowels.includes(result[result.length - 1].toUpperCase())) {
                result = result.slice(0, -1) + result[result.length - 1].toUpperCase();
            }
        }
        else {
            result += char;
        }
    }
    return result;
}
// Test cases
console.log(changeString("Diana29")); // Output: "dbU30"
