/*
1071. Greatest Common Divisor of Strings  - Easy

https://leetcode.com/problems/greatest-common-divisor-of-strings/description/

For two strings s and t, we say "t divides s" if and only if
 s = t + t + t + ... + t + t
(i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, 
return the largest string x such that x divides both str1 and str2.

 
Example 1:
Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

Example 2:
Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"

Example 3:
Input: str1 = "LEET", str2 = "CODE"
Output: ""
 

Constraints:
1 <= str1.length, str2.length <= 1000
str1 and str2 consist of English uppercase letters.
*/


import { expect, test, describe } from "bun:test";
import { gcdOfStrings } from './index'

describe("1071. Greatest Common Divisor of Strings  - Easy", () => {

    test('Input1: str1 = "ABCABC", str2 = "ABC"', () => {
        const str1 = "ABCABC", str2 = "ABC"
        expect(gcdOfStrings(str1, str2)).toBe('ABC');
    });

    test('Input2: str1 = "ABABAB", str2 = "ABAB"', () => {
        const str1 = "ABABAB", str2 = "ABAB"
        expect(gcdOfStrings(str1, str2)).toBe('AB');
    });

    test('Input3: str1 = "LEET", str2 = "CODE"', () => {
        const str1 = "LEET", str2 = "CODE"
        expect(gcdOfStrings(str1, str2)).toBe('');
    });

    test('Input4: str1 = "ABABABAB", str2 = "ABAB"', () => {
        const str1 = "ABABABAB", str2 = "ABAB"
        expect(gcdOfStrings(str1, str2)).toBe('ABAB');
    });

});