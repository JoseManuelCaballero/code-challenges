/* Code Challenge. Divide string into three parts with the same number of letters "a"

Given a string of length 'N' made up of only letters 'a' and 'b', write a function that:
    - Divide the original string into three parts. Parts cannot be empty.
    - The length of the three parts can be different.
    - Each part must contains the same number of letters 'a'.
    - N is an integer within the range [1..40,000]
    - The string S contains only the letters 'a' and 'b'.
    - Return the number of ways the string can be divided into three parts following the previous rules.

Examples:
    Input = "babaa" => Output: 2 => Combinations: "ba | ba | a" and "bab | a | a".
    Input = "ababa" => Output: 4 => Combinations: "a | ba | ba", "a | bab | a", "ab | a | ba" and "ab | ab | a ".
    Input = "aba" => Output: 0 => Combinations: It is impossible to divide as needed.
    Input = "bbbbb" => Output: 6 => Combinations: "b | b | bbb", "b | bb | bb", "b | bbb | b", "bb | b | bb "," bb | bb | b "and" bbb | b | b ".

Algorithm
    string: babaa
    combination 1: b | a | baa - Invalid
    combination 2: b | ab | aa - Invalid
    combination 3: b | aba | a - Invalid
    combination 4: ba | b | aa - Invalid
    combination 5: ba | ba | a - Valid
    combination 6: bab | a | a - Valid
*/

const { parseConfigFileTextToJson } = require("typescript");

function divideString(string) {
  const stringIsEmpty = string === null || string.length === 0;
  if (stringIsEmpty) {
    return 0;
  }
  let combinations = [];
  const letters = string.split("");

  for (let i = 0; i < letters.length - 2; i++) {
    let beginPart1 = 0;
    let incrementPart1 = i + 1;
    let part1 = string.substr(beginPart1, incrementPart1);

    for (let j = 0; j < letters.length - incrementPart1 - 1; j++) {
      let beginPart2 = beginPart1 + incrementPart1;
      let incrementPart2 = j + 1;
      let part2 = string.substr(beginPart2, incrementPart2);

      let beginPart3 = beginPart2 + incrementPart2;
      let incrementPart3 = string.length - incrementPart1 - incrementPart2;
      let part3 = string.substr(beginPart3, incrementPart3);

      let lettersAinPart1 = (part1.match("a") ?? []).length;
      let lettersAinPart2 = (part2.match("a") ?? []).length;
      let lettersAinPart3 = (part3.match("a") ?? []).length;

      let condition =
        lettersAinPart1 === lettersAinPart2 &&
        lettersAinPart2 === lettersAinPart3;

      if (condition) {
        combinations.push([part1, part2, part3]);
      }
    }
  }
  return combinations.length;
}

module.exports = divideString;
