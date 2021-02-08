// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Recursive
function vowels(str, index = 0, count = 0) {
  let vowelArr = ["a", "e", "i", "o", "u"];
  str = str.toLowerCase();
  if (index === str.length) {
    return count;
  }
  if (vowelArr.includes(str[index])) {
    return vowels(str, index + 1, count + 1);
  }
  return vowels(str, index + 1, count);
}

function iterativeVowels(str) {
  let vowelArr = ["a", "e", "i", "o", "u"];
  let count = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (vowelArr.includes(str[i])) {
      count++;
    }
  }
  return count;
}

module.exports = vowels;
