/**
374. Guess Number Higher or Lower - Easy

https://leetcode.com/problems/guess-number-higher-or-lower/

We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.
Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

- -1: Your guess is higher than the number I picked (i.e. num > pick).
- 1: Your guess is lower than the number I picked (i.e. num < pick).
- 0: your guess is equal to the number I picked (i.e. num == pick).

Return the number that I picked.

 
Example 1:
Input: n = 10, pick = 6
Output: 6

Example 2:
Input: n = 1, pick = 1
Output: 1

Example 3:
Input: n = 2, pick = 1
Output: 1
 

Constraints:
1 <= n <= 231 - 1
1 <= pick <= n
*/

import { expect, test, describe } from "bun:test";
import { setPickValue, solution } from './index'





describe("374. Guess Number Higher or Lower - Easy", () => {

    test('Input1:  n = 10, pick = 6', () => {
        const n = 10
        const pick = 6
        setPickValue(pick)
        const result = solution(n);
        expect(result).toBe(pick);
    });

    test('Input2:  n = 1, pick = 1', () => {
        const n = 1
        const pick = 1
        setPickValue(pick)
        const result = solution(n);
        expect(result).toBe(pick);
    });

    test('Input3: n = 2, pick = 1', () => {
        const n = 2
        const pick = 1
        setPickValue(pick)
        const result = solution(n);
        expect(result).toBe(pick);
    });


});