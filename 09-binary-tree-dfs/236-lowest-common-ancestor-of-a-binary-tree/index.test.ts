/**
 
236. Lowest Common Ancestor of a Binary Tree - Medium

https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
According to the definition of LCA on Wikipedia:
“The lowest common ancestor is defined between two nodes p and q as the lowest node in T 
that has both p and q as descendants (where we allow a node to be a descendant of itself).”

 

Example 1:
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.

Example 2:
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.

Example 3:
Input: root = [1,2], p = 1, q = 2
Output: 1
 

Constraints:
The number of nodes in the tree is in the range [2, 105].
-109 <= Node.val <= 109
All Node.val are unique.
p != q
p and q will exist in the tree.

*/



import { expect, test, describe } from "bun:test";
import { solution } from './index'
import { BinaryTreeNode } from "../../common/binary-tree";

describe("236. Lowest Common Ancestor of a Binary Tree - Medium ", () => {

    test("Input1: root = [3,9,20,null,null,15,7], p = 5, q = 1 ", () => {
        const root = BinaryTreeNode.createFromArray([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
        const p = BinaryTreeNode.findNodeByValue(root, 5)
        const q = BinaryTreeNode.findNodeByValue(root, 1)
        const result = solution(root, p, q);
        expect(result?.val).toEqual(3);
    });

    test("Input2: root =[3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1 ", () => {
        const root = BinaryTreeNode.createFromArray([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
        const p = BinaryTreeNode.findNodeByValue(root, 5)
        const q = BinaryTreeNode.findNodeByValue(root, 4)
        const result = solution(root, p, q);
        expect(result?.val).toEqual(5);
    });

});