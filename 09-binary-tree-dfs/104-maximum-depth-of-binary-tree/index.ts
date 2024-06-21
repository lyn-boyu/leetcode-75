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
import type {
    BinaryTreeNode as TreeNode
} from "../../common/binary-tree";

function maxDepth(root: TreeNode | null): number {
    function dfs(node: TreeNode | null, depth: number): number {
        //  when reach the leaf node, return the parent depth
        if (!node) return depth;
        // get current Depth increase the depth by 1 
        const currentDepth = depth + 1
        // get the left and right depth
        const left = dfs(node.left, currentDepth);
        const right = dfs(node.right, currentDepth);
        // return the max depth between left and right
        return Math.max(left, right);
    }
    // start from the root node with depth 0
    return dfs(root, 0);
}

function solution2(root: TreeNode | null): number {
    //  when reach the leaf node, return 0
    if (!root) return 0;
    // get the left and right depth
    const left = solution2(root.left);
    const right = solution2(root.right);
    // get the max depth between left and right
    const maxChildDepth = Math.max(left, right);
    // return the max depth between left and right plus 1 to get current depth
    return maxChildDepth + 1;
}

export { maxDepth as solution };