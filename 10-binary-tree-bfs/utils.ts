// Binary tree utils: help to create a binary tree from an array
// Input = [3,9,20,null,null,15,7]
//  * 3 is the root node
//  ** 9 is the left child of 3
//  ** 20 is the right child of 3
//  *** null is thr left and right child of 9
//  *** 15 is the left child of 20
//  *** 7 is the right child of 20



export class BinaryTreeNode {
    val: number;
    left: BinaryTreeNode | null;
    right: BinaryTreeNode | null;

    constructor(val?: number, left?: BinaryTreeNode | null, right?: BinaryTreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }

    static createFromArray(arr: (number | null)[]): BinaryTreeNode | null {
        if (arr.length === 0) return null;

        const root = new BinaryTreeNode(arr[0] as number);
        const queue = [root];
        let index = 1;

        while (index < arr.length) {
            // start from left to right
            const current = queue.shift() as BinaryTreeNode;
            const leftValue = arr[index++];
            if (leftValue !== null) {
                current.left = new BinaryTreeNode(leftValue);
                queue.push(current.left);
            }
            const rightValue = arr[index++];
            if (rightValue !== null) {
                current.right = new BinaryTreeNode(rightValue);
                queue.push(current.right);
            }
        }

        return root;
    }

    static toArray(root: BinaryTreeNode | null): (number | null)[] {
        if (!root) return [];

        const result: (number | null)[] = [];
        const queue = [root];

        while (queue.length > 0) {
            const current = queue.shift() as BinaryTreeNode;
            result.push(current.val);
            if (current.left) {
                queue.push(current.left);
            } else {
                result.push(null);
            }
            if (current.right) {
                queue.push(current.right);
            } else {
                result.push(null);
            }
        }

        // remove the trailing null values since store null is not necessary
        while (result[result.length - 1] === null) {
            result.pop();
        }

        return result;
    }

    static findNodeByValue(root: BinaryTreeNode | null, target: number): BinaryTreeNode | null {
        if (!root) return null;

        const queue = [root];
        while (queue.length > 0) {
            const current = queue.shift() as BinaryTreeNode;
            if (current.val === target) {
                return current;
            }
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
        }
        return null
    }
}