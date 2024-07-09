/**

198. House Robber - Medium

https://leetcode.com/problems/house-robber/description/

You are a professional robber planning to rob houses along a street. 
Each house has a certain amount of money stashed, 
the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
Given an integer array nums representing the amount of money of each house, 
return the maximum amount of money you can rob tonight without alerting the police.

 

Example 1:
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

Example 2:
Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
 

Constraints:
1 <= nums.length <= 100
0 <= nums[i] <= 400

*/

function rob(nums: number[]): number {
    const n = nums.length;
    if (n === 0) return 0;
    if (n === 1) return nums[0];
    if (n === 2) return Math.max(nums[0], nums[1]);
    if (n === 3) return Math.max(nums[0] + nums[2], nums[1]);


    // Step1: Define the state.
    const dp = new Array(nums.length).fill(0)

    // Step2: Initialize the base cases.
    dp[0] = nums[0] ?? 0
    dp[1] = nums[1] ?? 0
    dp[2] = (nums[2] ?? 0) + nums[0]


    // Step 3: Fill the table according to the state transition equation.   
    for (let i = 3; i < nums.length; i++) {
        // Step 4: Determin the state transition equation
        // avoid adjecent house
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 3] + nums[i])
    }

    // Step 5: Construct the result using DP table
    return Math.max(dp[nums.length - 1], dp[nums.length - 2])

};

export { rob as solution }

/**
 # Time Complexity: O(n)
  -  O(n): new Array(nums.length).fill(0)
  -  O(n): for (let i = 2; i < nums.length; i++)

 # Space: Complexity: O(n)
  - O(n): const dp = new Array(nums.length).fill(0)
 */