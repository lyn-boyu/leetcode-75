/*

334.- Increasing Triplet Subsequence - Medium

https://leetcode.com/problems/increasing-triplet-subsequence/description/

Given an integer array nums, 
return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. 
If no such indices exists, return false.


Example 1:
Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.

Example 2:
Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.

Example 3:
Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
 

Constraints:
1 <= nums.length <= 5 * 105
-231 <= nums[i] <= 231 - 1
 

Follow up: Could you implement a solution that runs in O(n) time complexity and O(1) space complexity?

*/



export function increasingTriplet(nums: number[]): boolean {
    // Initialize two variables to track the smallest and second smallest numbers encountered so far
    let first = Number.MAX_VALUE;
    let second = Number.MAX_VALUE;

    // Iterate through each number in the array
    for (let num of nums) {
        if (num <= first) {
            // If the current number is smaller than or equal to the smallest number encountered so far,
            // update 'first' to be this number
            first = num;
        } else if (num <= second) {
            // If the current number is larger than 'first' but smaller than or equal to the second smallest number,
            // update 'second' to be this number
            second = num;
        } else {
            // If we find a number larger than both 'first' and 'second',
            // it means we have found an increasing triplet subsequence
            return true;
        }
    }

    // If we complete the loop without finding such a triplet, return false
    return false;
};