/**
 
215. Kth Largest Element in an Array - Medium

https://leetcode.com/problems/kth-largest-element-in-an-array/description/


Given an integer array nums and an integer k, return the kth largest element in the array.
Note that it is the kth largest element in the sorted order, not the kth distinct element.
Can you solve it without sorting?

 

Example 1:
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5

Example 2:
Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
 

Constraints:
1 <= k <= nums.length <= 105
-104 <= nums[i] <= 104

*/

import { expect, test, describe } from "bun:test";
import { solution } from './index'


describe("215. Kth Largest Element in an Array - Medium", () => {

    test('Input1: nums = [3,2,1,5,6,4], k = 2', () => {
        const nums = [3, 2, 1, 5, 6, 4]
        const k = 2
        const result = solution(nums, k);
        expect(result).toBeCloseTo(5);
    });

    test('Input2: nums = [3,2,3,1,2,4,5,5,6], k = 4', () => {
        const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6]
        const k = 4
        const result = solution(nums, k);
        expect(result).toBeCloseTo(4);
    });


});