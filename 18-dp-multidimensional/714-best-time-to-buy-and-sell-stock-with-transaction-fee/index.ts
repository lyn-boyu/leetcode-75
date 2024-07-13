/**

714. Best Time to Buy and Sell Stock with Transaction Fee - Medium

https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/description/

You are given an array prices where prices[i] is the price of a given stock on the ith day, 
and an integer fee representing a transaction fee.

Find the maximum profit you can achieve. 
You may complete as many transactions as you like, 
but you need to pay the transaction fee for each transaction.

Note:
You may not engage in multiple transactions simultaneously 
(i.e., you must sell the stock before you buy again).
The transaction fee is only charged once for each stock purchase and sale.
 

Example 1:
Input: prices = [1,3,2,8,4,9], fee = 2
Output: 8
Explanation: The maximum profit can be achieved by:
- Buying at prices[0] = 1
- Selling at prices[3] = 8
- Buying at prices[4] = 4
- Selling at prices[5] = 9
The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8.

Example 2:
Input: prices = [1,3,7,5,10,3], fee = 3
Output: 6
 

Constraints:
1 <= prices.length <= 5 * 10^4
1 <= prices[i] < 5 * 10^4
0 <= fee < 5 * 10^4

*/





/**
- Space complexity: O(n)
- Time complexity: O(n)
*/
export function tableSolution(prices: number[], fee: number): number {

    // Step 1: Define State 
    // dp[i][0] means max profit on day i without holding stock
    // dp[i][1] means max profit on day i while holding stock
    const n = prices.length;
    // Edge cases
    if (n === 0) return 0;

    const dp = Array.from({ length: n }, () => [0, 0]);

    // Step 2: Initialize Base Cases
    dp[0][0] = 0;  // No stock held
    dp[0][1] = -prices[0];  // Bought stock on day 0

    // Step 3: Fill the table using state transition equations
    for (let i = 1; i < n; i++) {
        // Step 4: Determine state transition equations
        // Not holding stock on day i:
        // - Option 1: Sold stock which was held on day i-1
        // - Option 2: Kept cash from day i-1
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee);

        // Holding stock on day i:
        // - Option 1: Bought stock on day i
        // - Option 2: Kept stock from day i-1
        dp[i][1] = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1]);
    }

    // Step 5: Construct the result using dp table
    return dp[n - 1][0];  // Maximum profit on the last day without holding stock

}

/**
- Space complexity: O(1)
- Time complexity: O(n)
*/
export function rollingArraySolution(prices: number[], fee: number): number {
    let n = prices.length;
    if (n === 0) return 0; // If there are no prices, return 0 profit.

    let hold = -prices[0]; // Initialize hold: Maximum profit when holding a stock after the first day.
    let cash = 0; // Initialize cash: Maximum profit when not holding a stock after the first day.

    for (let i = 1; i < n; i++) {
        // Calculate the new hold state: either keep holding the stock or buy the stock today.
        let newHold = Math.max(hold, cash - prices[i]);

        // Calculate the new cash state: either keep not holding the stock or sell the stock today.
        let newCash = Math.max(cash, hold + prices[i] - fee);

        // Update hold and cash for the next iteration.
        hold = newHold;
        cash = newCash;
    }

    // The maximum profit is in the cash state, as we end up not holding any stock.
    return cash;
}

