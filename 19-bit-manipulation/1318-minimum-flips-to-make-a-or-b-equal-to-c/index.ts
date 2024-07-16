/**
 * 
 
1318. Minimum Flips to Make a OR b Equal to c - Medium

https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/description/

Given 3 positives numbers a, b and c. 
Return the minimum flips required in some bits of a and b to make ( a OR b == c ). 
(bitwise OR operation).
Flip operation consists of change any single bit 1 to 0 or change the bit 0 to 1 in their binary representation.

 
Example 1:
Input: a = 2, b = 6, c = 5
Output: 3
Explanation: 
After flips a = 1 , b = 4 , c = 5 such that (a OR b == c)

before       after
---------    ---------
0010 -> a    0001 -> a need flip 2 time
--**
0110 -> b    0100 -> b need flip 1 time 
--*-
---- OR
0101 -> c

Explanation of OR Operation with Truth Table
The OR operation, denoted by the symbol |, is a basic logical operation that outputs 1 (true) when at least one of the input bits is 1. 
The only case when the OR operation outputs 0 (false) is when both input bits are 0.
| X | Y | X OR Y |
|---|---|-----|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |




Example 2:
Input: a = 4, b = 2, c = 7
Output: 1

Example 3:
Input: a = 1, b = 2, c = 3
Output: 0
 

Constraints:
1 <= a <= 10^9
1 <= b <= 10^9
1 <= c <= 10^9


*/


function minFlips(a: number, b: number, c: number): number {
    let flipCount = 0

    while (a > 0 || b > 0 || c > 0) {
        const bitA = a & 1
        const bitB = b & 1
        const bitC = c & 1

        // bitA and bitB must flip to zero
        if (bitC === 0) {
            flipCount += bitA === 1 ? 1 : 0
            flipCount += bitB === 1 ? 1 : 0
        } else {
            //  bitA or bitB must flip to one
            flipCount += ((bitA | bitB) === 0) ? 1 : 0
        }
        a = a >> 1
        b = b >> 1
        c = c >> 1
    }

    return flipCount
};

export { minFlips as solution }