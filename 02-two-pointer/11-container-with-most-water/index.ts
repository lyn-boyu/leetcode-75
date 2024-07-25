
/*
11. Container With Most Water - Medium

https://leetcode.com/problems/container-with-most-water/description/

You are given an integer array height of length n. 
There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, 
such that the container contains the most water.

Return the maximum amount of water a container can store.
Notice that you may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: 
The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1
 

Constraints:
n == height.length
2 <= n <= 105
0 <= height[i] <= 104

*/




/**

The key to the two-pointer method is to compare the heights pointed to by the left and right pointers at each step and move the pointer with the smaller height towards the center. 
This approach gradually narrows the range and helps to find the maximum area.

 */
export function maxArea(height: number[]): number {

    let left = 0
    let right = height.length - 1
    let max = 0

    while (left < right) {
        const h = Math.min(height[right], height[left])
        const w = Math.abs(left - right)
        const area = h * w

        // update the area
        max = Math.max(max, area)

        // move smaller bar to find bigger result
        if (height[right] > height[left]) {
            left++
        } else {
            right--
        }
    }

    return max
};


