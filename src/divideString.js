/* Code Challenge. Divide string into three parts with the same number of letters "a"

Given a string of length 'N' made up of only letters 'a' and 'b', write a function that:
    - Divide the original string into three parts. Parts cannot be empty.
    - The length of the three parts can be different.
    - Each part must contains the same number of letters 'a'.
    - N is an integer within the range [1..40,000]
    - The string S contains only the letters 'a' and 'b'.
    - Return the number of ways the string can be divided into three parts following the prevous rules.

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

function divideString(string){
    return -1;
}

module.exports = divideString;