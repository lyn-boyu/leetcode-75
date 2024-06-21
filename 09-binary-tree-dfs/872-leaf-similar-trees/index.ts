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

import type {
    BinaryTreeNode as TreeNode
} from "../../common/binary-tree";

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {

    // get the leaf sequence of the tree
    function getLeafSequence(node: TreeNode | null, sequence: number[]) {
        //  when the node is null, return the sequence
        if (!node) return sequence
        // when reach the leaf node, add the value to the sequence
        if (!node.left && !node.right) {
            sequence.push(node.val)
        }

        // process the child nodes
        getLeafSequence(node.left, sequence)
        getLeafSequence(node.right, sequence)

        return sequence
    }

    // get the leaf sequence of the tree 1 and tree 2
    const sequence1: number[] = getLeafSequence(root1, [])
    const sequence2: number[] = getLeafSequence(root2, [])
    console.log(sequence1, sequence2)
    // if the length of the two sequences are different, return false
    if (sequence1.length !== sequence2.length) return false
    // compare the sequence of the two trees
    return sequence1.every((value, index) => {
        return value === sequence2[index]
    })
};


export { leafSimilar as solution };