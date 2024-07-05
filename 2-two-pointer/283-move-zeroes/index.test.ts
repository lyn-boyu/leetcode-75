
/*
283. Move Zeroes -  Easy

https://leetcode.com/problems/move-zeroes/description/

Given an integer array nums, 
move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.


Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]
 

Constraints:
1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1

*/



import { expect, test, describe } from "bun:test";
import { solution } from './index'

describe("283. Move Zeroes -  Easy", () => {

    test("Input1: nums =  [0,1,0,3,12] ", () => {
        const nums = [0, 1, 0, 3, 12]
        solution(nums);
        expect(nums).toBe([1, 3, 12, 0, 0]);
    });

    test("Input2: nums = [0] ", () => {
        const nums = [0]
        solution(nums);
        expect(nums).toBe([0]);
    });

});