/**
2215. Find the Difference of Two Arrays - Easy
 
Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.


Example 1:
Input: nums1 = [1,2,3], nums2 = [2,4,6]
Output: [[1,3],[4,6]]
Explanation:
For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].

Example 2:
Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
Output: [[3],[]]
Explanation:
For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
Every integer in nums2 is present in nums1. Therefore, answer[1] = [].
 

Constraints:
1 <= nums1.length, nums2.length <= 1000
-1000 <= nums1[i], nums2[i] <= 1000

*/


function findDifference(nums1: number[], nums2: number[]): number[][] {
    // prepare two sets, one for each array, to store unique numbers, this can reduce the time complexity to O(n)
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    // iterate over the first set and check if the element is in the second set, do the same for the second set
    const uniqueNumsInSet1 = [] as number[];
    const uniqueNumsInSet2 = [] as number[];

    // the time complexity set.forEach() is O(n)
    set1.forEach((num) => {
        // the time complexity of has() is O(1)
        if (!set2.has(num)) {
            uniqueNumsInSet1.push(num);
        }
    });
    // the time complexity set.forEach() is O(n)
    set2.forEach((num) => {
        // the time complexity of has() is O(1)
        if (!set1.has(num)) {
            uniqueNumsInSet2.push(num);
        }
    });

    return [uniqueNumsInSet1, uniqueNumsInSet2]
};


export { findDifference as solution };

