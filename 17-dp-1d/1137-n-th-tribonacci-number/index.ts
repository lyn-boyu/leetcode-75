/**
1137. N-th Tribonacci Number - Easy

https://leetcode.com/problems/n-th-tribonacci-number/description/

The Tribonacci sequence Tn is defined as follows: 
T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
Given n, return the value of Tn.

 

Example 1:
Input: n = 4
Output: 4
Explanation:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4

Example 2:
Input: n = 25
Output: 1389537
 

Constraints:
0 <= n <= 37
The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.

*/

/**
 * Calculates the nth Tribonacci number using dynamic programming.
 * The Tribonacci sequence T(n) is defined as:
 * T(0) = 0, T(1) = 1, T(2) = 1, and T(n) = T(n-1) + T(n-2) + T(n-3) for n >= 3.
 * 
 * @param n - The index of the Tribonacci number to calculate.
 * @returns The nth Tribonacci number.
 */

function tribonacci(n: number): number {
    // Step 1: Define the state.
    // dp[i] represents the i-th Tribonacci number.
    const dp = new Array(n).fill(0)

    // Step 3: Initialize the base cases.
    dp[0] = 0; // T(0) = 0
    dp[1] = 1; // T(1) = 1
    dp[2] = 1; // T(2) = 1

    // Step 4: Fill the table according to the state transition equation.
    for (let i = 3; i <= n; i++) {
        // Step 2: Determine the state transition equation.
        // T(i) = T(i-1) + T(i-2) + T(i-3) for i >= 3
        dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1]
    }

    // Step 5: Construct the result using the DP table.
    return dp[n]

};

export { tribonacci as solution }
