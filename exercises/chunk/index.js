// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   let chunked = [];
//   let index = 0
//   while (array.length > 0){
//     array = array.slice(index, index + size)
//     index += size
//     chunked.push(array)
//   }
//   return chunked
// }

// function chunk(array, size) {
//   let chunked = [];
//   for (let i = 0; i < array.length; i++) {
//     let last = chunked[chunked.length - 1];
//     if (!last || last.length === size) {
//       chunked.push([array[i]]);
//       console.log(chunked, [array[i]]);
//     } else {
//       last.push(array[i]);
//     }
//   }
//   return chunked;
// }

const chunk = (array, size) => {
  let chunked = [];
  let idx = 0;
  while (array.length > idx) {
    let single = array.slice(idx, idx + size);
    chunked.push(single);
    idx += size;
  }
  return chunked;
};

module.exports = chunk;

// function chunk(array, size) {
//   let res = [];
//   while (array.length) {
//     let temp = array.slice(0, size);
//     array.splice(0, size);
//     res.push(temp);
//   }
//   return res;
// }

// function chunk(array, size) {
//     let chunked = [];
//     for (el of array) {
//       const last = chunked[chunked.length - 1];
//       if (!last || last.length === size) {
//         chunked.push([el]);
//       } else {
//         last.push(el);
//       }
//     }
//     return chunked;
//   }
