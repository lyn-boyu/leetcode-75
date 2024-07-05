/**
 
872. Leaf-Similar Trees - Easy

https://leetcode.com/problems/leaf-similar-trees/description/

Consider all the leaves of a binary tree, from left to right order, 
the values of those leaves form a leaf value sequence.

For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).
Two binary trees are considered leaf-similar if their leaf value sequence is the same.
Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

 

Example 1:
Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
Output: true
Example 2:


Input: root1 = [1,2,3], root2 = [1,3,2]
Output: false
 

Constraints:
The number of nodes in each tree will be in the range [1, 200].
Both of the given trees will have values in the range [0, 200].

*/


import { expect, test, describe } from "bun:test";
import { solution } from './index'
import { BinaryTreeNode } from "../../common/binary-tree";

describe("872. Leaf-Similar Trees - Easy", () => {

    test("Input1:root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]", () => {
        const root1 = BinaryTreeNode.createFromArray([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]);
        const root2 = BinaryTreeNode.createFromArray([3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8]);
        const result = solution(root1, root2);
        expect(result).toEqual(true);
    });

    test("Input2:root1 =[1,2,3], root2 = [1,3,2]", () => {
        const root1 = BinaryTreeNode.createFromArray([1, 2, 3]);
        const root2 = BinaryTreeNode.createFromArray([1, 3, 2]);
        const result = solution(root1, root2);
        expect(result).toEqual(false);
    });


});