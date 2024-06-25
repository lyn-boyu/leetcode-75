import { expect, test, describe } from "bun:test";
import { BinaryTreeNode } from "./binary-tree";

describe("BinaryTreeNode Class impleaments ", () => {

    test("can call createFromArray method", () => {
        const root = BinaryTreeNode.createFromArray([4, 2, 7, 1, 3]);
        expect(BinaryTreeNode.toArray(root)).toEqual([4, 2, 7, 1, 3]);
    });

    test("can call createFromArray method: empty array", () => {
        const root = BinaryTreeNode.createFromArray([]);
        expect(BinaryTreeNode.toArray(root)).toEqual([]);
    });

    test("can call findNodeByValue method ", () => {
        const root = BinaryTreeNode.createFromArray([4, 2, 7, 1, 3]);
        const node = BinaryTreeNode.findNodeByValue(root, 3)
        expect(node?.val).toEqual(3);
    });

});