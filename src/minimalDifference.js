/*
Code Challenge. Minimal difference between groups

Given an array of n consecutive numbers. For example:[1, 2, 3, 4, 5, 6] Write a function that:
    - Divide the original sequence into two groups of consecutive numbers.
    - Return the combination that has the smallest difference between both payments and its result.

Example:
    Input: [1, 2, 3, 4, 5, 6] Output => 1

Demonstration:
    Combination: [1, 2, 3, 4] and [5, 6] => Difference: 10 - 11 = 1
    Combination: [1, 2, 3] and [4, 5, 6] => Difference: 6 - 15 = 9

*/

function minimalDifference(numbers) {
  let groups = [];
  if (numbers.length < 2) {
    return 0;
  }
  for (let i = 0; i < numbers.length - 1; i++) {
    let group1 = 0;
    let group2 = 0;
    numbers
      .filter((number, index) => index <= i)
      .map((number) => (group1 += number));
    numbers
      .filter((number, index) => index > i)
      .map((number) => (group2 += number));
    groups.push(Math.abs(group1 - group2));
  }
  let minimal = Math.min(...groups);

  return minimal;
}

module.exports = minimalDifference;
