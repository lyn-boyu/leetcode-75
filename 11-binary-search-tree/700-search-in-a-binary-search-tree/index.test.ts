/**
 
700. Search in a Binary Search Tree - Easy

https://leetcode.com/problems/search-in-a-binary-search-tree/

You are given the root of a binary search tree (BST) and an integer val.
Find the node in the BST that the node's value equals val and return the subtree rooted with that node.
If such a node does not exist, return null.

 

Example 1:
Input: root = [4,2,7,1,3], val = 2
Output: [2,1,3]

Example 2:
Input: root = [4,2,7,1,3], val = 5
Output: []
 

Constraints:
The number of nodes in the tree is in the range [1, 5000].
1 <= Node.val <= 107
root is a binary search tree.
1 <= val <= 107

*/



import { expect, test, describe } from "bun:test";
import { iterativeSolution, recursiveSolution } from './index'
import { BinaryTreeNode } from "../../common/binary-tree";

describe("700. Search in a Binary Search Tree - Easy", () => {

    describe("Iterative Solution", () => {
        test("Input1: root = [4,2,7,1,3], val = 2", () => {
            const root = BinaryTreeNode.createFromArray([4, 2, 7, 1, 3]);
            const val = 2;
            const result = iterativeSolution(root, val);
            expect(BinaryTreeNode.toArray(result)).toEqual([2, 1, 3]);
        });

        test("Input2: root = [4,2,7,1,3], val = 5 ", () => {
            const root = BinaryTreeNode.createFromArray([4, 2, 7, 1, 3]);
            const val = 5;
            const result = iterativeSolution(root, val);
            expect(BinaryTreeNode.toArray(result)).toEqual([]);
        });
    })



    describe("Recursive Solution", () => {
        test("Input1: root = [4,2,7,1,3], val = 2", () => {
            const root = BinaryTreeNode.createFromArray([4, 2, 7, 1, 3]);
            const val = 2;
            const result = recursiveSolution(root, val);
            expect(BinaryTreeNode.toArray(result)).toEqual([2, 1, 3]);
        });

        test("Input2: root = [4,2,7,1,3], val = 5 ", () => {
            const root = BinaryTreeNode.createFromArray([4, 2, 7, 1, 3]);
            const val = 5;
            const result = recursiveSolution(root, val);
            expect(BinaryTreeNode.toArray(result)).toEqual([]);
        });
    })




});