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

/** Do not return anything, modify nums in-place instead. */
export function moveZeroes(nums: number[]): void {
    let lastNonZeroIndex = 0

    //  move all non zero num to the head of the nums
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroIndex] = nums[i]
            lastNonZeroIndex++
        }
    }

    // change all non zero numbers to zero from lastNonZeroIndex to the end
    for (let i = lastNonZeroIndex; i < nums.length; i++) {
        nums[i] = 0
    }
};




