/*

1004. Max Consecutive Ones III Medium
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

Example 2:
Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 

Constraints:
1 <= nums.length <= 105
nums[i] is either 0 or 1.
0 <= k <= nums.length

*/



import { expect, test, describe } from "bun:test";
import { solution } from './index'

describe("1004-max-consecutive-ones-III", () => {
    test("Input1: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2 ", () => {
        const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]
        const k = 2;
        const result = solution(nums, k);
        expect(result).toBe(6);
    });

    test("Input2: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3 ", () => {
        const nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1]
        const k = 3;
        const result = solution(nums, k);
        expect(result).toBe(10);
    });

});