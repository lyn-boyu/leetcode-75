/**
1372. Longest ZigZag Path in a Binary Tree - Medium

https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/description/


You are given the root of a binary tree.
A ZigZag path for a binary tree is defined as follow:

Choose any node in the binary tree and a direction (right or left).
If the current direction is right, move to the right child of the current node; otherwise, move to the left child.
Change the direction from right to left or from left to right.
Repeat the second and third steps until you can't move in the tree.
Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).

Return the longest ZigZag path contained in that tree.

 

Example 1:
Input: root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1]
Output: 3
Explanation: Longest ZigZag path in blue nodes (right -> left -> right).

Example 2:
Input: root = [1,1,1,null,1,null,null,1,1,null,1]
Output: 4
Explanation: Longest ZigZag path in blue nodes (left -> right -> left -> right).

Example 3:
Input: root = [1]
Output: 0
 

Constraints:
The number of nodes in the tree is in the range [1, 5 * 104].
1 <= Node.val <= 100

*/

import type {
    BinaryTreeNode as TreeNode
} from "../../common/binary-tree";

function longestZigZag(root: TreeNode | null): number {

    let maxLength = 0;
    // dfs from root
    // for each node,
    // we can update the maxLength
    // and then continue to  check the left and right direction
    // there are two operations to try:
    // 1. continue the current zigzag path
    // 2. start a new zigzag path
    // when we reach the leaf node, we can return the longest zigzag path

    const findLongestZigZag = (node: TreeNode | null, parentDirecetion: 'left' | 'right', currentLength: number) => {
        // when reach the leaf node update the max length
        if (node === null) {
            return
        }

        // check the left and right direction
        // if the parentDirecetion is left, we try move to the right child
        if (parentDirecetion === 'left') {
            // continue the current zigzag path: we can move to the right child 
            findLongestZigZag(node.right, 'right', currentLength + 1);
            // start a new zigzag path: we can move to the left child 
            findLongestZigZag(node.left, 'left', 1);
        }

        // if the direction is right, we try to move to the left child
        if (parentDirecetion === 'right') {
            // continue the current zigzag path: we can move to the right child 
            findLongestZigZag(node.left, 'left', currentLength + 1);
            // start a new zigzag path: we can move to the left child 
            findLongestZigZag(node.right, 'right', 1);
        }

        // update the max length
        maxLength = Math.max(maxLength, currentLength);
    }

    // start from the root node from both side 
    if (root) {
        findLongestZigZag(root.left, 'left', 1);
        findLongestZigZag(root.right, 'right', 1);
    }

    // return the longest zigzag path 
    // which is valid child count of current node
    return maxLength
};


export { longestZigZag as solution };