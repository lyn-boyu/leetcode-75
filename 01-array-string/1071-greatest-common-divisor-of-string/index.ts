/*
1071. Greatest Common Divisor of Strings  - Easy

https://leetcode.com/problems/greatest-common-divisor-of-strings/description/

For two strings s and t, we say "t divides s" if and only if
 s = t + t + t + ... + t + t
(i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, 
return the largest string x such that x divides both str1 and str2.

 
Example 1:
Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

Example 2:
Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"

Example 3:
Input: str1 = "LEET", str2 = "CODE"
Output: ""
 

Constraints:
1 <= str1.length, str2.length <= 1000
str1 and str2 consist of English uppercase letters.
*/


export function gcdOfStrings(str1: string, str2: string): string {
    // a is bigger, b is smaller
    const gcd = (a: number, b: number) => {
        while (b !== 0) {
            const temp = b
            // b is the remainder of a % b
            b = a % b;
            // assign bigger value to a
            a = temp
        }
        return a
    }

    if (str1 + str2 !== str2 + str1) {
        return ''
    }

    const idx = str1.length > str2.length ? gcd(str1.length, str2.length) : gcd(str2.length, str1.length)
    return str1.slice(0, idx)
};


export function solution1(str1: string, str2: string): string {
    let temp = ''
    let gst = ''

    const isGcd = (gcd: string, str: string) => str.replaceAll(gcd, '').length === 0

    for (let char of str1) {
        temp += char
        if (isGcd(temp, str1) && isGcd(temp, str2)) {
            gst = temp
        }
    }
    // if cannot find any gst return empty string
    return gst
}