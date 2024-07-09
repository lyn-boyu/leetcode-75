/**

746. Min Cost Climbing Stairs - Easy

https://leetcode.com/problems/min-cost-climbing-stairs/description/

You are given an integer array cost where cost[i] is the cost of ith step on a staircase. 
Once you pay the cost, you can either climb one or two steps.
You can either start from the step with index 0, or the step with index 1.
Return the minimum cost to reach the top of the floor.


Example 1:
Input: cost = [10,15,20]
Output: 15
Explanation: You will start at index 1.
- Pay 15 and climb two steps to reach the top.
The total cost is 15.

Example 2:
Input: cost = [1,100,1,1,1,100,1,1,100,1]
Output: 6
Explanation: You will start at index 0.
- Pay 1 and climb two steps to reach index 2.
- Pay 1 and climb two steps to reach index 4.
- Pay 1 and climb two steps to reach index 6.
- Pay 1 and climb one step to reach index 7.
- Pay 1 and climb two steps to reach index 9.
- Pay 1 and climb one step to reach the top.
The total cost is 6.
 

Constraints:
2 <= cost.length <= 1000
0 <= cost[i] <= 999

*/

function minCostClimbingStairs(cost: number[]): number {
    const topIdx = cost.length
    // Step1: Define the state.
    // dp[i] represents the min cost of current stair
    const dp = new Array(cost.length + 1).fill(0);

    // Step2: Initialize the base cases.
    // can start as index 1 or 0
    // can climb one or two steps which means the initial cost is 0
    dp[0] = 0
    dp[1] = 0
    // dp[2] = Math.min(0+15,0+10) = 10
    // dp[3] = Math.min(10+20,0+15) = 15 

    // Step 3: Fill the table according to the state transition equation.
    // reach the top means stairs.length + 1
    for (let i = 2; i <= topIdx; i++) {
        // Step 4: Determine the state transition equation.
        const climbOneStepCost = dp[i - 1] + cost[i - 1]
        const climbTwoStepCost = dp[i - 2] + cost[i - 2]
        dp[i] = Math.min(climbOneStepCost, climbTwoStepCost)
    }

    // Step 5: Construct the result using the DP table.
    return dp[topIdx]
};

export { minCostClimbingStairs as solution }

/**
 
# Time Complexity
the total time complexity is \(O(n)\).
- **Initialization of the dp array:**  This takes \(O(n+1)\) time, where \(n\) is the length of the `cost` array.
- **Filling the dp array:**  The loop runs from 2 to `topIdx` (which is \(n\)), and each iteration involves constant time operations. Thus, this takes \(O(n)\) time.


# Space Complexity
- **dp array:** The space used by the dp array is \(O(n+1)\).
Thus, the space complexity is \(O(n)\).

 */
