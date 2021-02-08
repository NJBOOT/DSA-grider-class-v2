// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

module.exports = capitalize;

// function capitalize(str) {
//     let arr = str.split("");
//     arr[0] = arr[0].toUpperCase();
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] === " ") {
//         arr[i + 1] = arr[i + 1].toUpperCase();
//       }
//     }
//     return arr.join("");
//   }

// function capitalize(str) {
//     let words = str.split(" ");
//     let res = [];
//     for (word of words) {
//       res.push(word[0].toUpperCase() + word.slice(1));
//     }
//     return res.join(" ");
//   }

// function capitalize(str) {
//   let words = str.split(" ");

//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//   }
//   return words.join(" ");
// }
