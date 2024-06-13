/**
 
1207. Unique Number of Occurrences - Easy

Given an array of integers arr, 
return true if the number of occurrences of each value in the array is unique or false otherwise.


Example 1:
Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

Example 2:
Input: arr = [1,2]
Output: false

Example 3:
Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
 

Constraints:
1 <= arr.length <= 1000
-1000 <= arr[i] <= 1000

*/


import { expect, test, describe } from "bun:test";
import { solution } from './index'

describe("1207. Unique Number of Occurrences - Easy ", () => {

    test("Input1: arr = [1,2,2,1,1,3] ", () => {
        let arr = [1, 2, 2, 1, 1, 3]
        const result = solution(arr);
        expect(result).toEqual(true);
    });

    test("Input2: arr = [1,2] ", () => {
        let arr = [1, 2, 2, 1, 1, 3]
        const result = solution(arr);
        expect(result).toEqual(false);
    });

    test("Input3: arr =  [-3,0,1,-3,1,1,1,-3,10,0] ", () => {
        let arr = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]
        const result = solution(arr);
        expect(result).toEqual(true);
    });

});