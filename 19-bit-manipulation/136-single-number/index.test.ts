/**
 
136. Single Number - Easy

https://leetcode.com/problems/single-number/description/

Given a non-empty array of integers nums, 
every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.


Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1
 

Constraints:
1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.

*/

import { expect, test, describe } from "bun:test";
import { solution } from './index'


describe("136. Single Number - Easy", () => {

    test('Input1:  nums = [2,2,1]', () => {
        const nums = [2, 2, 1]
        expect(solution(nums)).toEqual(1);
    });

    test('Input2: nums = [4,1,2,1,2]', () => {
        const nums = [4, 1, 2, 1, 2]
        expect(solution(nums)).toEqual(4);
    });

    test('Input3: nums = [1]', () => {
        const nums = [1]
        expect(solution(nums)).toEqual(4);
    });


});