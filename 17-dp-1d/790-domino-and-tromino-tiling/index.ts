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
XYZ XXZ XYY XXY XYY
XYZ YYZ XZZ XYY XXY
Explanation: The five different ways are show above.



Example 2:
Input: n = 1
Output: 1


Constraints:
1 <= n <= 1000

*/

function numTilings(N: number): number {
    const MOD = 1000000007;

    // Step1: define the state. 
    // dp1[i] store the total ways of tiling
    const dp1 = new Array(N + 1).fill(0);
    // dp2[i] store the way to form L
    const dp2 = new Array(N + 1).fill(0);

    // Step2: inital the base cases.
    dp1[0] = 1;
    //  X
    //  X
    dp1[1] = 1;
    //  XX  XY
    //  YY  XY
    dp1[2] = 2;

    // no L tromino can put
    dp2[1] = 0;
    dp2[2] = 1;

    // Step3: Fill the DP table according to the state transition equation
    for (let i = 3; i <= N; i++) {
        // Step4: Determin the state transition equation
        /**
         - dp1[i - 1]:  add one domino vertically based on dp1[i - 1] solutions
         - dp1[i - 2]:  add two domino vertically based on dp1[i - 2] solutions
         - dp2[i - 1] * 2:  fill blank L space by using tromino  *2 means different direction
         */
        dp1[i] = (dp1[i - 1] + dp1[i - 2] + dp2[i - 1] * 2) % MOD;
        //  XX   XX  
        //  X    Z  
        dp2[i] = (dp1[i - 2] + dp2[i - 1])
    }

    // Step5: Construct the result using DP table 
    return dp1[N];
};

export { numTilings as solution }
