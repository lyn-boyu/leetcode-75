/**

1657. Determine if Two Strings Are Close - Medium

Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.
For example, abcde -> aecdb

Operation 2: Transform every occurrence of one existing character into another existing character, 
and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

 

Example 1:
Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"

Example 2:
Input: word1 = "a", word2 = "aa"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.

Example 3:
Input: word1 = "cabbba", word2 = "abbccc"
Output: true
Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: "cabbba" -> "caabbb"
Apply Operation 2: "caabbb" -> "baaccc"
Apply Operation 2: "baaccc" -> "abbccc"
 

Constraints:
1 <= word1.length, word2.length <= 105
word1 and word2 contain only lowercase English letters.

*/

function closeStrings(word1: string, word2: string): boolean {
    // the letter position of the word can be different
    // but the element of the word should be the same
    // and the element occurrence size sum should be the same
    if (word1.length !== word2.length) return false;

    function buildWordMap(word: string): Map<string, number> {
        const wordMap = new Map();
        word.split('').forEach((char) => {
            wordMap.set(char, (wordMap.get(char) || 0) + 1);
        })
        return wordMap
    }
    const wordMap1 = buildWordMap(word1)
    const wordMap2 = buildWordMap(word2)

    // check the elements of the word should be the same
    let isAnyLetterDifferent = false
    wordMap1.forEach((value, key) => {
        if (!wordMap2.has(key)) { isAnyLetterDifferent = true; }
    })
    wordMap2.forEach((value, key) => {
        if (!wordMap1.has(key)) { isAnyLetterDifferent = true; }
    })
    if (isAnyLetterDifferent) return false


    // check the element of the word should be the same
    const wordOneFrequence = [...wordMap1.values()].sort((a, b) => a - b)
    const wordTwoFrequence = [...wordMap2.values()].sort((a, b) => a - b)

    return wordOneFrequence.reduce((result, value, idx) => {
        if (!result) return result
        return value === wordTwoFrequence[idx]
    }, true)
};
export { closeStrings as solution };

