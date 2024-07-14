/**
 
1143. Longest Common Subsequence - Medium

https://leetcode.com/problems/longest-common-subsequence/description 

Given two strings text1 and text2, return the length of their longest common subsequence. 
If there is no common subsequence, return 0.
A subsequence of a string is a new string generated from the original string with some characters 
(can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.



Example 1:
Input: text1 = "abcde", text2 = "ace"
Output: 3
Explanation: The longest common subsequence is "ace" and its length is 3.

Example 2:
Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.

Example 3:
Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.


Constraints:
1 <= text1.length, text2.length <= 1000
text1 and text2 consist of only lowercase English characters.

*/

function longestCommonSubsequence(text1: string, text2: string): number {
    // Get the lengths of both input strings
    const m = text1.length;
    const n = text2.length;

    // Step 1: Define the state table
    // dp[i][j] will store the length of the longest common subsequence of text1[0..i-1] and text2[0..j-1]
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Step 2: Initialize the base cases
    // If one of the strings is empty, the LCS length is 0
    // This is already handled by the initialization with zeros

    // Step 3: Fill the table using the state transition equations
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // Step 4: Determine the state transition equation
            if (text1[i - 1] === text2[j - 1]) {
                // If the characters match, extend the LCS found so far by 1
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                // If they don't match, take the maximum LCS by either
                // ignoring the current character of text1 or text2
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // Step 5: Construct the result using the DP table
    // The length of the longest common subsequence of text1 and text2 is in dp[m][n]
    return dp[m][n];
}



export { longestCommonSubsequence as solution }