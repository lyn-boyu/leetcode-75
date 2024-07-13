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
    // Step6: Think about the edge cases
    // if text2 is empty, then the longest common subsequence equal 0
    const m = text1.length
    const n = text2.length
    if (m === 0 || n === 0) {
        return 0
    }

    // Step1: Define the state
    // dp[i][j] store the longest common subsequence of text1[i] and text2[j]
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))

    // Step2: Initialize the base cases
    // dp[text1.length][i] and dp[i][text1.length] is filled with 0 

    //  Step3: Fill the table using the state transition equation
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            // Step4:  Determin the state transition equation
            if (text1[i] === text2[j]) {
                // if text1[i] and text2[j] are equal, these two characters are part of the lcs"
                dp[i][j] = dp[i + 1][j + 1] + 1
            } else {
                // if cannot find lcs in  dp[i + 1][j + 1] then try different path
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1])
            }
        }
    }

    // Step5: Contruct the result using DP table
    return dp[0][0]
};


export { longestCommonSubsequence as solution }