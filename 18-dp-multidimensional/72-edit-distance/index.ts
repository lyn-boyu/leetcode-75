/**
 
72. Edit Distance - Medium

https://leetcode.com/problems/edit-distance/description/

Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.
You have the following three operations permitted on a word:

- Insert a character
- Delete a character
- Replace a character
 

Example 1:
Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
- horse -> rorse (replace 'h' with 'r')
- rorse -> rose (remove 'r')
- rose -> ros (remove 'e')

Example 2:
Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
- intention -> inention (remove 't')
- inention -> enention (replace 'i' with 'e')
- enention -> exention (replace 'n' with 'x')
- exention -> exection (replace 'n' with 'c')
- exection -> execution (insert 'u')
 

Constraints:
- 0 <= word1.length, word2.length <= 500
- word1 and word2 consist of lowercase English letters.

*/

function minDistance(word1: string, word2: string): number {
    // Step 1: Define the state table
    const m = word1.length;
    const n = word2.length;

    // Initialize the dp table with dimensions (m+1) x (n+1)
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Step 2: Initialize the base states
    // Base case: when one word is empty, the edit distance is the length of the other word
    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }

    // Step 3: Fill the table according to the state transition equation
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // Step 4: Determine the state transition equation
            if (word1[i - 1] === word2[j - 1]) {
                // If characters are the same, no new operation is needed
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                // If characters are different, consider all three operations and take the minimum
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1, // Deletion
                    dp[i][j - 1] + 1, // Insertion
                    dp[i - 1][j - 1] + 1 // Substitution
                );
            }
        }
    }

    // Step 5: Construct the result by using the DP table
    return dp[m][n];
    // Step 6: Think about the edge cases
    // Edge cases are already handled by the base state initialization:
    // - If either word is empty, the result is the length of the other word
}



export { minDistance as solution }