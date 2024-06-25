/**
 
1448. Count Good Nodes in Binary Tree - Medium

https://leetcode.com/problems/count-good-nodes-in-binary-tree/description/


Given a binary tree root, a node X in the tree is named good
if in the path from root to X there are no nodes with a value greater than X.
Return the number of good nodes in the binary tree.

 
Example 1:
Input: root = [3,1,4,3,null,1,5]
Output: 4
Explanation: Nodes in blue are good.
Root Node (3) is always a good node.
Node 4 -> (3,4) is the maximum value in the path starting from the root.
Node 5 -> (3,4,5) is the maximum value in the path
Node 3 -> (3,1,3) is the maximum value in the path.

Example 2:
Input: root = [3,3,null,4,2]
Output: 3
Explanation: Node 2 -> (3, 3, 2) is not good, because "3" is higher than it.

Example 3:
Input: root = [1]
Output: 1
Explanation: Root is considered as good.
 

Constraints:
The number of nodes in the binary tree is in the range [1, 10^5].
Each node's value is between [-10^4, 10^4].

*/



import { expect, test, describe } from "bun:test";
import { solution } from './index'
import { BinaryTreeNode } from "../../common/binary-tree";

describe("1448. Count Good Nodes in Binary Tree - Medium", () => {

    test("Input1: root = [3,1,4,3,null,1,5]", () => {
        const root = BinaryTreeNode.createFromArray([3, 1, 4, 3, null, 1, 5]);
        const result = solution(root);
        expect(result).toEqual(4);
    });

    test("Input2: root = [3,3,null,4,2] ", () => {
        const root = BinaryTreeNode.createFromArray([3, 3, null, 4, 2]);
        const result = solution(root);
        expect(result).toEqual(3);
    });

    test("Input3: root = [9,null,3,6] ", () => {
        const root = BinaryTreeNode.createFromArray([9, null, 3, 6]);
        const result = solution(root);
        expect(result).toEqual(1);
    });

    test("Input4: root = [-4,-4,5,null,null,4,-5,-5,2,1,null,null,-2,null,5,null,null,null,-4,null,null,-4,null,2,null,-1] ", () => {
        const root = BinaryTreeNode.createFromArray([-4, -4, 5, null, null, 4, -5, -5, 2, 1, null, null, -2, null, 5, null, null, null, -4, null, null, -4, null, 2, null, -1]);
        const result = solution(root);
        expect(result).toEqual(4);
    });

});