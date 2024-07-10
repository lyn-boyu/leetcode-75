/**

790. Domino and Tromino Tiling - Medium

https://leetcode.com/problems/domino-and-tromino-tiling/description/


You have two types of tiles: a 2 x 1 domino shape and a tromino shape. 
You may rotate these shapes.
** domino
```
XX
```

** tromino: The L shape tile
```
X   XX   XX
XX   X   X
```

Given an integer n, return the number of ways to tile an 2 x n board. 
Since the answer may be very large, return it modulo 10^9 + 7.
In a tiling, every square must be covered by a tile. 
Two tilings are different if and only if there are two 4-directionally adjacent cells on the board such that exactly one of the tilings has both squares occupied by a tile.


Example 1:
Input: n = 3
Output: 5
Explanation:
XYZ XXZ XYY XXY XYY
XYZ YYZ XZZ XYY XXY
The five different ways are show above.
visual explanation: https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-790-domino-and-tromino-tiling/ 


Example 2:
Input: n = 1
Output: 1


Constraints:
1 <= n <= 1000

*/


import { expect, test, describe } from "bun:test";
import { solution } from './index'


describe("790. Domino and Tromino Tiling - Medium", () => {

    test('Input1: n = 3', () => {
        const n = 3
        expect(solution(n)).toEqual(5);
    });

    test('Input1: n = 1', () => {
        const n = 1
        expect(solution(n)).toEqual(1);
    });

    test('Input1: n = 4', () => {
        const n = 4
        expect(solution(n)).toEqual(11);
    });

});