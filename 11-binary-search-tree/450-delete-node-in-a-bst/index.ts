/**
 
450. Delete Node in a BST - Medium

https://leetcode.com/problems/450/description/

Given a root node reference of a BST and a key, delete the node with the given key in the BST. 
Return the root node reference (possibly updated) of the BST.
Basically, the deletion can be divided into two stages:
Search for a node to remove.
If the node is found, delete the node.


Example 1:
Input: root = [5,3,6,2,4,null,7], key = 3
Output: [5,4,6,2,null,null,7]
Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.

Example 2:
Input: root = [5,3,6,2,4,null,7], key = 0
Output: [5,3,6,2,4,null,7]
Explanation: The tree does not contain a node with value = 0.

Example 3:
Input: root = [], key = 0
Output: []
 

Constraints:
The number of nodes in the tree is in the range [0, 104].
-105 <= Node.val <= 105
Each node has a unique value.
root is a valid binary search tree.
-105 <= key <= 105
 
Follow up: 
Could you solve it with time complexity O(height of tree)?

*/


import {
    BinaryTreeNode as TreeNode
} from "../../common/binary-tree";



// Helper function to find the biggest node in a subtree
function findMax(node: TreeNode): TreeNode {
    while (node.right) {
        node = node.right;
    }
    return node;
}


function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (!root) return root

    // compare left and right until find the node.val match the key
    if (key < root.val) {
        // if key is smaller than root value, root.left equals  deleteNode from root.left recursively
        root.left = deleteNode(root.left, key)
    } else if (key > root.val) {
        // if key is bigger than root value,  root.right call deleteNode from root.right recursively
        root.right = deleteNode(root.right, key)
    } else {
        // match key value
        // if key is match, it has 3 situations
        // - 1. case 1: node has only left child, return left child
        // - 2. case 2: node has only right child, return right child
        // - 3. case 3: node has two children 
        if (!root.right) {
            return root.left
        } else if (!root.left) {
            return root.right
        } else {

            // there are two way to delte node:
            // * replace root value with  smallest val on root.right side
            // * replace root value with  biggest  val on root.left side

            // root.left side implements:
            // 1. find the biggest node as successor on node.left side,
            // 2. assign the value of successor to root
            // 3. delete the leaf node from root.left
            // 4. root.left assign to the subtree without the successor leaf node
            let successor = findMax(root.left)
            root.val = successor.val
            root.left = deleteNode(root.left, successor.val)
        }
    }

    return root

};

export { deleteNode as solution };