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



function longestOnes(nums: number[], k: number): number {
    let left = 0
    let right = 0

    while (right < nums.length) {
        // k-- when nums[right] = 0
        if (nums[right] === 0) {
            k--
        }

        // move left when k is negative 
        if (k < 0) {
            if (nums[left] === 0) {
                k++;
            }
            left++
        }

        right++
    }



    return right - left
};


export { longestOnes as solution };