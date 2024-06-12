/*
Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
*/



import { expect, test, describe } from "bun:test";
import { mergeAlternately } from './index'

describe("1768-merge-strings-alternately", () => {
    test("Input1: word1 = 'abc', word2 = 'pqr' ", () => {
        const result = mergeAlternately('abc', 'pqr');
        expect(result).toBe('apbqcr');
    });

    test("Input2: word1 = \"ab\", word2 = \"pqrs\"", () => {
        let word1 = "ab", word2 = "pqrs";
        const result = mergeAlternately(word1, word2);
        expect(result).toBe('apbqrs');
    });
    test("Input3: word1 = \"abcd\", word2 = \"pq\"", () => {
        let word1 = "abcd", word2 = "pq"
        const result = mergeAlternately(word1, word2);
        expect(result).toBe('apbqcd');
    });
});