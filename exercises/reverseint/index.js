// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// MY SOLUTION
function reverseInt(n) {
  const arr = Math.abs(n).toString().split("");
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }
  const flipped = +arr.join("");
  return n < 0 ? -flipped : flipped;
}

module.exports = reverseInt;

// HIS SOLUTION
// function reverseInt(n) {
//   const flipped = parseInt(n.toString().split("").reverse().join(""));
//   return flipped * Math.sign(n);
// }
