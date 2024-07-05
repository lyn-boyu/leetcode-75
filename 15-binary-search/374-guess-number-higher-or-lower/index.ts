/**
374. Guess Number Higher or Lower - Easy

https://leetcode.com/problems/guess-number-higher-or-lower/

We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.
Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

- -1: Your guess is higher than the number I picked (i.e. num > pick).
- 1: Your guess is lower than the number I picked (i.e. num < pick).
- 0: your guess is equal to the number I picked (i.e. num == pick).

Return the number that I picked.

 
Example 1:
Input: n = 10, pick = 6
Output: 6

Example 2:
Input: n = 1, pick = 1
Output: 1

Example 3:
Input: n = 2, pick = 1
Output: 1
 

Constraints:
1 <= n <= 231 - 1
1 <= pick <= n
*/


let GLOBALS = {
    pick: -1
}

export const setPickValue = (value: number) => GLOBALS.pick = value


/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */
const guess = (num: number) => {
    if (num === GLOBALS.pick) {
        return 0;
    } else if (num < GLOBALS.pick) {
        return 1;
    } else {
        return -1;
    }
}


function guessNumber(n: number): number {
    let low = 1
    let high = n

    // start with middle number
    let currentGuess = -1
    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        const result = guess(mid)

        if (result === 0) {
            return mid
        }
        //  -1: Your guess is higher than the number I picked(i.e.num > pick).
        if (result === -1) {
            high = mid - 1
        }
        //  1: Your guess is lower than the number I picked(i.e.num < pick).
        if (result === 1) {
            low = mid + 1
        }
    }
    return currentGuess
};

export { guessNumber as solution }
