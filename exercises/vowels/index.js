// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let checker = /[aeiou]+/gi;
  let result = [];

  result = str.match(checker);

  return result ? result.join("").length : 0;
}

module.exports = vowels;

/* function vowels(str) {
  let vowelsLetters = ["a", "e", "i", "o", "u"];
  let result = 0;

  str.split("").forEach((element) => {
    if (vowelsLetters.includes(element.toLowerCase())) {
      result++;
    }
  });

  return result;
} */
