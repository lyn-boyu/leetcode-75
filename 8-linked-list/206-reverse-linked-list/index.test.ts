/**
 
206. Reverse Linked List - Easy

Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []
 

Constraints:
The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
 

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

*/



import { expect, test, describe } from "bun:test";
import { reverseListIterative, reverseListRecursive } from './index'
import { ListNode } from "../utils";

describe("206. Reverse Linked List - Easy", () => {

    describe("Iterative Approach", () => {
        test("Input1: head = [1,2,3,4,5]", () => {
            const head = ListNode.createFromArray([1, 2, 3, 4, 5]);
            const newHead = reverseListIterative(head);
            const result = ListNode.toArray(newHead);
            expect(result).toEqual([5, 4, 3, 2, 1]);
        });

        test("Input2: head = [1,2]", () => {
            const head = ListNode.createFromArray([1, 2]);
            const newHead = reverseListIterative(head);
            const result = ListNode.toArray(newHead);
            expect(result).toEqual([2, 1]);
        });

        test("Input3: head = []", () => {
            const head = ListNode.createFromArray([]);
            const newHead = reverseListIterative(head);
            const result = ListNode.toArray(newHead);
            expect(result).toEqual([]);
        });
    });

    describe("Recursive Approach", () => {
        test("Input1: head = [1,2,3,4,5]", () => {
            const head = ListNode.createFromArray([1, 2, 3, 4, 5]);
            const newHead = reverseListRecursive(head);
            const result = ListNode.toArray(newHead);
            expect(result).toEqual([5, 4, 3, 2, 1]);
        });

        test("Input2: head = [1,2]", () => {
            const head = ListNode.createFromArray([1, 2]);
            const newHead = reverseListRecursive(head);
            const result = ListNode.toArray(newHead);
            expect(result).toEqual([2, 1]);
        });

        test("Input3: head = []", () => {
            const head = ListNode.createFromArray([]);
            const newHead = reverseListRecursive(head);
            const result = ListNode.toArray(newHead);
            expect(result).toEqual([]);
        });

    });

});