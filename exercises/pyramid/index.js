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

function pyramid(n, row = 0, column = 0, level = "") {
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  let midpoint = Math.floor((2 * n - 1) / 2);

  if (midpoint - row <= column && midpoint + row >= column) {
    level += "#";
  } else {
    level += " ";
  }

  pyramid(n, row, column + 1, level);
}

module.exports = pyramid;

/* let midpoint = Math.floor((2 * n - 1) / 2);

for (let row = 0; row < n; row++) {
  let level = "";

  for (let column = 0; column < 2 * n - 1; column++) {
    if (midpoint - row <= column && midpoint + row >= column) {
      level += "#";
    } else {
      level += " ";
    }
  }
  console.log(level);
} */
