// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

palindrome = string => {
  const rev = string.split("").reduce((rev, char) => char + rev, "");
  return rev === string;
};

module.exports = palindrome;

// Using built in reverse method
// function palindrome(str) {
//     return str.split("").reverse().join("") === str
//   }

// function palindrome(str) {
//     //   Reverse the string
//     let rev = "";
//     for (let char of str) {
//       rev = char + rev;
//     }
//     // Compare the result to the original + return boolean of result
//     return rev === str
//   }

// function palindrome(string) {
//     //   Reverse the string
//     let str = string.split("");
//     for (let i = 0; i < Math.floor(str.length / 2); i++) {
//       let temp = str[0 + i];
//       str[0 + i] = str[string.length - 1 - i];
//       str[string.length - 1 - i] = temp;
//     }
//     // Compare the result to the original + return boolean of result
//     return string === str.join("")
//   }
