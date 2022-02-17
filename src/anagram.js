/*  Code Challenge. Anagram

Given an array of words, we need to write a function which will take two parameters.
    - First parameter is a word and the second parameter is the array of the words.
    - The function will return an array consisting of the anagrams of the word passed as the first parameter from the array of words passed as the second parameter.

Examples:
        Input: "Ave",["Eva","Va","Vea"] => Output: ["Eva","Vea"];        
        Input: "Alegan",["Ángela","galena"] => Output: ["Ángela","Galena"];
        Input: "Riesgo",["Sergio","Regio"] => Output: ["Sergio"];
        Input: "Agranda",["granada","nada"] => Output: ["granada"];
        Input: "Desamparador",["rama","desparramado"] => Output: ["desparramado"];
        Input: "Licúa",["Lucía","Lucí"] => Output: ["Lucía"];
        Input: "Conservadora",["conversadora"] => Output: ["conversadora"];
*/

function anagram(word, words) {
  let output = [];

  words.forEach((string) => {
    const stringsAreEmpty = word.length === 0 || string.length === 0;
    const stringsSizeAreDifferent = word.length !== string.length;
    const wordToLower = word.toLowerCase();
    const stingToLower = string.toLowerCase();
    const letters = stingToLower.split("");

    if (stringsAreEmpty || stringsSizeAreDifferent) {
      return;
    }

    for (let i = 0; i < letters.length - 1; i++) {
      const lettersInWord = wordToLower.match(letters[i]) ?? [];
      const lettersInString = stingToLower.match(letters[i]) ?? [];
      const haveSameSizeLetters =
        lettersInWord.length !== lettersInString.length;

      if (haveSameSizeLetters) {
        break;
      }

      if (!output.includes(string)) {
        output.push(string);
      }
    }
  });

  return output;
}

module.exports = anagram;
