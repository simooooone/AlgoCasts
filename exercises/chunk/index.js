// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let chunked = [];

  /* let ret = [];
  let res = []; */

  for (let element of array) {
    let last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      chuncked.push[element];
    } else {
      last.push(element);
    }
  }

  return chunked;
  /*  for (let i = 1; i <= array.length; i++) {
    res.push(array[i - 1]);

    if (i % size == 0 || i === array.length) {
      ret.push(res);
      res = [];
    }
  }

  return ret;
  */
}

module.exports = chunk;
