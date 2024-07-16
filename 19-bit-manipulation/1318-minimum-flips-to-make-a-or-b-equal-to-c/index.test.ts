/**
 * 
 
1318. Minimum Flips to Make a OR b Equal to c - Medium

https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/description/

Given 3 positives numbers a, b and c. 
Return the minimum flips required in some bits of a and b to make ( a OR b == c ). 
(bitwise OR operation).
Flip operation consists of change any single bit 1 to 0 or change the bit 0 to 1 in their binary representation.

 

Example 1:
Input: a = 2, b = 6, c = 5
Output: 3
Explanation: 
After flips a = 1 , b = 4 , c = 5 such that (a OR b == c)

0010 -> a    0001 -> a need flip 2 time
--**
0110 -> b    0100 -> b need flip 1 time 
--*-
---- OR
0101 -> c


Example 2:
Input: a = 4, b = 2, c = 7
Output: 1

Example 3:
Input: a = 1, b = 2, c = 3
Output: 0
 

Constraints:
1 <= a <= 10^9
1 <= b <= 10^9
1 <= c <= 10^9


*/


import { expect, test, describe } from "bun:test";
import { solution } from './index'


describe("1318. Minimum Flips to Make a OR b Equal to c - Medium", () => {

    test('Input1: a = 2, b = 6, c = 5', () => {
        const a = 2, b = 6, c = 5
        expect(solution(a, b, c)).toEqual(3);
    });

    test('Input2: a = 4, b = 2, c = 7', () => {
        const a = 4, b = 2, c = 7
        expect(solution(a, b, c)).toEqual(1);
    });

    test('Input3:  a = 2, b = 6, c = 5', () => {
        const a = 1, b = 2, c = 3
        expect(solution(a, b, c)).toEqual(0);
    });

});