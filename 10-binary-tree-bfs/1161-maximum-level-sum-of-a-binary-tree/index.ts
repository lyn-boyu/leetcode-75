/**
 * 
1161. Maximum Level Sum of a Binary Tree - Medium
 
https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/description

Given the root of a binary tree, the level of its root is 1, 
the level of its children is 2, and so on.
Return the smallest level x such that the sum of all the values of nodes at level x is maximal.


Example 1:
Input: root = [1,7,0,7,-8,null,null]
Output: 2
Explanation: 
Level 1 sum = 1.
Level 2 sum = 7 + 0 = 7.
Level 3 sum = 7 + -8 = -1.
So we return the level with the maximum sum which is level 2.

Example 2:
Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
Output: 2

Constraints:
The number of nodes in the tree is in the range [1, 104].
-105 <= Node.val <= 105

*/

import type {
    BinaryTreeNode as TreeNode
} from "../../common/binary-tree";


function maxLevelSum(root: TreeNode | null): number {
    // store sum of each layer
    const layerSums = []
    // used for bfs
    const queue = root ? [root] : []

    // find the max number in layersums
    let max = Number.NEGATIVE_INFINITY;
    let maxLayer = Number.NEGATIVE_INFINITY;
    let levelIdx = 1;

    while (queue.length > 0) {
        const layerLength = queue.length
        let sum = 0
        // iter through current layer
        for (let i = 0; i < layerLength; i++) {
            const node = queue.shift()
            sum += node?.val ?? 0

            if (i === layerLength - 1) {
                layerSums.push(sum)
            }
            if (node?.left) {
                queue.push(node.left)
            }

            if (node?.right) {
                queue.push(node.right)
            }
        }
        // update the maxLayer
        if (sum > max) {
            max = sum
            maxLayer = levelIdx + 1
        }
    }

    return maxLayer
};

// Time  complexity is O(n)
// Space complexity is O(n)

export { maxLevelSum as solution };