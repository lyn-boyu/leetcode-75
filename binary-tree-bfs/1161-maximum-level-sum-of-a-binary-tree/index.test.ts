/**
 * 
1161. Maximum Level Sum of a Binary Tree - Medium
 
https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/description

Given the root of a binary tree, the level of its root is 1, 
the level of its children is 2, and so on.
Return the smallest level x such that the sum of all the values of nodes at level x is maximal.


Example 1:
Input: root = [1,7,0,7,-8,null,null]
Output: 2
Explanation: 
Level 1 sum = 1.
Level 2 sum = 7 + 0 = 7.
Level 3 sum = 7 + -8 = -1.
So we return the level with the maximum sum which is level 2.

Example 2:
Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
Output: 2

Constraints:
The number of nodes in the tree is in the range [1, 104].
-105 <= Node.val <= 105

*/



import { expect, test, describe } from "bun:test";
import { solution } from './index'
import { BinaryTreeNode } from "../../common/binary-tree";

describe("1161. Maximum Level Sum of a Binary Tree - Medium", () => {

    test("Input1:root = [1,7,0,7,-8,null,null] ", () => {
        const root = BinaryTreeNode.createFromArray([1, 7, 0, 7, -8, null, null]);
        const result = solution(root);
        expect(result).toEqual(2);
    });

    test("Input2: root = [989,null,10250,98693,-89388,null,null,null,-32127] ", () => {
        const root = BinaryTreeNode.createFromArray([989, null, 10250, 98693, -89388, null, null, null, -32127]);
        const result = solution(root);
        expect(result).toEqual(2);
    });

});