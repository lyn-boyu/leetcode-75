/**

437. Path Sum III - Medium

https://leetcode.com/problems/path-sum-iii/

Given the root of a binary tree and an integer targetSum,
return the number of paths where the sum of the values along the path equals targetSum.
The path does not need to start or end at the root or a leaf,
but it must go downwards (i.e., traveling only from parent nodes to child nodes).


Example 1:
Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
Output: 3
Explanation: The paths that sum to 8 are shown.

Example 2:
Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: 3
 

Constraints:
The number of nodes in the tree is in the range [0, 1000].
-109 <= Node.val <= 109
-1000 <= targetSum <= 1000

*/


import type {
    BinaryTreeNode as TreeNode
} from "../../common/binary-tree";

function pathSum(root: TreeNode | null, targetSum: number): number {
    // dfs search from root to leaf node to find the path sum
    // for each node, we will call the helper function to find the path sum
    // if the path sum is equal to targetSum, we will increment the count
    // time complexity is O(n^2) in the worst case
    // space complexity is O(n) in the worst case
    let count = 0;
    // helper function to find the path sum
    const findSum = (node: TreeNode | null, targetSum: number) => {
        if (!node) return 0;
        const gap = targetSum - node.val;
        // if the path sum is equal to targetSum, increment the count
        if (gap === 0) { count++; }
        // continue to search the path sum for the left and right child node
        findSum(node.left, gap);
        findSum(node.right, gap);
    }

    const dfs = (node: TreeNode | null): void => {
        if (!node) return;
        // find the path sum for the current node
        findSum(node, targetSum);
        // continue to search the path sum for the left and right child node
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root)

    return count
};

// use hashmap to store the prefix sum as cache
function pathSumSoultion2(root: TreeNode | null, targetSum: number): number {
    // dfs search from root to leaf node to find the path sum
    // use hashmap to store the prefix sum
    // for each node we will have two cases
    // 1. the path sum is equal to targetSum, we will increment the count
    // 2. the path sum minus targetSum is in the hashmap, we will increment the count by the value in the hashmap
    // time complexity is O(n) in the worst case
    // space complexity is O(n) in the worst case

    let count = 0
    let prefixSum = new Map<number, number>()

    function dfs(node: TreeNode | null, sum: number) {
        if (!node) return

        // calculate the current sum
        const currentPathSum = sum + node.val

        // update the coun, there are two cases

        // case 1: the path sum from root to current node is equal to targetSum
        if (currentPathSum === targetSum) count++

        // case 2: the path sum from an ansestor node to current node is equal to targetSum
        const gap = currentPathSum - targetSum
        if (prefixSum.has(gap)) {
            count += prefixSum.get(gap) ?? 0
        }

        // update the prefix sum
        prefixSum.set(currentPathSum, (prefixSum.get(currentPathSum) ?? 0) + 1)

        // iterate the left and right child node
        dfs(node.left, currentPathSum)
        dfs(node.right, currentPathSum)

        // clean up the prefix sum before we move to the next path
        prefixSum.set(currentPathSum, (prefixSum.get(currentPathSum) ?? 0) - 1)
    }

    dfs(root, 0)

    return count

}

export { pathSumSoultion2 as solution };