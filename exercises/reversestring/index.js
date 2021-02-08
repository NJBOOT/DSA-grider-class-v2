// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(s) {
  let str = s.split("");
  let left = 0;
  let right = str.length - 1;
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    let temp = str[right];
    str[right] = str[left];
    str[left] = temp;
    left++;
    right--;
  }
  return str.join("");
}

module.exports = reverse;

// function reverse(str) {
//   return str.split("").reduce((reversed, char) => {
//     return char + reversed;
//   }, "");
// }

// function reverse(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

// let altOne = s => {
//   return s.split("").reverse().join("");
// };
