/**

338. Counting Bits - Easy

https://leetcode.com/problems/counting-bits/description/

Given an integer n, 
return an array ans of length n + 1 such that for each i (0 <= i <= n),
ans[i] is the number of 1's in the binary representation of i.

 
Example 1:
Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10

Example 2:
Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
num ->bits ->  the number of 1
0 --> 0    --> 0
1 --> 1    --> 1
2 --> 10   --> 1
3 --> 11   --> 2
4 --> 100  --> 1
5 --> 101  --> 2
 

Constraints:
0 <= n <= 105
 

Follow up:
- It is very easy to come up with a solution with a runtime of O(n log n). Can you do it in linear time O(n) and possibly in a single pass?
- Can you do it without using any built-in function (i.e., like __builtin_popcount in C++)?

*/

import { expect, test, describe } from "bun:test";
import { countBitsByStringManipulation, countBitsByDP } from './index'


describe("338. Counting Bits - Easy", () => {

    describe("O(n) solution", () => {
        test('Input1:  n = 2', () => {
            const n = 2
            expect(countBitsByDP(n)).toEqual([0, 1, 1]);
        });
        test('Input2:  n = 5 ', () => {
            const n = 5
            expect(countBitsByDP(n)).toEqual([0, 1, 1, 2, 1, 2]);
        });
    })

    describe("O(n log n) solution", () => {
        test('Input1:  n = 2', () => {
            const n = 2
            expect(countBitsByStringManipulation(n)).toEqual([0, 1, 1]);
        });
        test('Input2:  n = 5 ', () => {
            const n = 5
            expect(countBitsByStringManipulation(n)).toEqual([0, 1, 1, 2, 1, 2]);
        });
    })

});