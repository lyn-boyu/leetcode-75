/**

875. Koko Eating Bananas - Medium

https://leetcode.com/problems/koko-eating-bananas/description/

Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.
Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.
Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.


Example 1:
Input: piles = [3,6,7,11], h = 8
Output: 4

Example 2:
Input: piles = [30,11,23,4,20], h = 5
Output: 30

Example 3:
Input: piles = [30,11,23,4,20], h = 6
Output: 23
 

Constraints:
1 <= piles.length <= 104
piles.length <= h <= 109
1 <= piles[i] <= 109

*/

import { expect, test, describe } from "bun:test";
import { solution } from './index'


describe("875. Koko Eating Bananas - Medium", () => {

    test('Input1:  piles = [3,6,7,11], h = 8', () => {
        const piles = [3, 6, 7, 11], h = 8;
        const result = solution(piles, h);
        expect(result).toBe(4);
    });

    test('Input2:  piles =[30,11,23,4,20], h = 5', () => {
        const piles = [30, 11, 23, 4, 20], h = 5
        const result = solution(piles, h);
        expect(result).toBe(30);
    });

    test('Input3:  piles = [30,11,23,4,20], h = 6', () => {
        const piles = [30, 11, 23, 4, 20], h = 6
        const result = solution(piles, h);
        expect(result).toBe(23);
    });

    test('Input4:  piles =[1,1,1,999999999], h = 10', () => {
        const piles = [1, 1, 1, 999999999], h = 10
        const result = solution(piles, h);
        expect(result).toBe(142857143);
    });

    test('Input5:  piles =[312884470], h = 312884469', () => {
        const piles = [312884470], h = 312884469
        const result = solution(piles, h);
        expect(result).toBe(2);
    });

});