
/*

643-maximum-average-subarray-I  Easy

You are given an integer array nums consisting of n elements, and an integer k.
Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. 
Any answer with a calculation error less than 10-5 will be accepted.

 

Example 1:
Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75


Example 2:
Input: nums = [5], k = 1
Output: 5.00000
 

Constraints:
n == nums.length
1 <= k <= n <= 105
-104 <= nums[i] <= 104

*/



import { expect, test, describe } from "bun:test";
import { solution } from './index'

describe("643-maximum-average-subarray-I", () => {

    test("Input1: nums = [1,12,-5,-6,50,3], k = 4 ", () => {
        const nums = [1, 12, -5, -6, 50, 3]
        const k = 4;
        const result = solution(nums, k);
        expect(result).toBeCloseTo(12.75000);
    });

    test("Input2: nums = [5], k = 1 ", () => {
        const nums = [5]
        const k = 1;
        const result = solution(nums, k);
        expect(result).toBeCloseTo(5.00000);
    });

});