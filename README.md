# Code Challenges
This project contains some exercises to practice algorithms in javascript

## Installation
1. Clone the repository locally.
  - Open the repository page.
  - Click on the **Code** button.
  - To clone the repository using HTTPS, click on HTTPS and copy the url https://github.com/...
  - Open Git Bash.
  - Change the current directory to the location where you want to clone the project.
  - Type **git clone**, and then paste the URL that you copied before.
  
    - $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
    
  - Press enter for create your local clone.

## Exercises

### 1. FizzBuzz
Write an algorithm that: 
  - Show the numbers from 1 to 100. 
  - If it is a multiple of 3 it is replaced by the word “Fizz”. 
  - If it is a multiple of 5 it is replaced by the word "Buzz". 
  - If it is a multiple of 3 and 5 it is replaced by the word "FizzBuzz".
  
  **Example:** 
  - Output: [1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz,16,...]


### 2. Positive values with their negative equivalent
Write a function that, given an array of "n" numbers: 
  - Returns in another array the positive values that have their negative equivalent in such array.

  **Example:**
  - Input: [-1, -2, -3] => Output: []
  - Input: [-3, -2, -1, -4, 3, 2, 1, 5] => Output: [1, 2, 3]

### 3. Minimal difference between groups
Given an array of n consecutive numbers. For example:[1, 2, 3, 4, 5, 6]
Write a function that:

  - Divide the original sequence into two groups of consecutive numbers.
  - Return the combination that has the smallest difference between both payments and its result.

  **Example**
  - Input: [1, 2, 3, 4, 5, 6] Output => 1
  - Demostration:
    - Combination: [1, 2, 3, 4] and [5, 6] => Difference: 10 - 11 = 1
    - Combination: [1, 2, 3] and [4, 5, 6] => Difference: 6 - 15 = 9
  
### 4. Divide string into three parts with the same number of letters "a"
Given a string of length 'N' made up of only letters 'a' and 'b', write a function that: 
- Divide the original string into three parts. Parts cannot be empty.
- The length of the three parts can be different.
- Each part must contains the same number of letters 'a'.
- N is an integer within the range [1..40,000]
- The string S contains only the letters 'a' and 'b'.
- Return the number of ways the string can be divided into three parts following the prevous rules.

  **Examples:**
- Input = "babaa" => Output: 2 => Combinations: "ba | ba | a" and "bab | a | a".
- Input = "ababa" => Output: 4 => Combinations: "a | ba | ba", "a | bab | a", "ab | a | ba" and "ab | ab | a ".
- Input = "aba" => Output: 0 => Combinations: It is impossible to divide as needed.
- Input = "bbbbb" => Output: 6 => Combinations: "b | b | bbb", "b | bb | bb", "b | bbb | b", "bb | b | bb "," bb | bb | b "and" bbb | b | b ". 

**Algorithm**
- **string:** babaa
  - combination 1: b | a | baa - Invalid
  - combination 2: b | ab | aa - Invalid
  - combination 3: b | aba | a - Invalid
  - combination 4: ba | b | aa - Invalid
  - combination 5: ba | ba | a - Valid
  - combination 6: bab | a | a - Valid

### 5. Shortest Balanced Fragment
Write a function that, given a string S of length N: 
- Returns the length of the shortest balanced fragment of S. 
- A string is called balanced when every letter in the string appears both in upper and lowercase. For example, the string "CATattac" is balanced ('a','c' and 't' occur in both cases), but "Madam" is not ('d' and 'a' appear only in lowercase). 
- The number of occurrences does not matter.
- If S does not contain any balanced fragments, the function should return -1.
- N is an integer within the range [1..200];
- String S consists only of letters ('a'-'z' and/or 'A'-'Z').

**Examples:**
- Input: "azABaabza" => Output: 5. The shortest balanced fragment of S is "ABaab".
- Input: "TacoCat" => Output: -1. There is no balanced fragment.
- Input: "AcZCbaBz" => Output: 8. The shortest balanced fragment is the whole string.
- Input: "abcdefghijklmnopqrstuvwxyz" => Output: -1. There is no balanced fragment.

### 6. Anagram
Given an array of words, we need to write a function which will take two parameters. 
- First parameter is a word and the second parameter is the array of the words. 
- The function will return an array consisting of the anagrams of the word passed as the first parameter from the array of words passed as the second parameter.

**Examples:**
- Input: ["Ave","Eva","Va","Vea"] => Output: ["Eva","Vea"];        
- Input: ["Alegan","Ángela","galena"] => Output: ["Ángela","Galena"];
- Input: ["Riesgo","Sergio","Regio"] => Output: ["Sergio"];
- Input: ["Agranda","granada","nada"] => Output: ["granada"];
- Input: ["Desamparador","rama","desparramado"] => Output: ["desparramado"];
- Input: ["Licúa","Lucía","Lucí"] => Output: ["Lucía"];
- Input: ["Conservadora","conversadora"] => Output: ["conversadora"];
        
### 7. Is balanced Parenthesis
Write a function or program that checks if a string is a balanced parenthesis.
- If is balanced parenthesis return true, else return false.

**Examples:**
- Input: "[{()}]" => Output: true
- Input: "{([])}" => Output: true
- Input: "([{}])" => Output: true
- Input: "[{}[]()]" => Output: true
- Input: "([{]})" => Output: false
- Input: "{[})" => Output: false

### 8. Quick Sort
Given the next array { 2,4,9,7,8,3,1}, sort the values for smallest to greatest using Quick Sort 
Method.
Use an pivot value.

**Examples:**
- Input: { 2,4,9,7,8,3,1} => Output: { 1,2,3,4,7,8,9}
- Input: { 3,6,8,4,3,1} => Output: { 1,3,3,4,6,8}
