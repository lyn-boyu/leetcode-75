/**
 
700. Search in a Binary Search Tree - Medium

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


import {
    BinaryTreeNode as TreeNode
} from "../../common/binary-tree";


// recursiveSearchBST
export function recursiveSolution(root: TreeNode | null, val: number): TreeNode | null {

    function searchBST(root: TreeNode | null, val: number): TreeNode | null {
        // reach the end, return null
        if (!root) return null;
        // if find target return node  
        if (root.val === val) return root;
        // right node is bigger than left node
        if (root.val < val) return searchBST(root.right, val);
        // left node is smaller than right node
        if (root.val > val) return searchBST(root.left, val);

        return null
    }

    return searchBST(root, val)

};


// Iterative
export function iterativeSolution(root: TreeNode | null, val: number): TreeNode | null {

    function searchBST(root: TreeNode | null, val: number): TreeNode | null {
        while (root !== null && root.val !== val) {
            // assign new root to right or left node by comparing the value
            root = val < root.val ? root.left : root.right;
        }
        return root;
    }

    return searchBST(root, val)

};


