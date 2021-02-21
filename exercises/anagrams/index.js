// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let exp = /[^\w]/g;

  let strA = stringA.replace(exp, "").toLowerCase();
  let strB = stringB.replace(exp, "").toLowerCase();

  let objA = createObj(strA);
  let objB = createObj(strB);

  if (strA.length !== strB.length) return false;

  for (let char in objA) {
    if (objA[char] !== objB[char]) {
      return false;
    }
  }
  return true;
}

function createObj(str) {
  let obj = {};
  for (let char of str) {
    obj[char] = obj[char] + 1 || 1;
  }
  return obj;
}

module.exports = anagrams;
