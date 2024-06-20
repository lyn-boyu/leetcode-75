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
import { ListNode } from "../utils";


// iterate through the list
// create oddList and evenList to keep track of the nodes
// use current node to track the last node in the odd and even list
// at the end of the iteration, append the evenList to the end of the oddList
// connect the odd and even nodes
function oddEvenList(head: ListNode | null): ListNode | null {
    let pointer = head
    let oddList = null
    let evenList = null
    // create oddList and evenList to store different nodes
    let currentOddNode = null
    let prevOddNode = null
    let currentEvenNode = null
    let index = 0

    while (pointer !== null) {
        // use idx % 2 as the condition to divide list nodes into odd and even 
        const isOdd = index % 2 === 0;
        if (isOdd) {
            if (currentOddNode === null) {
                //  create a new node
                oddList = new ListNode(pointer.val)
                currentOddNode = oddList
            } else {
                //  append a new node to the current node
                currentOddNode.next = new ListNode(pointer.val)
                currentOddNode = currentOddNode ? currentOddNode.next : null
            }

        } else {
            if (currentEvenNode === null) {
                evenList = new ListNode(pointer.val)
                currentEvenNode = evenList
            } else {
                currentEvenNode.next = new ListNode(pointer.val)
                currentEvenNode = currentEvenNode ? currentEvenNode.next : null
            }
        }
        // move to the next node
        pointer = pointer.next
        // move to the next index
        index++
    }

    currentOddNode = oddList
    while (currentOddNode) {
        if (currentOddNode.next === null) {
            currentOddNode!.next = evenList
            break;
        }
        currentOddNode = currentOddNode.next
    }


    return oddList
};

export { oddEvenList as solution };

