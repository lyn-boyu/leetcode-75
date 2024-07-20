/**
 
739. Daily Temperatures - Medium

https://leetcode.com/problems/daily-temperatures/description/

Given an array of integers temperatures represents the daily temperatures, 
return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. 
If there is no future day for which this is possible, keep answer[i] == 0 instead.


Example 1:
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

Example 2:
Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]

Example 3:
Input: temperatures = [30,60,90]
Output: [1,1,0]
 

Constraints:
1 <= temperatures.length <= 105
30 <= temperatures[i] <= 100

*/


import { expect, test, describe } from "bun:test";
import { dailyTemperatures } from './index'


describe("739. Daily Temperatures - Medium", () => {

    test('Input1: temperatures = [73,74,75,71,69,72,76,73]', () => {
        const temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
        expect(dailyTemperatures(temperatures)).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
    });

    test('Input2: temperatures = [30,40,50,60]', () => {
        const temperatures = [30, 40, 50, 60]
        expect(dailyTemperatures(temperatures)).toEqual([1, 1, 1, 0]);
    });

    test('Input3: temperatures = [30,60,90]', () => {
        const temperatures = [30, 60, 90]
        expect(dailyTemperatures(temperatures)).toEqual([1, 1, 0]);
    });

});