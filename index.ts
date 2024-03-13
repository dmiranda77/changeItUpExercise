function changeString(inputString: string): string {
    let result: string = "";
    const vowels: string = "AEIOU";

    for (let i: number = 0; i < inputString.length; i++) {
        let char: string = inputString.charAt(i);
        
        if (/[a-zA-Z]/.test(char)) {
            char = char.toLowerCase();

            // Handle wrapping around the alphabet
            if (char === 'z') {
                result += 'a';
            } else {
                let newCharCode: number = char.charCodeAt(0) + 1;
                let newChar: string = String.fromCharCode(newCharCode);
                result += newChar;
            }

            // Capitalize vowels
            if (vowels.includes(result[result.length - 1].toUpperCase())) {
                result = result.slice(0, -1) + result[result.length - 1].toUpperCase();
            }
        } else {
            result += char;
        }
    }

    return result;
}

// Test cases
console.log(changeString("Diana29"));  // Output: "dbU30"
