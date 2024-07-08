/**
 * 
17. Letter Combinations of a Phone Number - Medium

https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/

Given a string containing digits from 2-9 inclusive,
return all possible letter combinations that the number could represent. 
Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below.
Note that 1 does not map to any letters.

1: null 2: abc  3: def
4: ghi  5: jkl  6: mno
7: pqrs 8: tuv  9: wxyz

Example 1:
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:
Input: digits = ""
Output: []

Example 3:
Input: digits = "2"
Output: ["a","b","c"]
 

Constraints:
0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].

*/

import { expect, test, describe } from "bun:test";
import { solution } from './index'


describe("17. Letter Combinations of a Phone Number - Medium", () => {

    test('Input1:  digits = "23"', () => {
        const digits = "23"
        expect(solution(digits)).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
    });

    test('Input2:  digits = ""', () => {
        const digits = ""
        expect(solution(digits)).toEqual([]);
    });

    test('Input3:  digits = "2"', () => {
        const digits = "2"
        expect(solution(digits)).toEqual(["a", "b", "c"]);
    });



});