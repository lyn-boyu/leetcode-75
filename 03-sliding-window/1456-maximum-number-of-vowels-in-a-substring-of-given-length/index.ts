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


const isVowel = (l: string) => {
    return ['a', 'e', 'i', 'o', 'u'].includes(l)
}

function maxVowels(s: string, k: number): number {
    let right = 0;
    let left = 0;
    let count = 0;
    let maxCount = 0

    // 1: init window
    while (right < k) {
        if (isVowel(s[right])) {
            count++
        }
        right++
    }
    maxCount = Math.max(maxCount, count)

    // 2: move window bundries
    while (right < s.length) {

        if (isVowel(s[left])) {
            count--
        }

        if (isVowel(s[right])) {
            count++
        }

        maxCount = Math.max(maxCount, count)

        left++
        right++
    }

    return maxCount
};

export { maxVowels as solution };