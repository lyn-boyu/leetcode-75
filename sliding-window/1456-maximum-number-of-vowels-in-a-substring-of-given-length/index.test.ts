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



import { expect, test, describe } from "bun:test";
import { solution } from './index'

describe("1456. Maximum Number of Vowels in a Substring of Given Length", () => {
    test("Input1: s = abciiidef, k = 3 ", () => {
        const s = 'abciiidef'
        const k = 3;
        const result = solution(s, k);
        expect(result).toBe(3);
    });

    test("Input2: s = aeiou, k = 2 ", () => {
        const s = 'aeiou'
        const k = 2;
        const result = solution(s, k);
        expect(result).toBe(2);
    });

    test("Input1: s = leetcode, k = 3 ", () => {
        const s = 'leetcode'
        const k = 3;
        const result = solution(s, k);
        expect(result).toBe(2);
    });
});