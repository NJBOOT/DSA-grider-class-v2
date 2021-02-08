// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// USING CHARMAPS + REGEX
function anagrams(stringA, stringB) {
  const a = stringA.replace(/[^\w]/g, "").toLowerCase();
  const b = stringB.replace(/[^\w]/g, "").toLowerCase();
  if (a.length !== b.length) {
    return false;
  }
  let charMap = {};
  for (let char of a) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  for (let char of b) {
    if (!charMap[char]) {
      return false;
    }
    charMap[char]--;
  }
  return true;
}

// USING TWO CHARMAPS AND COMPARING OBJECTS + REGEX
function anagramsAlt(stringA, stringB) {
  const [charMapA, aLength] = mapBuilder(stringA);
  const [charMapB, bLength] = mapBuilder(stringB);
  if (aLength !== bLength) {
    return false;
  }
  for (let key in charMapA) {
    if (charMapA[key] !== charMapB[key]) {
      return false;
    }
  }
  return true;
}

const mapBuilder = string => {
  let obj = {};
  for (let key of string.replace(/[^\w]/g, "").toLowerCase()) {
    obj[key] = obj[key] + 1 || 1;
  }
  return [obj, Object.keys(obj).length];
};

module.exports = anagrams;

// // USING SORT (SLOW BUT SIMPLE)
// function anagrams(stringA, stringB) {
//   return stripSort(stringA) === stripSort(stringB);
// }

// function stripSort(str) {
//   return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
// }

// // 1 - USING SORT
// function anagrams(stringA, stringB) {
//     function stripSort(str) {
//       let old = str.toLowerCase();
//       let newStr = "";
//       for (let i = 0; i < old.length; i++) {
//         if (old.charCodeAt(i) > 96 && old.charCodeAt(i) < 122) {
//           newStr += old[i];
//         }
//       }
//       return newStr.split("").sort().join("");
//     }

//     let a = stripSort(stringA);
//     let b = stripSort(stringB);
//     if (a.length !== b.length) {
//       return false;
//     }
//     for (let i = 0; i < a.length; i++) {
//       if (a[i] !== b[i]) {
//         return false;
//       }
//     }
//     return true;
//   }

// Using new ARRAY WITH COUNTER METHOD and CHARCODEAT
// function anagrams(stringA, stringB) {
//     const a = stringA.replace(/[^\w]/g, "").toLowerCase();
//     const b = stringB.replace(/[^\w]/g, "").toLowerCase();
//     if (a.length !== b.length) {
//       return false;
//     }
//     let counter = new Array(26).fill(0);
//     for (let i = 0; i < a.length; i++) {
//       counter[a.charCodeAt(i) - "a".charCodeAt(0)]++;
//       counter[b.charCodeAt(i) - "a".charCodeAt(0)]--;
//     }
//     for (let j = 0; j < counter.length; j++) {
//       if (counter[j]) {
//         return false;
//       }
//     }
//     return true;
//   }

// // USING TWO CHARMAPS AND COMPARING OBJECTS + REGEX
// function anagrams(stringA, stringB) {
//     const [charMapA, aLength] = mapBuilder(stringA);
//     const [charMapB, bLength] = mapBuilder(stringB);
//     if (aLength !== bLength) {
//       return false;
//     }
//     for (let key in charMapA) {
//       if (charMapA[key] !== charMapB[key]) {
//         return false;
//       }
//     }
//     return true;
//   }

//   const mapBuilder = string => {
//     let obj = {};
//     for (let key of string.replace(/[^\w]/g, "").toLowerCase()) {
//       obj[key] = obj[key] + 1 || 1;
//     }
//     return [obj, Object.keys(obj).length];
//   };
