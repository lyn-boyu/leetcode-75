/**
 
435. Non-overlapping Intervals - Medium

https://leetcode.com/problems/non-overlapping-intervals/description/

Given an array of intervals intervals where intervals[i] = [starti, endi], 
return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Example 1:
Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.

Example 2:
Input: intervals = [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.

Example 3:
Input: intervals = [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
 

Constraints:
1 <= intervals.length <= 105
intervals[i].length == 2
-5 * 104 <= starti < endi <= 5 * 104

*/


import { expect, test, describe } from "bun:test";
import { eraseOverlapIntervals } from './index'
import { TestData } from './test-data'


describe("435. Non-overlapping Intervals - Medium", () => {

    test('Input1: intervals = [[1,2],[2,3],[3,4],[1,3]]', () => {
        const intervals = [[1, 2], [2, 3], [3, 4], [1, 3]]
        expect(eraseOverlapIntervals(intervals)).toEqual(1);
    });

    test('Input2: intervals = [[1,2],[1,2],[1,2]]', () => {
        const intervals = [[1, 2], [1, 2], [1, 2]]
        expect(eraseOverlapIntervals(intervals)).toEqual(2);
    });

    test('Input3: intervals = [[1,2],[2,3]]', () => {
        const intervals = [[1, 2], [2, 3]]
        expect(eraseOverlapIntervals(intervals)).toEqual(0);
    });

    test('Input4: intervals =[[1,100],[11,22],[1,11],[2,12]]', () => {
        const intervals = [[1, 100], [11, 22], [1, 11], [2, 12]]
        expect(eraseOverlapIntervals(intervals)).toEqual(2);
    });
    test('Input4: bigdata', () => {
        const intervals = TestData
        expect(eraseOverlapIntervals(intervals)).toEqual(79008);
    });



});