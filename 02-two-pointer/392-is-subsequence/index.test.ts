
/*
392. Is Subsequence - Easy

https://leetcode.com/problems/is-subsequence/description/

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters.
 (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false
 

Constraints:
0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.
 

Follow up: 
Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, 
and you want to check one by one to see if t has its subsequence. In this scenario, 
how would you change your code?


*/



import { expect, test, describe } from "bun:test";
import { isSubsequence } from './index'

describe("392. Is Subsequence - Easy", () => {

    test('Input1: s = "abc", t = "ahbgdc"', () => {
        const s = "abc", t = "ahbgdc"
        expect(isSubsequence(s, t)).toBe(true);
    });

    test('Input2:  s = "axc", t = "ahbgdc"', () => {
        const s = "axc", t = "ahbgdc"
        expect(isSubsequence(s, t)).toBe(false);
    });

    test('Input3:  s = "", t = "ahbgdc"', () => {
        const s = "", t = "ahbgdc"
        expect(isSubsequence(s, t)).toBe(true);
    });

    test('Input4:  s = "aaaaaa", t = "bbaaaa"', () => {
        const s = "aaaaaa", t = "bbaaaa"
        expect(isSubsequence(s, t)).toBe(false);
    });

});