/**

328. Odd Even Linked List - Medium

https://leetcode.com/problems/odd-even-linked-list/description/?envType=study-plan-v2&envId=leetcode-75

Given the head of a singly linked list,
group all the nodes with odd indices together followed by the nodes with even indices, 
and return the reordered list.
The first node is considered odd, 
and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.
You must solve the problem in O(1) extra space complexity and O(n) time complexity.


Example 1:
Input: head = [1,2,3,4,5]
Output:       [1,3,5,2,4]

Example 2:
Input: head = [2,1,3,5,6,4,7]
Output:       [2,3,6,7,1,5,4]
 

Constraints:
The number of nodes in the linked list is in the range [0, 104].
-106 <= Node.val <= 106


*/


import { expect, test, describe } from "bun:test";
import { solution } from './index'
import { ListNode } from "../utils";

describe("328. Odd Even Linked List - Medium", () => {

    test("Input1: head =[1,2,3,4,5]", () => {
        const head = ListNode.createFromArray([1, 2, 3, 4, 5]);
        const newHead = solution(head);
        const result = ListNode.toArray(newHead);
        expect(result).toEqual([1, 3, 5, 2, 4]);
    });

    test("Input2: head = [2,1,3,5,6,4,7]]", () => {
        const head = ListNode.createFromArray([2, 1, 3, 5, 6, 4, 7]);
        const newHead = solution(head);
        const result = ListNode.toArray(newHead);
        expect(result).toEqual([2, 3, 6, 7, 1, 5, 4]);
    });

});