/**

338. Counting Bits - Easy

https://leetcode.com/problems/counting-bits/description/

Given an integer n, 
return an array ans of length n + 1 such that for each i (0 <= i <= n),
ans[i] is the number of 1's in the binary representation of i.

 
Example 1:
Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10

Example 2:
Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
num ->bits ->  the number of 1
0 --> 0    --> 0
1 --> 1    --> 1
2 --> 10   --> 1
3 --> 11   --> 2
4 --> 100  --> 1
5 --> 101  --> 2
 

Constraints:
0 <= n <= 105
 

Follow up:
- It is very easy to come up with a solution with a runtime of O(n log n). Can you do it in linear time O(n) and possibly in a single pass?
- Can you do it without using any built-in function (i.e., like __builtin_popcount in C++)?

*/

//  O(n log n)
export function countBitsByStringManipulation(n: number): number[] {
    const nums = Array.from({ length: n + 1 }, (_, idx) => idx)
    return nums.map(num => {
        const bits = num.toString(2)
        return bits.split('').reduce((acc, bit) => acc + (bit === '1' ? 1 : 0), 0)
    })
};

export function countBitsByDP(n: number): number[] {

    const nums = Array.from({ length: n + 1 }, (_, idx) => idx)

    for (let i = 0; i < n + 1; i++) {
        // `i & 1` checks if the least significant bit of `i` is 1 or 0.
        // nums[i >> 1] `nums[i >> 1]` represents `i` shifted right by one bit.
        // 1(1)   >> 1 = 0(0)
        // 2(10)  >> 1 = 1(1)
        // 3(11)  >> 1 = 1(1)
        // 4(100) >> 1 = 2(10)
        // 5(101) >> 1 = 2(10) 
        nums[i] = (1 & i) + nums[i >> 1]
    }

    return nums
}

export { countBitsByStringManipulation as solution }