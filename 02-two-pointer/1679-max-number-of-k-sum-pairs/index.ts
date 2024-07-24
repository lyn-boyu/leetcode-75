
/*

1679. Max Number of K-Sum Pairs - Medium

https://leetcode.com/problems/max-number-of-k-sum-pairs/description/

You are given an integer array nums and an integer k.
In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.
Return the maximum number of operations you can perform on the array.

Example 1:
Input: nums = [1,2,3,4], k = 5
Output: 2
Explanation: Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.

Example 2:
Input: nums = [3,1,3,4,3], k = 6
Output: 1
Explanation: Starting with nums = [3,1,3,4,3]:
- Remove the first two 3's, then nums = [1,4,3]
There are no more pairs that sum up to 6, hence a total of 1 operation.
 

Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
1 <= k <= 109

*/

// BruteForce, Time complexity: O(n^2)
export function bruteForceSolution(nums: number[], k: number): number {
    let count = 0
    let firstIdx = 0
    let secondIdx = 0

    while (firstIdx < nums.length) {
        const firstNum = nums[firstIdx]
        const target = k - firstNum
        secondIdx = firstIdx + 1;
        let find = false
        for (; secondIdx < nums.length; secondIdx++) {
            if (nums[secondIdx] === target) {
                // remove num pairs
                nums.splice(secondIdx, 1)
                nums.splice(firstIdx, 1)
                // increase count
                count++
                find = true
                break;
            }
        }
        if (!find) {
            firstIdx++
        }
    }

    return count
};

// Time complexity O(N) with map
export function mapSolution(nums: number[], k: number): number {
    let count = 0
    const map = new Map()

    nums.forEach(num => {
        const count = map.get(num) ?? 0
        map.set(num, count + 1)
    })

    nums.forEach(num => {
        const target = k - num
        const targetCount = map.get(target) ?? 0
        const numCount = map.get(num) - 1
        if ((target !== num && targetCount > 0) || (target === num && targetCount > 2)) {
            map.set(num, numCount - 1)
            map.set(target, targetCount - 1)
            count++
            return
        }
    })

    return count
};



export function maxOperations(nums: number[], k: number): number {
    let count = 0;
    const map = new Map() // A map to store the frequency of each number

    for (let num of nums) {
        const target = k - num;
        if (map.get(target) > 0) {
            // If found, decrement the count of the target value in the map
            const targetCount = map.get(target) ?? 0
            map.set(target, targetCount - 1)
            count++
        } else {
            // If target value is not found or its count is 0, increment the count of num in the map
            const numCount = map.get(num) ?? 0
            map.set(num, numCount + 1)
        }
    }

    return count
}

