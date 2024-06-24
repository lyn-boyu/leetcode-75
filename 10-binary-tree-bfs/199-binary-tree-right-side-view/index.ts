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


import {
    BinaryTreeNode as TreeNode
} from "../../common/binary-tree";
import { solution } from "../1161-maximum-level-sum-of-a-binary-tree";

// dfs 
export function rightSideViewDfsVersion(root: TreeNode | null): number[] {
    const layers: number[] = [];

    const dfs = (node: TreeNode | null, layerIdx: number) => {
        if (!node) {
            return
        }
        // pre order,use right value to overwrite 
        layers[layerIdx] = node?.val
        // util the leaf node
        dfs(node.left, layerIdx + 1)
        dfs(node.right, layerIdx + 1)
    }

    dfs(root, 0)

    return layers
};

// time  complexity is O(n)
// space complexity is O(n)


// bfs solution
export function rightSideViewBfsVersion(root: TreeNode | null): number[] {

    // store the answer
    const results: number[] = []
    // used for bfs iteration
    const queue = root ? [root] : []

    while (queue.length > 0) {
        // stroe current layer length 
        const layerLength = queue.length
        // for each layer: 
        // 1. find the last element of the layer 
        // 2. push next layer elements to the queue 
        for (let i = 0; i < layerLength; i++) {
            const node = queue.shift()
            // find the last one on this layer
            if (i === layerLength - 1) {
                results.push(node?.val!)
            }
            // push next layer element to the queue
            if (node?.left) {
                queue.push(node?.left!)
            }
            // push next layer element to the queue
            if (node?.right) {
                queue.push(node?.right!)
            }
        }
    }

    return results
}



