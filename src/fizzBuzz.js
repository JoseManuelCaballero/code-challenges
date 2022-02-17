/* Code Challenge. FizzBuzz

Write an algorithm that:
    - Show an array with the numbers from 1 to 100.
    - If it is a multiple of 3 it is replaced by the word “Fizz”.
    - If it is a multiple of 5 it is replaced by the word "Buzz".
    - If it is a multiple of 3 and 5 it is replaced by the word "FizzBuzz".

Example:
    Output: [1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz,16,...]
    
*/

function fizzBuzz(numbers) {
  numbers = Array.from(numbers);
  let output = [];
  numbers.forEach((number) => {
    if (number % 15 === 0) {
      output.push("FizzBuzz");
    } else if (number % 3 === 0) {
      output.push("Fizz");
    } else if (number % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(number);
    }
  });
  return output;
}

module.exports = fizzBuzz;
