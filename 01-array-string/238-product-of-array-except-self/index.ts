/*

238. Product of Array Except Self  - Medium

https://leetcode.com/problems/product-of-array-except-self/description/

Given an integer array nums, 
return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.


Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:
2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

*/



export function productExceptSelf(nums: number[]): number[] {
    const n = nums.length
    const answers = new Array(n).fill(1)
    const rightProducts = new Array(n).fill(1)
    const leftProducts = new Array(n).fill(1)

    // fill left 
    let leftProduct = 1
    for (let i = 0; i < n; i++) {
        leftProduct = leftProduct * nums[i]
        leftProducts[i] = leftProduct
    }

    // fill right 
    let rightProduct = 1
    for (let i = n - 1; i >= 0; i--) {
        rightProduct = rightProduct * nums[i]
        rightProducts[i] = rightProduct
    }

    // get answer
    for (let i = 0; i < n; i++) {
        answers[i] = (leftProducts[i - 1] ?? 1) * (rightProducts[i + 1] ?? 1)
    }

    return answers
};


export function noExtraSpaceSolution(nums: number[]): number[] {
    const n = nums.length
    const answers = new Array(n).fill(1)

    let left = 1;
    for (let i = 0; i < n; i++) {
        answers[i] = left
        left = left * nums[i]
    }

    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
        answers[i] = right * answers[i]
        right = right * nums[i]
    }

    return answers
}