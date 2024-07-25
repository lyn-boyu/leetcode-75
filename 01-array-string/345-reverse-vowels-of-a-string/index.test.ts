/*

345. Reverse Vowels of a String - Easy

https://leetcode.com/problems/reverse-vowels-of-a-string/description/

Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, 
more than once.
 

Example 1:
Input: s = "hello"
Output: "holle"

Example 2:
Input: s = "leetcode"
Output: "leotcede"
 

Constraints:
1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
 

*/



import { expect, test, describe } from "bun:test";
import { reverseVowels } from './index'

describe("345. Reverse Vowels of a String - Easy", () => {

    test('Input1: s = "hello"', () => {
        const s = "hello"
        expect(reverseVowels(s)).toEqual('holle');
    });

    test('Input1: s = "leetcode"', () => {
        const s = "leetcode"
        expect(reverseVowels(s)).toEqual('leotcede');
    });

});