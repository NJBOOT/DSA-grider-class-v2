// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Recursive
function pyramid(n, row = 0, level = "") {
  let levelLength = n * 2 - 1;
  let midLength = Math.floor(levelLength / 2);
  if (n === row) {
    return;
  }
  if (level.length === levelLength) {
    console.log(level);
    return pyramid(n, row + 1);
  }
  let add;
  if (midLength - row <= level.length && midLength + row >= level.length) {
    add = "#";
  } else {
    add = " ";
  }
  return pyramid(n, row, level + add);
}

module.exports = pyramid;

// iteritive
// function pyramid(n) {
//     const levelLength = n * 2 - 1;
//     const midLength = Math.floor(levelLength / 2);
//     for (let row = 0; row < n; row++) {
//       let level = "";
//       for (let col = 0; col < levelLength; col++) {
//         if (col >= midLength - row && col <= midLength + row) {
//           // console.log(`col: ${col}, midLength:${midLength}`);
//           level += "#";
//         } else {
//           level += " ";
//         }
//       }
//       console.log(level);
//     }
//   }
