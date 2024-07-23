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

    let lastNonZeroIndex = 0; // Index of the last non-zero element found

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroIndex] = nums[i];
            lastNonZeroIndex++
        }
    }

    for (let i = lastNonZeroIndex; i < nums.length; i++) {
        nums[i] = 0
    }

};

export function whileSolution(nums: number[]): void {

    let i = 0
    let zeroCount = 0

    while (i < nums.length) {
        if (nums[i] === 0) {
            // remove the zero from array
            nums.splice(i, 1)
            // push zero to the end
            zeroCount++
        } else {
            i++
        }
    }

    // padding end with zero 
    while (zeroCount > 0) {
        nums.push(0)
        zeroCount--
    }
}



