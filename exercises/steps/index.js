// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let i = 1; i <= n; i++) {
    let stair = "#".repeat(i) + " ".repeat(n - i);
    console.log(stair);
  }
}

function recurseSteps(n, row = 0, stair = "") {
  if (n === row) {
    return;
  }
  if (stair.length === n) {
    console.log(stair);
    return recurseSteps(n, row + 1);
  }
  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  recurseSteps(n, row, stair);
}

module.exports = steps;

// function steps(n) {
//     let steps = new Array(n).fill(" ");
//     for (let i = 0; i < n; i++) {
//       steps[i] = "#";
//       console.log(steps.join(""));
//     }
//   }

// function steps(n) {
//     let steps = new Array(n).fill(" ");
//     for (let step in steps){
//       steps[step] = "#"
//       console.log(steps.join(""))
//     }
//   }

// function steps(n) {
//     for (let i = 0; i < n; i++) {
//       let stairs = "";
//       for (j = 0; j < n; j++) {
//         if (j <= i) {
//           stairs += "#";
//         } else {
//           stairs += " ";
//         }
//       }
//       console.log(stairs);
//     }
//   }
