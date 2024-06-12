/*
1768. Merge Strings Alternately  - Easy

Example 1:
Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:  p   q   r
merged: a p b q c r


Example 2:
Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:  p   q   r   s
merged: a p b q r   s

Example 3:
Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a    b     c   d
word2:  p    q 
merged: a p  b  q  c   d
*/


export function mergeAlternately(word1: string, word2: string): string {
    return ''
};