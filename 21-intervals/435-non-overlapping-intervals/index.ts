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




export function eraseOverlapIntervals(intervals: number[][]): number {

    if (intervals.length === 0) return 0
    intervals.sort((a, b) => a[1] - b[1])

    let count = 0
    let currentEnd = intervals[0][1]

    for (let i = 1; i < intervals.length; i++) {
        const nextStart = intervals[i][0]
        if (nextStart < currentEnd) {
            count++
        } else {
            currentEnd = intervals[i][1]
        }
    }

    return count
};


export function firstTry(intervals: number[][]): number {
    const isOverlapped = (interval1: number[], interval2: number[]) => {
        const [start1, end1] = interval1;
        const [start2, end2] = interval2
        return start1 < end2 && start2 < end1
    }

    intervals.sort((a, b) => a[0] - b[0])

    const removed = []

    let curr = intervals.shift()
    let next = intervals.shift()

    while (next && curr) {
        if (isOverlapped(curr, next)) {
            // keep the item with smaller end number
            const removedItem = curr[1] < next[1] ? next : curr
            removed.push(removedItem)
            // if next is not removed assign next to current
            curr = curr[1] < next[1] ? curr : next
            next = intervals.shift()
        } else {
            // check next two item
            curr = next
            next = intervals.shift()
        }
    }

    return removed.length
}