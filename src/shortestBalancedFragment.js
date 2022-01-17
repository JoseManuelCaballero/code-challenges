/* Code Challenge. Shortest Balanced Fragment

Write a function that, given a string S of length N:
    - Returns the length of the shortest balanced fragment of S.
    - A string is called balanced when every letter in the string appears both in upper and lowercase. For example, the string "CATattac" is balanced ('a','c' and 't' occur in both cases), but "Madam" is not ('d' and 'a' appear only in lowercase).
    - The number of occurrences does not matter.
    - If S does not contain any balanced fragments, the function should return -1.
    - N is an integer within the range [1..200];
    - String S consists only of letters ('a'-'z' and/or 'A'-'Z').

Examples:
    Input: "azABaabza" => Output: 5. The shortest balanced fragment of S is "ABaab".
    Input: "TacoCat" => Output: -1. There is no balanced fragment.
    Input: "AcZCbaBz" => Output: 8. The shortest balanced fragment is the whole string.
    Input: "abcdefghijklmnopqrstuvwxyz" => Output: -1. There is no balanced fragment.
*/

function shortestBalancedFragment(string){
    return -1;
}

module.exports = shortestBalancedFragment;