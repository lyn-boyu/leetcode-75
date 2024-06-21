/**
 * 
2095. Delete the Middle Node of a Linked List - Medium
 
You are given the head of a linked list.
Delete the middle node, and return the head of the modified linked list.

The middle node of a linked list of size n is 
the ⌊n / 2⌋th node from the start using 0-based indexing, 
where ⌊x⌋ denotes the largest integer less than or equal to x.
For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.
 

Example 1:
Input: head = [1,3,4,7,1,2,6]
Output: [1,3,4,1,2,6]
Explanation:
The above figure represents the given linked list. The indices of the nodes are written below.
Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
We return the new list after removing this node. 

Example 2:
Input: head = [1,2,3,4]
Output: [1,2,4]
Explanation:
The above figure represents the given linked list.
For n = 4, node 2 with value 3 is the middle node, which is marked in red.

Example 3:
Input: head = [2,1]
Output: [2]
Explanation:
The above figure represents the given linked list.
For n = 2, node 1 with value 1 is the middle node, which is marked in red.
Node 0 with value 2 is the only node remaining after removing node 1.

*/

import type { ListNode } from "../utils";


function originSolution(head: ListNode | null): number {
    // get the size of the linked list
    // get the pair of the linked list,
    // (i)th node pair with (n-1-i)th node, get the sum of the pair
    let maxSum = 0
    let currentHeadNode = head
    let nums = []
    while (currentHeadNode !== null) {
        if (currentHeadNode) nums.push(currentHeadNode.val)
        currentHeadNode = currentHeadNode.next
    }
    while (nums.length > 0) {
        maxSum = Math.max(maxSum, (nums.pop() ?? 0) + (nums.shift() ?? 0))
    }

    return maxSum

}

function pairSum(head: ListNode | null): number {
    // use slow and fast pointer to find the middle of the linked list
    let slow = head
    let fast = head
    //  reverse the linked list from start to middle
    let prev = null
    while (fast && fast?.next && slow) {
        // move the fast pointer twice as fast as the slow pointer
        fast = fast?.next?.next!
        // reverse the slow node list
        const temp = slow?.next
        slow.next = prev!
        // move the prev node to the slow node
        prev = slow
        slow = temp!
    }
    //  when the fast pointer reaches the end of the linked list,
    //  the slow pointer will be at the middle of the linked list
    //  start to calculate the sum of the pair
    let maxSum = 0
    while (prev && slow) {
        maxSum = Math.max(maxSum, prev.val + slow.val)
        prev = prev.next!
        slow = slow.next!
    }

    return maxSum

};

export { pairSum as solution };

