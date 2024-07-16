/**
 
136. Single Number - Easy

https://leetcode.com/problems/single-number/description/

Given a non-empty array of integers nums, 
every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.


Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1
 

Constraints:
1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.

*/





function singleNumber(nums: number[]): number {
    let unique = 0

    /*
        To meet the problem's requirements of linear time complexity and constant extra space, 
        we can use the properties of the bitwise XOR operation. The bitwise XOR has an important property:
        - For any integer a, it holds that a ^ a = 0 and a ^ 0 = a.
        - The XOR operation is commutative, meaning a ^ b ^ a = b ^ (a ^ a) = b ^ 0 = b.
    */
    for (let m of nums) {
        unique = m ^ unique
    }

    return unique
};


/**
 function singleNumber(nums: number[]): number {
    // The time complexity of sorting is O(n log n), use extra space
    // Quicksort use O(log n) space
    // Mergesort use O(n) space
    // Insertion Sort use O(1) space
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        const prev = nums[i - 1]
        const curr = nums[i]
        const next = nums[i + 1]

        // if cannot pair with the neighbour letters 
        if ((prev !== curr) && (curr !== next)) {
            return curr
        }
    }
};
*/


export { singleNumber as solution }