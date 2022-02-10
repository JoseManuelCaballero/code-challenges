const fizzBuzz = require("../src/fizzBuzz");

describe("fizzBuzz()", () => {
  it("when you not provide any number, it returns empty", () => {
    expect(fizzBuzz([])).toStrictEqual([]);
  });

  it("when you provide a number that is a multiple of 3, it returns Fizz", () => {
    expect(fizzBuzz([3])).toStrictEqual(["Fizz"]);
  });

  it("when you provide a number that is a multiple of 5, it returns Buzz", () => {
    expect(fizzBuzz([5])).toStrictEqual(["Buzz"]);
  });

  it("when you provide a number that is a multiple of 3 and is a multiple of 5, it returns FizzBuzz", () => {
    expect(fizzBuzz([15])).toStrictEqual(["FizzBuzz"]);
  });

  it("when you provide a number that is not a multiple of 3 and is not a multiple of 5, it returns the number", () => {
    expect(fizzBuzz([1])).toStrictEqual([1]);
  });

  it("when you provide an array that contains a multiples of 3, a multiple of 5, a multiple of 15 and a number that are not multiple of 3, 5 or 15 ", () => {
    expect(fizzBuzz([1, 3, 5, 15])).toStrictEqual([1,"Fizz","Buzz","FizzBuzz"]);
  });

  it("when you provide an array that contains numbers that are multiples of 3, 5 or 15 and contains numbers that are not multiples of 3, 5 or 15 ", () => {
    let input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];
    let output = [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz",31,32,"Fizz",34,"Buzz","Fizz",37,38,"Fizz","Buzz",41,"Fizz",43,44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz",52,53,"Fizz","Buzz",56,"Fizz",58,59,"FizzBuzz",61,62,"Fizz",64,"Buzz","Fizz",67,68,"Fizz","Buzz",71,"Fizz",73,74,"FizzBuzz",76,77,"Fizz",79,"Buzz","Fizz",82,83,"Fizz","Buzz",86,"Fizz",88,89,"FizzBuzz",91,92,"Fizz",94,"Buzz","Fizz",97,98,"Fizz","Buzz"];
    expect(fizzBuzz(input)).toStrictEqual(output);
  });
});
