/**

62. Unique Paths - Medium

https://leetcode.com/problems/unique-paths/description/

There is a robot on an m x n grid. 
The robot is initially located at the top-left corner (i.e., grid[0][0]). 
The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). 
The robot can only move either down or right at any point in time.
Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
The test cases are generated so that the answer will be less than or equal to 2 * 109.

 

Example 1:
----
S, 0, 0, 0, 0, 0, 0
0, 0, 0, 0, 0, 0, 0
0, 0, 0, 0, 0, 0, End
----
Input: m = 3, n = 7
Output: 28

Example 2:
Input: m = 3, n = 2
Output: 3
----
S, 0
0, 0
0, End
----
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down
 

Constraints:
1 <= m, n <= 100

*/

function uniquePaths(m: number, n: number): number {
    const rows = m;
    const cols = n;
    // Step1: Define the state.
    const dp = Array.from({ length: rows }, () => Array(cols).fill(0))

    // Step2: Initialize the base cases.
    dp[0][0] = 1 // The starting point at the top-left corner.

    // Step 3: Fill the table according to the state transition equation.
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            // Think about edge cases
            // Skip the starting point as it's already initialized.
            if (row === 0 && col === 0) {
                continue
            }
            // Step 4: Determin the state transition equation
            if (row === 0) {
                // If in the first row, move from right only
                dp[row][col] = dp[row][col - 1]
            } else if (col === 0) {
                // If in the first column, move from top only
                dp[row][col] = dp[row - 1][col]
            } else {
                // move from top and right
                dp[row][col] = dp[row - 1][col] + dp[row][col - 1]
            }
        }
    }
    // Step 5: Construct the result using DP table
    return dp[m - 1][n - 1]
};


export { uniquePaths as solution }