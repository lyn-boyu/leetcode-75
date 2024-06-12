/*
1456. Maximum Number of Vowels in a Substring of Given Length - Medium

Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

 

Example 1:
Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.

Example 2:
Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.

Example 3:
Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.
 

Constraints:
1 <= s.length <= 105
s consists of lowercase English letters.
1 <= k <= s.length

*/

const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
function isVowel(letter: string) {
    return vowels.has(letter)
}


function maxVowels(s: string, k: number): number {
    // pointers
    let startIdx = 0
    let endIdx = 0
    // stats
    let currentVowelCount = 0
    let maxVowelCount = 0

    // step1: get window ready
    while (endIdx < k) {
        const newChar = s[endIdx]
        if (isVowel(newChar)) {
            currentVowelCount += 1
        }
        // update stats
        maxVowelCount = Math.max(maxVowelCount, currentVowelCount)
        // move window
        endIdx += 1
    }

    // step2: move window bundries
    while (endIdx <= s.length - 1) {
        const newChar = s[endIdx]
        const oldChar = s[startIdx]

        if (isVowel(newChar)) {
            currentVowelCount += 1
        }

        if (isVowel(oldChar)) {
            currentVowelCount -= 1
        }

        // update stats
        maxVowelCount = Math.max(maxVowelCount, currentVowelCount)
        // move window
        startIdx += 1
        endIdx += 1
    }

    return maxVowelCount
};

export { maxVowels as solution };