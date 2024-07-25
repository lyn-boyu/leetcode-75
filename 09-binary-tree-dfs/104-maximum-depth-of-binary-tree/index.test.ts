/**
 
104. Maximum Depth of Binary Tree - Easy

https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes
along the longest path from the root node down to the farthest leaf node.


Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:
Input: root = [1,null,2]
Output: 2
 

Constraints:
The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100

*/



import { expect, test, describe } from "bun:test";
import { solution } from './index'
import { BinaryTreeNode } from "../../common/binary-tree";

describe(" 104. Maximum Depth of Binary Tree - Easy ", () => {

    test("Input1: root = [3,9,20,null,null,15,7]", () => {
        const root = BinaryTreeNode.createFromArray([1, 2, 3, 4, 5]);
        const result = solution(root);
        expect(result).toEqual(3);
    });

    test("Input2: root = [1,null,2] ", () => {
        const root = BinaryTreeNode.createFromArray([1, null, 2]);
        const result = solution(root);
        expect(result).toEqual(2);
    });

});