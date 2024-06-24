/**
 
199. Binary Tree Right Side View - Medium

https://leetcode.com/problems/binary-tree-right-side-view/description/

Given the root of a binary tree, imagine yourself standing on the right side of it, 
return the values of the nodes you can see ordered from top to bottom.
 

Example 1:
Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]

Example 2:
Input: root = [1,null,3]
Output: [1,3]

Example 3:
Input: root = []
Output: []
 

Constraints:
The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100

*/



import { expect, test, describe } from "bun:test";
import { rightSideViewDfsVersion, rightSideViewBfsVersion } from './index'
import { BinaryTreeNode } from "../../common/binary-tree";

describe("199. Binary Tree Right Side View - Medium", () => {

    describe("DFS version", () => {
        test("Input1: root = [1,2,3,null,5,null,4]", () => {
            const root = BinaryTreeNode.createFromArray([1, 2, 3, null, 5, null, 4]);
            const result = rightSideViewDfsVersion(root);
            expect(result).toEqual([1, 3, 4]);
        });

        test("Input2: root = [1,null,3] ", () => {
            const root = BinaryTreeNode.createFromArray([1, null, 3]);
            const result = rightSideViewDfsVersion(root);
            expect(result).toEqual([1, 3]);
        });

        test("Input3: root = [] ", () => {
            const root = BinaryTreeNode.createFromArray([]);
            const result = rightSideViewDfsVersion(root);
            expect(result).toEqual([]);
        });
    })

    describe("BFS version", () => {
        test("Input1: root = [1,2,3,null,5,null,4]", () => {
            const root = BinaryTreeNode.createFromArray([1, 2, 3, null, 5, null, 4]);
            const result = rightSideViewBfsVersion(root);
            expect(result).toEqual([1, 3, 4]);
        });

        test("Input2: root = [1,null,3] ", () => {
            const root = BinaryTreeNode.createFromArray([1, null, 3]);
            const result = rightSideViewBfsVersion(root);
            expect(result).toEqual([1, 3]);
        });

        test("Input3: root = [] ", () => {
            const root = BinaryTreeNode.createFromArray([]);
            const result = rightSideViewBfsVersion(root);
            expect(result).toEqual([]);
        });
    })


});