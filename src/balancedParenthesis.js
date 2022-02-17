/* Code Challenge. Is balanced Parenthesis

Write a function or program that checks if a string is a balanced parenthesis.
    - If is balanced parenthesis return true, else return false.

Examples:
    Input: "[{()}]" => Output: true
    Input: "{([])}" => Output: true
    Input: "([{}])" => Output: true
    Input: "[{}]" => Output: true
    Input: "([{]})" => Output: false
    Input: "{[})" => Output: false
*/
function balancedParenthesis(string) {
  if (string === "") {
    return true;
  }
  if (string === null) {
    return false;
  }
  let characters = string.split("");
  let pile = [];

  characters.forEach((character) => {
    const haveOpen =
      character === "[" || character === "{" || character === "(";
    if (haveOpen) {
      pile.push(character);
    }
    if (character === "]" && characters[pile.length - 1] === "[") {
      pile.pop();
    }

    if (character === "}" && characters[pile.length - 1] === "{") {
      pile.pop();
    }

    if (character === ")" && characters[pile.length - 1] === "(") {
      pile.pop();
    }
  });

  if (pile.length === 0) {
    return true;
  }
  return false;
}

module.exports = balancedParenthesis;
