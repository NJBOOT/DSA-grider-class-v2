// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(s) {
  let charMap = {};
  let max = 0;
  let maxChar = "";
  for (let i = 0; i < s.length; i++) {
    charMap[s[i]] = charMap[s[i]] + 1 || 1;
  }
  for (let key in charMap) {
    if (charMap[key] > max) {
      max = charMap[key];
      maxChar = key;
    }
  }
  return maxChar;
}

module.exports = maxChar;

// function maxChar(s) {
//     let charMap = {};
//     let max = 0;
//     let maxChar = "";
//     for (let i = 0; i < s.length; i++) {
//       charMap[s[i]] = charMap[s[i]] + 1 || 1;
//     }
//     for (let key in charMap) {
//       max = Math.max(charMap[key], max);
//     }
//     maxChar = Object.keys(charMap).find(key => charMap[key] === max);

//     return maxChar;
//   }
