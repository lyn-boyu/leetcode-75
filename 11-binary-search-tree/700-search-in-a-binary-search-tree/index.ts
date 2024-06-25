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

function searchBST(root: TreeNode | null, val: number): TreeNode | null {

    let subTreeRoot: TreeNode | null = null;

    const dfsSearch = (node: TreeNode | null) => {
        if (!node) {
            return
        }
        if (node.val === val) {
            subTreeRoot = node
        }
        dfsSearch(node.left)
        dfsSearch(node.right)
    }

    dfsSearch(root)
    // if find the value return the root node
    if (subTreeRoot) {
        return subTreeRoot
    } else {
        // if cannot find target value return null 
        return null
    }

};

export { searchBST as solution };
