/*
Code Challenge. Positive values with their negative equivalent

Write a function that, given an array of "n" numbers:
    - Returns in another array the positive values that have their negative equivalent in such array.

Example:
    Input: [-1, -2, -3] => Output: []
    Input: [-3, -2, -1, -4, 3, 2, 1, 5] => Output: [1, 2, 3]

*/

function positiveWithNegative(numbers) {
  let output = [];
  const onlyNegatives = numbers.every((number) => number < 0);
  const isZero = numbers.every((number) => number === 0);
  const onlyPositives = numbers.every((number) => number > 0);
  numbers.forEach((number) => {
    if (onlyNegatives || isZero || onlyPositives) {
      return;
    }

    if (number < 0) {
      if (numbers.includes(Math.abs(number))) {
        output.push(Math.abs(number));
      }
    }
  });

  return output.sort();
}

module.exports = positiveWithNegative;
