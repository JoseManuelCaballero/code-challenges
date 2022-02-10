const positiveWithNegative = require("../src/positiveWithNegative");

describe("positiveWithNegative", () => {
  test("when the array is empty, it should return an array empty", () => {
    const array = [];
    expect(positiveWithNegative(array)).toEqual([]);
  });

  test("when the array contains only an number zero, it should return an array empty", () => {
    const array = [0];
    expect(positiveWithNegative(array)).toEqual([]);
  });

  test("when the array contains only negative numbers, it should return an array empty", () => {
    const array = [-1, -2, -3];
    expect(positiveWithNegative(array)).toEqual([]);
  });

  test("when the array contains only positive numbers, it should return an array empty", () => {
    const array = [1, 2, 3];
    expect(positiveWithNegative(array)).toEqual([]);
  });

  test("when the array contains a negative number and its positive opposite ", () => {
    const array = [-1, 1];
    expect(positiveWithNegative(array)).toEqual([1]);
  });

  
  test("when the array contains negatives and positives numbers ", () => {
    const array = [-3, -2, -1, -4, 3, 2, 1, 5];
    expect(positiveWithNegative(array)).toEqual([1, 2, 3]);
  });
});
